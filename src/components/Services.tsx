import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import zirconiaImg from '../assets/images/Zirconia Crowns.png';
import implantImg from '../assets/images/Implant Solutions.png';
import denturesImg from '../assets/images/Full Dentures.png';
import partialsImg from '../assets/images/Removable Partial Dentures.png';
import guardsImg from '../assets/images/3D Printed Night Guards.png';
import alignersImg from '../assets/images/Clear Aligners.png';
import apneaImg from '../assets/images/Sleep Apnea Devices.png';

const products = [
  { name: 'طھظٹط¬ط§ظ† ط§ظ„ط²ط±ظƒظˆظ†ظٹط§ ظ„ظ…ط¯ط© 5 ط£ظٹط§ظ…', image: zirconiaImg },
  { name: 'ط­ظ„ظˆظ„ ط²ط±ط§ط¹ط© ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط´ط§ظ…ظ„ط©', image: implantImg },
  { name: 'ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط°ظˆ ط§ظ„ظ…ظˆط¹ط¯ ط§ظ„ط«ط§ظ†ظٹ', image: denturesImg },
  { name: 'ط£ط¬ط²ط§ط، ظ…ط¨ط§ط´ط±ط© ط¥ظ„ظ‰ ط§ظ„ظ†ظ‡ط§ظٹط©', image: partialsImg },
  { name: 'ظˆط§ظ‚ظٹط§طھ ظ„ظٹظ„ظٹط© ظ…ط·ط¨ظˆط¹ط© ط¨طھظ‚ظ†ظٹط© ط«ظ„ط§ط«ظٹط© ط§ظ„ط£ط¨ط¹ط§ط¯', image: guardsImg },
  { name: 'طھظ‚ظˆظٹظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط´ظپط§ظپ', image: alignersImg },
  { name: 'ط£ط¬ظ‡ط²ط© ط¹ظ„ط§ط¬ ط§ظ†ظ‚ط·ط§ط¹ ط§ظ„طھظ†ظپط³ ط£ط«ظ†ط§ط، ط§ظ„ظ†ظˆظ…', image: apneaImg },
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
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
    <section id="services" ref={sectionRef} className="services-section container">
      <div className="section-header">
        <span className="section-tag">ط§ظ„ظ…ظ†طھط¬ط§طھ</span>
        <h2>ط£ط·ظ„ظ‚ ط§ظ„ط¹ظ†ط§ظ† ظ„ظ„ط§ط¨طھظƒط§ط± ط§ظ„ط±ط§ط¦ط¯ ظپظٹ ط§ظ„ط³ظˆظ‚ ظ…ط¹ ظ…ط®طھط¨ط± ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط®ط§طµ ط¨ظ†ط§</h2>
        <p>ظ„ط§ ظٹظ…ظƒظ† طھط­ظ‚ظٹظ‚ طھط±ظ…ظٹظ…ط§طھ ظ…طھط³ظ‚ط© ظˆظ…ظ„ط§ط¦ظ…ط© ط¥ظ„ط§ ظ…ظ† ط®ظ„ط§ظ„ ط§ظ„طھظˆط§طµظ„ ط§ظ„ظ‚ظˆظٹ. ظپظٹ ظ„ط§ط²ظˆط±ط¯طŒ ظ‚ظ…ظ†ط§ ط¨طھط·ظˆظٹط± ط·ط±ظ‚ ظ…ط¨طھظƒط±ط© ظ„ظ„طھط¹ط§ظˆظ† ظ…ط¹ ط£ط·ط¨ط§ط، ط§ظ„ط£ط³ظ†ط§ظ† ظ„ط¯ظٹظ†ط§ ط¨ط§ط³طھط®ط¯ط§ظ… ظ‚ظˆط© ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظ„ط¥ط¹ط§ط¯ط© طھط¹ط±ظٹظپ ظ…ط§ ظ‡ظˆ ظ…ظ…ظƒظ† ظ„ظƒظ„ ظ…ط±ظٹط¶.</p>
      </div>

      <div className="services-grid products-grid">
        {products.map((product) => (
          <div key={product.name} className="product-card glass-panel flex-card">
            <div className="card-image-wrapper">
              <img src={product.image} alt={product.name} className="card-image" loading="lazy" />
            </div>
            <div className="card-content">
              <h4>{product.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <button className="btn-primary">ط§ط³طھظƒط´ظپ ط¬ظ…ظٹط¹ ظ…ظ†طھط¬ط§طھ ط§ظ„ظ…ط®طھط¨ط±</button>
      </div>

      <style>{`
        .products-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 28px !important;
        }
        .product-card.flex-card {
          padding: 0 !important;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.5s var(--transition-smooth), border-color 0.5s;
        }
        .product-card.flex-card:hover {
          transform: translateY(-4px);
          border-color: rgba(126, 200, 184, 0.2);
        }
        .product-card .card-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          position: relative;
        }
        .product-card .card-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 34, 0.5), transparent 60%);
          pointer-events: none;
        }
        .product-card .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--transition-smooth);
          display: block;
        }
        .product-card.flex-card:hover .card-image {
          transform: scale(1.05);
        }
        .product-card .card-content {
          padding: 24px;
          text-align: center;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-card .card-content h4 {
          margin: 0;
          color: var(--text-main);
          font-size: 1.15rem;
          line-height: 1.5;
        }
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
          .product-card .card-image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};
