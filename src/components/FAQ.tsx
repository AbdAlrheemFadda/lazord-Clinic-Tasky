import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    q: 'ما هو لازورد؟',
    a: 'لازورد هو مختبر أسنان رقمي متكامل يوفر تواصلاً في الوقت الحقيقي بين أطباء الأسنان والمختبر، مع تقنيات مبتكرة لتحسين جودة العمل وسرعة التسليم.',
  },
  {
    q: 'ما هي فوائد طب الأسنان الرقمي؟',
    a: 'طب الأسنان الرقمي يوفر دقة أعلى في التصميم والتصنيع، أوقات تسليم أسرع، تكاليف أقل، وتجربة أفضل للمريض مع إمكانية المعاينة قبل التصنيع.',
  },
  {
    q: 'ما هو مختبر الأسنان الرقمي؟',
    a: 'هو مختبر يستخدم التقنيات الرقمية المتقدمة مثل المسح الضوئي داخل الفم والتصميم بمساعدة الكمبيوتر (CAD) والتصنيع بمساعدة الكمبيوتر (CAM) لإنتاج ترميمات أسنان دقيقة للغاية.',
  },
  {
    q: 'ما هي سير العمل المبتكرة التي تقدمها لازورد؟',
    a: 'نقدم سير عمل رقمي موجه يشمل المسح الضوئي الدقيق، الوصفات الرقمية، معاينة التصاميم ثلاثية الأبعاد، تتبع الحالات في الوقت الفعلي، والتسليم السريع.',
  },
  {
    q: 'ما هي منتجات مختبر الأسنان التي تقدمها لازورد؟',
    a: 'نقدم مجموعة واسعة تشمل تيجان الزركونيا، حلول زراعة الأسنان، أطقم الأسنان الرقمية، الواقيات الليلية، والتقويم الشفاف.',
  },
  {
    q: 'كيف يتم مقارنة لازورد مع مختبرات الأسنان الأخرى؟',
    a: 'لازورد يتميز بالتواصل في الوقت الحقيقي، مختبر رقمي بالكامل، منتجات مبتكرة، خبرة عند الطلب، وأوقات تسليم رائدة في الصناعة مقارنة بالمختبرات التقليدية.',
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-item', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="learning" ref={sectionRef} className="faq-section container">
      <div className="section-header">
        <h2>الأسئلة الشائعة حول لازورد</h2>
      </div>

      <div className="faq-list">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`faq-item glass-panel ${activeIndex === idx ? 'active' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggle(idx)}
              aria-expanded={activeIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span>{item.q}</span>
              <span className="faq-toggle">{activeIndex === idx ? '−' : '+'}</span>
            </button>
            <div 
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className="faq-answer"
            >
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
