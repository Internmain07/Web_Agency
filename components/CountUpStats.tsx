
import * as React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import AnimatedInView from './AnimatedInView';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2500, suffix = '', prefix = '' }) => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef<HTMLSpanElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.2, triggerOnce: true });
    
    React.useEffect(() => {
        if (!isVisible) return;
        
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(ease * end));
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const CountUpStats: React.FC = () => {
    return (
        <AnimatedInView delay={300} className="w-full mt-24">
            <div className="group relative isolate overflow-hidden rounded-3xl bg-white/70 dark:bg-neutral-950 px-6 py-12 sm:px-12 md:py-16 ring-1 ring-slate-200 dark:ring-white/10 transition-all duration-500 hover:ring-slate-300 dark:hover:ring-white/20">
                {/* Background Effects */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 to-transparent dark:from-cyan-900/50 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.cyan.900),transparent)] opacity-50 dark:opacity-20 transition-colors" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/50 dark:bg-neutral-950 shadow-xl shadow-cyan-600/5 dark:shadow-cyan-600/10 ring-1 ring-slate-200/50 dark:ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center transition-colors" />
                
                {/* Glowing Orbs */}
                <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-200/40 dark:bg-cyan-500/10 blur-[80px] transition-colors"></div>
                <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[300px] w-[300px] rounded-full bg-sky-200/40 dark:bg-sky-500/10 blur-[80px] transition-colors"></div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-3 text-center">
                        
                        {/* Stat 1 */}
                        <div className="flex flex-col gap-y-3 relative">
                            <dt className="text-sm font-semibold leading-6 text-cyan-600 dark:text-cyan-300 uppercase tracking-widest transition-colors">Average Page Speed</dt>
                            <dd className="order-first text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl filter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-colors">
                                <Counter end={98} suffix="%" />
                            </dd>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200 dark:bg-white/10 hidden md:block lg:right-[-1rem] transition-colors"></div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col gap-y-3 relative">
                            <dt className="text-sm font-semibold leading-6 text-sky-600 dark:text-sky-300 uppercase tracking-widest transition-colors">SEO Audit Score</dt>
                            <dd className="order-first text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl filter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-colors">
                                <div className="flex items-baseline justify-center">
                                    <Counter end={100} />
                                    <span className="text-2xl text-slate-400 dark:text-white/40 ml-1 font-medium tracking-normal transition-colors">/100</span>
                                </div>
                            </dd>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200 dark:bg-white/10 hidden md:block lg:right-[-1rem] transition-colors"></div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col gap-y-3">
                            <dt className="text-sm font-semibold leading-6 text-emerald-600 dark:text-emerald-300 uppercase tracking-widest transition-colors">Conversion Increase</dt>
                            <dd className="order-first text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl filter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-colors">
                                <div className="flex items-center justify-center">
                                    <Counter end={45} suffix="%" />
                                    <span className="ml-1 text-emerald-500 dark:text-emerald-400 transition-colors">+</span>
                                </div>
                            </dd>
                        </div>

                    </div>
                </div>
            </div>
        </AnimatedInView>
    );
};

export default CountUpStats;
