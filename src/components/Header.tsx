'use client';

import Link from 'next/link';
import { Menu, Search, Globe, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  'Politics', 'Metro', 'Business', 'Technology', 'Sports', 
  'Entertainment', 'Education', 'Leadership', 'Editorials', 'International'
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-top">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <Globe className="w-5 h-5" />
          </div>
          <h1>The People's Platform</h1>
        </Link>

        <div className="header-actions">
          <button className="icon-btn"><Search className="w-5 h-5" /></button>
          <button className="icon-btn"><Moon className="w-5 h-5" /></button>
          <Link href="/submit-news" className="btn btn-primary hide-mobile">
            Submit News
          </Link>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="nav-links">
            {CATEGORIES.map(cat => (
              <li key={cat}>
                <Link href={`/news/${cat.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
