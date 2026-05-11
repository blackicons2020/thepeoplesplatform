import connectDB from '@/lib/db';
import Article from '@/models/Article';
import ArticleCard from '@/components/ArticleCard';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  await connectDB();
  const articles = await Article.find({ 
    category: { $regex: new RegExp(`^${category}$`, 'i') },
    status: 'published' 
  }).sort({ date: -1 }).limit(20).lean();

  if (!articles) notFound();

  return (
    <div className="container py-12">
      <header className="mb-12">
        <h1 className="category-title">{categoryName}</h1>
        <div className="category-header-line"></div>
      </header>

      {articles.length > 0 ? (
        <div className="article-grid">
          {articles.map((article: any) => (
            <ArticleCard key={article._id.toString()} article={article} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No articles found in {categoryName} yet.</p>
        </div>
      )}
    </div>
  );
}
