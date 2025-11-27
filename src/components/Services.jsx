import React, { useEffect } from 'react';
import { CheckCircle, Code, Cloud, Brain, Headphones } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const iconComponents = {
  Code: <Code className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

export default function Services({ darkMode, services }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Services</h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Comprehensive IT solutions without the enterprise bloat</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer z-10 ${
                darkMode
                  ? 'bg-slate-800/40 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500'
                  : 'bg-slate-50 hover:bg-white border border-slate-200 hover:border-cyan-500 hover:shadow-xl'
              }`}
            >
              <motion.div variants={iconVariants} className="text-cyan-500 mb-4 transform group-hover:scale-110 transition-transform">
                {iconComponents[service.icon]}
              </motion.div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
