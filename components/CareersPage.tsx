// @ts-nocheck
import '../types';
import React from 'react';
import AnimatedInView from './AnimatedInView';

interface JobListing {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
}

const jobListings: JobListing[] = [
    {
        id: 1,
        title: "Senior React Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        salary: "$80k - $120k",
        description: "We're looking for an experienced React developer to lead our frontend development efforts and mentor junior developers.",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        salary: "$90k - $130k",
        description: "Join our team as a full stack developer and work on exciting projects using React, Node.js, and modern web technologies.",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        salary: "$70k - $110k",
        description: "Create stunning and intuitive user experiences for web and mobile applications used by thousands of users.",
    },
    {
        id: 4,
        title: "Product Manager",
        department: "Product",
        location: "Remote",
        type: "Full-time",
        salary: "$85k - $125k",
        description: "Lead product strategy and work closely with engineering and design teams to deliver exceptional solutions.",
    },
    {
        id: 5,
        title: "Next.js Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        salary: "$85k - $125k",
        description: "Specialize in building fast, scalable applications using Next.js and modern full-stack technologies.",
    },
    {
        id: 6,
        title: "Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        salary: "$60k - $95k",
        description: "Drive growth and build brand awareness for I-Intern through digital marketing strategies and content creation.",
    },
];

const CareersPage: React.FC = () => {
    return (
            <main className="relative z-10">
                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <AnimatedInView className="text-center">
                        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
                            Join Our Team
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                            Help us create exceptional digital experiences. We're hiring talented individuals who are passionate about web design and development.
                        </p>
                    </AnimatedInView>
                </section>

                {/* Why Join Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <AnimatedInView className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why Join I-Intern?</h2>
                    </AnimatedInView>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "solar:briefcase-linear", title: "Meaningful Work", desc: "Work on projects that make a real impact for premium brands and businesses." },
                            { icon: "solar:growth-linear", title: "Growth Opportunities", desc: "Continuous learning and professional development through mentoring and training." },
                            { icon: "solar:users-group-rounded-linear", title: "Collaborative Culture", desc: "Work with talented professionals in a supportive and creative environment." },
                            { icon: "solar:home-linear", title: "Remote Friendly", desc: "Flexible work arrangements with the option to work from anywhere." },
                            { icon: "solar:heartbeat-linear", title: "Health & Benefits", desc: "Comprehensive health insurance and competitive benefits package." },
                            { icon: "solar:cup-linear", title: "Work-Life Balance", desc: "We value your time and encourage a healthy work-life balance." },
                        ].map((benefit, index) => (
                            <AnimatedInView key={index} delay={index * 50}>
                                <div className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all">
                                    <iconify-icon icon={benefit.icon} className="text-4xl text-cyan-600 dark:text-cyan-400 mb-4"></iconify-icon>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">{benefit.desc}</p>
                                </div>
                            </AnimatedInView>
                        ))}
                    </div>
                </section>

                {/* Open Positions */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <AnimatedInView className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Open Positions</h2>
                        <p className="text-slate-600 dark:text-slate-300">We have {jobListings.length} exciting opportunities available</p>
                    </AnimatedInView>
                    <div className="space-y-4">
                        {jobListings.map((job, index) => (
                            <AnimatedInView key={job.id} delay={index * 30}>
                                <div className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all group cursor-pointer">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                                                {job.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 text-xs">
                                                <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">
                                                    {job.department}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                                                    {job.location}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                                                    {job.type}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-semibold">
                                                    {job.salary}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-col items-center md:items-end gap-4">
                                            <button className="px-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all whitespace-nowrap">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedInView>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                    <AnimatedInView className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600/20 via-sky-500/20 to-teal-500/20 dark:from-cyan-600/10 dark:via-sky-500/10 dark:to-teal-500/10 border border-cyan-200/50 dark:border-cyan-400/20 p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Don't See Your Role?</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to I-Intern.
                        </p>
                        <a href="mailto:careers@i-intern.com" className="inline-block px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all">
                            Send Your Resume
                        </a>
                    </AnimatedInView>
                </section>
            </main>
    );
};

export default CareersPage;
