import React, { useEffect } from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
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

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export default function Footer({ darkMode }) {
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
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800' : 'bg-gradient-to-t from-slate-100 to-white border-t border-slate-200'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} className="grid md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">VM</span>
              </div>
              <div>
                <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Vision Mentix</div>
                <div className="text-xs text-cyan-500">Software Pvt. Ltd.</div>
              </div>
            </a>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              We're a new-generation tech partner built for agility, integrity, and impact.
            </p>
            <motion.div variants={containerVariants} className="flex space-x-4">
              <motion.a
                variants={socialIconVariants}
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all ${
                  darkMode
                    ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={socialIconVariants}
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all ${
                  darkMode
                    ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                }`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={socialIconVariants}
                href="https://github.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all ${
                  darkMode
                    ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>About Us</a></li>
              <li><a href="#work" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Work</a></li>
              <li><a href="#blog" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Blog</a></li>
              <li><a href="#careers" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Careers</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Software Development</a></li>
              <li><a href="#" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Cloud Solutions</a></li>
              <li><a href="#" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>AI & Machine Learning</a></li>
              <li><a href="#" className={`hover:text-cyan-500 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>IT Consulting</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><p className={` ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>contact@visionmentix.com</p></li>
              <li><p className={` ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>+91 XXX XXX XXXX</p></li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={`mt-12 pt-8 border-t text-center text-sm ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'}`}
        >
          <p>© 2025 Vision Mentix Software Pvt. Ltd. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
