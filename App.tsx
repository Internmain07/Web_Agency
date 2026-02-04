
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FullStackSection from './components/FullStackSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import ClickSpark from './components/ClickSpark';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import { ThemeProvider } from './context/ThemeContext';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import CareersPage from './components/CareersPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

// Home page component
const HomePage = () => (
  <>
    <Header />
    <main className="relative z-10">
      <HeroSection />
      <FullStackSection />
      <ProcessSection />
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
      {children}
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <AuroraBackground />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
            <Route path="/resources" element={<PageLayout><ResourcesPage /></PageLayout>} />
            <Route path="/careers" element={<PageLayout><CareersPage /></PageLayout>} />
            <Route path="/privacy" element={<PageLayout isPrivacyPage={true}><PrivacyPolicyPage /></PageLayout>} />
            <Route path="/terms" element={<PageLayout isPrivacyPage={true}><TermsOfServicePage /></PageLayout>} />
          </Routes>
        </ClickSpark>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
