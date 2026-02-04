import * as React from 'react';
import LogoLoop, { ReactNodeLogo } from './LogoLoop';
import BlurText from './BlurText';
import AnimatedInView from './AnimatedInView';
import { Meteors } from './ui/meteors';
import { 
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel, SiFigma,
    SiSanity, SiSupabase, SiPrisma, SiFramer, SiThreedotjs, SiPostgresql, SiGithub 
} from 'react-icons/si';

const techLogos: ReactNodeLogo[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiSanity />, title: "Sanity", href: "https://www.sanity.io" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];


const HeroSection: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative overflow-hidden">
            <AnimatedInView className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" delay={100}>
                <div className="pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32 max-w-7xl mr-auto ml-auto relative">
                    
                    {/* Meteors Effect: Positioned absolutely to act as a background for the heading */}
                    <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none z-0">
                        <Meteors number={40} />
                    </div>

                    <div className="text-center relative z-10">
                        <h1 className="mx-auto max-w-5xl text-4xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl transition-colors duration-300">
                            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-4 mb-2 sm:mb-1 align-middle">
                                <span className="relative inline-block">
                                    {/* Animated background elements */}
                                    <span
                                        className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-cyan-600/40 via-sky-500/40 to-teal-500/40 opacity-0 blur-3xl"
                                        style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="shimmer-border absolute -inset-px z-0 block overflow-hidden rounded-lg opacity-0"
                                        style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
                                    ></span>

                                    {/* The animated text */}
                                    <span className="relative z-10 px-2 py-1">
                                        <BlurText
                                            text="High-end design"
                                            delay={35}
                                            animateBy="chars"
                                            direction="bottom"
                                            startDelay={200}
                                            className="text-slate-900 dark:text-white drop-shadow-sm transition-colors duration-300"
                                        />
                                    </span>
                                </span>
                                <span className="text-slate-800 dark:text-white/95 transition-colors duration-300">
                                    <BlurText
                                        text="shouldn't"
                                        delay={50}
                                        animateBy="words"
                                        direction="top"
                                        startDelay={440}
                                    />
                                </span>
                            </div>
                            <div className="block mt-2 sm:mt-4">
                                <span className="text-slate-800 dark:text-white/95 inline-block transition-colors duration-300">
                                     <BlurText
                                        text="require a high-end headache."
                                        delay={50}
                                        animateBy="words"
                                        direction="top"
                                        startDelay={550}
                                    />
                                </span>
                            </div>
                        </h1>
                        
                        <AnimatedInView animationType="scale-in" delay={200}>
                            <p className="mx-auto mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300 px-2 space-y-1" style={{ textShadow: '0 1px 10px rgba(34, 211, 238, 0.15)' }}>
                                <div className="text-slate-900 dark:text-white font-semibold">Elite Web Design & Development Services for Businesses</div>
                                <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 font-semibold">That Refuse to Blend In</div>
                                <div className="text-slate-600 dark:text-slate-300">Aesthetically stunning, blazing-fast, and built to convert with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 font-semibold">premium craftsmanship</span></div>
                            </p>
                        </AnimatedInView>

                        <AnimatedInView delay={300}>
                            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a 
                                    href="#contact" 
                                    onClick={scrollToContact}
                                    className="relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-slate-900/5 via-slate-900/10 to-slate-900/5 dark:from-white/5 dark:via-white/10 dark:to-white/5 px-6 py-3 text-base font-medium text-slate-900 dark:text-white/90 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-1 ring-black/5 dark:ring-0 transition-all duration-300 hover:scale-105 hover:border-slate-400/40 hover:bg-gradient-to-br hover:from-slate-500/30 hover:to-slate-500/20 hover:text-black dark:hover:text-white" 
                                    style={{ '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '6px' } as React.CSSProperties & Record<string, any>}
                                >
                                    Book Consultation
                                    <iconify-icon icon="solar:chat-round-dots-linear" className="text-lg" aria-hidden="true"></iconify-icon>
                                </a>
                            </div>
                        </AnimatedInView>
                    </div>

                    <AnimatedInView delay={400} className="mt-16 sm:mt-24">
                        <LogoLoop
                            logos={techLogos}
                            speed={80}
                            direction="left"
                            logoHeight={28}
                            gap={60}
                        />
                    </AnimatedInView>
                    
                    <div className="pointer-events-none absolute inset-x-0 top-24 -z-0 flex justify-center">
                        <div className="h-72 w-[80%] max-w-4xl rounded-full bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl"></div>
                    </div>
                </div>
            </AnimatedInView>
        </section>
    );
};

export default HeroSection;