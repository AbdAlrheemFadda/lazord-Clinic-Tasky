import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Innovation } from './components/Innovation';
import { Workflow } from './components/Workflow';
import { Services } from './components/Services';
import { RestorativeSolutions } from './components/RestorativeSolutions';
import { Articles } from './components/Articles';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene } from './components/Scene';
import { SplashScreen } from './components/SplashScreen';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const mainRef = useRef<HTMLElement>(null);

  const handleSplashComplete = React.useCallback(() => {
    setShowSplash(false);
  }, []);

  useEffect(() => {
    // Scroll to top on load/splash complete
    if (!showSplash) {
      window.scrollTo(0, 0);
    }
  }, [showSplash]);

  // Smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Cinematic scroll-based section reveals
  useEffect(() => {
    if (showSplash) return;

    // Wait a frame for DOM to be ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray('main > section') as HTMLElement[];

        sections.forEach((section, index) => {
          // Hero section (first) — always visible, no scroll animation
          if (index === 0) {
            gsap.set(section, { opacity: 1, y: 0 });
            return;
          }

          // Each subsequent section gets a cinematic reveal
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 92%',
                end: 'top 40%',
                toggleActions: 'play none none none',
              },
            }
          );

          // Parallax-like depth for section inner content
          const header = section.querySelector('.section-header');
          if (header) {
            gsap.fromTo(
              header,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      }, mainRef.current!);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [showSplash]);

  return (
    <>
      <React.Suspense fallback={null}>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        
        <div className="canvas-container">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 40 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene />
          </Canvas>
        </div>
      </React.Suspense>

      <div className={`app-content ${showSplash ? 'hidden' : 'visible'}`}>
        <Navbar />
        <main ref={mainRef}>
          <Hero />
          <Innovation /> {/* Section 2: Future of Digital Dentistry */}
          <RestorativeSolutions /> {/* Section 3 */}
          <Services /> {/* Section 4: Products */}
          <Workflow /> {/* Section 5: Workflow Transformation */}
          <About /> {/* Section 6: Better Results */}
          <Stats /> {/* Section 7: Statistics Banner */}
          <Contact /> {/* Section 8: Contact Form */}
          <Articles /> {/* Section 9: Articles */}
          <FAQ /> {/* Section 10: FAQ */}
        </main>
        <Footer />
      </div>

      <style>{`
        .app-content.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .app-content.visible {
          opacity: 1;
          transition: opacity 2s var(--transition-smooth);
        }
        
        /* Sections start invisible — GSAP ScrollTrigger handles reveal */
        main > section {
          opacity: 0;
          will-change: opacity, transform;
        }
        
        /* Hero always visible immediately after splash */
        main > section:first-child {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
