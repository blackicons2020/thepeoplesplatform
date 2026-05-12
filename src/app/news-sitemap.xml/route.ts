import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Article from '@/models/Article';

export async function GET() {
  await connectDB();
  
  // Google News sitemap should only contain articles from the last 48 hours
  const twoDaysAgo = new Date();
  twoDaysAgo.setHours(twoDaysAgo.getHours() - 48);

  const articles = await Article.find({
    status: 'published',
    date: { $gte: twoDaysAgo }
  }).sort({ date: -1 }).limit(1000).lean();

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thepeoplesplatform.online";
  const SITE_NAME = "The People's Platform";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${articles.map((article: any) => `
  <url>
    <loc>${SITE_URL}/${(article.slug || '').replace(/-\d{13}$/, '')}</loc>
    <news:news>
      <news:publication>
        <news:name>${SITE_NAME}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.date.toISOString()}</news:publication_date>
      <news:title>${article.title.replace(/&/g, '&amp;')}</news:title>
    </news:news>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
    },
  });
}
