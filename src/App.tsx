
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FullStackSection from './components/FullStackSection';
import ProcessSection from './components/ProcessSection';
import ImpactSection from './components/ImpactSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load heavy components
const AuroraBackground = lazy(() => import('./components/AuroraBackground'));
const ClickSpark = lazy(() => import('./components/ClickSpark'));

// Lazy load secondary pages
const AboutPage = lazy(() => import('./components/AboutPage'));
const ResourcesPage = lazy(() => import('./components/ResourcesPage'));
const CareersPage = lazy(() => import('./components/CareersPage'));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./components/TermsOfServicePage'));

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 dark:text-slate-400">Loading page...</p>
    </div>
  </div>
);

// Fallback for visual effects
const EffectsFallback = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Home page component with lazy loaded effects
const HomePage = () => (
  <>
    <Header />
    <main className="relative z-10">
      <HeroSection />
      <FullStackSection />
      <ProcessSection />
      <ImpactSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  </>
);

// Layout wrapper for other pages
const PageLayout: React.FC<{ children: React.ReactNode; isPrivacyPage?: boolean }> = ({ children, isPrivacyPage = false }) => (
  <>
    <Header isPrivacyPage={isPrivacyPage} />
    <div className="relative z-10">
      <Suspense fallback={<PageLoadingFallback />}>
        {children}
      </Suspense>
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<EffectsFallback><div /></EffectsFallback>}>
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Suspense fallback={<EffectsFallback><div /></EffectsFallback>}>
              <AuroraBackground />
            </Suspense>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
              <Route path="/resources" element={<PageLayout><ResourcesPage /></PageLayout>} />
              <Route path="/careers" element={<PageLayout><CareersPage /></PageLayout>} />
              <Route path="/privacy" element={<PageLayout isPrivacyPage={true}><PrivacyPolicyPage /></PageLayout>} />
              <Route path="/terms" element={<PageLayout isPrivacyPage={true}><TermsOfServicePage /></PageLayout>} />
            </Routes>
          </ClickSpark>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
