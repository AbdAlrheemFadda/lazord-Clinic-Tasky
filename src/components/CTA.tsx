import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-box > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section container">
      <div className="cta-box glass-panel">
        <h2>هل أنت جديد في مجال المسح الضوئي؟</h2>
        <p>
          تقديم نتائج متوقعة للمرضى باستخدام التكنولوجيا والأدوات المبتكرة التي تمنحك التحكم النهائي. احصل على الماسح الضوئي 3Shape TRIOS المجاني مع تدريب ودعم غير محدود.
        </p>
        <button className="btn-primary">احصل على الماسح الضوئي المجاني</button>
      </div>
    </section>
  );
};
