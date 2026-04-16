const LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Security'],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 64px) 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)', bottom: 0, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 60 }} className="footer-grid">

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(124,58,237,0.35)' }}>
                <svg viewBox="0 0 24 24" fill="white" width="15" height="15"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: 16, color: '#f1f0f5', letterSpacing: '-0.3px' }}>Quillify</span>
            </div>
            <p style={{ fontSize: 13.5, color: '#4a4a5a', lineHeight: 1.75, maxWidth: 240, marginBottom: 24 }}>
              The AI writing platform trusted by 14,000+ creators, marketers, and teams worldwide.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
                <div
                  key={s}
                  style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 11, color: '#4a4a5a', fontWeight: 600, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.color = '#a78bfa'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#4a4a5a'; }}
                >
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f1f0f5', marginBottom: 20 }}>{title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontSize: 13.5, color: '#4a4a5a', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#a78bfa'}
                      onMouseLeave={e => e.target.style.color = '#4a4a5a'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12.5, color: '#2e2e40' }}>© 2026 Quillify, Inc. All rights reserved.</span>
          <span style={{ fontSize: 12.5, color: '#2e2e40' }}>Made with love for creators everywhere.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
