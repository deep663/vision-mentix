import React, { useEffect, useRef } from 'react';
import { motion, animate, delay } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';

const iconComponents = {
  Zap: <Zap />,
  Shield: <Shield />,
  TrendingUp: <TrendingUp />,
  Users: <Users />,
};

function CountUp({ to, suffix = "" }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.floor(value) + suffix;
      }
    });

    return () => controls.stop();
  }, [to, suffix]);

  return <span ref={nodeRef}>{to + suffix}</span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const h1Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero({ darkMode, advantages, stats }) {

  return (
    <motion.section
      id="hero" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${darkMode ? 'bg-transparent' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="text-center space-y-8 relative z-10">
          <motion.div variants={itemVariants} className={`hidden md:inline-flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-cyan-50 border border-cyan-200'}`}>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>Enterprise-Grade Solutions, Startup Speed</span>
          </motion.div>

          <motion.h1 variants={h1Variants} className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Empowering Businesses with{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Intelligent Software & AI Solutions.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Break free from enterprise bureaucracy. Get world-class software development, cloud solutions, and AI integration with the agility your business demands.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center items-center pt-4">
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => window.scrollTo(0, document.body.scrollHeight)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all ${darkMode ? 'border-slate-700 hover:border-cyan-500 text-white' : 'border-slate-300 hover:border-cyan-500 text-slate-900'}`}>
              Learn More
            </motion.button>
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-8 pt-12">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  <CountUp to={parseInt(stat.number)} suffix={stat.number.replace(/\d+/, '')} />
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-6 pt-4">
            {advantages.map((adv, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-center space-x-2">
                <div className="text-cyan-500">{iconComponents[adv.icon]}</div>
                <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{adv.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

