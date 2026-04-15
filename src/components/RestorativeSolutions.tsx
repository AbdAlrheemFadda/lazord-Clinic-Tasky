import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const RestorativeSolutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.restorative-card', {
        x: (i: number) => i === 0 ? 50 : -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="restorative" ref={sectionRef} className="restorative-section container">
      <div className="section-header">
        <h2>ط­ظ„ظˆظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„طھط±ظ…ظٹظ…ظٹط© ظ„طھظ†ط§ط³ط¨ ط§ط­طھظٹط§ط¬ط§طھظƒ</h2>
      </div>

      <div className="restorative-grid">
        {/* Right Card */}
        <div className="restorative-card glass-panel highlight">
          <h3>ظ‡ظ„ ط£ظ†طھ ط¬ط¯ظٹط¯ ظپظٹ ظ…ط¬ط§ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹطں</h3>
          <p>طھظ‚ط¯ظٹظ… ظ†طھط§ط¦ط¬ ظ…طھظˆظ‚ط¹ط© ظ„ظ„ظ…ط±ط¶ظ‰ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظˆط§ظ„ط£ط¯ظˆط§طھ ط§ظ„ظ…ط¨طھظƒط±ط© ط§ظ„طھظٹ طھظ…ظ†ط­ظƒ ط§ظ„طھط­ظƒظ… ط§ظ„ظ†ظ‡ط§ط¦ظٹ.</p>
          <ul>
            <li>âœ“ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ</li>
            <li>âœ“ ط³ظٹط± ط¹ظ…ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…ظˆط¬ظ‡</li>
            <li>âœ“ طھط¯ظپظ‚ط§طھ ط§ظ„ط¹ظ…ظ„ ط§ظ„ط±ظ‚ظ…ظٹط© ظ„ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ظˆط£ظƒط«ط± ظ…ظ† ط°ظ„ظƒ</li>
            <li>âœ“ ظ…ط¹ط§ظٹظ†ط§طھ طھطµظ…ظٹظ… ظ…ط¬ط§ظ†ظٹط© ظ„ط¥ط¶ظپط§ط، ط§ظ„ظ„ظ…ط³ط§طھ ط§ظ„ظ†ظ‡ط§ط¦ظٹط© ط¹ظ„ظ‰ ط§ظ„ظ‚ط¶ط§ظٹط§ ط§ظ„ظ…ظ‡ظ…ط©</li>
          </ul>
          <button className="btn-primary">ط³ط¬ظ„ ط§ظ„ط¢ظ†</button>
        </div>

        {/* Left Card */}
        <div className="restorative-card glass-panel">
          <h3>ظ‡ظ„ طھظ‚ظˆظ… ط¨ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¨ط§ظ„ظپط¹ظ„طں</h3>
          <p>ظ‚ظ… ط¨طھظ†ظ…ظٹط© ظ…ظ…ط§ط±ط³طھظƒ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„ط§ظ†طھظ‚ط§ظ„ ط¥ظ„ظ‰ ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„ط±ظ‚ظ…ظٹ ط¨ط§ط³طھط®ط¯ط§ظ… ظ…ط¬ظ…ظˆط¹ط© ط£ط¯ظˆط§طھ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹط© ط§ظ„ظ…ط«ط¨طھط© ظ„ط¯ظٹظ†ط§.</p>
          <ul>
            <li>âœ“ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ</li>
            <li>âœ“ ط³ظٹط± ط¹ظ…ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…ظˆط¬ظ‡</li>
            <li>âœ“ ظ…ط±ط§ط¬ط¹ط§طھ ط§ظ„ظ…ط³ط­ ط§ظ„ظ…ط¨ط§ط´ط±ط© ظ„ظ…ط²ظٹط¯ ظ…ظ† ط§ظ„ط«ظ‚ط©</li>
            <li>âœ“ طھط¯ط±ظٹط¨ ظˆط¯ط¹ظ… ط؛ظٹط± ظ…ط­ط¯ظˆط¯</li>
          </ul>
          <button className="btn-secondary">ط§ط­طµظ„ ط¹ظ„ظ‰ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط§ظ„ظ…ط¬ط§ظ†ظٹ ط§ظ„ط®ط§طµ ط¨ظƒ</button>
        </div>
      </div>

      <style>{`
        .restorative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        .restorative-card {
          padding: 42px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 1px solid rgba(126, 200, 184, 0.06);
          transition: border-color 0.5s, transform 0.5s var(--transition-smooth);
        }
        .restorative-card:hover {
          transform: translateY(-4px);
        }
        .restorative-card.highlight {
          border-color: rgba(126, 200, 184, 0.2);
          background: rgba(126, 200, 184, 0.02);
        }
        .restorative-card h3 {
          font-size: 1.5rem;
          color: var(--text-main);
        }
        .restorative-card p {
          color: var(--text-muted);
          line-height: 1.75;
        }
        .restorative-card ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .restorative-card li {
          color: var(--accent-cyan);
          font-weight: 500;
          font-size: 0.95rem;
        }
        .restorative-card button {
          margin-top: auto;
          width: fit-content;
        }
        @media (max-width: 768px) {
          .restorative-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
