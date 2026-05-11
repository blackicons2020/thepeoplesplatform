export default function CorrectionsPolicy() {
  return (
    <div className="container py-16 max-w-4xl">
      <header className="mb-12">
        <h1 className="article-title">Corrections & Transparency Policy</h1>
        <p className="article-subheadline">Our commitment to getting the story right.</p>
      </header>

      <section className="policy-section">
        <h2>Accuracy and Integrity</h2>
        <p>
          While we strive for 100% accuracy, errors can occur in the fast-paced world of digital 
          publishing. When we make a mistake, our policy is to correct it as quickly as possible 
          and to be fully transparent with our readers about what was changed and why.
        </p>
      </section>

      <section className="policy-section">
        <h2>How We Correct Errors</h2>
        <p>
          If an error is found in a published article, we will:
        </p>
        <ul>
          <li><strong>Update the Article:</strong> The text will be corrected immediately.</li>
          <li><strong>Add a Correction Note:</strong> A clear note will be added to the top or bottom 
          of the article explaining the error and when it was corrected.</li>
          <li><strong>Archive the Error:</strong> We maintain a record of significant corrections for 
          accountability.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Reporting an Error</h2>
        <p>
          If you believe you have found a factual error in our reporting, please contact us 
          immediately at: <strong>corrections@thepeoplesplatform.online</strong>. Please 
          include the URL of the article and a description of the error.
        </p>
      </section>

      <section className="policy-section">
        <h2>Clarifications</h2>
        <p>
          Sometimes an article is factually correct but requires additional context to avoid 
          misinterpretation. In such cases, we may issue a "Clarification" instead of a 
          "Correction." These are also clearly labeled on the article page.
        </p>
      </section>
    </div>
  );
}
