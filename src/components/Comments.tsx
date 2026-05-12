'use client';

import React, { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  body: string;
  date: string;
}

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`comments_${slug}`);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        // ignore parsing faults
      }
    } else {
      // populate with a beautiful initial community comment for demonstration
      const initial: Comment[] = [
        {
          id: Date.now() - 3600000,
          name: 'Sarah Adebayo',
          body: 'This is an extremely timely report. The culture of silence must end if we want healthy homes.',
          date: new Date(Date.now() - 3600000).toLocaleDateString() + ' ' + new Date(Date.now() - 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
      setComments(initial);
      localStorage.setItem(`comments_${slug}`, JSON.stringify(initial));
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      body: body.trim(),
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`comments_${slug}`, JSON.stringify(updated));
    setName('');
    setBody('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="comments-section" style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '2px solid var(--border)' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', fontFamily: 'var(--font-sans)', color: 'var(--text-main)' }}>
        Join the Conversation ({comments.length})
      </h3>

      <form onSubmit={handleSubmit} style={{ background: 'var(--bg-offset)', padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '3rem', border: '1px solid var(--border)' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
          Leave a Comment
        </h4>

        {success && (
          <div style={{ background: '#E6F4EA', color: '#137333', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.875rem' }}>
            Comment posted successfully!
          </div>
        )}

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Your Name
          </label>
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sarah Adebayo"
            style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Your Comment
          </label>
          <textarea 
            required
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your thoughts respectfully..."
            style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '0.75rem 2rem', fontWeight: 700, borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.875rem', transition: 'background 0.2s' }}
        >
          Post Comment
        </button>
      </form>

      <div className="comments-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {comments.map((c) => (
          <div key={c.id} style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', background: 'transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1rem' }}>{c.name}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.date}</span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-main)', whiteSpace: 'pre-wrap' }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
