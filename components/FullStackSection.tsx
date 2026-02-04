import '../types';
import React, { useRef, useState } from 'react';
import AnimatedInView from './AnimatedInView';
import CountUpStats from './CountUpStats';
import BlurText from './BlurText';

interface SpotlightCardProps {
    icon: string;
    iconBgClass: string;
    iconColorClass: string;
    title: string;
    children: React.ReactNode;
    delay?: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ icon, iconBgClass, iconColorClass, title, children, delay = 0 }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <AnimatedInView delay={delay} className="h-full">
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] p-8 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm"
            >
                {/* Spotlight Gradient */}
                <div
                    className="pointer-events-none absolute -inset-px transition duration-300 z-0"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.1), transparent 40%)`,
                    }}
                />
                
                {/* Unique Animation 1: Dot Pattern Reveal */}
                <div 
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                    }}
                ></div>

                {/* Unique Animation 2: Shimmer Sweep */}
                <div className="shimmer-element absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    <div className="relative">
                         <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconBgClass} ring-1 ring-black/5 dark:ring-white/10 shadow-lg shadow-cyan-500/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 relative z-10`}>
                            <iconify-icon icon={icon} className={`text-3xl ${iconColorClass}`}></iconify-icon>
                        </div>
                        {/* Unique Animation 3: Icon Glow Ring */}
                        <div className={`absolute top-0 left-0 h-14 w-14 rounded-2xl ${iconBgClass} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 group-hover:animate-pulse z-0`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 flex-grow group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                        {children}
                    </p>
                </div>
            </div>
        </AnimatedInView>
    );
};

const FullStackSection: React.FC = () => {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32 overflow-hidden" id="services">
             
             <style>{`
                @keyframes float-pills {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-float-pills {
                    animation: float-pills 4s ease-in-out infinite;
                }
                @keyframes shimmer-sweep {
                    0% { transform: translateX(-150%) skewX(-20deg); }
                    100% { transform: translateX(250%) skewX(-20deg); }
                }
                .group:hover .shimmer-element {
                    animation: shimmer-sweep 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
                }
            `}</style>

            <div className="flex flex-col items-center">
                {/* Centered Text Content */}
                <AnimatedInView className="text-center max-w-4xl mx-auto mb-20 relative z-10" delay={100}>
                    <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                         <BlurText 
                            text="Full-Stack" 
                            className="inline-block"
                            delay={40}
                            animateBy="chars"
                         /> 
                         <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-400 pb-2">
                             Strategy & Architecture
                         </span>
                    </h2>
                    
                    <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 transition-colors">
                        We don't just write code; we architect scalable digital ecosystems. From high-fidelity front-ends to resilient cloud infrastructures, we build the engine that drives your business growth.
                    </p>
                    
                    {/* Horizontal Pills List */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4 animate-float-pills">
                        {['Bespoke Enterprise Solutions', 'High-Conversion Digital Stores', 'Rapid Market-Ready MVPs'].map((item, i) => (
                             <span 
                                key={i} 
                                className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur-md transition-all hover:bg-white hover:scale-105 hover:shadow-lg dark:hover:bg-white/10 hover:ring-cyan-400/50"
                                style={{ animationDelay: `${i * 0.2}s` }}
                             >
                                <iconify-icon icon="solar:check-circle-bold-duotone" className="text-lg text-cyan-500"></iconify-icon>
                                {item}
                             </span>
                        ))}
                    </div>
                </AnimatedInView>

                {/* Cards Grid - 4 Columns */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full relative z-10">
                    <SpotlightCard
                        icon="solar:magic-stick-3-linear"
                        iconBgClass="bg-cyan-100/50 dark:bg-cyan-900/30"
                        iconColorClass="text-cyan-600 dark:text-cyan-400"
                        title="Conversion UI/UX"
                        delay={200}
                    >
                        High-fidelity interfaces that turn casual visitors into loyal customers through strategic, results-driven design.
                    </SpotlightCard>
                    
                    <SpotlightCard
                        icon="solar:cpu-bolt-linear"
                        iconBgClass="bg-sky-100/50 dark:bg-sky-900/30"
                        iconColorClass="text-sky-600 dark:text-sky-400"
                        title="AI-Ready Scale"
                        delay={300}
                    >
                        Modular architecture that integrates AI workflows and scales effortlessly from local landing pages to global platforms.
                    </SpotlightCard>
                    
                    <SpotlightCard
                        icon="solar:rocket-2-linear"
                        iconBgClass="bg-emerald-100/50 dark:bg-emerald-900/30"
                        iconColorClass="text-emerald-600 dark:text-emerald-400"
                        title="Peak Performance"
                        delay={400}
                    >
                        Dominating search rankings with perfect Lighthouse scores and near-instant load times for maximum engagement.
                    </SpotlightCard>
                    
                    <SpotlightCard
                        icon="solar:devices-linear"
                        iconBgClass="bg-teal-100/50 dark:bg-teal-900/30"
                        iconColorClass="text-teal-600 dark:text-teal-400"
                        title="Mobile Accessibility"
                        delay={500}
                    >
                        Fluid responsiveness guaranteeing a flawless, high-performance experience on every device to boost universal reach.
                    </SpotlightCard>
                </div>
            </div>

            {/* Stats Section */}
            <CountUpStats />
        </section>
    );
};

export default FullStackSection;