import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import best1Img from '../assets/images/best1.png';
import best2Img from '../assets/images/best2.png';
import best3Img from '../assets/images/best3.png';

const cards = [
  {
    title: 'طھط·ظˆظٹط± ظ…ظ‡ط§ط±ط§طھ ظƒظ„ ط¹ط¶ظˆ ظ…ظ† ط§ظ„ظ…ظˆط¸ظپظٹظ†',
    description: 'ط§ط¬ط¹ظ„ ظ…ط³ط§ط¹ط¯ظٹظƒ ظٹظ‚ظˆظ…ظˆظ† ط¨ط§ظ„ظ…ط³ط­ ط¨ط«ظ‚ط© ظ„ظƒظ„ ط³ظٹط± ط¹ظ…ظ„ ط±ظ‚ظ…ظٹ - ط§ط³طھظپط¯ ظ…ظ† ط§ظ„طھط¯ط±ظٹط¨ ط؛ظٹط± ط§ظ„ظ…ط­ط¯ظˆط¯ ظ„ظپط±ظٹظ‚ظƒ ظƒظ„ظ…ط§ ط¯ط¹طھ ط§ظ„ط­ط§ط¬ط©.',
    image: best1Img,
  },
  {
    title: 'طھط­ط³ظٹظ† طھط¬ط±ط¨ط© ط§ظ„ظ…ط±ظٹط¶',
    description: 'ط§ط±ظپط¹ ظ…ط³طھظˆظ‰ ط±ط¹ط§ظٹط© ط§ظ„ظ…ط±ط¶ظ‰ ظ…ظ† ط®ظ„ط§ظ„ ط§ط¨طھظƒط§ط±ط§طھ ظ…ط«ظ„ ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط°ط§طھ ط§ظ„ظ…ظˆط¹ط¯ ط§ظ„ظ†ظ‡ط§ط¦ظٹطŒ ظˆط§ظ„ط£ط¬ط²ط§ط، ط§ظ„ط¬ط²ط¦ظٹط© ط§ظ„ظ…ط¨ط§ط´ط±ط© ط¥ظ„ظ‰ ط§ظ„ظ†ظ‡ط§ظٹط©طŒ ظˆط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط±ظ‚ظ… 1 ظپظٹ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„طھط±ظ…ظٹظ…ظٹ.',
    image: best2Img,
  },
  {
    title: 'ط²ظٹط§ط¯ط© ط§ظ„ظ‚ط¯ط±ط© ط¹ظ„ظ‰ ط§ظ„طھظ†ط¨ط¤ ط¨ط§ظ„ط¹ظ„ط§ط¬',
    description: 'ط§ط³طھط®ط¯ظ… ط£ط¯ظˆط§طھ ط§ظ„ظ…ط³ط­ ط§ظ„ظ…طھظ‚ط¯ظ…ط© - طھطµظˆط± ط§ظ„طھطµظ…ظٹظ…ط§طھ ط§ظ„ط±ظ‚ظ…ظٹط© ظˆط§ظ„ظ…ظˆط§ظپظ‚ط© ط¹ظ„ظٹظ‡ط§طŒ ظˆطھط¹ط²ظٹط² ظ†طھط§ط¦ط¬ ظ‚ط¨ظˆظ„ ط§ظ„ط­ط§ظ„ط©طŒ ظˆطھظ‚ط¯ظٹظ… ظ†طھط§ط¦ط¬ ظ†ط§ط¬ط­ط© ظ„ظ„ظ…ط±ط¶ظ‰ ظ…ط¹ ط§ظ„طھط­ظƒظ… ط§ظ„ظ…ط·ظ„ظ‚.',
    image: best3Img,
  },
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card-rich', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section container">
      <div className="section-header">
        <h2>طھط­ظ‚ظٹظ‚ ظ†طھط§ط¦ط¬ ط£ظپط¶ظ„ ظ„ظ…ظ…ط§ط±ط³طھظƒ ظˆظ…ط±ط¶ط§ظƒ</h2>
      </div>

      <div className="about-rich-grid">
        {cards.map((card) => (
          <div key={card.title} className="about-card-rich glass-panel">
            <div className="image-glow-backdrop" />
            <div className="about-card-image-wrapper">
              <img src={card.image} alt={card.title} className="about-card-img" loading="lazy" />
            </div>
            <div className="about-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .about-rich-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .about-card-rich {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          transition: transform 0.6s var(--transition-smooth), box-shadow 0.6s;
          background: rgba(10, 25, 34, 0.5);
          border: 1px solid rgba(126, 200, 184, 0.1);
        }

        .about-card-rich:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(126, 200, 184, 0.08);
          border-color: rgba(126, 200, 184, 0.3);
        }

        .image-glow-backdrop {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 180px;
          background: radial-gradient(ellipse at center, rgba(126, 200, 184, 0.15) 0%, transparent 70%);
          filter: blur(20px);
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.6s;
        }

        .about-card-rich:hover .image-glow-backdrop {
          opacity: 1;
          background: radial-gradient(ellipse at center, rgba(126, 200, 184, 0.25) 0%, transparent 70%);
        }

        .about-card-image-wrapper {
          width: 100%;
          height: 220px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        .about-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--border-radius) - 2px) calc(var(--border-radius) - 2px) 0 0;
          transition: transform 0.8s var(--transition-smooth);
        }

        @keyframes float-img {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        .about-card-rich:hover .about-card-img {
          animation: float-img 4s ease-in-out infinite;
        }

        .about-card-content {
          padding: 25px 30px 35px;
          text-align: center;
          position: relative;
          z-index: 2;
          background: linear-gradient(to bottom, transparent, rgba(10, 25, 34, 0.8));
          flex-grow: 1;
        }

        .about-card-content h3 {
          color: var(--accent-cyan);
          font-size: 1.25rem;
          margin-bottom: 15px;
          font-weight: 700;
          transition: color 0.4s;
        }

        .about-card-content p {
          color: var(--text-main);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .about-rich-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-rich-grid {
            grid-template-columns: 1fr;
          }
          .about-card-image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};
