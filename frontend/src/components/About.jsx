import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { assets } from '../assets/assets'; // Ensure this path is correct
import { FaLightbulb, FaCode, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'; // Standard icons

const About = ({ darkMode }) => {
  const [isViewed, setIsViewed] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Animation variants (Snappier & Smoother)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const handleView = () => {
    setIsViewed(true);
    setTimeout(() => setIsViewed(false), 3000);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`min-h-screen py-20 px-4 md:px-8 relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gray-50'
      }`}
    >
      {/* Background Decorators (Matches Experience Section) */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20`}>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Profile Image */}
          <motion.div 
            className="w-full lg:w-2/5 relative group"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Image Card Container */}
            <div className={`relative z-10 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] ${
                darkMode ? 'border border-gray-700 bg-gray-800' : 'border border-gray-200 bg-white'
            }`}>
               {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
              
              <img 
                src={assets.AnveshMen11}
                alt="Profile" 
                className="w-full h-auto object-cover grayscale-0 group-hover:grayscale-[20%] transition-all duration-500"
                loading="lazy"
              />
            </div>

            {/* Decorative Backdrops behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500 -z-10"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
          <motion.div className="space-y-6" variants={containerVariants}>
  <motion.h3 
    variants={itemVariants}
    className={`text-3xl md:text-4xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
  >
    Designing Is My <span className="text-cyan-500">Passion</span>,<br />
    Coding Is My <span className="text-purple-500">Craft</span>.
  </motion.h3>
  
  <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
    I’m a <strong className="text-cyan-500">Frontend Developer</strong> with over 1 year of professional and freelance experience. I specialize in converting <strong className="text-purple-500">Figma designs to React code</strong> with 100% pixel-perfect precision, ensuring the final product matches the vision exactly.
  </motion.p>
  
  <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
    Beyond UI, I excel at seamless <strong className="text-cyan-500">API integrations</strong> and writing clean, bug-free code. I leverage modern frontend technologies to build robust, high-performance projects that are as functional as they are beautiful.
  </motion.p>

  {/* Action Buttons */}
  <motion.div variants={itemVariants} className="pt-6 flex flex-col sm:flex-row gap-4">
    <a
      href={assets.Full_MERN_Stack}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleView}
      className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 overflow-hidden"
    >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
        <span className="relative flex items-center gap-2">
            View Resume <FaExternalLinkAlt className="text-sm"/>
        </span>
    </a>
  </motion.div>
    
  {isViewed && (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm font-medium text-cyan-500 flex items-center gap-2 mt-2"
    >
      <FaDownload className="animate-bounce" /> Opening Resume in new tab...
    </motion.div>
  )}
</motion.div>
          </motion.div>
        </div>

        {/* Features / Philosophy Cards */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                darkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-cyan-500/50' 
                : 'bg-white/80 border-gray-200 hover:shadow-xl hover:border-cyan-300'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                <FaLightbulb className="w-6 h-6 text-cyan-500" />
              </div>
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Creative Solutions</h4>
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              I approach each project with creativity and innovation, ensuring unique and effective solutions tailored to specific needs.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
                darkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-purple-500/50' 
                : 'bg-white/80 border-gray-200 hover:shadow-xl hover:border-purple-300'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                 <FaCode className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Clean Code</h4>
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              I write maintainable, well-structured code following best practices to ensure scalability, performance, and ease of collaboration.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;