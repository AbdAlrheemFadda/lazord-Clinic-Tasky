import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-badge', { opacity: 0, y: 30, duration: 1.2, delay: 0.5 })
        .from('.hero-title .brand', { opacity: 0, y: 80, duration: 1.5, scale: 0.95 }, '-=0.8')
        .from('.hero-description', { opacity: 0, scale: 0.9, duration: 1.2 }, '-=1')
        .from('.hero-actions button', { opacity: 0, y: 30, duration: 1, stagger: 0.2 }, '-=0.8')
        .from('.hero-ui-line', { width: 0, duration: 1.5, opacity: 0 }, '-=1.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Cinematic UI Overlays */}
      <div className="hero-ui-decor">
        <div className="hero-ui-line" style={{ position: 'absolute', top: '20%', left: '10%', height: '1px', background: 'rgba(126, 200, 184, 0.15)', opacity: 0.3 }} />
        <div className="hero-ui-line" style={{ position: 'absolute', bottom: '20%', right: '10%', height: '1px', background: 'rgba(111, 168, 220, 0.15)', opacity: 0.3 }} />
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          ظ…ط³طھظ‚ط¨ظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ
        </div>

        <h1 className="hero-title">
          <span className="brand glow-text">ظ…ط®طھط¨ط± ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ ظ…ط¹ ط§ظ„طھظˆط§طµظ„ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ط­ظ‚ظٹظ‚ظٹ</span>
        </h1>

        <p className="hero-description reveal" style={{ opacity: 1, transform: 'none' }}>
          ظ†ط­ظ† ظ†ط¹ظ…ظ„ ط¹ظ„ظ‰ طھظ…ظƒظٹظ† ط§ظ„ط¢ظ„ط§ظپ ظ…ظ† ط¹ظٹط§ط¯ط§طھ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ظ…ظ† ط®ظ„ط§ظ„ طھط¯ظپظ‚ط§طھ ط¹ظ…ظ„ ظ…ط¨طھظƒط±ط© ظ„طھط¹ط²ظٹط² ط±ط¹ط§ظٹط© ط§ظ„ظ…ط±ط¶ظ‰ ظˆط¥ط­ط¯ط§ط« ط«ظˆط±ط© ظپظٹ ط·ط±ظٹظ‚ط© ظپط­طµظ‡ظ… ظˆط·ظ„ط¨ظ‡ظ… ظˆط§ظ„طھط¹ط§ظˆظ† ظپظٹ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®طھط¨ط±ظٹ.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">ط§ط¨ط¯ط£ ط§ظ„ط¢ظ†</button>
          <button className="btn-secondary">ط´ط§ظ‡ط¯ ط§ظ„ظپظٹط¯ظٹظˆ</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse" />
        <span style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>SCROLL TO EXPLORE</span>
      </div>

      <style>{`
        .hero-ui-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-ui-line {
          width: 250px;
        }
      `}</style>
    </section>
  );
};
