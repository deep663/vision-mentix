import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const iconComponents = {
  Zap: <Zap />,
  Shield: <Shield />,
  TrendingUp: <TrendingUp />,
  Users: <Users />,
};

export default function Hero({ darkMode, advantages, stats }) {
  return (
    <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-white to-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-200'}`}>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className={`text-sm font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>Enterprise-Grade Solutions, Startup Speed</span>
            </div> */}

            <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Empowering Businesses with{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Intelligent Software & AI Solutions.
              </span>
            </h1>

            <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Break free from enterprise bureaucracy. Get world-class software development, cloud solutions, and AI integration with the agility your business demands.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => window.scrollTo(0, document.body.scrollHeight)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button  className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all ${darkMode ? 'border-slate-700 hover:border-cyan-500 text-white' : 'border-slate-300 hover:border-cyan-500 text-slate-900'}`}>
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="text-cyan-500">{iconComponents[adv.icon]}</div>
                  <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{adv.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20`}></div>
            <div className={`relative p-8 rounded-2xl ${darkMode ? 'bg-slate-900/50 backdrop-blur-xl border border-slate-800' : 'bg-white/50 backdrop-blur-xl border border-slate-200'}`}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} text-center transform hover:scale-105 transition-all`}>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
