import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import labsImg from '../assets/images/labs.png';
import teamImg from '../assets/images/team.png';
import beforeImg from '../assets/images/before.png';
import afterImg from '../assets/images/After.png';

// Custom Before/After Slider Component
const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
    if (containerRef.current) containerRef.current.style.touchAction = 'none';
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.touchAction = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((p) => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="slider-container"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      role="slider"
      tabIndex={0}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Background) */}
      <div className="slider-image after-img" style={{ backgroundImage: `url(${after})` }}>
        <div className="slider-badge" style={{ right: '20px' }}>AFTER</div>
      </div>

      {/* Before Image (Foreground, Clipped) */}
      <div
        className="slider-image before-img"
        style={{
          backgroundImage: `url(${before})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <div className="slider-badge" style={{ left: '20px' }}>BEFORE</div>
      </div>

      {/* Draggable Divider Line */}
      <div className="slider-divider" style={{ left: `${sliderPos}%` }}>
        <div className="slider-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg style={{ transform: 'rotate(180deg)' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
      </div>

      <style>{`
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: ew-resize;
          user-select: none;
          touch-action: pan-y;
          border-radius: var(--border-radius);
          overflow: hidden;
        }

        .slider-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .slider-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--text-main);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .slider-handle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(10, 25, 34, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(126, 200, 184, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          gap: 2px;
          transition: transform 0.2s, background 0.2s;
        }

        .slider-handle svg {
          width: 16px;
          height: 16px;
        }

        .slider-container:active .slider-handle {
          transform: scale(0.95);
          background: rgba(10, 25, 34, 1);
        }

        .slider-badge {
          position: absolute;
          bottom: 25px;
          background: rgba(10, 25, 34, 0.8);
          backdrop-filter: blur(4px);
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-main);
          border: 1px solid rgba(126, 200, 184, 0.2);
          z-index: 5;
        }
      `}</style>
    </div>
  );
};

export const Articles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.article-layout-card', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="articles" ref={sectionRef} className="articles-section container">
      <div className="section-header">
        <h2>طھط¹ط±ظپ ط¹ظ„ظ‰ ط§ظ„ظ…ط²ظٹط¯ ط­ظˆظ„ ظ…ط³طھظ‚ط¨ظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ظˆظƒظٹظپ ظٹط´ظƒظ„ظ‡ ظ„ط§ط²ظˆط±ط¯.</h2>
      </div>

      <div className="articles-layout">
        {/* Main Case Study Column (Slider) */}
        <div className="article-layout-card case-study-card glass-panel">
          <div className="case-study-media">
            <BeforeAfterSlider before={beforeImg} after={afterImg} />
          </div>
          <div className="article-card-content">
            <h3>ط¯ط±ط§ط³ط© ط­ط§ظ„ط©: 10 ظˆط­ط¯ط§طھ ظ„طھط­ظˆظٹظ„ ط§ط¨طھط³ط§ظ…ط© ط§ظ„ط²ط±ظƒظˆظ†ظٹط§</h3>
            <button className="login-link">ط§ظ‚ط±ط£ ط§ظ„ظ…ط²ظٹط¯ â†گ</button>
          </div>
        </div>

        {/* Side Stacked Articles Column */}
        <div className="side-articles">
          <div className="article-layout-card side-card glass-panel">
            <div className="side-card-media">
              <img src={labsImg} alt="ط¯ط§ط®ظ„ ظ…ط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯ ظ„ظ„ظ…ط³طھظ‚ط¨ظ„" loading="lazy" />
            </div>
            <div className="article-card-content">
              <h3>ط¯ط§ط®ظ„ ظ…ط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯ ظ„ظ„ظ…ط³طھظ‚ط¨ظ„</h3>
              <button className="login-link">ط§ظ‚ط±ط£ ط§ظ„ظ…ط²ظٹط¯ â†گ</button>
            </div>
          </div>

          <div className="article-layout-card side-card glass-panel">
            <div className="side-card-media">
              <img src={teamImg} alt="ظƒظٹظپ ظٹط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯" loading="lazy" />
            </div>
            <div className="article-card-content">
              <h3>ظƒظٹظپ ظٹط¹ظ…ظ„ ظ„ط§ط²ظˆط±ط¯</h3>
              <button className="login-link">ط§ظ‚ط±ط£ ط§ظ„ظ…ط²ظٹط¯ â†گ</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .articles-layout {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 30px;
          margin-top: 40px;
        }

        .article-layout-card {
          display: flex;
          flex-direction: column;
          padding: 24px;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
        }

        .article-layout-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }

        .case-study-media {
          width: 100%;
          height: 480px;
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }

        .side-articles {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .side-card-media {
          width: 100%;
          height: 180px;
          border-radius: var(--border-radius);
          overflow: hidden;
          margin-bottom: 20px;
        }

        .side-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s var(--transition-smooth);
        }

        .side-card:hover .side-card-media img {
          transform: scale(1.05);
        }

        .article-card-content {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1;
        }

        .article-card-content h3 {
          font-size: 1.35rem;
          color: var(--text-main);
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .login-link {
          margin-top: auto;
          color: var(--accent-cyan);
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }

        @media (max-width: 1024px) {
          .articles-layout {
            grid-template-columns: 1fr;
          }
          .case-study-media {
            height: 400px;
          }
          .side-articles {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .side-articles {
            grid-template-columns: 1fr;
          }
          .case-study-media {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};
