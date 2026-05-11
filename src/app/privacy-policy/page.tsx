export default function PrivacyPolicy() {
  const SITE_NAME = "The People's Platform";

  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12">
        <h1 className="article-title">Privacy Policy</h1>
        <p className="article-subheadline">Last Updated: May 2024</p>
      </header>

      <section className="policy-section">
        <p>
          At {SITE_NAME}, we take your privacy seriously. This policy explains how we collect, 
          use, and protect your personal information when you visit our website.
        </p>
      </section>

      <section className="policy-section">
        <h2>Information We Collect</h2>
        <p>
          We collect information that helps us provide a better experience for our readers:
        </p>
        <ul>
          <li><strong>Usage Data:</strong> Information about how you interact with our site (e.g., pages visited, time spent).</li>
          <li><strong>Device Information:</strong> Your IP address, browser type, and operating system.</li>
          <li><strong>Subscription Data:</strong> If you sign up for our newsletter, we collect your email address.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>How We Use Your Data</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>Provide and maintain our news services.</li>
          <li>Send you newsletters and updates if you have opted in.</li>
          <li>Analyze site usage to improve our content and performance.</li>
          <li>Detect and prevent fraudulent or illegal activity.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies to personalize content and ads, and to analyze our traffic. You can 
          control cookie settings through your browser.
        </p>
      </section>

      <section className="policy-section">
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services (like Google Analytics or payment processors) that 
          collect data according to their own privacy policies.
        </p>
      </section>

      <section className="policy-section">
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. To exercise these 
          rights, please contact us at <strong>privacy@thepeoplesplatform.online</strong>.
        </p>
      </section>
    </div>
  );
}
