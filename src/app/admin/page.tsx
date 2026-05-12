'use client';

import { useState, useEffect } from 'react';
import { LayoutGrid, PenTool, Shield, Search, Trash2, Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('articles');
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'Admin2026') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid administrative passcode');
    }
  };

  const initialFormState = {
    title: '',
    subHeadline: '',
    image: '',
    content: '',
    status: 'pending',
    metaTitle: '',
    metaDescription: '',
    category: 'General',
    author: 'Staff Reporter'
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/articles');
      const data = await res.json();
      if (data.success) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveArticle = async (publishNow = false) => {
    setIsSaving(true);
    
    const payload = { ...formData };
    if (publishNow) {
      payload.status = 'published';
    }

    try {
      const url = editingId ? `/api/articles/${editingId}` : '/api/articles';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setFormData(initialFormState);
        setEditingId(null);
        setActiveTab('articles');
        fetchArticles();
      } else {
        alert('Failed to save article: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to save article:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (article: any) => {
    setFormData({
      title: article.title || '',
      subHeadline: article.subHeadline || '',
      image: article.image || '',
      content: article.content || '',
      status: article.status || 'pending',
      metaTitle: article.metaTitle || '',
      metaDescription: article.metaDescription || '',
      category: article.category || 'General',
      author: article.author || 'Staff Reporter'
    });
    setEditingId(article._id);
    setActiveTab('compose');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      const res = await fetch(`/api/articles/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchArticles();
      } else {
        alert('Failed to delete article: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to delete article:', error);
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setActiveTab('compose');
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="admin-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#111827' }}>
          <div style={{ background: '#1f2937', padding: '3rem', borderRadius: '1rem', width: '100%', maxWidth: '400px', textAlign: 'center', border: '1px solid #374151', color: 'white' }}>
            <Shield className="w-12 h-12" style={{ margin: '0 auto 1.5rem', color: '#10b981' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Staff Portal Access</h2>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '2rem' }}>Please enter the administrative passcode to continue.</p>
            
            <form onSubmit={handleLogin}>
              {authError && <div style={{ color: '#ef4444', fontSize: '0.75rem', marginBottom: '1rem' }}>{authError}</div>}
              <input 
                type="password" 
                placeholder="Enter passcode" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #4b5563', background: '#111827', color: 'white', marginBottom: '1.5rem', outline: 'none', textAlign: 'center', letterSpacing: '0.1em' }}
                autoFocus
              />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Secure Unlock
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <Shield className="w-6 h-6" />
          <span>Editorial Admin</span>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={activeTab === 'articles' ? 'active' : ''} 
            onClick={() => { setActiveTab('articles'); fetchArticles(); }}
          >
            <LayoutGrid className="w-5 h-5" /> Articles
          </button>
          <button 
            className={activeTab === 'compose' ? 'active' : ''} 
            onClick={resetForm}
          >
            <PenTool className="w-5 h-5" /> New Story
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="content-header">
          <h2>{activeTab === 'articles' ? 'All Articles' : (editingId ? 'Edit Story' : 'Compose Story')}</h2>
          <div className="user-profile">
            <span>Admin</span>
          </div>
        </header>

        <section className="content-body">
          {activeTab === 'articles' ? (
            <div className="article-list">
              <div className="list-filters">
                <div className="search-wrap">
                  <Search className="w-4 h-4" />
                  <input type="text" placeholder="Search articles..." />
                </div>
                <select>
                  <option>All Categories</option>
                </select>
              </div>

              {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem', color: '#6b7280' }}>
                  Loading articles...
                </div>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Author</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', color: '#6b7280' }}>No articles found.</td>
                      </tr>
                    ) : (
                      articles.map((article) => (
                        <tr key={article._id}>
                          <td style={{ fontWeight: 500 }}>{article.title}</td>
                          <td>
                            <span className={`badge ${article.status === 'published' ? 'badge-primary' : ''}`} style={article.status !== 'published' ? { background: '#e5e7eb', color: '#374151' } : {}}>
                              {article.status ? article.status.charAt(0).toUpperCase() + article.status.slice(1) : 'Pending'}
                            </span>
                          </td>
                          <td>{new Date(article.date).toLocaleDateString()}</td>
                          <td>{article.author}</td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <button onClick={() => handleEdit(article)} className="icon-btn" title="Edit Article" style={{ color: '#3b82f6' }}>
                                <PenTool className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete(article._id)} className="icon-btn" title="Delete Article" style={{ color: '#ef4444' }}>
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              )}
            </div>
          ) : (
            <div className="compose-form">
              <div className="form-grid">
                <div className="form-main">
                  <input name="title" value={formData.title} onChange={handleInputChange} type="text" placeholder="Article Title" className="title-input" />
                  <div className="field" style={{ marginBottom: '1rem' }}>
                    <input name="subHeadline" value={formData.subHeadline} onChange={handleInputChange} type="text" placeholder="Sub-Title / Headline" />
                  </div>
                  <div className="field" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Writer / Author Name</label>
                    <input name="author" value={formData.author} onChange={handleInputChange} type="text" placeholder="e.g. John Doe" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', outline: 'none' }} />
                  </div>
                  <div className="field" style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Article Image</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'block', width: '100%', padding: '0.75rem', border: '1px dashed #d1d5db', borderRadius: '0.5rem', background: '#f9fafb', cursor: 'pointer' }} />
                    {formData.image && (
                      <div style={{ marginTop: '1rem', width: '100%', height: '200px', position: 'relative', borderRadius: '0.5rem', overflow: 'hidden' }}>
                        <img src={formData.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                  </div>
                  <textarea name="content" value={formData.content} onChange={handleInputChange} placeholder="Write your story..." className="content-textarea"></textarea>
                </div>
                <aside className="form-sidebar">
                   <div className="sidebar-box">
                      <h3>Publishing</h3>
                      <div className="status-item">
                        <label>Status:</label>
                        <select name="status" value={formData.status} onChange={handleInputChange}>
                          <option value="pending">Pending</option>
                          <option value="published">Published</option>
                        </select>
                      </div>
                      <button onClick={() => handleSaveArticle(false)} disabled={isSaving} className="btn w-full mt-4" style={{ background: '#e5e7eb', color: '#111827', border: '1px solid #d1d5db' }}>
                        {isSaving ? 'Saving...' : 'Save Draft'}
                      </button>
                      <button onClick={() => handleSaveArticle(true)} disabled={isSaving} className="btn btn-primary w-full mt-2">
                        {isSaving ? 'Publishing...' : 'Publish'}
                      </button>
                   </div>
                   <div className="sidebar-box">
                      <h3>SEO Optimization</h3>
                      <div className="seo-field">
                        <label>Meta Title</label>
                        <input name="metaTitle" value={formData.metaTitle} onChange={handleInputChange} type="text" />
                      </div>
                      <div className="seo-field">
                        <label>Meta Description</label>
                        <textarea name="metaDescription" value={formData.metaDescription} onChange={handleInputChange}></textarea>
                      </div>
                   </div>
                </aside>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
      )}
    </>
  );
}
