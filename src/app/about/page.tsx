import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>About The People’s Platform</h1>
        <p className="article-subheadline" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Independent Journalism for a New Generation</p>
      </header>

      <section className="policy-section">
        <p>
          The People’s Platform is an independent digital news and media organization committed to factual reporting, public-interest journalism, and responsible storytelling in the digital age.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Founded with the vision of creating a credible and people-focused media platform, The People’s Platform delivers timely coverage of politics, governance, business, technology, society, culture, security, entertainment, and global affairs through accurate, balanced, and accessible journalism.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We believe journalism should inform, educate, and empower the public while maintaining editorial independence, transparency, and integrity.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide reliable, unbiased, and impactful journalism that helps citizens stay informed about the issues shaping their communities, nation, and the world.
        </p>
        <p style={{ marginTop: '1rem' }}>We are committed to:</p>
        <ul>
          <li>Factual and evidence-based reporting</li>
          <li>Editorial fairness and balance</li>
          <li>Accountability journalism</li>
          <li>Public-interest reporting</li>
          <li>Transparency and ethical publishing standards</li>
          <li>Responsible digital media practices</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>What We Cover</h2>
        <p>
          The People’s Platform publishes a wide range of news and analysis across multiple sectors, including:
        </p>
        <ul>
          <li>Politics & Governance</li>
          <li>Business & Economy</li>
          <li>Technology & Innovation</li>
          <li>Security & Public Affairs</li>
          <li>Metro & Community News</li>
          <li>Entertainment & Culture</li>
          <li>Sports</li>
          <li>International Affairs</li>
          <li>Human Interest Stories</li>
          <li>Investigative Reports</li>
          <li>Opinion & Editorial Analysis</li>
        </ul>
        <p>
          Our editorial team works to ensure that stories are presented with context, clarity, and relevance to readers locally and globally.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Standards</h2>
        <p>
          At The People’s Platform, editorial credibility is central to our operations. 
          All content published on our platform undergoes editorial review processes designed to ensure:
        </p>
        <ul>
          <li>Factual accuracy</li>
          <li>Source verification</li>
          <li>Fairness and balance</li>
          <li>Responsible headline writing</li>
          <li>Correction of verified errors</li>
          <li>Compliance with ethical journalism standards</li>
        </ul>
        <p>
          Where corrections or updates are necessary, we clearly communicate them in accordance with our <Link href="/corrections-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Corrections Policy</Link>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          We do not knowingly publish misinformation, fabricated stories, manipulated media, or deceptive content.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Independence & Transparency</h2>
        <p>
          The People’s Platform operates independently and maintains editorial autonomy in its newsroom operations. 
          Our editorial decisions are guided by journalistic principles and public-interest considerations, not political, religious, or corporate influence.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Sponsored or promotional content, where applicable, is clearly labeled to distinguish it from editorial reporting.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Digital-First Newsroom</h2>
        <p>
          As a modern digital-first publication, we leverage technology, data-driven publishing systems, and scalable media infrastructure to deliver fast, accessible, and mobile-friendly news experiences to readers across devices and platforms.
        </p>
        <p style={{ marginTop: '1rem' }}>Our platform is optimized for:</p>
        <ul>
          <li>Mobile accessibility</li>
          <li>Search visibility</li>
          <li>Structured news publishing</li>
          <li>Accessibility standards</li>
          <li>Secure browsing</li>
          <li>Responsible content distribution</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Our Editorial Team</h2>
        <p>
          The People’s Platform is powered by a growing network of editors, reporters, contributors, analysts, and digital media professionals committed to quality journalism and audience trust.
        </p>
        <p style={{ marginTop: '1rem' }}>Our newsroom prioritizes:</p>
        <ul>
          <li>Originality</li>
          <li>Contextual reporting</li>
          <li>Source credibility</li>
          <li>Reader trust</li>
          <li>Public accountability</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Reader Engagement</h2>
        <p>
          We value our readers and encourage responsible public engagement. Readers may:
        </p>
        <ul>
          <li>Submit news tips</li>
          <li>Request corrections</li>
          <li>Contact the editorial team</li>
          <li>Submit feedback</li>
          <li>Report factual concerns</li>
        </ul>
        <p>
          Our goal is to maintain an open, transparent, and accountable relationship with our audience.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Contact Us</h2>
        <p>
          For editorial inquiries, corrections, partnerships, advertising, or media communications, please visit our <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link> or reach out through our official communication channels.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem' }}>The Future of Independent Media</h2>
        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', maxWidth: '800px', margin: '1rem auto' }}>
          "The People’s Platform was built on the belief that trustworthy journalism remains essential in every democratic society. 
          As the media landscape continues to evolve, we remain committed to building a credible, responsible, and forward-looking news organization that informs the public with integrity, professionalism, and purpose."
        </p>
      </section>
    </div>
  );
}
