import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Article from '@/models/Article';
import { getNewsArticleSchema, getBreadcrumbSchema } from '@/utils/schema';
import { Clock, User, Share2, Bookmark, MessageSquare } from 'lucide-react';

interface PageProps {
  params: { category: string; slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  await connectDB();
  const article = await Article.findOne({ slug: params.slug, status: 'published' }).lean();

  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image || ''],
      type: 'article',
      publishedTime: article.date?.toISOString(),
      authors: [article.author],
      section: article.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image || ''],
    }
  };
}

export async function generateStaticParams() {
  await connectDB();
  const articles = await Article.find({ status: 'published', slug: { $exists: true, $ne: "" } }).limit(100).select('slug category').lean();
  return articles.map((a: any) => ({
    category: a.category?.toLowerCase() || 'news',
    slug: a.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  await connectDB();
  const article: any = await Article.findOne({ slug: params.slug, status: 'published' }).lean();

  if (!article) notFound();

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: article.category, item: `/news/${article.category.toLowerCase()}` },
    { name: article.title, item: `/news/${article.category.toLowerCase()}/${article.slug}` },
  ];

  return (
    <article className="container article-page py-8">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getNewsArticleSchema(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbs)) }}
      />

      <nav className="breadcrumbs mb-6">
        {breadcrumbs.map((b, i) => (
          <span key={b.item}>
            <a href={b.item}>{b.name}</a>
            {i < breadcrumbs.length - 1 && <span className="separator">/</span>}
          </span>
        ))}
      </nav>

      <header className="article-header mb-8">
        <span className="badge badge-primary mb-4">{article.category}</span>
        <h1 className="article-title">{article.title}</h1>
        {article.subHeadline && <p className="article-subheadline">{article.subHeadline}</p>}
        
        <div className="article-meta">
          <div className="meta-left">
            <div className="author-img">
               <User className="w-6 h-6" />
            </div>
            <div>
              <span className="author-name">By {article.author}</span>
              <span className="publish-date">Published {new Date(article.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="meta-right">
            <button className="icon-btn"><Share2 /></button>
            <button className="icon-btn"><Bookmark /></button>
          </div>
        </div>
      </header>

      <div className="article-main">
        <div className="featured-image-wrap mb-8">
          <Image 
            src={article.image || '/placeholder.jpg'} 
            alt={article.title}
            width={1200}
            height={630}
            className="featured-image"
            priority
          />
        </div>

        <div className="article-layout">
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <h3>Share this story</h3>
              <div className="share-grid">
                 {/* Social buttons would go here */}
              </div>
            </div>
            <div className="sidebar-widget sticky">
              <h3>Related Stories</h3>
              {/* Related articles loop */}
            </div>
          </aside>
        </div>
      </div>

    </article>
  );
}
