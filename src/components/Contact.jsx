import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({ darkMode, contact }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const iconVariants = {
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
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode 
          ? 'bg-gradient-to-b from-slate-900 to-slate-950' 
          : 'bg-gradient-to-b from-slate-50 to-white'
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
            Contact Us
          </h2>
          <p className={`mt-4 text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            className={`space-y-6 p-5 rounded-xl ${
                  darkMode
                    ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500'
                    : 'bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500'
                } hover:shadow-md`}
          >
            {[
              { 
                icon: <MapPin className="w-6 h-6" />, 
                title: "Address", 
                content: contact.address,
                href: null
              },
              { 
                icon: <Mail className="w-6 h-6" />, 
                title: "Email", 
                content: contact.email,
                href: `mailto:${contact.email}`
              },
              { 
                icon: <Phone className="w-6 h-6" />, 
                title: "Phone", 
                content: contact.phone,
                href: `tel:${contact.phone}`
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start p-4 transition-all duration-300`}
              >
                <motion.div
                  variants={iconVariants}
                  className={`shrink-0 p-2 rounded-lg ${
                    darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                  }`}
                >
                  {item.icon}
                </motion.div>
                <div className="ml-4">
                  <h3 className={`font-semibold text-lg ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`mt-1 block text-base ${
                        darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'
                      } transition-colors`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className={`mt-1 text-base ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className={`p-8 rounded-2xl shadow-lg transition-all duration-300 ${
              darkMode
                ? 'bg-slate-800 border border-slate-700 hover:border-cyan-500'
                : 'bg-white border border-slate-200 hover:border-cyan-500'
            } hover:shadow-xl`}
          >
            <form action="#" method="POST">
              <div className="space-y-6">
                <div>
                  <label htmlFor="full-name" className="sr-only">Full name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className={`block w-full py-3 px-4 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 border rounded-lg transition-all ${
                      darkMode
                        ? 'bg-slate-700 border-slate-600 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`block w-full py-3 px-4 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 border rounded-lg transition-all ${
                      darkMode
                        ? 'bg-slate-700 border-slate-600 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    rows={4}
                    className={`block w-full py-3 px-4 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 border rounded-lg transition-all ${
                      darkMode
                        ? 'bg-slate-700 border-slate-600 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="Message"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    className="w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Send Message
                  </button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;