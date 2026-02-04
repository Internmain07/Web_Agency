
import { useEffect, useState, useRef, RefObject } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: ObserverOptions = { threshold: 0.1, rootMargin: '0px', triggerOnce: true }
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else {
        if (!triggerOnce) {
            setIntersecting(false);
        }
      }
    }, { threshold, rootMargin });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isIntersecting;
}
