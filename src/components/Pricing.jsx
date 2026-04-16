const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'Perfect for trying things out.',
    features: ['10,000 words / month', '15 templates', '5 languages', 'Basic editor'],
    cta: 'Get started free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    desc: 'For creators and solo marketers.',
    features: ['Unlimited words', '50+ templates', '30 languages', 'SEO toolkit', 'Priority support', 'Brand voice training'],
    cta: 'Start Pro trial',
    featured: true,
  },
  {
    name: 'Team',
    price: '$99',
    desc: 'Built for agencies and growing teams.',
    features: ['Everything in Pro', '5 team seats', 'Content calendar', 'API access', 'Custom AI models', 'Dedicated manager'],
    cta: 'Talk to sales',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(80px, 10vw, 130px) clamp(20px, 5vw, 64px)', position: 'relative' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7c3aed', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)', padding: '5px 16px', borderRadius: 100, marginBottom: 20 }}>
            Pricing
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16 }}>
            Simple,{' '}
            <span className="gradient-text">transparent</span>
            {' '}pricing
          </h2>
          <p style={{ fontSize: 16, color: '#6b6b80', maxWidth: 400, margin: '0 auto', lineHeight: 1.75 }}>
            Monthly or yearly billing. Cancel anytime — no questions asked.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: 22,
                padding: '32px 28px',
                position: 'relative',
                transition: 'transform 0.3s ease',
                ...(plan.featured
                  ? { background: 'linear-gradient(160deg, rgba(124,58,237,0.12), rgba(79,70,229,0.06))', border: '1px solid rgba(124,58,237,0.35)', boxShadow: '0 0 80px rgba(124,58,237,0.12)' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }),
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {plan.featured && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '5px 16px', borderRadius: 100, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}

              <div style={{ fontSize: 14, color: '#6b6b80', fontWeight: 500, marginBottom: 6 }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 6 }}>
                <span style={{ fontSize: 44, fontWeight: 800, color: '#f1f0f5', letterSpacing: '-2px', lineHeight: 1 }}>{plan.price}</span>
                <span style={{ fontSize: 14, color: '#4a4a5a', marginBottom: 6 }}>/month</span>
              </div>
              <div style={{ fontSize: 13, color: '#4a4a5a', marginBottom: 28, lineHeight: 1.6 }}>{plan.desc}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" width="9" height="9"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span style={{ fontSize: 13.5, color: '#8080a0' }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                style={{
                  width: '100%', padding: '12px', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                  ...(plan.featured
                    ? { background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#fff', boxShadow: '0 0 30px rgba(124,58,237,0.3)' }
                    : { background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#8080a0' }),
                }}
                onMouseEnter={e => {
                  if (plan.featured) { e.currentTarget.style.opacity = '0.88'; }
                  else { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.color = '#c4b5fd'; }
                }}
                onMouseLeave={e => {
                  if (plan.featured) { e.currentTarget.style.opacity = '1'; }
                  else { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#8080a0'; }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, fontSize: 13, color: '#3a3a50' }}>
          All plans include a 14-day free trial. No credit card required.
        </div>
      </div>
    </section>
  );
}
