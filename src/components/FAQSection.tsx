import '../types';
import * as React from 'react';
import AnimatedInView from './AnimatedInView';

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Most custom web design projects take between 4-8 weeks. This timeline varies depending on the complexity of the design, the number of pages, and specific functionality requirements. We provide a detailed roadmap during our initial consultation."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We believe in long-term partnerships. We offer various maintenance packages that include security updates, content changes, and technical monitoring to ensure your digital asset remains performant."
    },
    {
        question: "Do I own the code after the project?",
        answer: "Yes, 100%. Upon final payment, full intellectual property rights and code ownership are transferred to you. We don't believe in holding your data hostage."
    },
    {
        question: "How do you handle SEO?",
        answer: "We build with a 'Performance First' mindset. Technical SEO (site structure, speed, meta tags, schema markup) is baked into our development process. For ongoing content SEO strategies, we can recommend partners or add-on services."
    },
     {
        question: "What platforms do you build on?",
        answer: "We specialize in modern stacks like React, Next.js, and TypeScript for high-performance custom builds. For content management, we often integrate headless CMS solutions like Sanity or Strapi, giving you the power to edit content without touching code."
    }
];

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-slate-200 dark:border-white/10 last:border-0">
            <button
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                    {question}
                </span>
                <span className={`ml-6 flex h-8 w-8 shrink-0 transform items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-180 border-cyan-600 bg-cyan-600 text-white' : 'border-slate-300 dark:border-white/20 text-slate-500 dark:text-slate-400 group-hover:border-cyan-600 group-hover:text-cyan-600 dark:group-hover:border-cyan-400 dark:group-hover:text-cyan-400'}`}>
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-lg transition-transform duration-300 group-hover:scale-125"></iconify-icon>
                </span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out will-change-[max-height,opacity]"
                style={{ 
                    maxHeight: isOpen ? contentRef.current?.scrollHeight : 0, 
                    opacity: isOpen ? 1 : 0 
                }}
            >
                <p className="pb-6 text-base leading-relaxed text-slate-600 dark:text-zinc-400">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24" id="faq">
             <AnimatedInView className="relative overflow-hidden rounded-3xl bg-white/60 dark:bg-white/[0.02] ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur-xl transition-colors duration-300 shadow-xl dark:shadow-none">
                {/* Background Blobs */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-100 dark:bg-sky-500/10 blur-[80px] transition-colors"></div>
                <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-100 dark:bg-cyan-500/10 blur-[80px] transition-colors"></div>

                <div className="grid grid-cols-1 gap-12 p-8 lg:grid-cols-12 lg:p-16 relative z-10">
                    {/* Left Column: Title */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-zinc-400 transition-colors">
                                Everything you need to know about our process and how we work. Can't find the answer you're looking for? 
                            </p>
                            <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                                Chat to our team
                                <iconify-icon icon="solar:arrow-right-linear" className="text-lg"></iconify-icon>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7">
                        <div className="divide-y divide-slate-200 dark:divide-white/10">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedInView>
        </section>
    );
};

export default FAQSection;