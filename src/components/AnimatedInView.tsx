import * as React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedInViewProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number; // in ms
  duration?: number; // in ms
  animationType?: 'fade-up' | 'scale-in' | 'fade-left' | 'fade-right' | 'slide-down' | 'zoom-in';
  triggerOnce?: boolean;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

const AnimatedInView: React.FC<AnimatedInViewProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 800,
  animationType = 'fade-up',
  triggerOnce = true,
  as: Tag = 'div',
  // Fix: Accept style prop to address type error in components/PricingSection.tsx
  style: userStyle,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold, triggerOnce });

  const baseClasses = `transition-all ease-out`;
  
  let initialStateClasses = 'opacity-0';
  if (animationType === 'fade-up') {
    initialStateClasses += ' translate-y-5';
  } else if (animationType === 'scale-in') {
    initialStateClasses += ' scale-95 translate-y-5';
  } else if (animationType === 'fade-left') {
    initialStateClasses += ' translate-x-5';
  } else if (animationType === 'fade-right') {
    initialStateClasses += ' -translate-x-5';
  } else if (animationType === 'slide-down') {
    initialStateClasses += ' -translate-y-5';
  } else if (animationType === 'zoom-in') {
    initialStateClasses += ' scale-75';
  }

  const visibleStateClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  // Fix: Merge user-provided styles with the component's animation styles.
  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    ...userStyle,
  };

  return (
    <Tag
      ref={ref}
      className={`${baseClasses} ${className ?? ''} ${isVisible ? visibleStateClasses : initialStateClasses}`}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default AnimatedInView;
