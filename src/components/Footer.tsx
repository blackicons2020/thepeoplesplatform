import Link from 'next/link';
import { Globe, Lock, Info, Mail, MessageSquare, Share2, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Globe className="w-6 h-6 text-primary" />
              <h2>The People's Platform</h2>
            </Link>
            <p className="footer-desc">
              Independent, unbiased news reporting for the digital age. 
              Committed to journalistic excellence and integrity.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/advertise">Advertise</Link></li>
              <li><Link href="/authors">Our Authors</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Policies</h3>
            <ul>
              <li><Link href="/editorial-policy">Editorial Policy</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/corrections-policy">Corrections</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Informed</h3>
            <p>Get the latest headlines delivered to your inbox.</p>
            <Link href="/admin" className="admin-link">
              <Lock size={14} /> Staff Dashboard
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} The People's Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
