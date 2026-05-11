import Link from 'next/link';
import Image from 'next/image';
import { Clock, User } from 'lucide-react';

interface ArticleCardProps {
  article: any;
  featured?: boolean;
}

export default function ArticleCard({ article, featured }: ArticleCardProps) {
  const category = article.category || 'News';
  const href = `/news/${category.toLowerCase()}/${article.slug}`;

  if (featured) {
    return (
      <Link href={href} className="article-card featured">
        <div className="card-image-wrap">
          <Image 
            src={article.image || '/placeholder.jpg'} 
            alt={article.title}
            fill
            className="card-image"
            priority
          />
          <span className="badge badge-primary">{category}</span>
        </div>
        <div className="card-content">
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <div className="card-meta">
            <span className="meta-item"><User className="w-3 h-3" /> {article.author}</span>
            <span className="meta-item"><Clock className="w-3 h-3" /> {new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="article-card standard">
      <div className="card-image-wrap">
        <Image 
          src={article.image || '/placeholder.jpg'} 
          alt={article.title}
          fill
          className="card-image"
        />
      </div>
      <div className="card-content">
        <span className="category-tag">{category}</span>
        <h3>{article.title}</h3>
        <div className="card-meta">
          <span>{article.author}</span>
          <span className="dot">•</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}
