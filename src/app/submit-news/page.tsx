'use client';

import { useState } from 'react';

export default function SubmitNewsPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you for your submission! Our editorial team will review it shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container py-12" style={{ maxWidth: '800px' }}>
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '2.5rem' }}>Submit News / Tip</h1>
        <p className="article-subheadline" style={{ fontSize: '1.125rem' }}>Got a story or a tip? Share it securely with our editorial team.</p>
        <div className="category-header-line" style={{ margin: '1.5rem auto' }}></div>
      </header>

      <form className="ad-form" onSubmit={handleSubmit} style={{ margin: '0 auto' }}>
        {status && (
          <div style={{ padding: '1rem', background: '#dcfce7', color: '#166534', borderRadius: '0.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            {status}
          </div>
        )}

        <div className="form-grid-2">
          <div className="field">
            <label>Your Name (Optional)</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
        </div>

        <div className="field mt-4">
          <label>Headline / Subject</label>
          <input type="text" placeholder="What is this regarding?" required />
        </div>

        <div className="field mt-4">
          <label>News Details</label>
          <textarea placeholder="Provide as much context and information as possible..." style={{ height: '200px' }} required></textarea>
        </div>

        <div className="field mt-4">
          <label>Attach Evidence / Files (Optional)</label>
          <input type="file" multiple style={{ padding: '0.5rem', background: 'transparent' }} />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-8" style={{ justifyContent: 'center' }}>
          Securely Submit
        </button>
      </form>
    </div>
  );
}
