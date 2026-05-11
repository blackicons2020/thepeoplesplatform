import { User } from 'lucide-react';

export default function AuthorsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title">Our Editorial Team</h1>
        <p className="article-subheadline">Meet the journalists behind the stories.</p>
      </header>

      <div className="authors-grid">
        <div className="author-card-full">
          <div className="author-avatar-lg">
            <User size={40} />
          </div>
          <div className="author-info">
            <h2>Editorial Board</h2>
            <p className="author-bio">
              The People's Platform is led by a diverse group of award-winning journalists with decades of 
              combined experience in investigative reporting, political analysis, and digital media.
            </p>
          </div>
        </div>

        <div className="author-card-full">
          <div className="author-avatar-lg">
            <User size={40} />
          </div>
          <div className="author-info">
            <h2>Staff Reporters</h2>
            <p className="author-bio">
              Our nationwide network of reporters is committed to local storytelling and accountability 
              journalism. Every member of our team adheres to the strict code of ethics outlined in our 
              Editorial Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
