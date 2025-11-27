import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Blog = ({ darkMode, blog }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  const tagVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 20 }
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id="blog"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode 
          ? 'bg-gradient-to-b from-slate-950 to-slate-900' 
          : 'bg-gradient-to-b from-white to-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Blog
          </h2>
          <p className={`mt-4 text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Insights and updates from our team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none"
        >
          {blog.map((post, index) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900 border border-slate-800 hover:border-cyan-500'
                  : 'bg-white border border-slate-200 hover:border-cyan-500'
              } hover:shadow-xl`}
            >
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="flex-1">
                  <motion.div
                    variants={tagVariants}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-cyan-500/10 text-cyan-400' 
                        : 'bg-cyan-50 text-cyan-700'
                    }`}
                  >
                    <span>Article</span>
                  </motion.div>
                  <a 
                    href={post.href || '#'} 
                    className="block mt-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className={`text-xl font-bold mb-3 group-hover:text-cyan-500 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`text-base mb-4 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {post.snippet}
                    </p>
                    <div className="flex items-center text-cyan-500 font-medium group-hover:gap-1.5 transition-all">
                      <span>Read full article</span>
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.author}
                    </p>
                    <p className={`text-sm ${
                      darkMode ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      {post.role}
                    </p>
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    {post.date}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;