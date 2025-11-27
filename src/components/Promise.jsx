import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export default function Promise({ darkMode, promiseItems }) {
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
    <section
      id="our-promise"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-indigo-50 to-blue-50'
      }`}
    >
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
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Promise to You
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Transparency, speed, and partnership from day one
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-8"
        >
          {promiseItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 ${
                darkMode
                  ? 'bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-cyan-500'
                  : 'bg-white border border-slate-200 hover:bg-slate-50 hover:border-cyan-500 hover:shadow-md'
              }`}
            >
              <div className="flex items-start space-x-4">
                <motion.div variants={iconVariants} className="text-cyan-500 mt-1">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}