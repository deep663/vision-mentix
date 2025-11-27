import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Works = ({ darkMode, works }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id="works"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-slate-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <motion.h2
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Our Works
          </motion.h2>
          <p className={`mt-4 text-lg leading-6 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A glimpse into some of the projects we have successfully delivered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {works.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -8 }}
              className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500' 
                  : 'bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500'
              } hover:shadow-xl`}
            >
              {/* Image with subtle zoom effect */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "tween", duration: 0.3 }}
                />
              </div>

              <div className={`p-6 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mt-2 text-base ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.desc}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center font-medium ${
                    darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.span
                    className="ml-2"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Works;