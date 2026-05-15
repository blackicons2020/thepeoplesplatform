'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Search, Globe, Sun, Moon, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const CATEGORIES = [
  'Politics', 'Metro', 'Business', 'Economy', 'Technology', 'Sports', 
  'Entertainment', 'Education', 'Leadership', 'Editorials', 'International'
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

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
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="search-form">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="icon-btn">
                <X className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <button className="icon-btn" onClick={() => setIsSearchOpen(true)}>
              <Search className="w-5 h-5" />
            </button>
          )}

          <button className="icon-btn" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="menu-toggle hide-desktop" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
