"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 bg-stone-900/90 hover:bg-emerald-700 text-stone-200 hover:text-white border border-stone-700/80 p-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center group"
      aria-label="Kembali ke atas halaman"
      title="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
