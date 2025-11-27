import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Promise from './components/Promise';
import About from './components/About';
import Works from './components/Works';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { services, about, stats, advantages, promiseItems, works, team } from './data';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'} animate-pulse`} style={{ animationDuration: '8s' }}></div>
          <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-purple-600' : 'bg-purple-400'} animate-pulse`} style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        </div>

        {/* Header appears on all pages */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrolled={scrolled}
        />

        <Routes>
          {/* Home Page (scrollable single page) */}
          <Route
            path="/"
            element={
              <>
                <Hero darkMode={darkMode} advantages={advantages} stats={stats} />
                <About darkMode={darkMode} about={about} />
                <Services darkMode={darkMode} services={services} />
                <WhyUs darkMode={darkMode} />
                <Promise darkMode={darkMode} promiseItems={promiseItems}/>
                <Works darkMode={darkMode} works={works} />
                <Team darkMode={darkMode} team={team} />
                <CTA darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </>
            }
          />

          {/* Blog Page */}
          <Route
            path="/blog"
            element={
              <>
                <BlogPage darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <>
                <ContactPage darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}