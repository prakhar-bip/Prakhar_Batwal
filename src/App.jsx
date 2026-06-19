import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TourGuide from './components/TourGuide';
import BackgroundWaves from './components/BackgroundWaves';
import { ThemeProvider } from './context/ThemeProvider';
import './App.css';

function AppContent() {

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Anchor hash link smooth scroll override
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          lenis.scrollTo(element, { offset: -60 });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <BackgroundWaves />
      <div className="w-full min-h-screen relative flex flex-col md:pl-20 lg:pl-24 xl:pl-32 transition-all duration-300">
        <Navbar />
        <main className="relative z-10 w-full flex-grow">
          <Hero />
          <About />
          <WhatIBuild />
          <Skills />
          <FeaturedProject />
          <Projects />
          <Achievements />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
      </div>
      <TourGuide />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
