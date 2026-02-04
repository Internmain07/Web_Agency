import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 z-50 transition-all duration-300"
      style={{
        width: `${scrollProgress}%`,
        boxShadow: `0 0 10px rgba(6, 182, 212, 0.6)`,
      }}
    />
  );
};

export default ScrollProgress;
