
export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>ظ‡ظ„ ظ…ط§ط²ظ„طھ طھط£ط®ط° ط§ظ„ط§ظ†ط·ط¨ط§ط¹ط§طھ ط§ظ„ط¬ط³ط¯ظٹط©طں</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>ظ†ظ‚ط¯ظ… ظ„ظƒ ظƒظ„ ظ…ط§ طھط­طھط§ط¬ظ‡ ظ„ظ„ط¨ط¯ط، ظپظٹ ط·ط¨ ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹ â€” ط¨ظ…ط§ ظپظٹ ط°ظ„ظƒ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط¯ط§ط®ظ„ ط§ظ„ظپظ…</p>
        </div>

        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div className="footer-col">
            <h4>ظ„ط§ط²ظˆط±ط¯</h4>
            <a href="#">ط§ظ„طµظپط­ط© ط§ظ„ط±ط¦ظٹط³ظٹط©</a>
            <a href="#">طھظ‚ظٹظٹظ…ط§طھ</a>
            <a href="#">ظˆط¸ط§ط¦ظپ</a>
            <a href="#">ط³ظٹط§ط³ط© ط§ظ„ط®طµظˆطµظٹط©</a>
          </div>

          <div className="footer-col">
            <h4>ظ…ظ†طھط¬ط§طھ</h4>
            <a href="#">ظ…ظ†طھط¬ط§طھ</a>
            <a href="#">ط¥طھظ‚ط§ظ† ظˆط§ظ„طھط¹ظ„ظ…</a>
            <a href="#">ط£ط·ظ‚ظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ط±ظ‚ظ…ظٹط©</a>
            <a href="#">ط£ظ‚ظٹظ… ط§ظ„ط£ط³ظ†ط§ظ† ط§ظ„ظپط±ط¹</a>
            <a href="#">ط­ظ„ظˆظ„ ط§ظ„ط²ط±ط¹</a>
          </div>

          <div className="footer-col">
            <h4>ظ…ظ…ط§ط±ط³ط§طھ</h4>
            <a href="#">ظ‡ظ„ ط¨ط¯ط£طھطں ط§ط¨ط¯ط£ ظ‡ظ†ط§</a>
            <a href="#">ظ‚طµطµ ط§ظ„ظ†ط¬ط§ط­</a>
            <a href="#">ط£ظ‚ظٹظ… ط¥ظ† ط§ظ„ظ…ظ…ط§ط±ط³ط©</a>
            <a href="#">طھط³ط¬ظٹظ„ ط§ظ„ط¯ط®ظˆظ„</a>
          </div>

          <div className="footer-col">
            <h4>ظ…ظˆط§ط±ط¯</h4>
            <a href="#">ط¬ط¯ظٹط¯ ظپظٹ ظ…ظ…ط§ط±ط³ط§طھ ط§ظ„ظ…ط³ط­</a>
            <a href="#">ط³ط§ط± ظ…ط³ط­ ط´ط§ظ…ظ„</a>
            <a href="#">ط±ط§ط¬ط¹ ط¯ظ„ظٹظ„ ط®ط¯ظ…ط§طھ ظ…ط®طھط¨ط± ط¯ط§ظ†ط¯ظٹ</a>
            <a href="#">ط®ط° ظ…ظ…ط§ط±ط³طھظƒ ط§ظ„ط±ظ‚ظ…ظٹط©</a>
            <a href="#">ط§طھطµظ„ ط¹ظ„ظ‰ ط¬ظ…ظٹط¹ ط´ظٹظˆط®</a>
          </div>
        </div>

        <div className="footer-divider" style={{ margin: '60px 0 30px', borderTop: '1px solid rgba(126,200,184,0.04)' }} />

        <div className="footer-bottom">
          <p className="footer-copyright">
            آ© {new Date().getFullYear()} ظ„ط§ط²ظˆط±ط¯. ط¬ظ…ظٹط¹ ط§ظ„ط­ظ‚ظˆظ‚ ظ…ط­ظپظˆط¸ط©.
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
