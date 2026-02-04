
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let requestRef: number;
    let mouseX = -100;
    let mouseY = -100;
    
    // Smooth trailing variables
    let cursorX = -100;
    let cursorY = -100;
    const speed = 0.15; // Smooth delay

    const animate = () => {
      // Linear interpolation for smooth movement
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;
      
      // If distance is small enough, snap to position to avoid endless micro-calculations
      if (Math.abs(distX) < 0.1 && Math.abs(distY) < 0.1) {
          cursorX = mouseX;
          cursorY = mouseY;
      } else {
          cursorX += distX * speed;
          cursorY += distY * speed;
      }
      
      // Update position directly
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      
      requestRef = requestAnimationFrame(animate);
    };
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && mouseX > 0 && mouseY > 0) {
          setIsVisible(true);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    // Initialize animation loop
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(requestRef);
    };
  }, [isVisible]);

  // Handle Hover State logic
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the target or any of its parents is interactive
      const isInteractive = 
        target.matches('a, button, input, textarea, select, [role="button"]') ||
        target.closest('a, button, input, textarea, select, [role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
        <style>{`
            @media (pointer: fine) {
                body, a, button, input, textarea, select, [role="button"] {
                    cursor: none !important;
                }
            }
        `}</style>
        <div 
            ref={cursorRef}
            className={`pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block will-change-transform`}
            style={{ 
                opacity: isVisible ? 1 : 0, 
                transition: 'opacity 0.3s ease',
            }}
        >
             {/* The cursor shape */}
             <div className={`
                relative flex items-center justify-center rounded-full 
                border-[1.5px] border-cyan-400 bg-black/90 backdrop-blur-[1px]
                transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,0.4)]
                ${isHovering ? 'h-12 w-12 bg-black/40 scale-110' : 'h-6 w-6 scale-100'}
             `}>
                {/* Center dot */}
                <div className={`rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all duration-300 ${isHovering ? 'h-1.5 w-1.5' : 'h-1 w-1'}`}></div>
             </div>
        </div>
    </>
  );
};

export default CustomCursor;
