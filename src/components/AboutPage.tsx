// @ts-nocheck
import '../types';
import React from 'react';
import AnimatedInView from './AnimatedInView';

const AboutPage: React.FC = () => {
    return (
            <main className="relative z-10">
                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <AnimatedInView className="text-center">
                        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
                            About I-Intern
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Founded with a vision to transform the digital landscape, I-Intern is a full-service web design and development agency specializing in creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 font-semibold">premium digital experiences</span> for businesses that refuse to blend in. We combine cutting-edge technology with stunning aesthetics to deliver websites that don't just look beautiful—they drive real business results.
                        </p>
                    </AnimatedInView>
                </section>

                {/* Story Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <AnimatedInView>
                        <div className="bg-gradient-to-r from-cyan-600/20 via-sky-500/20 to-teal-500/20 dark:from-cyan-600/10 dark:via-sky-500/10 dark:to-teal-500/10 border border-cyan-200/50 dark:border-cyan-400/20 rounded-3xl p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
                            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                <p>
                                    I-Intern was born from a simple observation: too many businesses were settling for generic, cookie-cutter websites that failed to capture their unique brand identity. We knew there had to be a better way.
                                </p>
                                <p>
                                    Starting as a small team of passionate designers and developers, we set out to challenge the status quo. Our approach was different from day one—we didn't just build websites, we crafted digital experiences that told stories, engaged audiences, and drove measurable business growth.
                                </p>
                                <p>
                                    Today, we've grown into a full-service agency trusted by premium brands worldwide. But our core philosophy remains unchanged: every project deserves premium craftsmanship, meticulous attention to detail, and a relentless focus on results.
                                </p>
                            </div>
                        </div>
                    </AnimatedInView>
                </section>

                {/* Mission & Vision */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <AnimatedInView>
                            <div className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all">
                                <div className="mb-4">
                                    <iconify-icon icon="solar:target-linear" className="text-4xl text-cyan-600 dark:text-cyan-400"></iconify-icon>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    To empower businesses with elite digital solutions that refuse to blend in. We believe every brand deserves a stunning online presence that converts visitors into loyal customers through exceptional design, blazing-fast performance, and strategic user experiences.
                                </p>
                            </div>
                        </AnimatedInView>
                        <AnimatedInView delay={100}>
                            <div className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all">
                                <div className="mb-4">
                                    <iconify-icon icon="solar:eye-linear" className="text-4xl text-cyan-600 dark:text-cyan-400"></iconify-icon>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    To be the most trusted web design and development agency for premium brands that demand excellence. We aim to set new standards in digital craftsmanship, innovation, and client satisfaction, becoming the go-to partner for businesses ready to dominate their digital space.
                                </p>
                            </div>
                        </AnimatedInView>
                    </div>
                </section>

                {/* Our Values */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <AnimatedInView className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Core Values</h2>
                    </AnimatedInView>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: "solar:star-linear", title: "Excellence", desc: "We deliver premium quality in every project, with meticulous attention to detail." },
                            { icon: "solar:rocket-linear", title: "Innovation", desc: "We stay ahead of industry trends and embrace cutting-edge technologies." },
                            { icon: "solar:users-group-rounded-linear", title: "Collaboration", desc: "We partner closely with clients to understand and exceed their expectations." },
                        ].map((value, index) => (
                            <AnimatedInView key={index} delay={index * 50}>
                                <div className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all">
                                    <iconify-icon icon={value.icon} className="text-4xl text-cyan-600 dark:text-cyan-400 mb-4"></iconify-icon>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300">{value.desc}</p>
                                </div>
                            </AnimatedInView>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <AnimatedInView className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600/20 via-sky-500/20 to-teal-500/20 dark:from-cyan-600/10 dark:via-sky-500/10 dark:to-teal-500/10 border border-cyan-200/50 dark:border-cyan-400/20 p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to Work With Us?</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let's create something extraordinary together. Get in touch with our team to discuss your next project.
                        </p>
                        <a href="/#contact" className="inline-block px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all">
                            Start a Project
                        </a>
                    </AnimatedInView>
                </section>
            </main>
    );
};

export default AboutPage;
