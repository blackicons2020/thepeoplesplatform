import connectDB from '@/lib/db';
import Article from '@/models/Article';
import ArticleCard from '@/components/ArticleCard';
import { getOrganizationSchema } from '@/utils/schema';

async function getArticles() {
  try {
    await connectDB();
    return await Article.find({ status: 'published' })
      .sort({ date: -1 })
      .limit(10)
      .lean() || [];
  } catch (error) {
    console.error("Homepage article fetch failed:", error);
    return [];
  }
}

export default async function Home() {
  const articles = await getArticles();
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  return (
    <div className="container py-8">
      {/* Schema.org for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />

      <section className="hero-section">
        {featuredArticle ? (
          <ArticleCard article={featuredArticle} featured />
        ) : (
          <div className="empty-state">No articles published yet. Check your database connection.</div>
        )}
      </section>

      {latestArticles.length > 0 && (
        <section className="latest-news">
          <div className="section-header">
            <h2>Latest Stories</h2>
            <div className="header-line"></div>
          </div>
          <div className="article-grid">
            {latestArticles.map((article: any) => (
              <ArticleCard key={article._id.toString()} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
