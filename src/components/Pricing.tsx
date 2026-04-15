import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="pricing-section container">
      <div className="section-header">
        <span className="section-tag">التسعير</span>
        <h2>خطط مرنة لممارستك</h2>
        <p>نحن نقدم شفافية تامة في الأسعار مع خيارات تناسب جميع أحجام العيادات.</p>
      </div>

      <div className="about-grid">
        <div className="pricing-card glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h3>الخيار الرقمي المجاني</h3>
          <div style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--accent-cyan)' }}>$0</div>
          <p style={{ marginBottom: '20px' }}>احصل على الماسح الضوئي داخل الفم مجانًا عند البدء بالعمل مع مختبرنا.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '10px' }}>✓ ماسح ضوئي 3Shape TRIOS</li>
            <li style={{ marginBottom: '10px' }}>✓ تدريب غير محدود للفريق</li>
            <li style={{ marginBottom: '10px' }}>✓ دعم فني على مدار الساعة</li>
          </ul>
          <button className="btn-primary">ابدأ الآن</button>
        </div>

        <div className="pricing-card glass-panel" style={{ padding: '40px', textAlign: 'center', borderColor: 'var(--accent-cyan)' }}>
          <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-cyan)', color: '#0A1922', padding: '4px 14px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: 'bold' }}>الأكثر طلبًا</div>
          <h3>تيجان الزركونيا</h3>
          <div style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--accent-cyan)' }}>تواصل معنا</div>
          <p style={{ marginBottom: '20px' }}>جودة فائقة في 5 أيام فقط مع ضمان الملاءمة التامة.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '10px' }}>✓ تسليم في 5 أيام</li>
            <li style={{ marginBottom: '10px' }}>✓ تصميم رقمي دقيق</li>
            <li style={{ marginBottom: '10px' }}>✓ تواصل مباشر مع الفني</li>
          </ul>
          <button className="btn-primary">اطلب عرض سعر</button>
        </div>

        <div className="pricing-card glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h3>الحلول الكاملة</h3>
          <div style={{ fontSize: '2.5rem', margin: '20px 0', color: 'var(--accent-cyan)' }}>مخصص</div>
          <p style={{ marginBottom: '20px' }}>حلول متكاملة للعيادات الكبيرة والمجمعات الطبية.</p>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '10px' }}>✓ سير عمل رقمي بالكامل</li>
            <li style={{ marginBottom: '10px' }}>✓ تقييمات حالة 5 نجوم</li>
            <li style={{ marginBottom: '10px' }}>✓ بوابة تتبع الحالات</li>
          </ul>
          <button className="btn-secondary">تحدث مع خبير</button>
        </div>
      </div>
    </section>
  );
};
