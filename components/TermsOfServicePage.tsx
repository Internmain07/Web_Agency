
import '../types';
import React from 'react';
import AnimatedInView from './AnimatedInView';

const TermsOfServiceContent: React.FC = () => {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24" id="terms">
            <AnimatedInView className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-neutral-950 ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur-xl transition-colors duration-300 shadow-xl dark:shadow-none p-8 sm:p-16">
                 {/* Background Blobs */}
                 <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-100 dark:bg-sky-500/10 blur-[80px] transition-colors"></div>
                 <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-100 dark:bg-cyan-500/10 blur-[80px] transition-colors"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-4xl text-center">
                        Terms of Service
                    </h2>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <div className="mt-12 space-y-6 text-slate-600 dark:text-slate-300 text-left leading-relaxed">
                        <p>Welcome to I-Intern! These terms and conditions outline the rules and regulations for the use of I-Intern Technologies Private Limited's Website, located at i-intern.com.</p>
                        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use I-Intern if you do not agree to take all of the terms and conditions stated on this page.</p>
                        
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">1. The Services</h3>
                            <p>I-Intern Technologies Private Limited provides web design, development, and digital strategy services. All services provided are subject to the terms of a separate service agreement which will be provided to the client.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">2. Intellectual Property Rights</h3>
                            <p>Other than the content you own, under these Terms, I-Intern Technologies Private Limited and/or its licensors own all the intellectual property rights and materials contained in this Website. Upon final payment for a project, the client is granted full ownership of the final project deliverables (website code, design files, etc.).</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">3. Restrictions</h3>
                            <p>You are specifically restricted from all of the following: publishing any Website material in any other media without our prior written consent; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website.</p>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">4. Limitation of Liability</h3>
                            <p>In no event shall I-Intern Technologies Private Limited, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. I-Intern Technologies Private Limited shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">5. Indemnification</h3>
                            <p>You hereby indemnify to the fullest extent I-Intern Technologies Private Limited from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">6. Governing Law & Jurisdiction</h3>
                            <p>These Terms will be governed by and interpreted in accordance with the laws of the State/Country where I-Intern Technologies Private Limited is registered, and you submit to the non-exclusive jurisdiction of the state and federal courts located in that State/Country for the resolution of any disputes.</p>
                        </div>
                         <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Contact Us</h3>
                            <p>If you have any questions about these Terms, please contact us at <a href="mailto:contact@i-intern.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">contact@i-intern.com</a>.</p>
                        </div>
                    </div>
                </div>
            </AnimatedInView>
        </section>
    );
};


function TermsOfServicePage() {
    return (
        <main className="relative z-10 pt-24">
            <TermsOfServiceContent />
        </main>
    );
}

export default TermsOfServicePage;
