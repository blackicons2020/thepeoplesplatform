export default function EditorialPolicy() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12">
        <h1 className="article-title">Editorial Policy & Standards</h1>
        <p className="article-subheadline">The principles that guide our journalism.</p>
      </header>

      <section className="policy-section">
        <h2>1. Fact-Checking Standards</h2>
        <p>
          Accuracy is our highest priority. Every report published by The People's Platform undergoes 
          a multi-stage verification process. Our journalists are required to cross-reference all 
          factual claims with at least two independent sources. For sensitive reporting, primary 
          documentation or direct recordings are mandatory.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Sourcing and Attribution</h2>
        <p>
          We strive for maximum transparency regarding our sources. We identify our sources by name 
          whenever possible. If a source requests anonymity, we only grant it if the information 
          is vital to the public interest and cannot be obtained elsewhere. We always explain 
          to our readers the reason for granting anonymity.
        </p>
      </section>

      <section className="policy-section">
        <h2>3. Neutrality and Balance</h2>
        <p>
          Our news reporting is neutral and evidence-based. We do not take sides in political or 
          corporate disputes. We make every effort to reach out to all parties mentioned in a story 
          for comment before publication. If a party declines to comment, we state that clearly 
          in the report.
        </p>
      </section>

      <section className="policy-section">
        <h2>4. Opinion vs. News</h2>
        <p>
          We maintain a clear distinction between news reporting and opinion pieces. All opinion 
          content is explicitly labeled as "Opinion," "Editorial," or "Commentary." Opinion 
          pieces do not represent the views of the newsroom.
        </p>
      </section>

      <section className="policy-section">
        <h2>5. Conflict of Interest</h2>
        <p>
          Our staff members are prohibited from accepting gifts, travel, or any form of compensation 
          from sources or organizations they cover. Any potential conflict of interest must be 
          disclosed to the Editorial Director and, where appropriate, to our readers.
        </p>
      </section>
    </div>
  );
}
