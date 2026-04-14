import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import best1Img from '../assets/images/best1.png';
import best2Img from '../assets/images/best2.png';
import best3Img from '../assets/images/best3.png';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: 'تطوير مهارات كل عضو من الموظفين',
    description: 'اجعل مساعديك يقومون بالمسح بثقة لكل سير عمل رقمي - استفد من التدريب غير المحدود لفريقك كلما دعت الحاجة.',
    image: best1Img,
  },
  {
    title: 'تحسين تجربة المريض',
    description: 'ارفع مستوى رعاية المرضى من خلال ابتكارات مثل أطقم الأسنان ذات الموعد النهائي، والأجزاء الجزئية المباشرة إلى النهاية، والماسح الضوئي رقم 1 في طب الأسنان الترميمي.',
    image: best2Img,
  },
  {
    title: 'زيادة القدرة على التنبؤ بالعلاج',
    description: 'استخدم أدوات المسح المتقدمة - تصور التصميمات الرقمية والموافقة عليها، وتعزيز نتائج قبول الحالة، وتقديم نتائج ناجحة للمرضى مع التحكم المطلق.',
    image: best3Img,
  },
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in cards sequentially
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
        <h2>تحقيق نتائج أفضل لممارستك ومرضاك</h2>
      </div>

      <div className="about-rich-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="about-card-rich glass-panel">
            <div className="image-glow-backdrop"></div>
            <div className="about-card-image-wrapper">
              <img src={card.image} alt={card.title} className="about-card-img" />
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
          background: rgba(10, 25, 34, 0.5); /* Deep dark navy base */
          border: 1px solid rgba(126, 200, 184, 0.1);
        }

        .about-card-rich:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(126, 200, 184, 0.08);
          border-color: rgba(126, 200, 184, 0.3);
        }

        /* Soft glow behind the image for high-tech aesthetic */
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

        /* Adding the subtle floating element animation */
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
          color: var(--text-main); /* White/very light grey for body text as requested */
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
