import React, { useEffect, useRef, Suspense } from 'react';
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
import { ErrorBoundary } from './components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const mainRef = useRef<HTMLElement>(null);
  const rafIdRef = useRef<number>(0);
  const gsapCtxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Scroll to top on load/splash complete
    if (!showSplash) {
      window.scrollTo({ top: 0 });
    }
  }, [showSplash]);

  // Smooth scrolling with Lenis — fixed RAF memory leak
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
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, []);

  // Cinematic scroll-based section reveals — fixed GSAP cleanup
  useEffect(() => {
    if (showSplash) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray('main > section') as HTMLElement[];

        sections.forEach((section, index) => {
          if (index === 0) {
            gsap.set(section, { opacity: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            section,
            { opacity: 0, y: 60 },
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

      // Store context in ref so cleanup can always reach it
      gsapCtxRef.current = ctx;
    }, 100);

    return () => {
      clearTimeout(timer);
      // Revert context if it was created before unmount
      if (gsapCtxRef.current) {
        gsapCtxRef.current.revert();
        gsapCtxRef.current = null;
      }
    };
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Only mount the main 3D Canvas after splash is done — prevents dual WebGL context */}
      {!showSplash && (
        <div className="canvas-container">
          <ErrorBoundary fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 6], fov: 40 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </ErrorBoundary>
        </div>
      )}

      <div className={`app-content ${showSplash ? 'hidden' : 'visible'}`}>
        <Navbar />
        <main ref={mainRef}>
          <Hero />
          <Innovation />
          <RestorativeSolutions />
          <Services />
          <Workflow />
          <About />
          <Stats />
          <Contact />
          <Articles />
          <FAQ />
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
