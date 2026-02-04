
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FullStackSection from './components/FullStackSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import ClickSpark from './components/ClickSpark';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollToTop />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <AuroraBackground />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <FullStackSection />
          <ProcessSection />
          <ContactSection />
          <FAQSection />
          <Footer />
        </main>
      </ClickSpark>
    </ThemeProvider>
  );
}

export default App;
