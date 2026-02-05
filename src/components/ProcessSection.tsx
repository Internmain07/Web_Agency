import '../types';
import * as React from 'react';
import AnimatedInView from './AnimatedInView';

const phases = [
    {
        id: "01",
        phase: "Phase One",
        title: "Strategic Discovery",
        headline: "Architecting the Foundation",
        description: "Before a single pixel is moved, we define your path to ROI. We conduct a deep Market Analysis and study User Psychology to build a technical roadmap.",
        tags: ["Competitor Gap Analysis", "User Journey Mapping", "Scalability"]
    },
    {
        id: "02",
        phase: "Phase Two",
        title: "High-Fidelity Design",
        headline: "Visualizing the Future",
        description: "We translate strategy into immersive User Interfaces. Utilizing Antigravity design principles, we craft the \"Soul\" of your brand ensuring every interaction feels premium.",
        tags: ["Interactive Prototypes", "Design Systems", "Motion Guidelines"]
    },
    {
        id: "03",
        phase: "Phase Three",
        title: "Full-Stack Deployment",
        headline: "Engineering for Velocity",
        description: "We turn vision into high-performance reality. Utilizing Next.js and secure Cloud Architectures, we deliver a pixel-perfect, SEO-dominant ecosystem.",
        tags: ["Performance Code", "Security Audit", "AI-Integration"]
    },
    {
        id: "04",
        phase: "Phase Four",
        title: "Growth & Optimization",
        headline: "Continuous Market Dominance",
        description: "Launch is just the start. We move into a proactive partnership, utilizing Data Analytics to ensure your platform remains ahead of emerging market shifts.",
        tags: ["Analytics", "Monitoring", "Iterative UX"]
    }
];

const ProcessSection: React.FC = () => {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32 scroll-mt-32 overflow-hidden" id="process">
            {/* Custom Animations Styles */}
            <style>{`
                @keyframes beam-flow {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 0% 200%; }
                }
                .animate-beam {
                    background-size: 100% 200%;
                    animation: beam-flow 4s linear infinite;
                }
                @keyframes pulse-ring {
                    0% { box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.4); }
                    70% { box-shadow: 0 0 0 12px rgba(34, 211, 238, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(34, 211, 238, 0); }
                }
                .animate-pulse-ring {
                    animation: pulse-ring 3s cubic-bezier(0.24, 0, 0.38, 1) infinite;
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                .delay-1000 { animation-delay: 1s; }
                .delay-2000 { animation-delay: 2s; }
            `}</style>

            {/* Background Elements - Enhanced */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-900/10"></div>
            <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-blue-600/5 blur-[100px] dark:bg-blue-900/10"></div>

            <AnimatedInView className="mb-24 text-center md:mb-32 relative z-10" delay={100}>
                <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl transition-colors">
                    Our Web Development & Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Build Process</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 transition-colors">
                    We don't just build websites; we engineer market leaders. Our four-stage web design and development framework ensures your vision is validated, designed, and deployed for maximum impact.
                </p>
            </AnimatedInView>

            <div className="relative">
                {/* Central Line - Desktop - With Animated Beam */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/5 -translate-x-1/2 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-70 animate-beam"></div>
                </div>
                
                {/* Mobile Line - With Animated Beam */}
                <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/5 overflow-hidden">
                     <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-70 animate-beam"></div>
                </div>

                <div className="space-y-16 lg:space-y-0">
                    {phases.map((phase, index) => {
                        const isEven = index % 2 === 0;
                        
                        return (
                            <div key={phase.id} className={`relative flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''} lg:items-center`}>
                                
                                {/* Desktop Spacer */}
                                <div className="hidden lg:block lg:w-1/2 lg:flex-none" />

                                {/* Node with Pulse Effect */}
                                <div className="absolute left-6 top-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-black ring-4 ring-slate-100 dark:ring-neutral-950 border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform hover:scale-110 duration-300 animate-pulse-ring">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono z-10">{phase.id}</span>
                                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md"></div>
                                </div>

                                {/* Horizontal Connector Line (Desktop) */}
                                <div className={`hidden lg:block absolute top-1/2 h-px w-20 bg-gradient-to-r from-cyan-500/50 to-transparent z-0 ${isEven ? 'right-1/2 mr-6 origin-right' : 'left-1/2 ml-6 origin-left'}`}></div>

                                {/* Content Wrapper */}
                                <div className={`pl-20 lg:pl-0 lg:w-1/2 lg:flex-none flex ${isEven ? 'lg:justify-end lg:pr-24' : 'lg:justify-start lg:pl-24'}`}>
                                    <AnimatedInView 
                                        animationType="scale-in"
                                        delay={index * 150}
                                        className="w-full max-w-lg"
                                    >
                                        <div className={`group relative overflow-hidden rounded-3xl bg-white/40 dark:bg-white/[0.03] ring-1 ring-slate-200 dark:ring-white/10 p-8 transition-all duration-500 hover:ring-cyan-500/40 hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.25)] backdrop-blur-xl animate-float-slow ${index % 2 === 0 ? '' : 'delay-1000'}`}>
                                            
                                            {/* Hover Glow Gradient */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            
                                            {/* Shimmer Border Effect on Hover */}
                                             <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-white/20 dark:group-hover:ring-white/10 transition-all duration-500"></div>

                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-50/50 dark:bg-cyan-950/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 transition-colors">
                                                        {phase.phase}
                                                    </span>
                                                    <iconify-icon icon="solar:star-fall-minimalistic-2-linear" className="text-xl text-slate-400 dark:text-white/20 group-hover:text-cyan-400 transition-colors duration-500"></iconify-icon>
                                                </div>
                                                
                                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 dark:group-hover:from-cyan-300 dark:group-hover:to-blue-300 transition-all duration-300">
                                                    {phase.title}
                                                </h3>
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-5 border-b border-slate-100 dark:border-white/5 pb-4">
                                                    {phase.headline}
                                                </p>
                                                
                                                <p className="text-base leading-relaxed text-slate-600 dark:text-zinc-300 mb-6 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                                                    {phase.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {phase.tags.map((tag, i) => (
                                                        <span key={i} className="inline-flex items-center rounded-md bg-white/50 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-zinc-400 ring-1 ring-inset ring-slate-200 dark:ring-white/10 transition-all duration-300 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 group-hover:ring-cyan-200 dark:group-hover:ring-cyan-500/30">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedInView>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;