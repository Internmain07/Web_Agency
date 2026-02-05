import '../types';
import React from 'react';
import AnimatedInView from './AnimatedInView';

const statRegex = /(?<![A-Za-z-])(\d+(?:,\d{3})*(?:\.\d+)?(?:%|x)?)(?![A-Za-z])/g;
const statToken = /^\d+(?:,\d{3})*(?:\.\d+)?(?:%|x)?$/;

const highlightStats = (text: string, variant: 'cyan' | 'blue') => {
  const statClasses =
    variant === 'cyan'
      ? 'font-semibold text-cyan-700 dark:text-cyan-200 bg-cyan-500/10 px-1.5 py-0.5 rounded'
      : 'font-semibold text-blue-700 dark:text-blue-200 bg-blue-500/10 px-1.5 py-0.5 rounded';

  return text.split(statRegex).map((part, index) =>
    statToken.test(part) ? (
      <span key={`${part}-${index}`} className={statClasses}>
        {part}
      </span>
    ) : (
      <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
    )
  );
};

const directImpact = [
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'By moving from a generic template to a custom-engineered funnel, SMEs typically see a 25%–50% increase in lead generation.',
  },
  {
    title: 'Average Order Value (AOV) Boost',
    description:
      'Our intelligent UX patterns and upsell integrations (like WhatsApp and UPI) reduce friction, leading to higher transaction values.',
  },
  {
    title: 'Reduced Customer Acquisition Cost (CAC)',
    description:
      'High-speed, SEO-optimized pages lower your ad bounce rates, making every rupee spent on marketing go further.',
  },
];

const operationalImpact = [
  {
    title: 'Scalability Assurance',
    description:
      'Built on enterprise-grade architecture, your site will handle a 10x surge in traffic—from 1,000 to 100,000 users—without crashing.',
  },
  {
    title: 'Maintenance Savings',
    description:
      'Our "Clean Code" approach reduces technical debt, cutting your long-term maintenance costs by up to 40%',
  },
  {
    title: 'Brand Authority',
    description:
      'Establish global authority with high-performance digital assets that command trust from Tier-1 partners',
  },
];

const ImpactSection: React.FC = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32 scroll-mt-32" id="impact">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-900/20" />

      <AnimatedInView className="text-center" delay={100}>
        <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          Scaling Your Bottom Line Through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Engineering Excellence</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          We don't just launch websites; we deploy revenue-generating assets that pay for themselves.
        </p>
      </AnimatedInView>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <AnimatedInView delay={200}>
          <div className="h-full rounded-3xl border border-slate-200/70 bg-white/60 p-8 shadow-xl shadow-cyan-500/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300 flex items-center justify-center">
                <iconify-icon icon="solar:graph-up-bold-duotone" className="text-2xl"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Direct Revenue Impact</h3>
            </div>
            <div className="mt-8 space-y-6">
              {directImpact.map((item, index) => (
                <AnimatedInView key={item.title} delay={200 + index * 100}>
                  <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-xs font-bold text-white shadow-lg shadow-cyan-500/50 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {highlightStats(item.description, 'cyan')}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedInView>
              ))}
            </div>
          </div>
        </AnimatedInView>

        <AnimatedInView delay={300}>
          <div className="h-full rounded-3xl border border-slate-200/70 bg-white/60 p-8 shadow-xl shadow-blue-500/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300 flex items-center justify-center">
                <iconify-icon icon="solar:shield-check-bold-duotone" className="text-2xl"></iconify-icon>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Operational &amp; Long-Term Impact</h3>
            </div>
            <div className="mt-8 space-y-6">
              {operationalImpact.map((item, index) => (
                <AnimatedInView key={item.title} delay={300 + index * 100}>
                  <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-bold text-white shadow-lg shadow-blue-500/50 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {highlightStats(item.description, 'blue')}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedInView>
              ))}
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

export default ImpactSection;
