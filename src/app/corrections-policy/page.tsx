import Link from 'next/link';

export default function CorrectionsPolicy() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Corrections & Transparency Policy</h1>
        <p className="article-subheadline" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>Our Commitment to Accuracy & Accountability</p>
      </header>

      <section className="policy-section">
        <p>
          At The People’s Platform, we are committed to maintaining the highest standards of accuracy, transparency, and editorial accountability.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Trust is essential to responsible journalism. While we strive to ensure that all published content is factual, verified, and carefully reviewed, we recognize that errors may occasionally occur in fast-moving digital news environments.
        </p>
        <p style={{ marginTop: '1rem' }}>
          When inaccuracies are identified, we are committed to correcting them responsibly, transparently, and promptly.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Transparency</h2>
        <p>The People’s Platform believes readers deserve clarity regarding:</p>
        <ul>
          <li>How content is produced</li>
          <li>How editorial decisions are made</li>
          <li>How corrections are handled</li>
          <li>How sponsored content is identified</li>
          <li>How newsroom standards are maintained</li>
        </ul>
        <p>We are committed to operating with openness, integrity, and public accountability across all editorial processes.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Our Fact-Checking Process</h2>
        <p>Before publication, stories may undergo:</p>
        <ul>
          <li>Editorial review</li>
          <li>Source verification</li>
          <li>Fact confirmation</li>
          <li>Headline review</li>
          <li>Contextual accuracy checks</li>
          <li>Legal or sensitivity review where necessary</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>We work to ensure reporting is fair, balanced, evidence-based, and responsibly presented. However, journalism is an evolving process, and updates may become necessary as new information emerges.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Corrections Policy</h2>
        <p>If factual errors are identified in published content, we may:</p>
        <ul>
          <li>Correct inaccurate information</li>
          <li>Clarify misleading wording</li>
          <li>Update developing reports</li>
          <li>Add editor’s notes where necessary</li>
          <li>Remove content in exceptional circumstances</li>
        </ul>
        <p>Corrections are handled based on the seriousness and nature of the issue.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Types of Corrections</h2>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>Minor Corrections</h3>
        <p>Minor issues such as spelling errors, formatting mistakes, grammatical issues, or non-material wording updates may be corrected without a formal correction notice if they do not materially affect the meaning of the story.</p>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>Significant Corrections</h3>
        <p>Errors involving factual inaccuracies, names, dates, quotes, locations, statistics, misleading context, or reporting errors may receive:</p>
        <ul>
          <li>Visible correction notes</li>
          <li>Editorial updates</li>
          <li>Clarification notices</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Developing News Updates</h2>
        <p>
          Breaking news stories may evolve rapidly as additional verified information becomes available. In such cases:
        </p>
        <ul>
          <li>Headlines may be updated</li>
          <li>Details may be clarified</li>
          <li>Timelines may change</li>
          <li>Contextual information may be expanded</li>
        </ul>
        <p>We aim to clearly reflect major updates within articles where necessary.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Reader Correction Requests</h2>
        <p>We encourage readers to report factual concerns or possible inaccuracies. Requests should include:</p>
        <ul>
          <li>Article title or link</li>
          <li>Description of the issue</li>
          <li>Supporting evidence or clarification where possible</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Our editorial team reviews submitted concerns in accordance with newsroom standards and editorial judgment. Submission of a request does not automatically guarantee content modification.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Opinion & Commentary Transparency</h2>
        <p>
          Opinion articles, editorials, and analysis pieces are clearly identified to distinguish them from factual news reporting. 
          Views expressed in commentary content belong to their respective authors and do not necessarily represent the editorial position of The People’s Platform.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Sponsored & Promotional Content</h2>
        <p>
          Sponsored, branded, or promotional materials are clearly labeled to distinguish them from independent editorial journalism. 
          Advertising relationships do not determine editorial coverage, newsroom decisions, or factual reporting standards.
        </p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>AI-Assisted Publishing Transparency</h2>
        <p>
          The People’s Platform may use digital tools and technology-assisted workflows to support newsroom operations, formatting, and productivity. However:
        </p>
        <ul>
          <li>Editorial oversight remains human-led</li>
          <li>Factual verification remains mandatory</li>
          <li>Deceptive synthetic content is prohibited</li>
          <li>Manipulated media intended to mislead readers is not permitted</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Content Removal Policy</h2>
        <p>In rare circumstances, content may be removed or substantially modified due to:</p>
        <ul>
          <li>Legal obligations or court orders</li>
          <li>Verified misinformation</li>
          <li>Safety concerns or privacy issues</li>
          <li>Ethical considerations</li>
        </ul>
        <p>Where appropriate, transparency notes may be added explaining significant editorial actions.</p>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Editorial Independence</h2>
        <p>The People’s Platform maintains editorial independence from political organizations, advertisers, sponsors, and external pressure groups. Editorial decisions are guided by:</p>
        <ul>
          <li>Public interest</li>
          <li>Journalistic ethics</li>
          <li>Factual relevance</li>
          <li>Responsible reporting standards</li>
        </ul>
      </section>

      <hr style={{ margin: '3rem 0', border: '0', borderTop: '1px solid var(--border)' }} />

      <section className="policy-section">
        <h2>Contacting the Editorial Team</h2>
        <p>
          Readers wishing to request corrections, report factual concerns, or raise transparency questions may contact The People’s Platform through our official <Link href="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Contact page</Link>.
        </p>
      </section>

      <footer className="mt-16 text-center text-muted" style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
        The People’s Platform remains committed to responsible journalism, transparent editorial practices, and public accountability in the digital era.
      </footer>
    </div>
  );
}
