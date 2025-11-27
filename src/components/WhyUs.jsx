import React, { useEffect } from 'react';
import { CheckCircle, Code, Shield, Zap } from 'lucide-react';
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const iconVariants = {
  hidden: { rotate: -90, scale: 0 },
  visible: { rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

export default function WhyUs({ darkMode }) {
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
    <section id="why-us" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-r from-slate-950 to-slate-900' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              Why Choose Vision Mentix Over Enterprise Giants?
            </motion.h2>
            <motion.div variants={containerVariants} className="space-y-4">
              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'
                } hover:translate-x-2 hover:shadow-md`}
              >
                <motion.div variants={iconVariants}>
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Direct Leadership Access</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    Talk to decision-makers, not account managers three layers removed from your project
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'
                } hover:translate-x-2 hover:shadow-md`}
              >
                <motion.div variants={iconVariants}>
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>3x Faster Delivery</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    Agile sprints without the red tape. What takes them months, we deliver in weeks
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={itemVariants}
                className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'
                } hover:translate-x-2 hover:shadow-md`}
              >
                <motion.div variants={iconVariants}>
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cost-Effective Excellence</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    40% lower costs than enterprise contracts, with zero compromise on quality
                  </p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={itemVariants}
                className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'
                } hover:translate-x-2 hover:shadow-md`}
              >
                <motion.div variants={iconVariants}>
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Cutting-Edge Tech Stack</h4>
                  <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                    We innovate with latest technologies while they maintain legacy systems
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className={`p-8 rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-cyan-900' : 'bg-gradient-to-br from-white to-slate-50 border border-slate-200'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>How We Work</h3>
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
