import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const RestorativeSolutions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.restorative-card', {
        x: (i) => i === 0 ? 50 : -50,
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
        <h2>حلول طب الأسنان الترميمية لتناسب احتياجاتك</h2>
      </div>

      <div className="restorative-grid">
        {/* Right Card */}
        <div className="restorative-card glass-panel highlight">
          <h3>هل أنت جديد في مجال المسح الضوئي؟</h3>
          <p>تقديم نتائج متوقعة للمرضى باستخدام التكنولوجيا والأدوات المبتكرة التي تمنحك التحكم النهائي.</p>
          <ul>
            <li>✓ الماسح الضوئي 3Shape TRIOS المجاني</li>
            <li>✓ سير عمل المسح الرقمي الموجه</li>
            <li>✓ تدفقات العمل الرقمية لأطقم الأسنان وأكثر من ذلك</li>
            <li>✓ معاينات تصميم مجانية لإضفاء اللمسات النهائية على القضايا المهمة</li>
          </ul>
          <button className="btn-primary">سجل الآن</button>
        </div>

        {/* Left Card */}
        <div className="restorative-card glass-panel">
          <h3>هل تقوم بالمسح الضوئي بالفعل؟</h3>
          <p>قم بتنمية ممارستك من خلال الانتقال إلى سير العمل الرقمي باستخدام مجموعة أدوات طب الأسنان الرقمية المثبتة لدينا.</p>
          <ul>
            <li>✓ الماسح الضوئي 3Shape TRIOS المجاني</li>
            <li>✓ سير عمل المسح الرقمي الموجه</li>
            <li>✓ مراجعات المسح المباشرة لمزيد من الثقة</li>
            <li>✓ تدريب ودعم غير محدود</li>
          </ul>
          <button className="btn-secondary">احصل على الماسح الضوئي المجاني الخاص بك</button>
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
