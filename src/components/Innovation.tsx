import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import collaborativeImg from '../assets/images/Collaborative Workflow.webp';
import innovativeImg from '../assets/images/Innovative Products.webp';
import digitalLabImg from '../assets/images/Fully Digital Lab.webp';
import expertiseImg from '../assets/images/Expertise on Demand.webp';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: 'سير العمل التعاوني',
    text: 'احصل على مراجعات المسح في الوقت الفعلي واعتمد تصميمات الحالات ثلاثية الأبعاد للتحكم النهائي في عملك المختبري.',
    image: collaborativeImg,
  },
  {
    title: 'المنتجات المبتكرة',
    text: 'قم بتقديم خدمات تغير قواعد اللعبة مثل التيجان لمدة 5 أيام، وأطقم الأسنان ذات الموعد النهائي، والأجزاء الجزئية المباشرة حتى النهاية.',
    image: innovativeImg,
  },
  {
    title: 'مختبر رقمي بالكامل',
    text: 'يمكنك الوصول إلى فنيينا ذوي المستوى العالمي الذين يتمتعون بأحدث تقنيات طب الأسنان وأوقات التسليم الرائدة في الصناعة.',
    image: digitalLabImg,
  },
  {
    title: 'الخبرة عند الطلب',
    text: 'يمكنك الوصول إلى خبراتنا السريريين للحصول على إرشادات ودعم شخصيين عبر الهاتف أو الرسائل النصية أو البريد الإلكتروني أو الدردشة المباشرة خلال دقائق.',
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
        <span className="section-tag">الابتكار</span>
        <h2>تعزيز مستقبل طب الأسنان الرقمي</h2>
        <p>
          لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض.
        </p>
      </div>

      <div className="about-grid innovation-cards-grid">
        {cardData.map((card, i) => (
          <div key={i} className="feature-card-cinematic glass-panel">
            <div className="card-highlight"></div>
            <div className="card-image-wrapper">
              <img src={card.image} alt={card.title} className="card-image" />
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
