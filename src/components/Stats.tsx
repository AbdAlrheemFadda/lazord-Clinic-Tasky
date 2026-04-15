import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedNumber = ({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power3.out',
          onUpdate: () => {
            // For numbers with decimals like 1.5
            const hasDecimals = target % 1 !== 0;
            const formatted = hasDecimals 
              ? obj.val.toFixed(1) 
              : Math.round(obj.val).toString();
            
            ref.current!.innerText = `${prefix}${formatted}${suffix}`;
          },
        });
      },
    });
  }, [target, prefix, suffix]);

  return <h2 className="stat-value" ref={ref} style={{ direction: 'ltr', display: 'inline-block' }}>{prefix}0{suffix}</h2>;
};

export const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
      
      gsap.from('.stats-title', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section container" ref={sectionRef}>
      <div className="section-header">
        <h2 className="stats-title" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.4' }}>
          الآلاف من الممارسات تثق في لازورد في أعمالها المخبرية
        </h2>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-panel breathable-card">
          <AnimatedNumber target={50} prefix="+" suffix="K" />
          <p className="stat-label">تقييمات حالة 5 نجوم</p>
        </div>
        <div className="stat-card glass-panel breathable-card">
          <AnimatedNumber target={30} prefix="$" suffix="K" />
          <p className="stat-label">تم الحفظ مقدماً</p>
        </div>
        <div className="stat-card glass-panel breathable-card">
          <AnimatedNumber target={1.5} prefix="+" suffix="M" />
          <p className="stat-label">تم تسليم الابتسامات السعيدة</p>
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 140px 0; /* Plenty of whitespace */
        }
        
        .breathable-card {
          padding: 60px 40px !important;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background: rgba(10, 25, 34, 0.6) !important;
          border-color: rgba(126, 200, 184, 0.15) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2) !important;
        }

        .breathable-card:hover {
          border-color: rgba(126, 200, 184, 0.4) !important;
          box-shadow: 0 20px 50px rgba(126, 200, 184, 0.1) !important;
        }

        .stat-value {
          font-size: 4.5rem !important;
          font-weight: 800 !important;
          margin: 0;
          line-height: 1;
          color: var(--accent-cyan) !important;
          background: none !important;
          -webkit-text-fill-color: var(--accent-cyan) !important;
          text-shadow: 0 0 30px rgba(126, 200, 184, 0.2);
          font-family: 'Inter', sans-serif; /* High contrast numbers */
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 1.25rem !important;
          color: var(--text-main) !important;
          font-weight: 500;
          margin: 0;
          opacity: 0.95;
        }

        .stats-title {
          font-size: 2.8rem;
          color: var(--text-main);
          margin-bottom: 70px;
        }

        @media (max-width: 1024px) {
          .stat-value {
            font-size: 3.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            padding: 100px 0;
          }
          .stats-title {
            font-size: 2.2rem;
            margin-bottom: 50px;
          }
          .breathable-card {
            padding: 45px 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
