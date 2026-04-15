
export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>هل مازلت تأخذ الانطباعات الجسدية؟</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>نقدم لك كل ما تحتاجه للبدء في طب الأسنان الرقمي — بما في ذلك الماسح الضوئي داخل الفم</p>
        </div>

        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div className="footer-col">
            <h4>لازورد</h4>
            <a href="#">الصفحة الرئيسية</a>
            <a href="#">تقييمات</a>
            <a href="#">وظائف</a>
            <a href="#">سياسة الخصوصية</a>
          </div>

          <div className="footer-col">
            <h4>منتجات</h4>
            <a href="#">منتجات</a>
            <a href="#">إتقان والتعلم</a>
            <a href="#">أطقم الأسنان الرقمية</a>
            <a href="#">أقيم الأسنان الفرع</a>
            <a href="#">حلول الزرع</a>
          </div>

          <div className="footer-col">
            <h4>ممارسات</h4>
            <a href="#">هل بدأت؟ ابدأ هنا</a>
            <a href="#">قصص النجاح</a>
            <a href="#">أقيم إن الممارسة</a>
            <a href="#">تسجيل الدخول</a>
          </div>

          <div className="footer-col">
            <h4>موارد</h4>
            <a href="#">جديد في ممارسات المسح</a>
            <a href="#">سار مسح شامل</a>
            <a href="#">راجع دليل خدمات مختبر داندي</a>
            <a href="#">خذ ممارستك الرقمية</a>
            <a href="#">اتصل على جميع شيوخ</a>
          </div>
        </div>

        <div className="footer-divider" style={{ margin: '60px 0 30px', borderTop: '1px solid rgba(126,200,184,0.04)' }} />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} لازورد. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
