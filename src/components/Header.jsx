import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MotionLink = motion.create(Link);

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Header({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, scrolled }) {
  const navigate = useNavigate();

  // Handle section navigation from any page
  const scrollToSection = (hash) => {
    if (window.location.pathname === '/') {
      // Already on homepage → scroll smoothly
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg') : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.a 
            href="/" 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-cyan-400 to-blue-500'}`}>
              <span className="text-white font-bold text-xl">VM</span>
            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>Vision Mentix</div>
              <div className={`text-xs ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Software Pvt. Ltd.</div>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="/"
              variants={navItemVariants}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className={`text-left bg-transparent border-0 cursor-pointer font-inherit hover:text-cyan-500 transition-all transform duration-300 hover:-translate-y-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Home
            </motion.a>
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection('#about')}
              className={`text-left bg-transparent border-0 cursor-pointer font-inherit hover:text-cyan-500 transition-all transform duration-300 hover:-translate-y-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              About
            </motion.button>
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection('#services')}
              className={`text-left bg-transparent border-0 cursor-pointer font-inherit hover:text-cyan-500 transition-all transform duration-300 hover:-translate-y-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Services
            </motion.button>
            <motion.button
              variants={navItemVariants}
              onClick={() => scrollToSection('#works')}
              className={`text-left bg-transparent border-0 cursor-pointer font-inherit hover:text-cyan-500 transition-all transform duration-300 hover:-translate-y-1 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Work
            </motion.button>
            <MotionLink
              variants={navItemVariants}
              to="/blog"
              className={`text-left bg-transparent border-0 cursor-pointer font-inherit hover:text-cyan-500 transition-all transform duration-300 hover:-translate-y-1  ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Blog
            </MotionLink>
            <MotionLink
              variants={navItemVariants}
              to="/contact"
              className={`text-left bg-transparent border-0 cursor-pointer font-inherit hover:text-cyan-500 transition-all transform duration-300 hover:-translate-y-1  ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Contact
            </MotionLink>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all transform duration-300 hover:scale-110 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-cyan-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </motion.button>

            <MotionLink
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md flex items-center gap-2 transition-all transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
              <span className="p-2 rounded-full bg-white transition-colors">
                <ArrowUpRight className="w-4 h-4 text-cyan-600" />
              </span>
            </MotionLink>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden absolute top-20 left-0 w-full ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
        >
          <div className="flex flex-col items-center space-y-4 py-8">
            <button
              onClick={() => {
                scrollToSection('#hero');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-center hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('#about');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-center hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('#services');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-center hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              Services
            </button>
            <button
              onClick={() => {
                scrollToSection('#works');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-center hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              Work
            </button>
            <MotionLink
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-center hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              Blog
            </MotionLink>
            <MotionLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-center hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              Contact
            </MotionLink>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-cyan-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <MotionLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Let's Connect
            </MotionLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}