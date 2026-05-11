export default function AboutPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="article-title">About The People's Platform</h1>
        <p className="article-subheadline">Independent. Unbiased. Essential.</p>
      </header>

      <section className="policy-section">
        <h2>Our History</h2>
        <p>
          Founded with a vision to redefine digital journalism in the 21st century, The People's Platform 
          has emerged as a leading voice for independent news and analysis. We started as a small team 
          of dedicated journalists who believed that the public deserved news free from corporate 
          influence and political bias.
        </p>
      </section>

      <section className="policy-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple yet profound: to provide the people with the facts they need to make 
          informed decisions about their lives, their communities, and their governments. We believe 
          that a well-informed citizenry is the bedrock of a healthy society.
        </p>
      </section>

      <section className="policy-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We are committed to the highest ethical standards in all our reporting.</li>
          <li><strong>Accuracy:</strong> We strive for perfect accuracy in every story we publish.</li>
          <li><strong>Independence:</strong> Our editorial decisions are made solely by our editorial team.</li>
          <li><strong>Transparency:</strong> We are open about our processes, our sources, and our mistakes.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Editorial Independence</h2>
        <p>
          The People's Platform maintains a strict wall between our editorial operations and our business 
          functions. No advertiser, donor, or external organization has any influence over our coverage.
        </p>
      </section>
    </div>
  );
}
