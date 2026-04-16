import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(20px, 5vw, 64px)',
        background: scrolled ? 'rgba(3,3,5,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}>
            <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px', color: '#f1f0f5' }}>Quillify</span>
        </div>

        <div style={{ display: 'flex', gap: 36 }} className="hidden md:flex">
          {['Features', 'Pricing', 'Blog', 'Docs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: '#6b6b80', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f1f0f5'}
              onMouseLeave={e => e.target.style.color = '#6b6b80'}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#6b6b80', fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: '8px 16px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#f1f0f5'}
            onMouseLeave={e => e.target.style.color = '#6b6b80'}
          >
            Log in
          </button>
          <button style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: '9px 20px', borderRadius: 10, transition: 'opacity 0.2s, transform 0.2s', boxShadow: '0 0 24px rgba(124,58,237,0.35)' }}
            onMouseEnter={e => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }}
          >
            Get started free
          </button>
        </div>
      </div>
    </nav>
  );
}
