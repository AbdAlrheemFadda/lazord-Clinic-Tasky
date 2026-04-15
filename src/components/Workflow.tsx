import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import digitalScanImg from '../assets/images/digital scanlond.png';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '١',
    title: 'المسح الضوئي بدقة و ثقة ودقة',
    desc: 'استخدم الماسح الضوئي 3Shape TRIOS المجاني للحصول على مسح رقمي دقيق مع مراجعات فورية.',
  },
  {
    num: '٢',
    title: 'اطلب العمل المختبري باستخدام الوصفات الطبية الرقمية',
    desc: 'إرسال طلبات العمل المخبري بسهولة مع وصفات رقمية متكاملة وكاملة.',
  },
  {
    num: '٣',
    title: 'الموافقة على التصاميم الرقمية قبل التصنيع',
    desc: 'راجع ووافق على التصميمات ثلاثية الأبعاد للحالات قبل عملية التصنيع.',
  },
  {
    num: '٤',
    title: 'تتبع الحالات في الوقت الفعلي',
    desc: 'متابعة حالة العمل المخبري وتقدمه في أي وقت ومن أي مكان.',
  },
  {
    num: '٥',
    title: 'تسليم العلاج للمريض في أيام',
    desc: 'تسليم نتائج عالية الجودة في فترة زمنية قصيرة مع ضمان رضا المريض.',
  },
  {
    num: '٦',
    title: 'كيف يتم مقارنة لازورد مع مختبرات الأسنان الأخرى',
    desc: 'اكتشف الفرق في الجودة والسرعة والتواصل الرقمي المتكامل.',
  },
];

export const Workflow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the image from the right
      gsap.from('.workflow-image-wrapper', {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Fade in steps from the left
      gsap.from('.workflow-step', {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="workflow" ref={sectionRef} className="workflow-section container">
      <div className="section-header">
        <span className="section-tag">سير العمل</span>
        <h2>قم بتحويل ممارساتك باستخدام سير عمل رقمي مثبت</h2>
        <p>استمتع بمستوى من التحكم لم يكن ممكنًا من قبل.</p>
        <p style={{ marginTop: '15px' }}>لا يمكن تحقيق ترميمات متسقة وملائمة إلا من خلال التواصل القوي. في لازورد، قمنا بتطوير طرق مبتكرة للتعاون مع أطباء الأسنان لدينا باستخدام قوة التكنولوجيا لإعادة تعريف ما هو ممكن لكل مريض.</p>
      </div>

      <div className="workflow-layout">
        {/* Left Side: Image */}
        <div className="workflow-image-column">
          <div className="workflow-image-wrapper glass-panel">
            <img src={digitalScanImg} alt="سير العمل الرقمي والتواصل" className="workflow-img" />
          </div>
        </div>

        {/* Right Side: Steps */}
        <div className="workflow-steps-column">
          <div className="workflow-steps">
            {steps.map((step, i) => (
              <div key={i} className="workflow-step">
                <div className="workflow-step-number">{step.num}</div>
                <div className="workflow-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .workflow-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-top: 50px;
        }

        .workflow-image-wrapper {
          width: 100%;
          border-radius: var(--border-radius);
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(126, 200, 184, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 40px rgba(126, 200, 184, 0.05);
        }

        .workflow-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(126, 200, 184, 0.05), transparent 50%);
          pointer-events: none;
        }

        .workflow-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: var(--border-radius);
          transition: transform 1s var(--transition-smooth);
        }

        .workflow-image-wrapper:hover .workflow-img {
          transform: scale(1.03);
        }

        .workflow-steps-column {
          position: relative;
        }

        .workflow-steps {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .workflow-steps::before {
          content: '';
          position: absolute;
          right: 28px;
          top: 20px;
          bottom: 40px;
          width: 1.5px;
          background: linear-gradient(to bottom, transparent, rgba(126, 200, 184, 0.3), rgba(111, 168, 220, 0.2), transparent);
          z-index: 1;
        }

        .workflow-step {
          display: flex;
          gap: 25px;
          padding: 24px 0;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }

        .workflow-step-number {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 1px solid rgba(126, 200, 184, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--accent-cyan);
          position: relative;
          z-index: 3;
          box-shadow: 0 0 20px rgba(126, 200, 184, 0.05);
          transition: all 0.5s var(--transition-smooth);
        }

        .workflow-step:hover .workflow-step-number {
          background: rgba(126, 200, 184, 0.1);
          box-shadow: 0 0 30px rgba(126, 200, 184, 0.15);
          transform: scale(1.1);
          border-color: var(--accent-cyan);
        }

        .workflow-step-content {
          flex: 1;
          padding-top: 8px;
        }

        .workflow-step-content h4 {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 8px;
          transition: color 0.4s;
        }

        .workflow-step:hover h4 {
          color: var(--accent-cyan);
        }

        .workflow-step-content p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .workflow-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .workflow-image-column {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};
