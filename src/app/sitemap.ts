import { MetadataRoute } from 'next';
import connectDB from '@/lib/db';
import Article from '@/models/Article';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thepeoplesplatform.online";
  
  try {
    await connectDB();
    const articles = await Article.find({ status: 'published' })
      .select('slug category updatedAt date')
      .limit(100)
      .lean();

    const articleEntries: MetadataRoute.Sitemap = articles.map((article: any) => ({
      url: `${SITE_URL}/${(article.slug || '').replace(/-\d{13}$/, '')}`,
      lastModified: article.updatedAt || article.date,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    const categories = ['Politics', 'Metro', 'Business', 'Technology', 'Sports'];
    const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
      url: `${SITE_URL}/news/${cat.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }));

    return [
      { url: SITE_URL, lastModified: new Date(), changeFrequency: 'hourly', priority: 1 },
      ...categoryEntries,
      ...articleEntries,
    ];
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return [{ url: SITE_URL, lastModified: new Date() }];
  }
}
