import Article from '@/models/Article';

export const SITE_NAME = "The People's Platform";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thepeoplesplatform.online";
export const LOGO_URL = `${SITE_URL}/logo.png`;

export function getNewsArticleSchema(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.image],
    "datePublished": article.date || article.createdAt,
    "dateModified": article.updatedAt || article.date || article.createdAt,
    "author": [{
      "@type": "Person",
      "name": article.author,
      "url": `${SITE_URL}/authors/${article.authorSlug || 'staff'}`
    }],
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "description": article.excerpt || article.metaDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${article.category.toLowerCase()}/${article.slug}`
    }
  };
}

export function getBreadcrumbSchema(items: { name: string, item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.item}`
    }))
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": LOGO_URL,
    "sameAs": [
      "https://facebook.com/thepeoplesplatform",
      "https://twitter.com/thepeoplesplatform",
      "https://instagram.com/thepeoplesplatform"
    ]
  };
}
