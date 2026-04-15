import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-badge', { opacity: 0, y: 30, duration: 1.2, delay: 0.5 })
        .from('.hero-title .brand', { opacity: 0, y: 80, duration: 1.5, scale: 0.95 }, '-=0.8')
        .from('.hero-subtitle', { opacity: 0, y: 50, duration: 1.2 }, '-=1')
        .from('.hero-description', { opacity: 0, scale: 0.9, duration: 1.2 }, '-=1')
        .from('.hero-actions button', { opacity: 0, y: 30, duration: 1, stagger: 0.2 }, '-=0.8')
        .from('.hero-ui-line', { width: 0, duration: 1.5, opacity: 0 }, '-=1.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Cinematic UI Overlays — Softer tones */}
      <div className="hero-ui-decor">
        <div className="hero-ui-line" style={{ position: 'absolute', top: '20%', left: '10%', height: '1px', background: 'rgba(126, 200, 184, 0.15)', opacity: 0.3 }}></div>
        <div className="hero-ui-line" style={{ position: 'absolute', bottom: '20%', right: '10%', height: '1px', background: 'rgba(111, 168, 220, 0.15)', opacity: 0.3 }}></div>
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">مستقبل طب الأسنان الرقمي</span>
        </div>

        <h1 className="hero-title">
          <span className="brand glow-text">مختبر الأسنان الرقمي مع التواصل في الوقت الحقيقي</span>
        </h1>

        <p className="hero-description reveal" style={{ opacity: 1, transform: 'none' }}>
          نحن نعمل على تمكين الآلاف من عيادات طب الأسنان من خلال تدفقات عمل مبتكرة لتعزيز رعاية المرضى وإحداث ثورة في طريقة فحصهم وطلبهم والتعاون في العمل المختبري.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">ابدأ الآن</button>
          <button className="btn-secondary">شاهد الفيديو</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>SCROLL TO EXPLORE</span>
      </div>

      <style>{`
        .hero-ui-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-ui-line {
          width: 250px;
        }
      `}</style>
    </section>
  );
};
