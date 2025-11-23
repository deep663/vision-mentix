import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { services, moto, stats, advantages, testimonials, team } from './data';
import Promise from './components/Promise';
import About from './components/About';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrolled={scrolled}
      />
      <Hero darkMode={darkMode} advantages={advantages} stats={stats} />
      <About darkMode={darkMode} moto={moto}/>
      <Services darkMode={darkMode} services={services} />
      <WhyUs darkMode={darkMode} />
      {/* <Testimonials darkMode={darkMode} testimonials={testimonials} /> */}
      <Promise darkMode={darkMode} />
      <Team darkMode={darkMode} team={team} />
      <CTA darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
