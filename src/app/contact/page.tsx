'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setResponseMsg('Network error. Please try again later.');
    }
  };

  return (
    <div className="container py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="article-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
        <p className="article-subheadline" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Have a news tip, a correction, or an advertising inquiry? Our team is ready to listen and respond.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
        {/* Contact Info */}
        <div>
          <div className="policy-section" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--bg-offset)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justify-content: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Email Us</h4>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem' }}>theplatformreport@gmail.com</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>newsroom@thepeoplesplatform.online</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--bg-offset)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justify-content: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Headquarters</h4>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem' }}>Lagos, Nigeria</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Serving a global audience.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--bg-offset)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justify-content: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Call Us</h4>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem' }}>Available for verified tips.</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Contact via email first for security.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '2rem', background: 'var(--primary)', borderRadius: 'var(--radius-md)', color: 'white' }}>
            <h3 style={{ marginBottom: '1rem' }}>Submit a News Tip</h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, opacity: 0.9 }}>
              Do you have information the public needs to know? We guarantee source protection for verified whistleblowers and tipsters.
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: 'var(--bg-offset)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="field">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="field">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="field mt-4">
              <label>Subject</label>
              <select 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', outline: 'none' }}
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="">Select a subject</option>
                <option value="News Tip">News Tip</option>
                <option value="Correction">Correction</option>
                <option value="Advertising">Advertising</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="field mt-4">
              <label>Message *</label>
              <textarea 
                required 
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help you?"
                style={{ height: '200px' }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-full mt-8" 
              disabled={status === 'loading'}
              style={{ justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}
            >
              {status === 'loading' ? 'Sending Message...' : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#DCFCE7', color: '#166534', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                {responseMsg}
              </div>
            )}

            {status === 'error' && (
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#FEE2E2', color: '#991B1B', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                {responseMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
