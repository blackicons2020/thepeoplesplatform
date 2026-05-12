import { NextResponse } from 'next/server';
import { Feed } from 'feed';
import connectDB from '@/lib/db';
import Article from '@/models/Article';

export async function GET() {
  await connectDB();
  
  const articles = await Article.find({ status: 'published' })
    .sort({ date: -1 })
    .limit(50)
    .lean();

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thepeoplesplatform.online";
  const SITE_NAME = "The People's Platform";

  const feed = new Feed({
    title: SITE_NAME,
    description: "Independent news, analysis, and reporting.",
    id: SITE_URL,
    link: SITE_URL,
    language: "en",
    image: `${SITE_URL}/logo.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${SITE_NAME}`,
    generator: "Next.js Feed Helper",
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
    },
    author: {
      name: SITE_NAME,
      email: "newsroom@thepeoplesplatform.online",
      link: SITE_URL,
    },
  });

  articles.forEach((article: any) => {
    feed.addItem({
      title: article.title,
      id: `${SITE_URL}/${article.slug}`,
      link: `${SITE_URL}/${article.slug}`,
      description: article.excerpt,
      content: article.content,
      author: [
        {
          name: article.author,
          link: `${SITE_URL}/authors/${article.authorSlug || 'staff'}`,
        },
      ],
      date: article.date,
      image: article.image,
      category: [{ name: article.category }],
    });
  });

  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
    },
  });
}
