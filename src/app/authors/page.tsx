import Link from 'next/link';

export default function AuthorsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Authors & Editorial Team</h1>
        <p className="article-subheadline" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>The Journalists Behind The People’s Platform</p>
      </header>

      <section className="policy-section">
        <p>
          The People’s Platform is powered by a growing network of editors, reporters, contributors, analysts, researchers, and digital media professionals committed to responsible journalism and public-interest reporting.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our editorial team works across multiple coverage areas to deliver timely, accurate, and contextual reporting on issues shaping society, governance, business, technology, culture, security, and global affairs.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We believe credible journalism begins with accountable reporting and transparent editorial practices.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Team Structure</h2>
        <p>Our newsroom operates through a collaborative editorial structure that includes:</p>
        <ul>
          <li>Editors</li>
          <li>Staff Reporters</li>
          <li>Correspondents</li>
          <li>Contributors</li>
          <li>Opinion Writers</li>
          <li>Analysts</li>
          <li>Multimedia Producers</li>
          <li>Research & Digital Publishing Teams</li>
        </ul>
        <p>Each contributor is expected to follow our Editorial Policy, ethical publishing standards, and newsroom verification procedures.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Areas of Coverage</h2>
        <p>Our authors contribute across a wide range of reporting categories, including:</p>
        <ul>
          <li>Politics & Governance</li>
          <li>Business & Economy</li>
          <li>Technology & Innovation</li>
          <li>Security & Public Affairs</li>
          <li>Metro & Community News</li>
          <li>Sports</li>
          <li>Entertainment & Culture</li>
          <li>International Affairs</li>
          <li>Human Interest Stories</li>
          <li>Opinion & Editorial Analysis</li>
        </ul>
        <p>This multi-disciplinary approach helps ensure balanced and comprehensive coverage for our audience.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Standards for Contributors</h2>
        <p>All editorial contributors are expected to:</p>
        <ul>
          <li>Maintain factual accuracy</li>
          <li>Verify information responsibly</li>
          <li>Avoid plagiarism</li>
          <li>Disclose conflicts of interest where applicable</li>
          <li>Uphold professional journalism ethics</li>
          <li>Follow newsroom correction standards</li>
          <li>Distinguish news from opinion</li>
        </ul>
        <p>Contributors who violate editorial standards may have content reviewed, corrected, or removed in accordance with our newsroom policies.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Transparency & Accountability</h2>
        <p>The People’s Platform values transparency in journalism and newsroom operations. Our editorial team is committed to:</p>
        <ul>
          <li>Responsible reporting</li>
          <li>Source verification</li>
          <li>Ethical storytelling</li>
          <li>Public accountability</li>
          <li>Editorial independence</li>
        </ul>
        <p>
          Where corrections or updates are necessary, they are handled according to our <Link href="/corrections-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Corrections & Transparency Policy</Link>.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Contributor Recognition</h2>
        <p>Some articles may be published under individual reporter names, editorial desk bylines, newsroom staff identifiers, or collaborative reporting teams.</p>
        <p style={{ marginTop: '1rem' }}>This may occur for:</p>
        <ul>
          <li>Breaking news coverage</li>
          <li>Newsroom collaborations</li>
          <li>Investigative teams</li>
          <li>Editorial summaries</li>
          <li>Aggregated field reporting</li>
        </ul>
        <p>All published content remains subject to editorial oversight.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Interested in Contributing?</h2>
        <p>
          Qualified journalists, contributors, analysts, and guest writers who share our commitment to responsible journalism may contact the editorial team regarding potential collaborations or submissions.
        </p>
        <p style={{ marginTop: '1rem' }}>We welcome:</p>
        <ul>
          <li>Original reporting</li>
          <li>Investigative work</li>
          <li>Expert commentary</li>
          <li>Opinion contributions</li>
          <li>Verified story tips</li>
        </ul>
        <p>
          All submissions are subject to editorial review and publishing standards. Please visit our <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link> for submission inquiries.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Building Trust Through Journalism</h2>
        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', maxWidth: '800px', margin: '1rem auto' }}>
          "At The People’s Platform, we believe trustworthy journalism is built by real people committed to truth, accountability, fairness, and public service. 
          Our newsroom remains dedicated to informing readers through credible reporting, transparent editorial practices, and responsible digital publishing."
        </p>
      </section>
    </div>
  );
}
