'use client';

import { useState, useEffect } from 'react';
import { LayoutGrid, PenTool, Shield, Search } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <Shield className="w-6 h-6" />
          <span>Editorial Admin</span>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={activeTab === 'articles' ? 'active' : ''} 
            onClick={() => setActiveTab('articles')}
          >
            <LayoutGrid className="w-5 h-5" /> Articles
          </button>
          <button 
            className={activeTab === 'compose' ? 'active' : ''} 
            onClick={() => setActiveTab('compose')}
          >
            <PenTool className="w-5 h-5" /> New Story
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="content-header">
          <h2>{activeTab === 'articles' ? 'All Articles' : 'Compose Story'}</h2>
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
                  {/* Articles row map */}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="compose-form">
              <div className="form-grid">
                <div className="form-main">
                  <input type="text" placeholder="Article Title" className="title-input" />
                  <textarea placeholder="Write your story..." className="content-textarea"></textarea>
                </div>
                <aside className="form-sidebar">
                   <div className="sidebar-box">
                      <h3>Publishing</h3>
                      <div className="status-item">
                        <label>Status:</label>
                        <select><option>Draft</option><option>Published</option></select>
                      </div>
                      <button className="btn btn-primary w-full mt-4">Save Article</button>
                   </div>
                   <div className="sidebar-box">
                      <h3>SEO Optimization</h3>
                      <div className="seo-field">
                        <label>Meta Title</label>
                        <input type="text" />
                      </div>
                      <div className="seo-field">
                        <label>Meta Description</label>
                        <textarea></textarea>
                      </div>
                   </div>
                </aside>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
