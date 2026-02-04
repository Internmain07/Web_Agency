
import * as React from 'react';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className = "" }: MeteorsProps) => {
  const [meteors, setMeteors] = React.useState<{ 
      style: React.CSSProperties; 
      headColor: string; 
      tailColor: string; 
  }[]>([]);

  React.useEffect(() => {
    // Theme-aware colors matching the site's aurora palette
    const colors = [
        { head: 'bg-cyan-400', tail: 'from-cyan-400' },
        { head: 'bg-sky-400', tail: 'from-sky-400' },
        { head: 'bg-teal-300', tail: 'from-teal-300' },
        { head: 'bg-blue-400', tail: 'from-blue-400' },
        { head: 'bg-indigo-400', tail: 'from-indigo-400' },
        { head: 'bg-white', tail: 'from-white' }, 
    ];

    const styles = [...new Array(number)].map(() => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
            style: {
                top: 0,
                // Spread across the container
                left: Math.floor(Math.random() * 100) + "%",
                // Varied delays for natural feel
                animationDelay: Math.random() * (0.8) + 0.2 + "s",
                // Varied duration
                animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
            },
            headColor: color.head,
            tailColor: color.tail,
        }
    });
    setMeteors(styles);
  }, [number]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] ${meteor.headColor}`}
          style={meteor.style}
        >
          {/* Meteor Tail - Enhanced length and gradient */}
          <div className={`pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[60px] sm:w-[100px] -translate-y-1/2 bg-gradient-to-r to-transparent ${meteor.tailColor}`} />
        </span>
      ))}
    </div>
  );
};
