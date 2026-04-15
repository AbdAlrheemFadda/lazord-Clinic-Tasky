import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="pricing-section container">
      <div className="section-header">
        <span className="section-tag">ط§ظ„طھط³ط¹ظٹط±</span>
        <h2>ط®ط·ط· ظ…ط±ظ†ط© ظ„ظ…ظ…ط§ط±ط³طھظƒ</h2>
        <p>ظ†ط­ظ† ظ†ظ‚ط¯ظ… ط´ظپط§ظپظٹط© طھط§ظ…ط© ظپظٹ ط§ظ„ط£ط³ط¹ط§ط± ظ…ط¹ ط®ظٹط§ط±ط§طھ طھظ†ط§ط³ط¨ ط¬ظ…ظٹط¹ ط£ط­ط¬ط§ظ… ط§ظ„ط¹ظٹط§ط¯ط§طھ.</p>
      </div>

      <div className="about-grid">
        {/* Free Plan */}
        <div className="pricing-card glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h3>ط§ظ„ط®ظٹط§ط± ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…ط¬ط§ظ†ظٹ</h3>
          <div style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--accent-cyan)' }}>$0</div>
          <p style={{ marginBottom: '20px' }}>ط§ط­طµظ„ ط¹ظ„ظ‰ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¯ط§ط®ظ„ ط§ظ„ظپظ… ظ…ط¬ط§ظ†ظ‹ط§ ط¹ظ†ط¯ ط§ظ„ط¨ط¯ط، ط¨ط§ظ„ط¹ظ…ظ„ ظ…ط¹ ظ…ط®طھط¨ط±ظ†ط§.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '10px' }}>âœ“ ظ…ط§ط³ط­ ط¶ظˆط¦ظٹ 3Shape TRIOS</li>
            <li style={{ marginBottom: '10px' }}>âœ“ طھط¯ط±ظٹط¨ ط؛ظٹط± ظ…ط­ط¯ظˆط¯ ظ„ظ„ظپط±ظٹظ‚</li>
            <li style={{ marginBottom: '10px' }}>âœ“ ط¯ط¹ظ… ظپظ†ظٹ ط¹ظ„ظ‰ ظ…ط¯ط§ط± ط§ظ„ط³ط§ط¹ط©</li>
          </ul>
          <button className="btn-primary">ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†</button>
        </div>

        {/* Featured Plan â€” fixed: added position:relative so the badge positions correctly */}
        <div
          className="pricing-card glass-panel"
          style={{
            padding: '40px',
            textAlign: 'center',
            borderColor: 'var(--accent-cyan)',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--accent-cyan)',
            color: '#0A1922',
            padding: '4px 14px',
            borderRadius: '12px',
            fontSize: '0.78rem',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
          }}>
            ط§ظ„ط£ظƒط«ط± ط·ظ„ط¨ظ‹ط§
          </div>
          <h3 style={{ marginTop: '20px' }}>طھظٹط¬ط§ظ† ط§ظ„ط²ط±ظƒظˆظ†ظٹط§</h3>
          <div style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--accent-cyan)' }}>طھظˆط§طµظ„ ظ…ط¹ظ†ط§</div>
          <p style={{ marginBottom: '20px' }}>ط¬ظˆط¯ط© ظپط§ط¦ظ‚ط© ظپظٹ 5 ط£ظٹط§ظ… ظپظ‚ط· ظ…ط¹ ط¶ظ…ط§ظ† ط§ظ„ظ…ظ„ط§ط،ظ…ط© ط§ظ„طھط§ظ…ط©.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '10px' }}>âœ“ طھط³ظ„ظٹظ… ظپظٹ 5 ط£ظٹط§ظ…</li>
            <li style={{ marginBottom: '10px' }}>âœ“ طھطµظ…ظٹظ… ط±ظ‚ظ…ظٹ ط¯ظ‚ظٹظ‚</li>
            <li style={{ marginBottom: '10px' }}>âœ“ طھظˆط§طµظ„ ظ…ط¨ط§ط´ط± ظ…ط¹ ط§ظ„ظپظ†ظٹ</li>
          </ul>
          <button className="btn-primary">ط§ط·ظ„ط¨ ط¹ط±ط¶ ط³ط¹ط±</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h3>ط§ظ„ط­ظ„ظˆظ„ ط§ظ„ظƒط§ظ…ظ„ط©</h3>
          <div style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--accent-cyan)' }}>ظ…ط®طµطµ</div>
          <p style={{ marginBottom: '20px' }}>ط­ظ„ظˆظ„ ظ…طھظƒط§ظ…ظ„ط© ظ„ظ„ط¹ظٹط§ط¯ط§طھ ط§ظ„ظƒط¨ظٹط±ط© ظˆط§ظ„ظ…ط¬ظ…ط¹ط§طھ ط§ظ„ط·ط¨ظٹط©.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '10px' }}>âœ“ ط³ظٹط± ط¹ظ…ظ„ ط±ظ‚ظ…ظٹ ط¨ط§ظ„ظƒط§ظ…ظ„</li>
            <li style={{ marginBottom: '10px' }}>âœ“ طھظ‚ظٹظٹظ…ط§طھ ط­ط§ظ„ط© 5 ظ†ط¬ظˆظ…</li>
            <li style={{ marginBottom: '10px' }}>âœ“ ط¨ظˆط§ط¨ط© طھطھط¨ط¹ ط§ظ„ط­ط§ظ„ط§طھ</li>
          </ul>
          <button className="btn-secondary">طھط­ط¯ط« ظ…ط¹ ط®ط¨ظٹط±</button>
        </div>
      </div>
    </section>
  );
};
