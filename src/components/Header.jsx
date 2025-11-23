import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Header({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, scrolled }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg') : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-cyan-400 to-blue-500'}`}>
              <span className="text-white font-bold text-xl">VM</span>
            </div>
            <div>
              <div className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>Vision Mentix</div>
              {/* <div className={`text-xs ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Software Pvt. Ltd.</div> */}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>About</a>
            <a href="#services" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Services</a>
            <a href="#why-us" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Why Us</a>
            {/* <a href="#testimonials" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Testimonials</a> */}
            <a href="#contact" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-cyan-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-20 left-0 w-full ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="flex flex-col items-center space-y-4 py-8">
            <a href="#services" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Services</a>
            <a href="#why-us" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Why Us</a>
            <a href="#testimonials" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Testimonials</a>
            <a href="#contact" className={`hover:text-cyan-500 transition-colors ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Contact</a>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-cyan-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
