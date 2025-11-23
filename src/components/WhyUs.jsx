import React from 'react';
import { CheckCircle, Code, Shield, Zap } from 'lucide-react';

export default function WhyUs({ darkMode }) {
  return (
    <section id="why-us" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-r from-slate-950 to-slate-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Why Choose Vision Mentix Over Enterprise Giants?
            </h2>
            <div className="space-y-4">
              <div className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}>
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Direct Leadership Access</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    Talk to decision-makers, not account managers three layers removed from your project
                  </p>
                </div>
              </div>
              <div className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}>
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>3x Faster Delivery</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    Agile sprints without the red tape. What takes them months, we deliver in weeks
                  </p>
                </div>
              </div>
              <div className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}>
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cost-Effective Excellence</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    40% lower costs than enterprise contracts, with zero compromise on quality
                  </p>
                </div>
              </div>
              <div className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}>
                <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cutting-Edge Tech Stack</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    We innovate with latest technologies while they maintain legacy systems
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700' : 'bg-gradient-to-br from-white to-slate-50 border border-slate-200'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>How We Work</h3>
            {/* <div className="grid grid-cols-2 gap-6">
              {['FinTech Pro', 'E-Commerce Hub', 'HealthCare+', 'EduTech Global'].map((client, idx) => (
                <div key={idx} className={`p-6 rounded-xl text-center ${darkMode ? 'bg-slate-800' : 'bg-white'} transform hover:scale-105 transition-all`}>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                    {client}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Security Certified</div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>ISO 27001 • SOC 2</div>
                </div>
                <Shield className="w-12 h-12 text-cyan-500" />
              </div>
            </div> */}
            <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Kickoff in 72 Hours</h4>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Rapid onboarding with clear project roadmap and team intro.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Code className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Code Transparency</h4>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Full access to repositories, documentation, and progress dashboards.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Security-First Mindset</h4>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Secure coding practices, dependency scanning, and infrastructure hardening from day one.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
