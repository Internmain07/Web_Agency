
import * as React from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  startDelay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className,
}) => {
  const parts = React.useMemo(() => {
    return animateBy === 'words' ? text.split(' ') : text.split('');
  }, [text, animateBy]);

  const animationDuration = 600; // in ms
  const totalAnimationTime = startDelay + (parts.length - 1) * delay + animationDuration;

  React.useEffect(() => {
    if (onAnimationComplete) {
      const timer = setTimeout(onAnimationComplete, totalAnimationTime);
      return () => clearTimeout(timer);
    }
  }, [onAnimationComplete, totalAnimationTime]);

  const getAnimationName = () => {
    switch (direction) {
      case 'top': return 'blur-in-top';
      case 'bottom': return 'blur-in-bottom';
      case 'left': return 'blur-in-left';
      case 'right': return 'blur-in-right';
      default: return 'blur-in-top';
    }
  };

  return (
    <span className={className}>
      {parts.map((part, index) => (
        <span
          key={index}
          className="inline-block opacity-0"
          style={{
            animationName: getAnimationName(),
            animationDuration: `${animationDuration}ms`,
            animationFillMode: 'forwards',
            animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            animationDelay: `${startDelay + index * delay}ms`,
          }}
        >
          {animateBy === 'words' 
            ? part + (index < parts.length - 1 ? '\u00A0' : '')
            : (part === ' ' ? '\u00A0' : part)
          }
        </span>
      ))}
    </span>
  );
};

export default BlurText;
