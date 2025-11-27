import React, { useEffect } from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
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
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0, transition: { type: 'bounce', stiffness: 50 } },
};

const socialIconVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5 } },
};

export default function Team({ darkMode, team }) {
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
      id="team"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-cyan-50 to-white'
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
            Our Team
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Meet the experts behind Vision Mentix
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group p-8 rounded-[24px] text-center cursor-pointer transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900 border border-slate-800 hover:border-cyan-500'
                  : 'bg-white border border-slate-200 hover:border-cyan-500'
              } hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-[5px]`}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-transparent group-hover:ring-cyan-500/30 transition-all duration-300"
                />
              </div>

              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {member.name}
              </h3>
              <p className="text-cyan-500 font-medium mb-3">{member.role}</p>

              <motion.div
                variants={socialIconVariants}
                className="flex justify-center space-x-3 mt-4"
              >
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode
                        ? 'text-slate-400 hover:text-cyan-400'
                        : 'text-slate-500 hover:text-cyan-600'
                    }`}
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors ${
                      darkMode
                        ? 'text-slate-400 hover:text-cyan-400'
                        : 'text-slate-500 hover:text-cyan-600'
                    }`}
                    aria-label={`${member.name} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className={`p-2 rounded-full transition-colors ${
                      darkMode
                        ? 'text-slate-400 hover:text-cyan-400'
                        : 'text-slate-500 hover:text-cyan-600'
                    }`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}