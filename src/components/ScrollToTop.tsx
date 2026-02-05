import '../types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

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
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="group fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:bg-neutral-900/90 dark:text-slate-200 dark:ring-white/10"
    >
      <iconify-icon
        icon="solar:alt-arrow-up-linear"
        className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5"
      ></iconify-icon>
    </button>
  );
};

export default ScrollToTop;