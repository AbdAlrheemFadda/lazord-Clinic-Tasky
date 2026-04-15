import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import digitalScanImg from '../assets/images/digital scanlond.png';

const steps = [
  {
    num: 'ظ،',
    title: 'ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¨ط¯ظ‚ط© ظˆ ط«ظ‚ط© ظˆط¯ظ‚ط©',
    desc: 'ط§ط³طھط®ط¯ظ… ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ ظ„ظ„ط­طµظˆظ„ ط¹ظ„ظ‰ ظ…ط³ط­ ط±ظ‚ظ…ظٹ ط¯ظ‚ظٹظ‚ ظ…ط¹ ظ…ط±ط§ط¬ط¹ط§طھ ظپظˆط±ظٹط©.',
  },
  {
    num: 'ظ¢',
    title: 'ط§ط·ظ„ط¨ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®طھط¨ط±ظٹ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„ظˆطµظپط§طھ ط§ظ„ط·ط¨ظٹط© ط§ظ„ط±ظ‚ظ…ظٹط©',
    desc: 'ط¥ط±ط³ط§ظ„ ط·ظ„ط¨ط§طھ ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®ط¨ط±ظٹ ط¨ط³ظ‡ظˆظ„ط© ظ…ط¹ ظˆطµظپط§طھ ط±ظ‚ظ…ظٹط© ظ…طھظƒط§ظ…ظ„ط© ظˆظƒط§ظ…ظ„ط©.',
  },
  {
    num: 'ظ£',
    title: 'ط§ظ„ظ…ظˆط§ظپظ‚ط© ط¹ظ„ظ‰ ط§ظ„طھطµط§ظ…ظٹظ… ط§ظ„ط±ظ‚ظ…ظٹط© ظ‚ط¨ظ„ ط§ظ„طھطµظ†ظٹط¹',
    desc: 'ط±ط§ط¬ط¹ ظˆظˆط§ظپظ‚ ط¹ظ„ظ‰ ط§ظ„طھطµظ…ظٹظ…ط§طھ ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯ ظ„ظ„ط­ط§ظ„ط§طھ ظ‚ط¨ظ„ ط¹ظ…ظ„ظٹط© ط§ظ„طھطµظ†ظٹط¹.',
  },
  {
    num: 'ظ¤',
    title: 'طھطھط¨ط¹ ط§ظ„ط­ط§ظ„ط§طھ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹ',
    desc: 'ظ…طھط§ط¨ط¹ط© ط­ط§ظ„ط© ط§ظ„ط¹ظ…ظ„ ط§ظ„ظ…ط®ط¨ط±ظٹ ظˆطھظ‚ط¯ظ…ظ‡ ظپظٹ ط£ظٹ ظˆظ‚طھ ظˆظ…ظ† ط£ظٹ ظ…ظƒط§ظ†.',
  },
  {
    num: 'ظ¥',
    title: 'طھط³ظ„ظٹظ… ط§ظ„ط¹ظ„ط§ط¬ ظ„ظ„ظ…ط±ظٹط¶ ظپظٹ ط£ظٹط§ظ…',
    desc: 'طھط³ظ„ظٹظ… ظ†طھط§ط¦ط¬ ط¹ط§ظ„ظٹط© ط§ظ„ط¬ظˆط¯ط© ظپظٹ ظپطھط±ط© ط²ظ…ظ†ظٹط© ظ‚طµظٹط±ط© ظ…ط¹ ط¶ظ…ط§ظ† ط±ط¶ط§ ط§ظ„ظ…ط±ظٹط¶.',
  },
  {
    num: 'ظ¦',
    title: 'ظƒظٹظپ ظٹطھظ… ظ…ظ‚ط§ط±ظ†ط© ظ„ط§ط²ظˆط±ط¯ ظ…ط¹ ظ…ط®طھط¨ط±ط§طھ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط£ط®ط±ظ‰',
    desc: 'ط§ظƒطھط´ظپ ط§ظ„ظپط±ظ‚ ظپظٹ ط§ظ„ط¬ظˆط¯ط© ظˆط§ظ„ط³ط±ط¹ط© ظˆط§ظ„طھظˆط§طµظ„ ط§ظ„ط±ظ‚ظ…ظٹ ط§ظ„ظ…طھظƒط§ظ…ظ„.',
  },
];

export const Workflow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.workflow-image-wrapper', {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.workflow-step', {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="workflow-section container">
      <div className="section-header">
        <span className="section-tag">ط³ظٹط± ط§ظ„ط¹ظ…ظ„</span>
        <h2>ظ‚ظ… ط¨طھط­ظˆظٹظ„ ظ…ظ…ط§ط±ط³ط§طھظƒ ط¨ط§ط³طھط®ط¯ط§ظ… ط³ظٹط± ط¹ظ…ظ„ ط±ظ‚ظ…ظٹ ظ…ط«ط¨طھ</h2>
        <p>ط§ط³طھظ…طھط¹ ط¨ظ…ط³طھظˆظ‰ ظ…ظ† ط§ظ„طھط­ظƒظ… ظ„ظ… ظٹظƒظ† ظ…ظ…ظƒظ†ظ‹ط§ ظ…ظ† ظ‚ط¨ظ„.</p>
        <p style={{ marginTop: '15px' }}>ظ„ط§ ظٹظ…ظƒظ† طھط­ظ‚ظٹظ‚ طھط±ظ…ظٹظ…ط§طھ ظ…طھط³ظ‚ط© ظˆظ…ظ„ط§ط¦ظ…ط© ط¥ظ„ط§ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„طھظˆط§طµظ„ ط§ظ„ظ‚ظˆظٹ. ظپظٹ ظ„ط§ط²ظˆط±ط¯طŒ ظ‚ظ…ظ†ط§ ط¨طھط·ظˆظٹط± ط·ط±ظ‚ ظ…ط¨طھظƒط±ط© ظ„ظ„طھط¹ط§ظˆظ† ظ…ط¹ ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظ„ط¯ظٹظ†ط§ ط¨ط§ط³طھط®ط¯ط§ظ… ظ‚ظˆط© ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظ„ط¥ط¹ط§ط¯ط© طھط¹ط±ظٹظپ ظ…ط§ ظ‡ظˆ ظ…ظ…ظƒظ† ظ„ظƒظ„ ظ…ط±ظٹط¶.</p>
      </div>

      <div className="workflow-layout">
        <div className="workflow-image-column">
          {/* Fixed: added position:relative so ::after pseudo-element anchors correctly */}
          <div className="workflow-image-wrapper glass-panel" style={{ position: 'relative' }}>
            <img src={digitalScanImg} alt="ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„ط±ظ‚ظ…ظٹ ظˆط§ظ„طھظˆط§طµظ„" className="workflow-img" loading="lazy" />
          </div>
        </div>

        <div className="workflow-steps-column">
          <div className="workflow-steps">
            {steps.map((step) => (
              <div key={step.num} className="workflow-step">
                <div className="workflow-step-number">{step.num}</div>
                <div className="workflow-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .workflow-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-top: 50px;
        }

        .workflow-image-wrapper {
          width: 100%;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(126, 200, 184, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 40px rgba(126, 200, 184, 0.05);
        }

        .workflow-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(126, 200, 184, 0.05), transparent 50%);
          pointer-events: none;
        }

        .workflow-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: var(--border-radius);
          transition: transform 1s var(--transition-smooth);
        }

        .workflow-image-wrapper:hover .workflow-img {
          transform: scale(1.03);
        }

        .workflow-steps-column {
          position: relative;
        }

        .workflow-steps {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .workflow-steps::before {
          content: '';
          position: absolute;
          right: 28px;
          top: 20px;
          bottom: 40px;
          width: 1.5px;
          background: linear-gradient(to bottom, transparent, rgba(126, 200, 184, 0.3), rgba(111, 168, 220, 0.2), transparent);
          z-index: 1;
        }

        .workflow-step {
          display: flex;
          gap: 25px;
          padding: 24px 0;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .workflow-step-number {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 1px solid rgba(126, 200, 184, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-cyan);
          position: relative;
          z-index: 3;
          box-shadow: 0 0 20px rgba(126, 200, 184, 0.05);
          transition: all 0.5s var(--transition-smooth);
        }

        .workflow-step:hover .workflow-step-number {
          background: rgba(126, 200, 184, 0.1);
          box-shadow: 0 0 30px rgba(126, 200, 184, 0.15);
          transform: scale(1.1);
          border-color: var(--accent-cyan);
        }

        .workflow-step-content {
          flex: 1;
          padding-top: 8px;
        }

        .workflow-step-content h4 {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 8px;
          transition: color 0.4s;
        }

        .workflow-step:hover h4 {
          color: var(--accent-cyan);
        }

        .workflow-step-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .workflow-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .workflow-image-column {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};
