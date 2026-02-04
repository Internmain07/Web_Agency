
import '../types';
import React from 'react';
import AnimatedInView from './AnimatedInView';

const PrivacyPolicyContent: React.FC = () => {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24" id="privacy">
            <AnimatedInView className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-neutral-950 ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur-xl transition-colors duration-300 shadow-xl dark:shadow-none p-8 sm:p-16">
                 {/* Background Blobs */}
                 <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-100 dark:bg-sky-500/10 blur-[80px] transition-colors"></div>
                 <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-100 dark:bg-cyan-500/10 blur-[80px] transition-colors"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-4xl text-center">
                        Privacy Policy
                    </h2>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 text-center">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <div className="mt-12 space-y-6 text-slate-600 dark:text-slate-300 text-left leading-relaxed">
                        <p>I-Intern Technologies Private Limited ("us", "we", or "our") operates the I-Intern website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                        
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Information Collection and Use</h3>
                            <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, and usage data collected via our contact form and analytics tools.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Log Data</h3>
                            <p>We may also collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Cookies</h3>
                            <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Service Providers</h3>
                            <p>We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Security</h3>
                            <p>The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Changes to This Privacy Policy</h3>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white pt-4">Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@i-intern.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">contact@i-intern.com</a>.</p>
                        </div>
                    </div>
                </div>
            </AnimatedInView>
        </section>
    );
};


function PrivacyPolicyPage() {
    return (
        <main className="relative z-10 pt-24">
            <PrivacyPolicyContent />
        </main>
    );
}

export default PrivacyPolicyPage;
