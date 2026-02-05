
import * as React from 'react';

const AuroraBackground: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let requestRef: number;
    
    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        // Calculate offset (inverse direction for depth/parallax feel)
        // Move range is approx 40px in each direction
        const x = (e.clientX / window.innerWidth - 0.5) * 40; 
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        
        containerRef.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (requestRef) cancelAnimationFrame(requestRef);
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
