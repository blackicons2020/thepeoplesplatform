export default function AdBanner() {
  return (
    <div className="ad-banner-wrapper" style={{ margin: '2rem 0', width: '100%' }}>
      <div 
        style={{
          background: 'var(--bg-offset)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: '1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <span 
          style={{
            display: 'block',
            fontSize: '0.65rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.5rem'
          }}
        >
          - Sponsored Advertisement -
        </span>
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80px',
            color: 'var(--text-muted)',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}
        >
          <p>Your Banner Ad Here &bull; <a href="/advertise" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Advertise with us</a></p>
        </div>
      </div>
    </div>
  );
}
