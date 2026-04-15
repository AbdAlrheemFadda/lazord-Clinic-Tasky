import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import collaborativeImg from '../assets/images/Collaborative Workflow.png';
import innovativeImg from '../assets/images/Innovative Products.png';
import digitalLabImg from '../assets/images/Fully Digital Lab.png';
import expertiseImg from '../assets/images/Expertise on Demand.png';

const cardData = [
  {
    title: 'ط³ظٹط± ط§ظ„ط¹ظ…ظ„ ط§ظ„طھط¹ط§ظˆظ†ظٹ',
    text: 'ط§ط­طµظ„ ط¹ظ„ظ‰ ظ…ط±ط§ط¬ط¹ط§طھ ط§ظ„ظ…ط³ط­ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹ ظˆط§ط¹طھظ…ط¯ طھطµظ…ظٹظ…ط§طھ ط§ظ„ط­ط§ظ„ط§طھ ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯ ظ„ظ„طھط­ظƒظ… ط§ظ„ظ†ظ‡ط§ط¦ظٹ ظپظٹ ط¹ظ…ظ„ظƒ ط§ظ„ظ…ط®طھط¨ط±ظٹ.',
    image: collaborativeImg,
  },
  {
    title: 'ط§ظ„ظ…ظ†طھط¬ط§طھ ط§ظ„ظ…ط¨طھظƒط±ط©',
    text: 'ظ‚ظ… ط¨طھظ‚ط¯ظٹظ… ط®ط¯ظ…ط§طھ طھط؛ظٹط± ظ‚ظˆط§ط¹ط¯ ط§ظ„ظ„ط¹ط¨ط© ظ…ط«ظ„ ط§ظ„طھظٹط¬ط§ظ† ظ„ظ…ط¯ط© 5 ط£ظٹط§ظ…طŒ ظˆط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط°ط§طھ ط§ظ„ظ…ظˆط¹ط¯ ط§ظ„ظ†ظ‡ط§ط¦ظٹطŒ ظˆط§ظ„ط£ط¬ط²ط§ط، ط§ظ„ط¬ط²ط¦ظٹط© ط§ظ„ظ…ط¨ط§ط´ط±ط© ط­طھظ‰ ط§ظ„ظ†ظ‡ط§ظٹط©.',
    image: innovativeImg,
  },
  {
    title: 'ظ…ط®طھط¨ط± ط±ظ‚ظ…ظٹ ط¨ط§ظ„ظƒط§ظ…ظ„',
    text: 'ظٹظ…ظƒظ†ظƒ ط§ظ„ظˆطµظˆظ„ ط¥ظ„ظ‰ ظپظ†ظٹظٹظ†ط§ ط°ظˆظٹ ط§ظ„ظ…ط³طھظˆظ‰ ط§ظ„ط¹ط§ظ„ظ…ظٹ ط§ظ„ط°ظٹظ† ظٹطھظ…طھط¹ظˆظ† ط¨ط£ط­ط¯ط« طھظ‚ظ†ظٹط§طھ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ظˆط£ظˆظ‚ط§طھ ط§ظ„طھط³ظ„ظٹظ… ط§ظ„ط±ط§ط¦ط¯ط© ظپظٹ ط§ظ„طµظ†ط§ط¹ط©.',
    image: digitalLabImg,
  },
  {
    title: 'ط§ظ„ط®ط¨ط±ط© ط¹ظ†ط¯ ط§ظ„ط·ظ„ط¨',
    text: 'ظٹظ…ظƒظ†ظƒ ط§ظ„ظˆطµظˆظ„ ط¥ظ„ظ‰ ط®ط¨ط±ط§طھظ†ط§ ط§ظ„ط³ط±ظٹط±ظٹظٹظ† ظ„ظ„ط­طµظˆظ„ ط¹ظ„ظ‰ ط¥ط±ط´ط§ط¯ط§طھ ظˆط¯ط¹ظ… ط´ط®طµظٹظٹظ† ط¹ط¨ط± ط§ظ„ظ‡ط§طھظپ ط£ظˆ ط§ظ„ط±ط³ط§ط¦ظ„ ط§ظ„ظ†طµظٹط© ط£ظˆ ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ ط£ظˆ ط§ظ„ط¯ط±ط¯ط´ط© ط§ظ„ظ…ط¨ط§ط´ط±ط© ط®ظ„ط§ظ„ ط¯ظ‚ط§ط¦ظ‚.',
    image: expertiseImg,
  },
];

export const Innovation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card-cinematic', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="innovation-section container">
      <div className="section-header">
        <span className="section-tag">ط§ظ„ط§ط¨طھظƒط§ط±</span>
        <h2>طھط¹ط²ظٹط² ظ…ط³طھظ‚ط¨ظ„ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ</h2>
        <p>
          ظ„ط§ ظٹظ…ظƒظ† طھط­ظ‚ظٹظ‚ طھط±ظ…ظٹظ…ط§طھ ظ…طھط³ظ‚ط© ظˆظ…ظ„ط§ط¦ظ…ط© ط¥ظ„ط§ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„طھظˆط§طµظ„ ط§ظ„ظ‚ظˆظٹ. ظپظٹ ظ„ط§ط²ظˆط±ط¯طŒ ظ‚ظ…ظ†ط§ ط¨طھط·ظˆظٹط± ط·ط±ظ‚ ظ…ط¨طھظƒط±ط© ظ„ظ„طھط¹ط§ظˆظ† ظ…ط¹ ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظ„ط¯ظٹظ†ط§ ط¨ط§ط³طھط®ط¯ط§ظ… ظ‚ظˆط© ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظ„ط¥ط¹ط§ط¯ط© طھط¹ط±ظٹظپ ظ…ط§ ظ‡ظˆ ظ…ظ…ظƒظ† ظ„ظƒظ„ ظ…ط±ظٹط¶.
        </p>
      </div>

      <div className="about-grid innovation-cards-grid">
        {cardData.map((card) => (
          <div key={card.title} className="feature-card-cinematic glass-panel">
            <div className="card-highlight" />
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.title} className="card-image" loading="lazy" />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <style>{`
        .innovation-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 28px !important;
        }
        .feature-card-cinematic {
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
          display: flex;
          flex-direction: column;
        }
        .feature-card-cinematic:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }
        .card-image-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          position: relative;
        }
        .card-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 34, 0.5), transparent 50%);
          pointer-events: none;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth);
          display: block;
        }
        .feature-card-cinematic:hover .card-image {
          transform: scale(1.05);
        }
        .feature-card-cinematic h3 {
          color: var(--accent-cyan);
          margin-bottom: 12px;
          font-size: 1.3rem;
          padding: 0 30px;
          padding-top: 24px;
        }
        .feature-card-cinematic p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.95rem;
          padding: 0 30px;
          padding-bottom: 30px;
        }
        .card-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(126, 200, 184, 0.3), transparent);
          opacity: 0.6;
          z-index: 2;
        }
        @media (max-width: 768px) {
          .innovation-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .card-image-wrapper {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};
