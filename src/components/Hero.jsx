import { useState, useEffect } from 'react';

const WORDS = ['blog posts', 'ad copy', 'social content', 'email campaigns', 'product descriptions'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = WORDS[wordIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 55);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 28);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % WORDS.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section style={{ paddingTop: 'clamp(120px, 16vw, 180px)', paddingBottom: 80, paddingLeft: 'clamp(20px, 5vw, 64px)', paddingRight: 'clamp(20px, 5vw, 64px)', textAlign: 'center', position: 'relative' }}>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa', fontSize: 13, fontWeight: 500, padding: '6px 16px', borderRadius: 100, marginBottom: 32 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', display: 'inline-block', animation: 'blink 2s ease infinite' }} />
        Now with GPT-4o — write smarter, not harder
      </div>

      <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-2px', marginBottom: 28, maxWidth: 860, margin: '0 auto 28px' }}>
        Write{' '}
        <span className="gradient-text">
          {displayed}
          <span className="animate-blink" style={{ display: 'inline-block', width: 3, height: '0.85em', background: '#7c3aed', marginLeft: 2, verticalAlign: 'text-bottom', borderRadius: 2 }} />
        </span>
        <br />
        10x faster with AI
      </h1>

      <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#6b6b80', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 44px', fontWeight: 400 }}>
        From blank page to publish-ready content in seconds. Quillify handles the writing so you can focus on the strategy.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
        <button
          style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: 'pointer', boxShadow: '0 0 40px rgba(124,58,237,0.35)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(124,58,237,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.35)'; }}
        >
          Start writing for free
        </button>
        <button
          style={{ background: 'rgba(255,255,255,0.04)', color: '#c4b5fd', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
        {[['14K+', 'Active users'], ['4.9M', 'Words written'], ['4.8 ★', 'Average rating']].map(([num, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f1f0f5', letterSpacing: '-0.5px' }}>{num}</div>
            <div style={{ fontSize: 12, color: '#4a4a5a', marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: '80px auto 0', position: 'relative' }} className="animate-float">
        <div style={{ background: 'rgba(13,10,28,0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.08)' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
            {['#ff5f57', '#febc2e', '#28c840'].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.8 }} />
            ))}
            <span style={{ fontSize: 12, color: '#3a3a50', marginLeft: 8 }}>quillify.ai — Content Generator</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ padding: 28, borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3a3a50', marginBottom: 10, fontWeight: 600 }}>Prompt</div>
              <div style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: 10, padding: '12px 14px', fontSize: 13.5, color: '#8b85a8', lineHeight: 1.65, minHeight: 80 }}>
                Write a compelling LinkedIn post about why remote work increases developer productivity...
              </div>
              <div style={{ marginTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Professional', 'Casual', 'Witty'].map(t => (
                  <span key={t} style={{ background: t === 'Professional' ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)', border: t === 'Professional' ? '1px solid rgba(124,58,237,0.35)' : '1px solid rgba(255,255,255,0.08)', color: t === 'Professional' ? '#c4b5fd' : '#4a4a5a', fontSize: 12, padding: '4px 12px', borderRadius: 8, cursor: 'pointer' }}>{t}</span>
                ))}
              </div>
              <button style={{ width: '100%', marginTop: 16, padding: '10px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', color: '#fff', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                Generate →
              </button>
            </div>

            <div style={{ padding: 28, background: 'rgba(0,0,0,0.2)' }}>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3a3a50', marginBottom: 14, fontWeight: 600 }}>Output</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[92, 78, 95, 65, 88, 72, 55, 82, 68].map((w, i) => (
                  <div key={i} className="shimmer" style={{ height: 11, width: `${w}%`, borderRadius: 6, animationDelay: `${i * 0.12}s` }} />
                ))}
              </div>
              <div style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399', fontSize: 11, padding: '5px 12px', borderRadius: 20, fontWeight: 600 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="10" height="10"><polyline points="20 6 9 17 4 12" /></svg>
                312 words · generated in 1.1s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
