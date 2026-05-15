'use client';

import { useState, useEffect } from 'react';
import { LayoutGrid, PenTool, Shield, Search, Trash2, Loader2, Megaphone, CheckCircle, XCircle, Edit } from 'lucide-react';

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
    if (passwordInput.trim() === 'Admin2026') {
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
    category: 'Politics',
    author: 'Staff Reporter'
  };

  const [formData, setFormData] = useState(initialFormState);

  const [adverts, setAdverts] = useState<any[]>([]);
  const [isAdLoading, setIsAdLoading] = useState(false);
  const [showDirectAdForm, setShowDirectAdForm] = useState(false);
  const initialAdFormState = {
    clientName: 'Admin Direct Post',
    email: 'admin@thepeoplesplatform.online',
    plan: 'Homepage Banner',
    amount: 0,
    status: 'active',
    adHeadline: '',
    adContent: '',
    adUrl: '',
    adImage: ''
  };
  const [adFormData, setAdFormData] = useState(initialAdFormState);
  const [editingAdId, setEditingAdId] = useState<string | null>(null);

  const fetchAdverts = async () => {
    setIsAdLoading(true);
    try {
      const res = await fetch('/api/adverts');
      const data = await res.json();
      if (data.success) {
        setAdverts(data.adverts);
      }
    } catch (error) {
      console.error('Failed to fetch adverts:', error);
    } finally {
      setIsAdLoading(false);
    }
  };

  const handleAdInputChange = (e: any) => {
    const { name, value } = e.target;
    setAdFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/webp', 0.75);
            setAdFormData(prev => ({ ...prev, adImage: compressedBase64 }));
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveDirectAd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingAdId ? `/api/adverts/${editingAdId}` : '/api/adverts';
      const method = editingAdId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adFormData),
      });
      const data = await res.json();
      if (data.success) {
        setAdFormData(initialAdFormState);
        setEditingAdId(null);
        setShowDirectAdForm(false);
        fetchAdverts();
      } else {
        alert('Failed to save ad: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to save direct ad:', error);
    }
  };

  const handleEditAdClick = (ad: any) => {
    setEditingAdId(ad._id);
    setAdFormData({
      clientName: ad.clientName || '',
      email: ad.email || '',
      plan: ad.plan || 'Homepage Banner',
      amount: ad.amount || 0,
      status: ad.status || 'active',
      adHeadline: ad.adHeadline || '',
      adContent: ad.adContent || '',
      adUrl: ad.adUrl || '',
      adImage: ad.adImage || ''
    });
    setShowDirectAdForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateAdStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/adverts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        fetchAdverts();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteAd = async (id: string) => {
    if (!confirm('Delete this advert permanently?')) return;
    try {
      const res = await fetch(`/api/adverts/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchAdverts();
      }
    } catch (e) {
      console.error(e);
    }
  };

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
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedBase64 = canvas.toDataURL('image/webp', 0.75);
            setFormData(prev => ({ ...prev, image: compressedBase64 }));
          }
        };
        img.src = event.target?.result as string;
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
      category: article.category && article.category !== 'General' ? article.category : 'Politics',
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
          <button 
            className={activeTab === 'adverts' ? 'active' : ''} 
            onClick={() => { setActiveTab('adverts'); fetchAdverts(); }}
          >
            <Megaphone className="w-5 h-5" /> Adverts
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="content-header">
          <h2>{activeTab === 'articles' ? 'All Articles' : activeTab === 'adverts' ? 'Manage Adverts' : (editingId ? 'Edit Story' : 'Compose Story')}</h2>
          <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Admin</span>
            <button 
              onClick={() => { localStorage.removeItem('admin_auth'); setIsAuthenticated(false); }}
              className="btn btn-primary"
              style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}
            >
              Logout
            </button>
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
                <select onChange={(e) => {
                  const val = e.target.value;
                  const filtered = val === 'All' ? articles : articles.filter(a => a.category === val);
                  // This local state filtering might not be ideal since articles are fetched from API
                  // but for now let's just populate the UI as requested.
                }}>
                  <option value="All">All Categories</option>
                  <option value="Politics">Politics</option>
                  <option value="Business">Business</option>
                  <option value="Metro">Metro</option>
                  <option value="Sports">Sports</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Technology">Technology</option>
                  <option value="Education">Education</option>
                  <option value="Leadership">Leadership</option>
                  <option value="Editorials">Editorials</option>
                  <option value="International">International</option>
                  <option value="Opinion">Opinion</option>
                  <option value="News">News</option>
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
          ) : activeTab === 'compose' ? (
            <div className="compose-form">
              <div className="form-grid">
                <div className="form-main">
                  <input name="title" value={formData.title} onChange={handleInputChange} type="text" placeholder="Article Title" className="title-input" />
                  <div className="field" style={{ marginBottom: '1rem' }}>
                    <input name="subHeadline" value={formData.subHeadline} onChange={handleInputChange} type="text" placeholder="Sub-Title / Headline" />
                  </div>
                  <div className="field" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Writer / Author Name</label>
                    <input name="author" value={formData.author} onChange={handleInputChange} type="text" placeholder="e.g. John Doe" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', outline: 'none', color: '#1f2937' }} />
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
                      <div className="status-item" style={{ marginTop: '1rem' }}>
                        <label>Category:</label>
                        <select name="category" value={formData.category} onChange={handleInputChange}>
                          <option value="Politics">Politics</option>
                          <option value="Business">Business</option>
                          <option value="Metro">Metro</option>
                          <option value="Sports">Sports</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Technology">Technology</option>
                          <option value="Education">Education</option>
                          <option value="Leadership">Leadership</option>
                          <option value="Editorials">Editorials</option>
                          <option value="International">International</option>
                          <option value="Opinion">Opinion</option>
                          <option value="News">News</option>
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
          ) : activeTab === 'adverts' ? (
            <div className="adverts-management">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>Submitted & Active Advertisements</h3>
                <button className="btn btn-primary" onClick={() => setShowDirectAdForm(!showDirectAdForm)}>
                  {showDirectAdForm ? 'Close Form' : 'Post Advert Directly (No Fee)'}
                </button>
              </div>

              {showDirectAdForm && (
                <form onSubmit={handleSaveDirectAd} style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4>{editingAdId ? 'Edit Advertisement Details' : 'Direct Advert Submission'}</h4>
                    {editingAdId && (
                      <button type="button" onClick={() => { setEditingAdId(null); setAdFormData(initialAdFormState); }} style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'underline' }}>
                        Cancel Edit
                      </button>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Client Name</label>
                      <input type="text" name="clientName" value={adFormData.clientName} onChange={handleAdInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '0.25rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Plan / Location</label>
                      <select name="plan" value={adFormData.plan} onChange={handleAdInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '0.25rem' }}>
                        <option value="Homepage Banner">Homepage Banner</option>
                        <option value="Article Page Ad">Article Page Ad</option>
                        <option value="Sponsored Article">Sponsored Article</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Headline</label>
                    <input type="text" name="adHeadline" value={adFormData.adHeadline} onChange={handleAdInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '0.25rem' }} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Ad Content</label>
                    <textarea name="adContent" value={adFormData.adContent} onChange={handleAdInputChange} rows={3} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '0.25rem' }}></textarea>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Target URL</label>
                    <input type="text" name="adUrl" placeholder="https://example.com" value={adFormData.adUrl} onChange={handleAdInputChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--border)', borderRadius: '0.25rem' }} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Ad Image</label>
                    <input type="file" accept="image/*" onChange={handleAdImageUpload} style={{ display: 'block', width: '100%' }} />
                    {adFormData.adImage && (
                      <img src={adFormData.adImage} alt="preview" style={{ maxHeight: '100px', marginTop: '0.5rem', borderRadius: '0.25rem' }} />
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">{editingAdId ? 'Update Advertisement' : 'Publish Direct Advert'}</button>
                </form>
              )}

              {isAdLoading ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>Loading adverts...</div>
              ) : (
                <div style={{ background: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Client / Plan</th>
                        <th>Details</th>
                        <th>Media</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adverts.length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>No advertisements found.</td>
                        </tr>
                      ) : (
                        adverts.map(ad => (
                          <tr key={ad._id}>
                            <td>
                              <div style={{ fontWeight: 700 }}>{ad.clientName}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{ad.plan}</div>
                              {ad.amount > 0 && <div style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>₦{ad.amount.toLocaleString()}</div>}
                            </td>
                            <td>
                              {ad.adHeadline && <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{ad.adHeadline}</div>}
                              {ad.adContent && <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{ad.adContent}</div>}
                              {ad.adUrl && <a href={ad.adUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3b82f6', textDecoration: 'underline' }}>{ad.adUrl}</a>}
                            </td>
                            <td>
                              {ad.adImage ? (
                                <img src={ad.adImage} alt="Ad media" style={{ width: '80px', height: '50px', objectFit: 'contain', background: '#f3f4f6', borderRadius: '0.25rem' }} />
                              ) : 'None'}
                            </td>
                            <td>
                              <select 
                                value={ad.status || 'pending'} 
                                onChange={(e) => handleUpdateAdStatus(ad._id, e.target.value)}
                                style={{ padding: '0.25rem', borderRadius: '0.25rem', border: '1px solid var(--border)', fontSize: '0.75rem' }}
                              >
                                <option value="pending">Pending</option>
                                <option value="active">Active</option>
                                <option value="rejected">Rejected</option>
                              </select>
                            </td>
                            <td>
                              <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button onClick={() => handleEditAdClick(ad)} className="icon-btn" style={{ color: '#3b82f6' }} title="Edit Advert">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDeleteAd(ad._id)} className="icon-btn" style={{ color: '#ef4444' }} title="Delete Advert">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : null}
        </section>
      </main>
    </div>
      )}
    </>
  );
}
