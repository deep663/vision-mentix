import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

export default function CTA({ darkMode }) {
  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-slate-900' : 'bg-gradient-to-r from-cyan-50 to-blue-50'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Ready to Transform Your IT Infrastructure?
        </h2>
        <p className={`text-xl mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          Let's discuss how we can accelerate your digital transformation with agility and precision
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center space-x-2">
            <span>Schedule Free Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          {/* <button className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all ${darkMode ? 'border-white text-white hover:bg-white hover:text-slate-900' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
            Download Case Studies
          </button> */}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-cyan-500" />
            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>No Long-Term Contracts</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-cyan-500" />
            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>24hr Response Guarantee</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-cyan-500" />
            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Free Initial Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
