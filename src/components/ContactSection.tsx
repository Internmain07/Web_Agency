import '../types';
import * as React from 'react';
import ElectricBorder from './ElectricBorder';
import AnimatedInView from './AnimatedInView';

const ContactSection: React.FC = () => {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 scroll-mt-32" id="contact">
            <AnimatedInView className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-neutral-950 ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur transition-colors duration-300">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-100 dark:bg-cyan-500/10 blur-3xl transition-colors"></div>
                <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-100 dark:bg-sky-500/10 blur-3xl transition-colors"></div>

                <div className="grid grid-cols-1 items-start gap-12 p-6 lg:grid-cols-2 lg:gap-16 sm:p-10">
                    {/* Left side: Info */}
                    <AnimatedInView className="text-left pt-4" delay={100}>
                        <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl transition-colors">
                            Ready to bring your <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">vision to life?</span>
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 transition-colors">
                            Tell us about your project, and we'll craft a custom solution that exceeds expectations. Expect a response within 24 hours !!
                        </p>
                        <div className="mt-10 space-y-6 text-slate-600 dark:text-slate-300 transition-colors">
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100/50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300 ring-1 ring-cyan-500/20">
                                    <iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Email</h3>
                                    <p className="text-sm mt-0.5">contact@i-intern.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100/50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform duration-300 ring-1 ring-sky-500/20">
                                    <iconify-icon icon="solar:clock-circle-linear" className="text-xl"></iconify-icon>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Business Hours</h3>
                                    <p className="text-sm mt-0.5">Monday - Friday</p>
                                    <p className="text-sm">9:00 AM - 6:00 PM (IST)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100/50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 ring-1 ring-emerald-500/20">
                                    <iconify-icon icon="solar:phone-linear" className="text-xl"></iconify-icon>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Phone</h3>
                                    <p className="text-sm mt-0.5">+91 93456 96576</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedInView>

                    {/* Right side: Form */}
                    <AnimatedInView delay={200} className="w-full">
                        <ElectricBorder
                          color="#22d3ee"
                          speed={1}
                          chaos={0.12}
                          borderRadius={24}
                        >
                            <form action="#" method="POST" className="space-y-5 rounded-3xl bg-white/80 dark:bg-black/40 p-8 sm:p-10 backdrop-blur-md transition-colors relative overflow-hidden">
                                {/* Subtle noise overlay for texture */}
                                <div className="pointer-events-none absolute inset-0 bg-white/40 dark:bg-white/5 opacity-50 mix-blend-overlay"></div>
                                
                                <div className="relative z-10 space-y-5">
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div className="group relative z-0">
                                            {/* Animated Gradient Border */}
                                            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 animate-gradient-border -z-10 blur-[2px]"></div>
                                            
                                            <input 
                                                type="text" 
                                                name="full-name" 
                                                id="full-name" 
                                                placeholder=" "
                                                className="peer block w-full rounded-xl border-0 bg-slate-100/80 dark:bg-white/5 dark:focus:bg-neutral-900/90 pt-7 pb-3 px-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-300 placeholder:text-transparent hover:bg-slate-50 dark:hover:bg-white/10" 
                                            />
                                            <label 
                                                htmlFor="full-name" 
                                                className="absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform text-sm font-medium text-slate-500 dark:text-slate-400 duration-300 
                                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                                                peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 pointer-events-none 
                                                peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:scale-75"
                                            >
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="group relative z-0">
                                            {/* Animated Gradient Border */}
                                            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 animate-gradient-border -z-10 blur-[2px]"></div>

                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                placeholder=" "
                                                className="peer block w-full rounded-xl border-0 bg-slate-100/80 dark:bg-white/5 dark:focus:bg-neutral-900/90 pt-7 pb-3 px-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-300 placeholder:text-transparent hover:bg-slate-50 dark:hover:bg-white/10" 
                                            />
                                            <label 
                                                htmlFor="email" 
                                                className="absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform text-sm font-medium text-slate-500 dark:text-slate-400 duration-300 
                                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                                                peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 pointer-events-none 
                                                peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:scale-75"
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                    </div>

                                    <div className="group relative z-0">
                                        {/* Animated Gradient Border */}
                                        <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 animate-gradient-border -z-10 blur-[2px]"></div>

                                        <input 
                                            type="text" 
                                            name="company" 
                                            id="company" 
                                            placeholder=" "
                                            className="peer block w-full rounded-xl border-0 bg-slate-100/80 dark:bg-white/5 dark:focus:bg-neutral-900/90 pt-7 pb-3 px-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-300 placeholder:text-transparent hover:bg-slate-50 dark:hover:bg-white/10" 
                                        />
                                        <label 
                                            htmlFor="company" 
                                            className="absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform text-sm font-medium text-slate-500 dark:text-slate-400 duration-300 
                                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                                            peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 pointer-events-none 
                                            peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:scale-75"
                                        >
                                            Company
                                        </label>
                                    </div>

                                    <div className="group relative z-0">
                                        {/* Animated Gradient Border */}
                                        <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 animate-gradient-border -z-10 blur-[2px]"></div>

                                        <input 
                                            type="tel" 
                                            name="contact-number" 
                                            id="contact-number" 
                                            name="phone" 
                                            id="phone" 
                                            placeholder=" "
                                            className="peer block w-full rounded-xl border-0 bg-slate-100/80 dark:bg-white/5 dark:focus:bg-neutral-900/90 pt-7 pb-3 px-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-300 placeholder:text-transparent hover:bg-slate-50 dark:hover:bg-white/10" 
                                        />
                                        <label 
                                            htmlFor="contact-number" 
                                            htmlFor="phone" 
                                            className="absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-100 transform text-sm font-medium text-slate-500 dark:text-slate-400 duration-300 
                                            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                                            peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 pointer-events-none 
                                            peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:scale-75"
                                        >
                                            Contact Number
                                        </label>
                                    </div>
                                    
                                    <div className="group relative z-0">
                                        {/* Animated Gradient Border */}
                                        <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 animate-gradient-border -z-10 blur-[2px]"></div>

                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            rows={4} 
                                            placeholder=" "
                                            className="peer block w-full rounded-xl border-0 bg-slate-100/80 dark:bg-white/5 dark:focus:bg-neutral-900/90 pt-7 pb-3 px-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 focus:ring-0 sm:text-sm sm:leading-6 transition-all duration-300 placeholder:text-transparent resize-none hover:bg-slate-50 dark:hover:bg-white/10"
                                        ></textarea>
                                        <label 
                                            htmlFor="message" 
                                            className="absolute left-4 top-6 z-10 origin-[0] -translate-y-4 scale-100 transform text-sm font-medium text-slate-500 dark:text-slate-400 duration-300 
                                            peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 
                                            peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 pointer-events-none 
                                            peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:scale-75"
                                        >
                                            How can we help you?
                                        </label>
                                    </div>

                                    <AnimatedInView animationType="scale-in" delay={300} className="pt-2">
                                        <button 
                                            type="submit" 
                                            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 dark:bg-white px-5 py-4 text-sm font-bold text-white dark:text-black shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 active:scale-[0.98]"
                                        >
                                            {/* Hover State Background Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-400 dark:via-sky-400 dark:to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                            
                                            <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-1 z-10 text-white dark:group-hover:text-white dark:text-black">
                                                Send Message
                                            </span>

                                            {/* Plane Icon Animation */}
                                            <div className="relative z-10 w-5 h-5 overflow-hidden text-white dark:group-hover:text-white dark:text-black">
                                                <iconify-icon 
                                                    icon="solar:plain-3-bold" 
                                                    className="absolute inset-0 text-lg transition-all duration-500 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0"
                                                ></iconify-icon>
                                                <iconify-icon 
                                                    icon="solar:plain-3-bold" 
                                                    className="absolute inset-0 text-lg -translate-x-6 translate-y-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                                                ></iconify-icon>
                                            </div>
                                        </button>
                                    </AnimatedInView>
                                </div>
                            </form>
                        </ElectricBorder>
                    </AnimatedInView>
                </div>
            </AnimatedInView>
        </section>
    );
};

export default ContactSection;