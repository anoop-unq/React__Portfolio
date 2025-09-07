import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { assets } from '../assets/assets';

const About = ({ darkMode }) => {
  const [isViewed, setIsViewed] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" });
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleView = () => {
    setIsViewed(true);
    // Reset the view status after 3 seconds
    setTimeout(() => setIsViewed(false), 3000);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2.8 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Memoize content to prevent unnecessary re-renders
  const aboutContent = useMemo(() => (
    <>
      <motion.p 
        variants={fadeInUp}
        className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        I'm a front-end developer who loves crafting clean, responsive, and user-friendly websites. With a sharp eye for design and solid skills in HTML, CSS, JavaScript, and modern frameworks, I turn ideas into smooth, interactive experiences.
      </motion.p>
      
      <motion.p 
        variants={fadeInUp}
        className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        I'm always exploring new web trends to build fast, intuitive, and engaging interfaces that work great on any device. My goal is to create digital experiences that not only look beautiful but also provide meaningful interactions for users.
      </motion.p>
    </>
  ), [darkMode]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`min-h-screen py-16 px-4 md:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="w-full lg:w-2/5 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            transition={{ delay: 2.5 }}
          >
            <div className={`relative z-10 rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'border-4 border-gray-800' : 'border-4 border-gray-200'}`}>
              <img 
                src={assets.AnveshMen11}
                alt="Profile" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <motion.div 
              className="absolute -inset-3 md:-inset-4 border border-cyan-400/30 rounded-2xl z-0 opacity-70"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ delay: 4.5 }}
            ></motion.div>
            <motion.div 
              className="absolute -inset-6 md:-inset-8 border border-purple-500/20 rounded-2xl z-0 opacity-50"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
              transition={{ delay: 5.7 }}
            ></motion.div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-3/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={{ delay: 6.4 }}
          >
            <motion.div 
              className="space-y-4 md:space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h3 
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Designing Is My Passion
                </span>
              </motion.h3>
              
              {aboutContent}
              
              <motion.div 
                variants={fadeInUp}
                className="pt-4 md:pt-6"
              >
                <motion.a
                  href={assets.Full_MERN_Stack}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleView}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-cyan-500 rounded-full shadow-md group"
                  style={{ color: darkMode ? 'white' : 'black' }}
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease"
                    style={{ color: 'white' }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease"
                    style={{ color: darkMode ? 'white' : 'black' }}
                  >
                    View Resume
                  </span>
                  <span className="relative invisible">View Resume</span>
                </motion.a>
                
                {isViewed && (
                  <motion.div 
                    className="mt-3 md:mt-4 flex items-center text-sm md:text-base"
                    style={{ color: darkMode ? '#22d3ee' : '#0891b2' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Opening Resume in new tab...
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info Cards */}
        <motion.div 
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ delay: 3.6 }}
        >
          <motion.div 
            variants={fadeInUp}
            className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'}`}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="bg-cyan-500 p-2 rounded-full mr-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 3, type: "spring" }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </motion.div>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Creative Solutions</h4>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              I approach each project with creativity and innovation, ensuring unique and effective solutions tailored to specific needs.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'}`}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="bg-purple-500 p-2 rounded-full mr-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 4.5, type: "spring" }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                </svg>
              </motion.div>
              <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Clean Code</h4>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              I write maintainable, well-structured code following best practices to ensure scalability and ease of collaboration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;