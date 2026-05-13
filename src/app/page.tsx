import connectDB from '@/lib/db';
import Article from '@/models/Article';
import Ad from '@/models/Ad';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';
import Image from 'next/image';
import { getOrganizationSchema } from '@/utils/schema';

export const revalidate = 60;

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

async function getAdverts() {
  try {
    await connectDB();
    return await Ad.find({ status: 'active' }).sort({ createdAt: -1 }).lean() || [];
  } catch (error) {
    console.error("Homepage adverts fetch failed:", error);
    return [];
  }
}

export default async function Home() {
  const articles = await getArticles();
  const allAdverts = await getAdverts();
  const homepageAds = allAdverts.filter((a: any) => a.plan === 'Homepage Banner');
  const ad1 = homepageAds[0] || allAdverts[0];
  const ad2 = homepageAds[1] || allAdverts[1];

  const featuredArticle: any = articles[0];
  const latestArticles = articles.slice(1);
  const featuredCleanSlug = featuredArticle ? (featuredArticle.slug || '').replace(/-\d{13}$/, '') : '';

  return (
    <div className="container py-8" style={{ marginTop: '2rem' }}>
      {/* Schema.org for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />

      <section className="hero-grid-custom">
        {featuredArticle ? (
          <div className="featured-article-stacked">
            <Link href={`/${featuredCleanSlug}`} style={{ display: 'block' }}>
              <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.25rem', background: 'var(--bg-offset)' }}>
                <Image 
                  src={featuredArticle.image || '/placeholder.jpg'} 
                  alt={featuredArticle.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
                <span className="badge" style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 10, background: '#006B3F', color: 'white', padding: '0.35rem 1rem', fontSize: '0.75rem', fontWeight: 800, borderRadius: '9999px', textTransform: 'uppercase' }}>
                  {featuredArticle.category && featuredArticle.category !== 'General' ? featuredArticle.category : 'NEWS'}
                </span>
              </div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-serif)' }}>
                {featuredArticle.title}
              </h2>
              {featuredArticle.subHeadline && (
                <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {featuredArticle.subHeadline}
                </p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  {featuredArticle.author || 'Emeke John'}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {new Date(featuredArticle.date).toLocaleDateString()}
                </span>
              </div>
            </Link>
          </div>
        ) : (
          <div className="empty-state">No articles published yet. Check your database connection.</div>
        )}

        <div className="hero-ad-slot" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {ad1 ? (
            <div style={{ background: 'var(--bg-offset)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: ad1.adImage ? '0' : '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '220px', flex: 1, overflow: 'hidden', position: 'relative' }}>
              {ad1.adUrl ? (
                <a href={ad1.adUrl.startsWith('http') ? ad1.adUrl : `https://${ad1.adUrl}`} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                  {ad1.adImage ? (
                    <img src={ad1.adImage} alt={ad1.adHeadline || 'Sponsor'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>- Sponsored -</span>
                      {ad1.adHeadline && <h4 style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{ad1.adHeadline}</h4>}
                      {ad1.adContent && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ad1.adContent}</p>}
                    </div>
                  )}
                </a>
              ) : (
                <div style={{ width: '100%', height: '100%' }}>
                  {ad1.adImage ? (
                    <img src={ad1.adImage} alt={ad1.adHeadline || 'Sponsor'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>- Sponsored -</span>
                      {ad1.adHeadline && <h4 style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{ad1.adHeadline}</h4>}
                      {ad1.adContent && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ad1.adContent}</p>}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div style={{ background: 'var(--bg-offset)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '220px', flex: 1 }}>
              <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>- Premium Sponsor Slot 1 -</span>
              <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>
                <p>Top Impact Banner &bull; <a href="/advertise" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Advertise</a></p>
              </div>
            </div>
          )}

          {ad2 && ad2._id !== (ad1 ? ad1._id : null) ? (
            <div style={{ background: 'var(--bg-offset)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: ad2.adImage ? '0' : '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '220px', flex: 1, overflow: 'hidden', position: 'relative' }}>
              {ad2.adUrl ? (
                <a href={ad2.adUrl.startsWith('http') ? ad2.adUrl : `https://${ad2.adUrl}`} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                  {ad2.adImage ? (
                    <img src={ad2.adImage} alt={ad2.adHeadline || 'Sponsor'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>- Sponsored -</span>
                      {ad2.adHeadline && <h4 style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{ad2.adHeadline}</h4>}
                      {ad2.adContent && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ad2.adContent}</p>}
                    </div>
                  )}
                </a>
              ) : (
                <div style={{ width: '100%', height: '100%' }}>
                  {ad2.adImage ? (
                    <img src={ad2.adImage} alt={ad2.adHeadline || 'Sponsor'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ padding: '2rem', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>- Sponsored -</span>
                      {ad2.adHeadline && <h4 style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{ad2.adHeadline}</h4>}
                      {ad2.adContent && <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ad2.adContent}</p>}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div style={{ background: 'var(--bg-offset)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '220px', flex: 1 }}>
              <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>- Premium Sponsor Slot 2 -</span>
              <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.95rem' }}>
                <p>Standard Banner Ad &bull; <a href="/advertise" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Advertise</a></p>
              </div>
            </div>
          )}
        </div>
      </section>

      {latestArticles.length > 0 && (
        <section className="latest-news">
          <div className="section-header" style={{ marginBottom: '1.5rem', borderBottom: 'none', paddingBottom: 0 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>Latest Stories</h2>
          </div>
          <div className="article-grid-custom">
            {latestArticles.map((article: any) => (
              <ArticleCard key={article._id.toString()} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
