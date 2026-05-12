import Link from 'next/link';
import { Globe, Lock, Info, Mail, MessageSquare, Share2 } from 'lucide-react';

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
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
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
