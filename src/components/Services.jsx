import React from 'react';
import { CheckCircle, Code, Cloud, Brain, Headphones } from 'lucide-react';

const iconComponents = {
  Code: <Code className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
};

export default function Services({ darkMode, services }) {
  return (
    <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Services</h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Comprehensive IT solutions without the enterprise bloat</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                darkMode
                  ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500'
                  : 'bg-slate-50 hover:bg-white border border-slate-200 hover:border-cyan-500 hover:shadow-xl'
              }`}
            >
              <div className="text-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                {iconComponents[service.icon]}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {service.desc}
              </p>
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-blue-700'}`}>
                <CheckCircle className="w-3 h-3" />
                <span>{service.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
