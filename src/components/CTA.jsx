import React, { useEffect } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 0px 8px rgb(8, 145, 178)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export default function CTA({ darkMode }) {
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
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-slate-900' : 'bg-gradient-to-r from-cyan-50 to-blue-50'}`}>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 variants={itemVariants} className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Ready to Transform Your IT Infrastructure?
        </motion.h2>
        <motion.p variants={itemVariants} className={`text-xl mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          Let's discuss how we can accelerate your digital transformation with agility and precision
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center space-x-2"
          >
            <span>Schedule Free Consultation</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-6">
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
        </motion.div>
      </motion.div>
    </section>
  );
}
