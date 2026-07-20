import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScrollDirectionSection({ children, id, className }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const lastScrollY = useRef(0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        // Determine scroll direction: scrolling up means currentScrollY is less than lastScrollY
        const isScrollingUp = currentScrollY < lastScrollY.current;

        if (entry.isIntersecting) {
          if (isScrollingUp || !hasEntered) {
            // Trigger slide-up animation when scrolling up or entering for the first time
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            });
            setHasEntered(true);
          }
        } else {
          // Reset position when out of view so it can slide up again on next scroll up
          controls.start({
            opacity: 0,
            y: 50,
            transition: { duration: 0.4 }
          });
        }
        
        lastScrollY.current = currentScrollY;
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, hasEntered]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
