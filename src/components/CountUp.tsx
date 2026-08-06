"use client";

import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  target: number;
  className?: string;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ target, className = '', duration = 2000, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number | null = null;
    let observer: IntersectionObserver | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOut * target);
      
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(target); // Ensure we end exactly on the target
      }
    };

    const startAnimation = () => {
      startTime = null;
      animationFrameId = requestAnimationFrame(animateCount);
    };

    const stopAnimation = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    const currentEl = elementRef.current;
    if (currentEl) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            if (observer && currentEl) {
              observer.unobserve(currentEl);
              observer.disconnect();
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentEl);
    }

    return () => {
      stopAnimation();
      if (observer) {
        if (currentEl) observer.unobserve(currentEl);
        observer.disconnect();
      }
    };
  }, [target, duration]);

  return <span ref={elementRef} className={className}>{count}{suffix}</span>;
}
