import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p className="article-subheadline" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Respecting your data in the digital age.</p>
      </header>

      <section className="policy-section">
        <h2>Introduction</h2>
        <p>
          The People’s Platform (“we,” “our,” or “us”) respects the privacy of our readers, visitors, contributors, and users. This Privacy Policy explains how we collect, use, protect, and manage information when you access or interact with our website, services, content, newsletters, and related digital platforms.
        </p>
        <p style={{ marginTop: '1rem' }}>
          By using The People’s Platform, you agree to the practices described in this Privacy Policy.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Information We Collect</h2>
        <p>We may collect certain information when users interact with our platform.</p>
        
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>Information You Provide Voluntarily</h3>
        <p>This may include:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Contact information</li>
          <li>Submitted news tips</li>
          <li>Feedback messages</li>
          <li>Advertising inquiries</li>
          <li>Newsletter subscriptions</li>
          <li>Comments or correspondence</li>
        </ul>
        <p>Information submitted through forms, emails, or direct communication is voluntarily provided by users.</p>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>Automatically Collected Information</h3>
        <p>Like many digital platforms, we may automatically collect certain technical and usage-related information, including:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Referral sources</li>
          <li>Date and time of visits</li>
          <li>Session activity</li>
          <li>General geographic region</li>
          <li>Analytics data</li>
        </ul>
        <p>This information helps improve website functionality, security, editorial performance, and user experience.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Cookies & Tracking Technologies</h2>
        <p>The People’s Platform may use cookies and similar technologies to:</p>
        <ul>
          <li>Improve website performance</li>
          <li>Personalize user experience</li>
          <li>Remember preferences</li>
          <li>Analyze traffic patterns</li>
          <li>Support analytics and advertising systems</li>
        </ul>
        <p>Cookies are small data files stored on your device.</p>
        <p style={{ marginTop: '1rem' }}>
          Users may adjust browser settings to refuse or limit cookies; however, some features of the website may not function properly if cookies are disabled.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>How We Use Information</h2>
        <p>We may use collected information to:</p>
        <ul>
          <li>Operate and maintain the platform</li>
          <li>Improve website performance and usability</li>
          <li>Respond to inquiries or submissions</li>
          <li>Process advertising or partnership requests</li>
          <li>Deliver newsletters or updates</li>
          <li>Analyze audience engagement</li>
          <li>Detect fraud, abuse, or unauthorized activity</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p><strong>We do not sell personal information to third parties.</strong></p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Third-Party Services</h2>
        <p>The People’s Platform may use trusted third-party services for:</p>
        <ul>
          <li>Analytics (e.g., Google Analytics)</li>
          <li>Hosting infrastructure (e.g., Vercel)</li>
          <li>Content delivery (CDN services)</li>
          <li>Advertising systems (e.g., Google AdSense)</li>
          <li>Embedded media</li>
          <li>Newsletter services</li>
          <li>Performance monitoring</li>
        </ul>
        <p>These third-party providers may process limited technical information as part of their services. Users are encouraged to review the privacy policies of third-party services separately.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Advertising & Sponsored Content</h2>
        <p>
          We may display advertisements, sponsored content, affiliate links, or promotional materials on our platform. 
          Advertising partners may use cookies or tracking technologies in accordance with their own privacy policies.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Sponsored content will be identified appropriately to distinguish it from editorial reporting.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures designed to protect information against unauthorized access, misuse, alteration, disclosure, or destruction.
        </p>
        <p style={{ marginTop: '1rem' }}>
          However, no method of online transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>User Rights & Choices</h2>
        <p>Depending on applicable laws and jurisdictions, users may have the right to:</p>
        <ul>
          <li>Request access to personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of submitted information</li>
          <li>Opt out of communications</li>
          <li>Manage cookie preferences</li>
        </ul>
        <p>
          Users may contact us regarding privacy-related concerns through our official <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link>.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>External Links</h2>
        <p>
          Our platform may contain links to external websites or third-party content. 
          We are not responsible for the privacy practices, policies, or content of external websites outside our control.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Children’s Privacy</h2>
        <p>
          The People’s Platform is intended for a general audience and does not knowingly collect personal information from children without appropriate legal consent where required by law.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect legal requirements, operational changes, platform updates, or editorial developments. 
          Updated versions will be posted on this page with revised effective dates.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Contact Us</h2>
        <p>
          For privacy-related inquiries, requests, or concerns, users may contact The People’s Platform through our official <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link>.
        </p>
      </section>

      <footer className="mt-16 text-center text-muted" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
        The People’s Platform is committed to responsible digital publishing, transparency, and the protection of user privacy while delivering trusted journalism in the digital age.
      </footer>
    </div>
  );
}
