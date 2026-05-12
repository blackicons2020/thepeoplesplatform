import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Article from '@/models/Article';
import { getNewsArticleSchema, getBreadcrumbSchema } from '@/utils/schema';
import { User, Share2, Bookmark } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const article = await Article.findOne({ slug, status: 'published' }).lean();

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
  };
}

export async function generateStaticParams() {
  try {
    await connectDB();
    const articles = await Article.find({ status: 'published', slug: { $exists: true, $ne: "" } })
      .limit(20)
      .select('slug category')
      .lean();
    
    if (!articles || articles.length === 0) return [];

    return articles.map((a: any) => ({
      category: a.category?.toLowerCase() || 'news',
      slug: a.slug,
    }));
  } catch (error) {
    return [];
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  await connectDB();
  const article: any = await Article.findOne({ slug, status: 'published' }).lean();

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
            <div className="sidebar-widget" style={{ marginBottom: '2rem' }}>
              <h3>Share this story</h3>
              {(() => {
                const shareUrl = `https://thepeoplesplatform.vercel.app/news/${article.category.toLowerCase()}/${article.slug}`;
                const encodedUrl = encodeURIComponent(shareUrl);
                const encodedTitle = encodeURIComponent(article.title);
                return (
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ padding: '0.5rem', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)' }}
                      title="Share on Twitter/X"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ padding: '0.5rem', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)' }}
                      title="Share on Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a 
                      href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ padding: '0.5rem', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)' }}
                      title="Share on WhatsApp"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ padding: '0.5rem', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)' }}
                      title="Share on LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                );
              })()}
            </div>

            <AdBanner />
          </aside>
        </div>
      </div>
    </article>
  );
}
