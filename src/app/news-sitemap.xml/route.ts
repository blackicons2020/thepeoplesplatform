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

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.thepeoplesplatform.online";
  const SITE_NAME = "The People's Platform";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${articles.map((article: any) => {
  const title = article.title
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
    
  // Format date to W3C format without milliseconds (YYYY-MM-DDThh:mm:ssZ)
  const date = article.date.toISOString().split('.')[0] + 'Z';
  const loc = `${SITE_URL}/${(article.slug || '').replace(/-\d{13}$/, '')}`;

  return `  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${SITE_NAME}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${date}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>
  </url>`;
}).join('\n')}
</urlset>`.trim();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
    },
  });
}
