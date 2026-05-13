import Link from 'next/link';

export default function EditorialPolicy() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Editorial Policy</h1>
        <p className="article-subheadline" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Our Commitment to Responsible Journalism</p>
      </header>

      <section className="policy-section">
        <p>
          The People’s Platform is committed to delivering accurate, fair, independent, and responsible journalism that serves the public interest.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our editorial operations are guided by principles of integrity, transparency, accountability, factual accuracy, and ethical reporting. We strive to uphold professional journalism standards in every story we publish.
        </p>
        <p style={{ marginTop: '1rem' }}>
          This Editorial Policy outlines the standards, principles, and processes that govern our newsroom and publishing practices.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Independence</h2>
        <p>
          The People’s Platform maintains full editorial independence in its newsroom operations.
        </p>
        <p style={{ marginTop: '1rem' }}>Editorial decisions are made based on:</p>
        <ul>
          <li>Public interest</li>
          <li>Newsworthiness</li>
          <li>Factual relevance</li>
          <li>Journalistic value</li>
          <li>Audience impact</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>Our reporting is not influenced by:</p>
        <ul>
          <li>Political interests</li>
          <li>Advertisers</li>
          <li>Sponsors</li>
          <li>External organizations</li>
          <li>Financial contributors</li>
          <li>Personal affiliations</li>
        </ul>
        <p>
          We are committed to ensuring that editorial content remains separate from advertising, sponsored content, or promotional materials.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Accuracy & Verification</h2>
        <p>Accuracy is central to our editorial process.</p>
        <p style={{ marginTop: '1rem' }}>Before publication, our editorial team works to:</p>
        <ul>
          <li>Verify facts through credible sources</li>
          <li>Cross-check information where possible</li>
          <li>Confirm quotations and statements</li>
          <li>Review claims for accuracy</li>
          <li>Avoid misleading headlines or context</li>
        </ul>
        <p>
          We aim to publish information that is reliable, balanced, and supported by verifiable evidence.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Where developing stories are still evolving, we clearly indicate when information is preliminary or subject to updates.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Sources & Attribution</h2>
        <p>We prioritize the use of:</p>
        <ul>
          <li>Official records</li>
          <li>Direct interviews</li>
          <li>Verified statements</li>
          <li>Credible public sources</li>
          <li>Reputable data sources</li>
        </ul>
        <p>Where appropriate, information is attributed clearly and transparently.</p>
        <p style={{ marginTop: '1rem' }}>Anonymous or confidential sources may occasionally be used when:</p>
        <ul>
          <li>There is a legitimate public-interest reason</li>
          <li>Disclosure may place the source at risk</li>
          <li>The information cannot reasonably be obtained otherwise</li>
        </ul>
        <p>Such cases undergo additional editorial review before publication.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Fairness & Balance</h2>
        <p>We strive to present stories fairly and responsibly.</p>
        <p style={{ marginTop: '1rem' }}>Our editorial process aims to:</p>
        <ul>
          <li>Provide context</li>
          <li>Avoid deliberate distortion</li>
          <li>Represent relevant perspectives</li>
          <li>Distinguish facts from opinion</li>
          <li>Avoid sensationalism</li>
        </ul>
        <p>
          Individuals or organizations who are the subject of significant allegations may be given an opportunity to respond where reasonably possible.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Opinion & Analysis</h2>
        <p>
          Opinion pieces, commentary, and analysis articles are clearly labeled to distinguish them from factual news reporting.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The views expressed in opinion articles belong to their respective authors and do not necessarily reflect the official position of The People’s Platform.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Corrections & Updates</h2>
        <p>We recognize the importance of accountability in journalism.</p>
        <p style={{ marginTop: '1rem' }}>If factual errors are identified, we are committed to:</p>
        <ul>
          <li>Reviewing correction requests promptly</li>
          <li>Updating inaccurate information where necessary</li>
          <li>Clarifying misleading content</li>
          <li>Publishing corrections transparently</li>
        </ul>
        <p>
          Corrections may be made directly within articles or through dedicated correction notices depending on the nature of the issue.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Readers may contact our editorial team to report factual concerns or request corrections.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>AI-Assisted & Digital Publishing Practices</h2>
        <p>
          The People’s Platform may use digital tools and technology-assisted workflows to support newsroom operations, content formatting, publishing efficiency, research, or editorial productivity.
        </p>
        <p style={{ marginTop: '1rem' }}>However:</p>
        <ul>
          <li>Editorial oversight remains human-led</li>
          <li>All published content is subject to editorial review</li>
          <li>Misleading synthetic or deceptive content is prohibited</li>
          <li>Manipulated media intended to misinform is not permitted</li>
        </ul>
        <p>
          We remain committed to responsible and ethical digital publishing practices.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Plagiarism & Originality</h2>
        <p>We maintain a strict policy against plagiarism and unauthorized reproduction of content.</p>
        <p style={{ marginTop: '1rem' }}>All contributors and editorial staff are expected to:</p>
        <ul>
          <li>Produce original work</li>
          <li>Properly attribute sourced materials</li>
          <li>Comply with copyright and fair-use standards</li>
          <li>Avoid deceptive or duplicated publishing practices</li>
        </ul>
        <p>Content found to violate these standards may be removed or corrected.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Sponsored & Promotional Content</h2>
        <p>
          Sponsored, branded, or promotional content is clearly identified to maintain transparency with readers.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Advertising relationships do not influence editorial coverage or newsroom decision-making. 
          We aim to ensure readers can clearly distinguish between editorial journalism, advertisements, sponsored partnerships, and promotional features.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Ethical Reporting Standards</h2>
        <p>The People’s Platform aims to uphold ethical journalism practices across all coverage areas.</p>
        <p style={{ marginTop: '1rem' }}>We seek to avoid:</p>
        <ul>
          <li>Hate speech</li>
          <li>Incitement</li>
          <li>Misinformation</li>
          <li>Fabricated reporting</li>
          <li>Discriminatory language</li>
          <li>Malicious defamation</li>
          <li>Manipulated context</li>
        </ul>
        <p>
          Coverage involving sensitive subjects is approached with care, accuracy, and public-interest consideration.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Reader Trust & Transparency</h2>
        <p>Trust is fundamental to our mission. We encourage:</p>
        <ul>
          <li>Reader feedback</li>
          <li>Accountability</li>
          <li>Constructive criticism</li>
          <li>Responsible public engagement</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>We remain committed to transparency regarding ownership, editorial standards, correction practices, advertising relationships, and newsroom policies.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Contact</h2>
        <p>
          For editorial inquiries, correction requests, or concerns regarding published content, readers may contact our editorial team through our official <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link>.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Policy Updates</h2>
        <p>
          This Editorial Policy may be updated periodically to reflect evolving newsroom standards, technological developments, or regulatory requirements. 
          Updated versions will be published on this page when changes occur.
        </p>
      </section>

      <footer className="mt-16 text-center text-muted" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
        The People’s Platform remains committed to responsible journalism, editorial integrity, and public-interest reporting in the digital era.
      </footer>
    </div>
  );
}
