import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'لماذا لازورد', href: '#about' },
  { name: 'خدمات المختبرات', href: '#services' },
  { name: 'الحلول', href: '#solutions' },
  { name: 'التسعير', href: '#pricing' },
  { name: 'التعلم', href: '#learning' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Intersection logic manually for highlight if needed, 
      // but IntersectionObserver is better.
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.substring(1));
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar glass-panel ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-icon">
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0A1922" />
                  <stop offset="0.5" stopColor="#6fa8dc" />
                  <stop offset="1" stopColor="#7ec8b8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M50 8 L85 28 L85 72 L50 92 L15 72 L15 28 Z" fill="url(#logoGrad)" opacity="0.8" />
              <path d="M50 18 L72 32 L72 68 L50 82 L28 68 L28 32 Z" stroke="#7ec8b8" strokeWidth="1.5" fill="none" filter="url(#glow)" />
              <path d="M50 30 L62 38 L62 62 L50 70 L38 62 L38 38 Z" stroke="rgba(126,200,184,0.4)" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="8" fill="#7ec8b8" filter="url(#glow)" />
              <circle cx="50" cy="50" r="3" fill="#fff" />
            </svg>
          </div>
          <span className="logo-text">لازورد</span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.substring(1) ? 'active' : ''}
              onClick={() => handleLinkClick(link.href.substring(1))}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <span className="nav-phone" style={{ marginLeft: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>هاتف: 0599998531-(970)</span>
          <a href="#" className="login-link">تسجيل الدخول</a>
          <button className="btn-primary">ابدأ الآن</button>
        </div>

        <button 
          className="menu-toggle" 
          aria-label="القائمة"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style>{`
        .nav-links a.active {
          color: var(--accent-cyan) !important;
        }
        .nav-links a.active::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links.open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(10, 25, 34, 0.95);
            padding: 20px;
            border-radius: var(--border-radius-sm);
            border: 1px solid rgba(126, 200, 184, 0.2);
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};
