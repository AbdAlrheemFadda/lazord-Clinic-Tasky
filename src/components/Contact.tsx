import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate a form service (Formspree / EmailJS) to handle submissions
    alert('ط´ظƒط±ط§ظ‹ ظ„ظƒ! ط³ظ†طھظˆط§طµظ„ ظ…ط¹ظƒ ظ‚ط±ظٹط¨ط§ظ‹.');
  };

  return (
    <section id="contact" ref={sectionRef} className="contact-section container">
      <div className="contact-content glass-panel" style={{ padding: '50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>طھظˆط§طµظ„ ظ…ط¹ظ†ط§</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            ظ‚ظ… ط¨طھط·ظˆظٹط± ظ…ظ…ط§ط±ط³ط§طھظƒ ظ…ط¹ ظ„ط§ط²ظˆط±ط¯ - ط§ظ„ط´ط±ظٹظƒ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظˆط­ظٹط¯ ط§ظ„ظ…طھظƒط§ظ…ظ„ ظˆظ‚ظ… ط¨طھط­ط³ظٹظ† طھط¬ط±ط¨ط© ط§ظ„ظ…ط±ظٹط¶ ظˆط§ظ„ط­ظ„ظˆظ„ ط§ظ„ط³ط±ظٹط±ظٹط© ظˆظ†ظ…ظˆ ط§ظ„ط£ط¹ظ…ط§ظ„.
          </p>
          <h3 style={{ marginTop: '20px', color: '#fff' }}>ط§ط¨ط¯ط£ ط§ظ„ظٹظˆظ… ط¹ظ† ط·ط±ظٹظ‚ ظ…ظ„ط، ط§ظ„ظ†ظ…ظˆط°ط¬.</h3>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <input type="text" placeholder="ط§ظ„ط§ط³ظ… ط§ظ„ط£ظˆظ„" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="text" placeholder="ط§ط³ظ… ط§ظ„ط¹ط§ط¦ظ„ط©" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="email" placeholder="ط¹ظ†ظˆط§ظ† ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="tel" placeholder="ط±ظ‚ظ… ط§ظ„ظ‡ط§طھظپ" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="text" placeholder="ط¯ظˆط±ظƒ ظپظٹ ط§ظ„ط¹ظٹط§ط¯ط©" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="text" placeholder="ط§ط³ظ… ط¹ظٹط§ط¯طھظƒ" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
          </div>

          <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
            ظ…ظ† ط®ظ„ط§ظ„ طھظ‚ط¯ظٹظ… ط§ظ„ظ†ظ…ظˆط°ط¬ ط£ط¹ظ„ط§ظ‡طŒ ط£ط¤ظƒط¯ ط¹ظ„ظ‰ ط´ط±ظˆط· ط§ظ„ط§ط³طھط®ط¯ط§ظ… ظˆط³ظٹط§ط³ط© ط§ظ„ط®طµظˆطµظٹط© ط§ظ„ط®ط§طµط© ط¨ط´ط±ظƒط© ظ„ط§ط²ظˆط±ط¯ ظˆط£ظˆط§ظپظ‚ ط¹ظ„ظ‰ ط£ظ†ظ‡ ظٹظ…ظƒظ† ط§ظ„ط§طھطµط§ظ„ ط¨ظٹ ظ…ظ† ظ‚ط¨ظ„ ط´ط±ظƒط© ظ„ط§ط²ظˆط±ط¯.
          </p>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button type="submit" className="btn-primary" style={{ padding: '15px 60px' }}>ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†</button>
          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
