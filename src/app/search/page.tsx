import connectDB from '@/lib/db';
import Article from '@/models/Article';
import ArticleCard from '@/components/ArticleCard';

interface SearchProps {
  searchParams: Promise<{ q?: string }>;
}

export const revalidate = 60;

export default async function SearchPage({ searchParams }: SearchProps) {
  const { q } = await searchParams;
  const query = q || '';

  let articles: any[] = [];

  if (query) {
    try {
      await connectDB();
      // Search by title or category (case insensitive)
      articles = await Article.find({
        status: 'published',
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { category: { $regex: query, $options: 'i' } },
          { excerpt: { $regex: query, $options: 'i' } }
        ]
      })
      .sort({ date: -1 })
      .limit(20)
      .lean();
    } catch (error) {
      console.error('Search failed:', error);
    }
  }

  return (
    <div className="container py-12">
      <header className="mb-12">
        <h1 className="category-title" style={{ fontSize: '2.5rem' }}>
          {query ? `Search Results for "${query}"` : 'Search Articles'}
        </h1>
        <div className="category-header-line"></div>
      </header>

      {!query ? (
        <div className="empty-state">
          <p>Please enter a search term in the header to find articles.</p>
        </div>
      ) : articles.length > 0 ? (
        <div className="article-grid">
          {articles.map((article: any) => (
            <ArticleCard key={article._id.toString()} article={article} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No articles found matching "{query}". Try another search term.</p>
        </div>
      )}
    </div>
  );
}
