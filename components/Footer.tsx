import '../types';
import * as React from 'react';
import AnimatedInView from './AnimatedInView';

const Footer: React.FC = () => {
    return (
        <AnimatedInView as="div" className="relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-16 sm:px-6 lg:px-8">
            <div className="relative mt-6 overflow-hidden rounded-3xl bg-white/70 dark:bg-neutral-950 ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur transition-colors duration-300">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-100 dark:bg-transparent blur-3xl transition-colors"></div>
                    <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-slate-100 dark:bg-transparent blur-3xl transition-colors"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40 dark:from-transparent dark:via-transparent dark:to-transparent transition-colors"></div>
                </div>
                <div className="relative mx-auto flex flex-col items-center justify-center px-8 pt-16 pb-16 text-center sm:py-16 md:px-8">
                    <div className="w-full max-w-7xl">
                        <div className="grid grid-cols-1 gap-12 border-b border-slate-200 dark:border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5 transition-colors">
                            <div className="lg:col-span-2">
                                <div className="flex flex-col items-start">
                                    <a href="/" className="flex items-center gap-2 text-slate-900 dark:text-white mb-4" aria-label="Go to I-Intern homepage">
                                        <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm transition-colors">I</div>
                                        <span className="font-bold tracking-widest text-sm uppercase">I-INTERN</span>
                                    </a>
                                    <p className="mb-6 text-left text-sm leading-relaxed text-slate-600 dark:text-zinc-400 transition-colors">Designing the future, one pixel at a time. We build brands that inspire and websites that convert.</p>
                                    <div className="flex items-center gap-3">
                                        <a href="https://twitter.com/i_intern_agency" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="group flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-zinc-300 ring-1 ring-slate-300 dark:ring-white/10 transition hover:bg-slate-300 dark:hover:bg-white/10">
                                            <iconify-icon icon="logos:twitter" className="text-sm grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"></iconify-icon>
                                        </a>
                                        <a href="https://linkedin.com/company/i-intern-agency" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="group flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-zinc-300 ring-1 ring-slate-300 dark:ring-white/10 transition hover:bg-slate-300 dark:hover:bg-white/10">
                                            <iconify-icon icon="logos:linkedin-icon" className="text-sm grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"></iconify-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left">
                                <h4 className="mb-4 text-sm font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">Services</h4>
                                <ul className="space-y-3">
                                    <li><a href="/#services" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Learn about our Web Design services">Web Design</a></li>
                                    <li><a href="/#services" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Learn about our Development services">Development</a></li>
                                    <li><a href="/#services" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Learn about our SEO services">SEO & Marketing</a></li>
                                    <li><a href="/#services" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Learn about our Branding services">Branding</a></li>
                                </ul>
                            </div>
                            <div className="text-left">
                                <h4 className="mb-4 text-sm font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">Company</h4>
                                <ul className="space-y-3">
                                    <li><a href="/#faq" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Read about us">About Us</a></li>
                                    <li><a href="#contact" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="View our careers">Careers</a></li>
                                    <li><a href="#contact" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Read our blog">Blog</a></li>
                                    <li><a href="#contact" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="Contact us">Contact</a></li>
                                </ul>
                            </div>
                            <div className="text-left">
                                <h4 className="mb-4 text-sm font-semibold tracking-tight text-slate-900 dark:text-white transition-colors">Legal</h4>
                                <ul className="space-y-3">
                                    <li><a href="/privacy.html" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="View Privacy Policy">Privacy Policy</a></li>
                                    <li><a href="/terms.html" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="View Terms of Service">Terms of Service</a></li>
                                    <li><a href="#" className="text-sm text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white" aria-label="View Cookie Policy">Cookie Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                             <p className="text-sm text-slate-500">
                                &copy; {new Date().getFullYear()} I-Intern Technologies Private Limited. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="/privacy.html" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition">Privacy</a>
                                <a href="/terms.html" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition">Terms</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedInView>
    );
};

export default Footer;