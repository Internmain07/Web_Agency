
import * as React from 'react';

export interface ReactNodeLogo {
  node: React.ReactNode;
  title: string;
  href: string;
}

interface ImageLogo {
  src: string;
  alt: string;
  href: string;
}

type Logo = ReactNodeLogo | ImageLogo;

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number; // 0 means pause
  scaleOnHover?: boolean;
  ariaLabel?: string;
}

const isReactNodeLogo = (logo: Logo): logo is ReactNodeLogo => {
  return (logo as ReactNodeLogo).node !== undefined;
};

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 100,
  direction = 'left',
  logoHeight = 40,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = true,
  ariaLabel = "Technology partners",
}) => {
  const [animationDuration, setAnimationDuration] = React.useState(30);
  const trackRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    if (trackRef.current) {
        const trackWidth = trackRef.current.getBoundingClientRect().width / 2;
        if (trackWidth > 0) {
            const duration = trackWidth / speed;
            setAnimationDuration(duration);
        }
    }
  }, [logos, speed, gap, logoHeight]);


  const renderLogo = (logo: Logo, index: number) => {
    const content = isReactNodeLogo(logo) ? logo.node : <img src={logo.src} alt={logo.alt} style={{ height: `${logoHeight}px`, width: 'auto' }} />;
    const title = isReactNodeLogo(logo) ? logo.title : logo.alt;
    
    return (
      <a href={logo.href} key={index} target="_blank" rel="noopener noreferrer" title={title} className={`logo-loop-item ${scaleOnHover ? 'scale-on-hover' : ''}`} style={{ height: `${logoHeight}px`, fontSize: `${logoHeight}px` }}>
        {content}
      </a>
    );
  };

  return (
    <>
      <div className="logo-loop-container">
        <div 
          className={`logo-loop-wrapper direction-${direction} ${hoverSpeed === 0 ? 'pause-on-hover' : ''}`} 
          style={{ '--duration': `${animationDuration}s`, '--gap': `${gap}px` } as React.CSSProperties & Record<string, any>}
          aria-label={ariaLabel}
        >
            <div className="logo-loop-track" ref={trackRef}>
                {logos.map(renderLogo)}
                {logos.map((logo, index) => renderLogo(logo, logos.length + index))}
            </div>
        </div>
      </div>
      <style>{`
        .logo-loop-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            display: flex;
            -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
            mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
        .logo-loop-wrapper {
            display: flex;
            flex-shrink: 0;
        }
        .logo-loop-track {
            display: flex;
            align-items: center;
            gap: var(--gap);
            animation: scroll var(--duration) linear infinite;
        }
        .logo-loop-wrapper.direction-right .logo-loop-track {
            animation-direction: reverse;
        }
        .logo-loop-wrapper.pause-on-hover:hover .logo-loop-track {
            animation-play-state: paused;
        }
        .logo-loop-item {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8; /* slate-400 */
            transition: all 0.2s ease-in-out;
        }
        .logo-loop-item:hover {
            color: #ffffff;
        }
        .logo-loop-item.scale-on-hover:hover {
            transform: scale(1.15);
        }
        
        @keyframes scroll {
            to {
                transform: translateX(-50%);
            }
        }
      `}</style>
    </>
  );
};

export default LogoLoop;
