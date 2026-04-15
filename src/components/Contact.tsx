import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact-section container">
      <div className="contact-content glass-panel" style={{ padding: '50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>تواصل معنا</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            قم بتطوير ممارساتك مع لازورد - الشريك الرقمي الوحيد المتكامل وقم بتحسين تجربة المريض والحلول السريرية ونمو الأعمال.
          </p>
          <h3 style={{ marginTop: '20px', color: '#fff' }}>ابدأ اليوم عن طريق ملء النموذج.</h3>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <input type="text" placeholder="الاسم الأول" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="text" placeholder="اسم العائلة" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="email" placeholder="عنوان البريد الإلكتروني" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="tel" placeholder="رقم الهاتف" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="text" placeholder=" دورك في العيادة" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
            <input type="text" placeholder="اسم عيادتك" required style={{ padding: '16px', borderRadius: '14px', background: 'rgba(126,200,184,0.03)', border: '1px solid rgba(126,200,184,0.08)', color: 'var(--text-main)' }} />
          </div>
          
          <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.6' }}>
            من خلال تقديم النموذج أعلاه، أؤكد على شروط الاستخدام وسياسة الخصوصية الخاصة بشركة لازورد وأوافق، على أنه يمكن الاتصال بي من قبل شركة لازورد عبر رسالة نصية باستخدام معلومات الاتصال التي قدمتها. قد يتم تطبيق أسعار الرسائل والبيانات ويمكنني الرد بـ STOP لإلغاء الاشتراك في أي وقت.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button type="submit" className="btn-primary" style={{ padding: '15px 60px' }}>ابدأ الآن</button>
          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
