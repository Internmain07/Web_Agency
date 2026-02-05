
import * as React from 'react';

const AuroraBackground: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const lastUpdateRef = React.useRef<number>(0);
  const animationFrameRef = React.useRef<number>();

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        // Throttle updates to 16ms (one frame at 60fps)
        const now = Date.now();
        if (now - lastUpdateRef.current < 16) return;
        lastUpdateRef.current = now;

        // Use requestAnimationFrame to batch DOM updates
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          if (!containerRef.current) return;
          
          // Calculate offset (inverse direction for depth/parallax feel)
          // Move range is approx 40px in each direction
          const x = (e.clientX / window.innerWidth - 0.5) * 40; 
          const y = (e.clientY / window.innerHeight - 0.5) * 40;
          
          containerRef.current!.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
        });
    };

    // Use passive listener to improve scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
    };
  }, []);

  return (
    <div className="aurora-background pointer-events-none">
        <div 
            ref={containerRef} 
            className="relative w-full h-full transition-transform duration-500 ease-out will-change-transform"
        >
            <div className="aurora-shape shape1"></div>
            <div className="aurora-shape shape2"></div>
            <div className="aurora-shape shape3"></div>
            <div className="aurora-shape shape4"></div>
        </div>
    </div>
  );
};

export default AuroraBackground;
