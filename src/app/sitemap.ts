import { MetadataRoute } from 'next';
import connectDB from '@/lib/db';
import Article from '@/models/Article';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();
  
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thepeoplesplatform.online";

  const articles = await Article.find({ status: 'published' })
    .select('slug category updatedAt date')
    .lean();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article: any) => ({
    url: `${SITE_URL}/news/${article.category.toLowerCase()}/${article.slug}`,
    lastModified: article.updatedAt || article.date,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const categories = [
    'Politics', 'Metro', 'Business', 'Technology', 'Sports', 
    'Entertainment', 'Education', 'Leadership', 'Editorials', 'International'
  ];

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/news/${cat.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...categoryEntries,
    ...articleEntries,
  ];
}
