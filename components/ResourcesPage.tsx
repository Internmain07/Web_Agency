// @ts-nocheck
import '../types';
import React from 'react';
import AnimatedInView from './AnimatedInView';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    readTime: number;
    image?: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Ultimate Guide to Web Performance Optimization",
        excerpt: "Discover proven strategies to make your website lightning fast. From image optimization to code splitting, learn how to deliver exceptional user experiences with blazing-fast load times that keep visitors engaged and boost your SEO rankings.",
        category: "Web Development",
        date: "February 1, 2026",
        author: "I-Intern Team",
        readTime: 8,
    },
    {
        id: 2,
        title: "React Best Practices: Building Scalable Applications in 2026",
        excerpt: "Master React development with industry best practices. From component architecture to state management with Redux and Context API, discover how to build maintainable, performant applications that scale with your business.",
        category: "React",
        date: "January 28, 2026",
        author: "I-Intern Team",
        readTime: 10,
    },
    {
        id: 3,
        title: "SEO Fundamentals: Getting Your Website Noticed in 2026",
        excerpt: "Comprehensive guide to modern SEO strategies. Learn about Core Web Vitals, structured data, semantic HTML, and content optimization techniques that will help your website rank higher and attract qualified organic traffic.",
        category: "SEO & Marketing",
        date: "January 25, 2026",
        author: "I-Intern Team",
        readTime: 12,
    },
    {
        id: 4,
        title: "Next.js 14: The Ultimate Framework for Modern Web Apps",
        excerpt: "Explore the power of Next.js 14 with Server Components, App Router, and streaming. Understand when to use Next.js over vanilla React and how to leverage its features for optimal performance and SEO.",
        category: "Web Development",
        date: "January 22, 2026",
        author: "I-Intern Team",
        readTime: 9,
    },
    {
        id: 5,
        title: "The Psychology of Web Design: Creating User-Centric Interfaces",
        excerpt: "Discover the psychological principles behind effective web design. Learn about color psychology, visual hierarchy, cognitive load, and how to apply these concepts to create interfaces that convert visitors into customers.",
        category: "Design",
        date: "January 18, 2026",
        author: "I-Intern Team",
        readTime: 11,
    },
    {
        id: 6,
        title: "Building Progressive Web Apps: The Future of Web Applications",
        excerpt: "Master Progressive Web Apps with service workers, offline functionality, and native-like experiences. Learn how PWAs bridge the gap between web and mobile apps, providing users with fast, reliable, and engaging experiences.",
        category: "Web Development",
        date: "January 15, 2026",
        author: "I-Intern Team",
        readTime: 13,
    },
    {
        id: 7,
        title: "TypeScript Mastery: Writing Type-Safe React Applications",
        excerpt: "Level up your React development with TypeScript. Learn advanced typing patterns, generics, utility types, and how to create fully type-safe components that catch bugs before they reach production.",
        category: "React",
        date: "January 12, 2026",
        author: "I-Intern Team",
        readTime: 10,
    },
    {
        id: 8,
        title: "Conversion Rate Optimization: Turning Visitors into Customers",
        excerpt: "Data-driven strategies to boost your website's conversion rate. From A/B testing to persuasive copywriting and strategic CTAs, learn how to optimize every element of your site to maximize business results.",
        category: "SEO & Marketing",
        date: "January 8, 2026",
        author: "I-Intern Team",
        readTime: 14,
    },
    {
        id: 9,
        title: "Web Accessibility: Building Inclusive Digital Experiences",
        excerpt: "Comprehensive guide to creating accessible websites that work for everyone. Learn WCAG guidelines, ARIA attributes, keyboard navigation, and how to test and improve your site's accessibility.",
        category: "Web Development",
        date: "January 5, 2026",
        author: "I-Intern Team",
        readTime: 9,
    },
    {
        id: 10,
        title: "Modern CSS: Flexbox, Grid, and Beyond",
        excerpt: "Master modern CSS layout techniques for responsive design. Deep dive into CSS Grid, Flexbox, custom properties, container queries, and the latest CSS features that make building beautiful layouts easier than ever.",
        category: "Design",
        date: "January 1, 2026",
        author: "I-Intern Team",
        readTime: 8,
    },
    {
        id: 11,
        title: "API Design Best Practices: Building Scalable Backend Systems",
        excerpt: "Learn how to design RESTful and GraphQL APIs that scale. Cover authentication, rate limiting, caching strategies, error handling, and documentation best practices for modern web applications.",
        category: "Web Development",
        date: "December 28, 2025",
        author: "I-Intern Team",
        readTime: 11,
    },
    {
        id: 12,
        title: "Brand Identity Design: Creating Memorable Digital Experiences",
        excerpt: "Explore the art of creating cohesive brand identities for the digital age. From logo design to color palettes and typography systems, learn how to build brands that resonate with your target audience.",
        category: "Design",
        date: "December 25, 2025",
        author: "I-Intern Team",
        readTime: 10,
    },
];

const categories = ["All", "Web Development", "React", "SEO & Marketing", "Design"];

const ResourcesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="relative z-10">
                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <AnimatedInView className="text-center">
                        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
                            Resources & Insights
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 mb-4">
                            Discover expert guides, best practices, and insights to help you build better digital experiences. Our comprehensive resource library covers everything from web development and React to SEO strategies and design principles.
                        </p>
                        <p className="mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 font-semibold">{blogPosts.length} articles</span> and growing • Updated regularly with fresh content
                        </p>
                    </AnimatedInView>

                    {/* Search and Filter */}
                    <AnimatedInView delay={100} className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {/* Search Bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                />
                                <iconify-icon icon="solar:magnifer-linear" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></iconify-icon>
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            selectedCategory === category
                                                ? "bg-cyan-600 text-white shadow-lg"
                                                : "bg-white/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-white/10"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimatedInView>
                </section>

                {/* Blog Posts Grid */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post, index) => (
                                <AnimatedInView key={post.id} delay={index * 50}>
                                    <article className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/10 cursor-pointer">
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">{post.readTime} min read</span>
                                            </div>
                                            
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {post.title}
                                            </h3>
                                            
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                                    <p>{post.author}</p>
                                                    <p>{post.date}</p>
                                                </div>
                                                <div className="text-xl text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors transform group-hover:translate-x-1">
                                                    →
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Hover background effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-sky-500/0 group-hover:from-cyan-500/5 group-hover:to-sky-500/5 transition-all duration-300 z-0"></div>
                                    </article>
                                </AnimatedInView>
                            ))}
                        </div>
                    ) : (
                        <AnimatedInView className="text-center py-12">
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                No articles found. Try adjusting your search or filters.
                            </p>
                        </AnimatedInView>
                    )}
                </section>

                {/* Newsletter Section */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
                    <AnimatedInView className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600/20 via-sky-500/20 to-teal-500/20 dark:from-cyan-600/10 dark:via-sky-500/10 dark:to-teal-500/10 border border-cyan-200/50 dark:border-cyan-400/20 p-8 md:p-12">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                Stay Updated with Latest Insights
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                                Subscribe to our newsletter and get the latest web development tips, design trends, and industry insights delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-lg bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                                <button className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </AnimatedInView>
                </section>
            </main>
    );
};

export default ResourcesPage;
