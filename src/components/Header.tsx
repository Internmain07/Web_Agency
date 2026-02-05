import '../types';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedInView from './AnimatedInView';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
    isPrivacyPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isPrivacyPage = false }) => {
    const { theme, toggleTheme } = useTheme();
        const location = useLocation();
    const [activeSection, setActiveSection] = React.useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        if (isPrivacyPage) {
            setActiveSection('');
            return;
        }

        const handleScroll = () => {
            const sections = ['services', 'process', 'impact', 'contact'];
            const scrollPosition = window.scrollY + 200; 

            let current = '';
            
            if (window.scrollY < 100) {
                setActiveSection('');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        current = section;
                        break; 
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isPrivacyPage]);

    const navItems = [
      { label: "Services", href: isPrivacyPage ? "/#services" : "#services", id: "services" },
      { label: "Process", href: isPrivacyPage ? "/#process" : "#process", id: "process" },
      { label: "Impact", href: isPrivacyPage ? "/#impact" : "#impact", id: "impact" },
      { label: "Contact", href: isPrivacyPage ? "/#contact" : "#contact", id: "contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isPrivacyPage) return; // Let default browser behavior handle it

        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
              behavior: "smooth"
            });
        }
    };
    
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if(isPrivacyPage) return;

        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };


    return (
        <AnimatedInView as="header" className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className={`relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 ${isMobileMenuOpen ? 'rounded-b-3xl bg-white/95 dark:bg-black/90' : 'rounded-full'}`}>
                    <div className="flex items-center justify-between px-4 py-2">
                        
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            {location.pathname === '/' ? (
                                <a href="#" className="flex items-center gap-2 group" onClick={handleLogoClick}>
                                    <img 
                                        src={theme === 'dark' ? '/logo/logo-white.png' : '/logo/logo-black.png'} 
                                        alt="I-Intern Logo" 
                                        className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                                    />
                                    <span className="font-bold tracking-widest text-sm uppercase text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">I-INTERN</span>
                                </a>
                            ) : (
                                <Link to="/" className="flex items-center gap-2 group">
                                    <img 
                                        src={theme === 'dark' ? '/logo/logo-white.png' : '/logo/logo-black.png'} 
                                        alt="I-Intern Logo" 
                                        className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                                    />
                                    <span className="font-bold tracking-widest text-sm uppercase text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">I-INTERN</span>
                                </Link>
                            )}
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <nav className="flex items-center gap-1 rounded-full bg-slate-100/50 dark:bg-white/5 p-1 border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.id)}
                                            className={`relative px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                                                isActive 
                                                ? 'font-bold bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-[0_0_15px_rgba(34,211,238,0.4)] dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] ring-1 ring-slate-200 dark:ring-white/10' 
                                                : 'font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                                            }`}
                                        >
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Right Actions & Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleTheme}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:scale-110 transition-all active:scale-95"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <iconify-icon icon="solar:sun-2-linear" className="text-xl"></iconify-icon>
                                ) : (
                                    <iconify-icon icon="solar:moon-linear" className="text-xl"></iconify-icon>
                                )}
                            </button>

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-95"
                                aria-label="Toggle menu"
                            >
                                <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-xl"></iconify-icon>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <nav className="flex flex-col p-4 space-y-2 border-t border-slate-200 dark:border-white/10 mx-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                        activeSection === item.id 
                                        ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400' 
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </AnimatedInView>
    );
};

export default Header;