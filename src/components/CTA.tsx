import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-box > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section container">
      <div className="cta-box glass-panel">
        <h2>ظ‡ظ„ ط£ظ†طھ ط¬ط¯ظٹط¯ ظپظٹ ظ…ط¬ط§ظ„ ط§ظ„ظ…ط³ط­ ط§ظ„ط¶ظˆط¦ظٹطں</h2>
        <p>
          طھظ‚ط¯ظٹظ… ظ†طھط§ط¦ط¬ ظ…طھظˆظ‚ط¹ط© ظ„ظ„ظ…ط±ط¶ظ‰ ط¨ط§ط³طھط®ط¯ط§ظ… ط§ظ„طھظƒظ†ظˆظ„ظˆط¬ظٹط§ ظˆط§ظ„ط£ط¯ظˆط§طھ ط§ظ„ظ…ط¨طھظƒط±ط© ط§ظ„طھظٹ طھظ…ظ†ط­ظƒ ط§ظ„طھط­ظƒظ… ط§ظ„ظ†ظ‡ط§ط¦ظٹ. ط§ط­طµظ„ ط¹ظ„ظ‰ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ 3Shape TRIOS ط§ظ„ظ…ط¬ط§ظ†ظٹ ظ…ط¹ طھط¯ط±ظٹط¨ ظˆط¯ط¹ظ… ط؛ظٹط± ظ…ط­ط¯ظˆط¯.
        </p>
        <button className="btn-primary">ط§ط­طµظ„ ط¹ظ„ظ‰ ط§ظ„ظ…ط§ط³ط­ ط§ظ„ط¶ظˆط¦ظٹ ط§ظ„ظ…ط¬ط§ظ†ظٹ</button>
      </div>
    </section>
  );
};
