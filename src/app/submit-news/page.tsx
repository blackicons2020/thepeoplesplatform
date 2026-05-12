'use client';

import { useState } from 'react';

export default function SubmitNewsPage() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    title: '',
    content: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          author: formData.authorName ? `${formData.authorName} (${formData.email})` : formData.email,
          category: 'General',
          status: 'pending'
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus('Thank you for your submission! Our editorial team will review it shortly.');
        setFormData({ authorName: '', email: '', title: '', content: '' });
      } else {
        setStatus('Failed to submit: ' + data.error);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div style={{ padding: '1rem', background: status.includes('Failed') || status.includes('error') ? '#fee2e2' : '#dcfce7', color: status.includes('Failed') || status.includes('error') ? '#991b1b' : '#166534', borderRadius: '0.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            {status}
          </div>
        )}

        <div className="form-grid-2">
          <div className="field">
            <label>Your Name (Optional)</label>
            <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} placeholder="John Doe" />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
          </div>
        </div>

        <div className="field mt-4">
          <label>Headline / Subject</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="What is this regarding?" required />
        </div>

        <div className="field mt-4">
          <label>News Details</label>
          <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Provide as much context and information as possible..." style={{ height: '200px' }} required></textarea>
        </div>

        <div className="field mt-4">
          <label>Attach Evidence / Files (Optional)</label>
          <input type="file" multiple style={{ padding: '0.5rem', background: 'transparent' }} />
          <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>File uploads for public submissions are currently disabled for security reasons.</small>
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full mt-8" style={{ justifyContent: 'center' }}>
          {isSubmitting ? 'Submitting...' : 'Securely Submit'}
        </button>
      </form>
    </div>
  );
}
