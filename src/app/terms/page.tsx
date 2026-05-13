import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms of Service</h1>
        <p className="article-subheadline" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Governing your access to independent news.</p>
      </header>

      <section className="policy-section">
        <h2>Introduction</h2>
        <p>
          Welcome to The People’s Platform (“the Platform,” “we,” “our,” or “us”).
        </p>
        <p style={{ marginTop: '1rem' }}>
          These Terms of Service govern your access to and use of our website, content, services, newsletters, applications, and related digital platforms.
        </p>
        <p style={{ marginTop: '1rem' }}>
          By accessing or using The People’s Platform, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of the platform.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Use of the Platform</h2>
        <p>
          The People’s Platform provides digital news, editorial content, analysis, multimedia content, and related informational services for public access and lawful use. 
          Users agree to use the platform responsibly and in compliance with applicable laws and regulations.
        </p>
        <p style={{ marginTop: '1rem' }}>You may not use the platform to:</p>
        <ul>
          <li>Engage in unlawful activity</li>
          <li>Distribute malicious software</li>
          <li>Attempt unauthorized access</li>
          <li>Disrupt platform operations</li>
          <li>Post abusive, defamatory, or harmful content</li>
          <li>Impersonate individuals or organizations</li>
          <li>Violate intellectual property rights</li>
          <li>Interfere with platform security systems</li>
        </ul>
        <p>We reserve the right to restrict or terminate access for violations of these terms.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Intellectual Property</h2>
        <p>
          Unless otherwise stated, content published on The People’s Platform — including articles, graphics, logos, branding, layouts, videos, images, and editorial materials — is protected by applicable intellectual property and copyright laws.
        </p>
        <p style={{ marginTop: '1rem' }}>Users may:</p>
        <ul>
          <li>View content for personal, non-commercial use</li>
          <li>Share links to publicly available articles</li>
          <li>Reference excerpts with proper attribution where legally permitted</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>Users may not:</p>
        <ul>
          <li>Reproduce full articles without permission</li>
          <li>Republish content commercially without authorization</li>
          <li>Scrape or mass-copy content</li>
          <li>Remove copyright or attribution notices</li>
          <li>Use platform branding without consent</li>
        </ul>
        <p>Third-party materials remain the property of their respective owners.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Content & Accuracy</h2>
        <p>The People’s Platform strives to publish accurate and responsible journalism. However:</p>
        <ul>
          <li>News developments may evolve over time</li>
          <li>Information may change after publication</li>
          <li>Opinions expressed belong to their respective authors</li>
          <li>We do not guarantee absolute completeness or uninterrupted accuracy</li>
        </ul>
        <p>
          Content is provided for informational purposes only and should not be interpreted as professional legal, financial, medical, or governmental advice. 
          Users are encouraged to independently verify critical information where necessary.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>User Submissions</h2>
        <p>
          Users may submit news tips, comments, inquiries, feedback, story suggestions, and editorial communications. 
          By submitting content to the platform, users represent that:
        </p>
        <ul>
          <li>They have the right to share the material</li>
          <li>The submission does not violate laws or rights</li>
          <li>The submission is not fraudulent or misleading</li>
        </ul>
        <p>We reserve the right to review, edit, reject, or remove submissions at our discretion.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>External Links & Third-Party Content</h2>
        <p>
          The platform may include links to external websites, services, advertisements, or embedded third-party content. 
          We do not control or guarantee:
        </p>
        <ul>
          <li>External content accuracy</li>
          <li>Third-party privacy practices</li>
          <li>External website availability</li>
          <li>Third-party services or products</li>
        </ul>
        <p>Accessing third-party services is done at the user’s discretion and risk.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Advertising & Sponsored Content</h2>
        <p>
          The People’s Platform may publish advertisements, sponsored content, promotional materials, and affiliate partnerships. 
          Sponsored or promotional content will be identified appropriately where applicable. 
          Advertising relationships do not determine newsroom editorial decisions.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Platform Availability</h2>
        <p>We work to maintain reliable access to the platform; however, we do not guarantee:</p>
        <ul>
          <li>Uninterrupted availability</li>
          <li>Error-free operation</li>
          <li>Permanent content accessibility</li>
          <li>Compatibility across all devices or browsers</li>
        </ul>
        <p>We reserve the right to modify features, suspend services, perform maintenance, or update functionality without prior notice where necessary.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Disclaimer of Warranties</h2>
        <p>The platform and all content are provided on an “as is” and “as available” basis.</p>
        <p style={{ marginTop: '1rem' }}>To the fullest extent permitted by law, The People’s Platform disclaims warranties relating to:</p>
        <ul>
          <li>Accuracy, reliability, and availability</li>
          <li>Merchantability and fitness for a particular purpose</li>
          <li>Non-infringement</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, The People’s Platform shall not be liable for:</p>
        <ul>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Data loss or business interruption</li>
          <li>Reliance on published information</li>
          <li>Third-party conduct or services</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Privacy</h2>
        <p>
          Use of the platform is also governed by our <Link href="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</Link>, which explains how information may be collected and processed. 
          Users are encouraged to review the Privacy Policy separately.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Changes to These Terms</h2>
        <p>
          We may update or modify these Terms of Service periodically to reflect operational changes, legal requirements, or editorial developments. 
          Updated versions will be published on this page. 
          Continued use of the platform after updates constitutes acceptance of revised terms.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Governing Principles</h2>
        <p>These Terms are intended to support:</p>
        <ul>
          <li>Responsible platform use</li>
          <li>Editorial integrity</li>
          <li>Lawful digital publishing</li>
          <li>Transparency and public trust</li>
        </ul>
        <p>Nothing within these terms shall override applicable consumer protection or legal rights where required by law.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Contact Information</h2>
        <p>
          For questions regarding these Terms of Service, users may contact The People’s Platform through the official <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link>.
        </p>
      </section>

      <footer className="mt-16 text-center text-muted" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
        The People’s Platform remains committed to maintaining a secure, transparent, and responsible digital media environment for readers, contributors, partners, and the wider public.
      </footer>
    </div>
  );
}
