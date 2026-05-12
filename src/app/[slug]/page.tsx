import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import connectDB from '@/lib/db';
import Article from '@/models/Article';
import { getNewsArticleSchema } from '@/utils/schema';
import { User } from 'lucide-react';
import AdBanner from '@/components/AdBanner';
import Comments from '@/components/Comments';
import ArticleCard from '@/components/ArticleCard';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
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

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  await connectDB();
  const article: any = await Article.findOne({ slug, status: 'published' }).lean();

  if (!article) notFound();

  // Fetch related articles from the same category excluding current article slug
  const relatedArticles = await Article.find({
    category: article.category,
    slug: { $ne: article.slug },
    status: 'published'
  }).sort({ date: -1 }).limit(3).lean() || [];

  const shareUrl = `https://thepeoplesplatform.vercel.app/${article.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <article className="article-page py-8">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getNewsArticleSchema(article)) }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.25rem' }}>
        {/* 1. Cover Image First */}
        <div className="featured-image-wrap" style={{ width: '100%', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--bg-offset)' }}>
          <Image 
            src={article.image || '/placeholder.jpg'} 
            alt={article.title}
            width={1200}
            height={630}
            className="featured-image"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '550px' }}
            priority
          />
        </div>

        {/* 2. Category Tag directly below image */}
        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <span className="badge badge-primary" style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 800, padding: '0.35rem 0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {article.category}
          </span>
        </div>

        {/* 3. Headline & Sub-Headline stacked */}
        <h1 className="article-title" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, color: 'var(--text-main)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
          {article.title}
        </h1>

        {article.subHeadline && (
          <p className="article-subheadline" style={{ fontSize: '1.25rem', lineHeight: 1.5, color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
            {article.subHeadline}
          </p>
        )}

        {/* 4. Inline Author info & Square Social sharing triggers side-by-side */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.25rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-offset)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <User className="w-5 h-5" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>By {article.author || 'Staff Reporter'}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Published {new Date(article.date).toLocaleDateString()}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-muted)', transition: 'all 0.2s' }}
              title="Share on Twitter/X"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-muted)', transition: 'all 0.2s' }}
              title="Share on Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a 
              href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-muted)', transition: 'all 0.2s' }}
              title="Share on WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: '4px', color: 'var(--text-muted)', transition: 'all 0.2s' }}
              title="Share on LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* 5. Main story body with full Justification */}
        <div 
          className="article-content" 
          style={{ textAlign: 'justify', fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '3rem' }}
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />

        {/* 6. Advert section stretched across down the page */}
        <div style={{ width: '100%', margin: '3rem 0' }}>
          <AdBanner />
        </div>

        {/* 7. Comment section */}
        <Comments slug={article.slug} />

        {/* 8. Related articles populated after the comment section */}
        {relatedArticles.length > 0 && (
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '2px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', fontFamily: 'var(--font-sans)', color: 'var(--text-main)' }}>
              Related Stories
            </h3>
            <div className="article-grid-custom">
              {relatedArticles.map((rel: any) => (
                <ArticleCard key={rel._id.toString()} article={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
