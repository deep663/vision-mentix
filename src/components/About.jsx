import React, { useEffect } from 'react';
import { 
  Moon, Sun, Menu, X, CheckCircle, Zap, Shield, TrendingUp, Users, Code, Cloud, Brain, Headphones, ArrowRight, ChevronRight, Star,
  Goal as TargetIcon,
  Eye as EyeIcon,
  Heart as HeartIcon
} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const iconComponents = {
  TargetIcon: <TargetIcon className="w-10 h-10" />,
  EyeIcon: <EyeIcon className="w-10 h-10" />,
  HeartIcon: <HeartIcon className="w-10 h-10" />
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // stagger delay
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function About({ darkMode, about }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1      // trigger when 10% of section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gradient-to-br from-slate-950 to-slate-900' : 'bg-gradient-to-br from-cyan-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            About Vision Mentix
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            We're a new-generation tech partner built for agility, integrity, and impact.
          </p>
        </motion.div>

        {/* Wrap grid in motion.div for staggered animation */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Mission & Vision (from `about` prop) */}
          {about.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              className={`group p-8 rounded-[24px] cursor-pointer transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900 border border-slate-800 hover:border-cyan-500'
                  : 'bg-white border border-slate-200 hover:border-cyan-500'
              } hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-[5px]`}
            >
              <div className="text-cyan-500 mb-5 transform group-hover:scale-105 transition-transform">
                {iconComponents[item.icon]}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {item.title}
              </h3>
              <p className={`flex-grow ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Values Card (hardcoded) */}
          <motion.div
            custom={about.length} // continue stagger sequence
            variants={cardVariants}
            className={`group p-8 rounded-[24px] cursor-pointer transition-all duration-300 ${
              darkMode
                ? 'bg-slate-900 border border-slate-800 hover:border-blue-500'
                : 'bg-white border border-slate-200 hover:border-blue-500'
            } hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-[5px]`}
          >
            <div className="text-blue-500 mb-5 transform group-hover:scale-105 transition-transform">
              <HeartIcon className="w-10 h-10" />
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Values
            </h3>
            <ul className={`space-y-3 flex-grow ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Client-First:</span> Your goals come before our timelines.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Radical Transparency:</span> No hidden fees, no black boxes.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Continuous Learning:</span> We evolve with tech so you don’t fall behind.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Ownership Mentality:</span> We treat your project like our own.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}