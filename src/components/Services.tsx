import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import zirconiaImg from '../assets/images/Zirconia Crowns.png';
import implantImg from '../assets/images/Implant Solutions.png';
import denturesImg from '../assets/images/Full Dentures.png';
import partialsImg from '../assets/images/Removable Partial Dentures.png';
import guardsImg from '../assets/images/3D Printed Night Guards.png';
import alignersImg from '../assets/images/Clear Aligners.png';
import apneaImg from '../assets/images/Sleep Apnea Devices.png';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: 'تيجان الزركونيا لمدة 5 أيام', image: zirconiaImg },
  { name: 'حلول زراعة الأسنان الشاملة', image: implantImg },
  { name: 'طقم الأسنان ذو الموعد الثاني', image: denturesImg },
  { name: 'أجزاء مباشرة إلى النهاية', image: partialsImg },
  { name: 'واقيات ليلية مطبوعة بتقنية ثلاثية الأبعاد', image: guardsImg },
  { name: 'تقويم الأسنان الشفاف', image: alignersImg },
  { name: 'أجهزة علاج انقطاع التنفس أثناء النوم', image: apneaImg },
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
        <span className="section-tag">المنتجات</span>
        <h2>أطلق العنان للابتكار الرائد في السوق مع مختبر طب الأسنان الخاص بنا</h2>
        <p>لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض.</p>
      </div>

      <div className="services-grid products-grid">
        {products.map((product, idx) => (
          <div key={idx} className="product-card glass-panel flex-card">
            <div className="card-image-wrapper">
              <img src={product.image} alt={product.name} className="card-image" />
            </div>
            <div className="card-content">
              <h4>{product.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <button className="btn-primary">استكشف جميع منتجات المختبر</button>
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
