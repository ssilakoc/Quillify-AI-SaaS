const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="22" height="22">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.15)',
    title: '50+ Content Templates',
    desc: 'Blog posts, ad copy, product descriptions, email sequences — every format you need, ready to go.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="22" height="22">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    color: '#34d399',
    glow: 'rgba(52,211,153,0.10)',
    border: 'rgba(52,211,153,0.15)',
    title: '30+ Languages',
    desc: 'Write directly in your target language or translate existing content in a single click.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="22" height="22">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.10)',
    border: 'rgba(251,146,60,0.15)',
    title: 'Instant Generation',
    desc: 'Average output time under 1.5 seconds. No queues, no waiting, just results.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="22" height="22">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.10)',
    border: 'rgba(56,189,248,0.15)',
    title: 'SEO Optimized',
    desc: 'Keyword density analysis and meta description suggestions built right into the editor.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="22" height="22">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.10)',
    border: 'rgba(192,132,252,0.15)',
    title: 'Team Collaboration',
    desc: 'Share drafts, leave comments, and ship content together without leaving the platform.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.10)',
    border: 'rgba(244,114,182,0.15)',
    title: 'Content Calendar',
    desc: 'Plan, schedule, and publish. Everything in one place so nothing slips through the cracks.',
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: 'clamp(80px, 10vw, 130px) clamp(20px, 5vw, 64px)', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c3aed', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)', padding: '5px 16px', borderRadius: 100, marginBottom: 20 }}>
            Features
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16 }}>
            Everything you need to{' '}
            <span className="gradient-text">write better</span>
          </h2>
          <p style={{ fontSize: 16, color: '#6b6b80', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
            One platform that covers the entire content workflow — from ideation to publishing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-glass"
              style={{ borderRadius: 18, padding: '28px 26px', transition: 'all 0.3s ease', cursor: 'default' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = f.border;
                e.currentTarget.style.background = f.glow;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 12, background: f.glow, border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, marginBottom: 20 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f0f5', marginBottom: 10, letterSpacing: '-0.2px' }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: '#5a5a70', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
