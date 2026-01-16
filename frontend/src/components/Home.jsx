import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaCode, FaReact, FaCheck } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { assets } from '../assets/assets';

const Home = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  
  // Professional & Senior Titles
  const texts = [
    'Frontend Developer',
    'React.js Specialist',
    'MERN Stack',
    'UI Implementation Expert',
    'Freelance Developer',
    'Figma to UI Conversion'
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed]);

  const handleDownload = () => {
    if (isDownloading || downloadComplete) return;
    
    setIsDownloading(true);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = assets.Full_MERN_Stack;
    link.download = 'Anoop_Full_Stack_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Simulate download process with animation
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setDownloadComplete(false);
      }, 3000);
    }, 2000);
  };

  const floatingIcons = [
    { icon: <FaReact className="text-2xl text-cyan-400" />, class: "top-10 right-10", delay: 0 },
    { icon: <SiJavascript className="text-2xl text-yellow-400" />, class: "top-1/3 left-8", delay: 0.2 },
    { icon: <SiTailwindcss className="text-2xl text-blue-400" />, class: "bottom-20 right-16", delay: 0.4 },
    { icon: <FaCode className="text-2xl text-purple-400" />, class: "bottom-1/4 left-12", delay: 0.6 },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
  };

  const profileImage = darkMode ? assets.anoopanvesh : assets.AnveshMen11;

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden py-10 px-4 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
          : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800'
      }`}
    >
      {/* Animated background elements with particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-purple-900' : 'bg-purple-200'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-blue-900' : 'bg-blue-200'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-1/3 right-1/3 w-40 h-40 rounded-full filter blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-indigo-900' : 'bg-indigo-200'
        }`} style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg6MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCA2MEgwVjBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]" 
            : "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg6MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCA2MEgwVjBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')]"
        } opacity-10`}></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- Text Content (Updated Structure) --- */}
        <motion.div 
          className="flex flex-col justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
           {/* 'Available for Work' Badge - Adds a professional touch */}
           <motion.div 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full">
              Available for work
            </span>
          </motion.div>

          {/* New Header: Replaces "I am a" with Name */}
          <motion.h1
            className={`text-4xl mt-4 md:text-5xl lg:text-6xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Anoop</span>
            <motion.span 
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block ml-3 origin-bottom-right"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Typing Text - Now acts as a Role/Subtitle */}
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 h-10 flex items-center"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
             <span className={`font-mono ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              <span className="font-bold text-cyan-400">{displayText}</span>
              <span className="animate-pulse text-blue-400">_</span>
            </span>
          </motion.div>
          
          {/* Bio Description */}
          <motion.div 
            className="mb-8 max-w-lg"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <p className={`text-lg mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Based in <span className="text-blue-400 font-semibold">Hyderabad, India</span>.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Crafting immersive web experiences with <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>pixel-perfect precision</span>. I bridge the gap between elegant Figma designs and high-performance React code.
            </p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            variants={fadeInUp}
            transition={{ delay: 1 }}
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 transition-all group relative overflow-hidden text-white"
            >
              <span className="relative z-10 flex items-center">
                <HiMail className="text-xl mr-2" />
                Hire Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.button 
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{ scale: isDownloading ? 1 : 1.05, y: isDownloading ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all group relative overflow-hidden disabled:opacity-80 disabled:cursor-not-allowed ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700 hover:bg-gray-750' 
                  : 'bg-white border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {isDownloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-current rounded-full border-t-transparent"
                  />
                  <span>Downloading...</span>
                </>
              ) : downloadComplete ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaCheck className="text-green-400" />
                  </motion.div>
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                 <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </span>
                  <FaDownload className="mr-2" />
                  <span>Download CV</span>
                </>
              )}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? 'bg-gray-750' : 'bg-gray-100'
              }`}></div>
            </motion.button>
          </motion.div>
          
          {/* Social Icons */}
          <motion.div 
            className="flex gap-4"
            variants={fadeInUp}
            transition={{ delay: 1.2 }}
          >
            <motion.a 
              href="https://github.com/anoop-unq"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg transition-all duration-300 shadow-md group ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/anoop-unq/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg transition-all duration-300 shadow-md group ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="mailto:padakantianoop7@gmail.com"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg transition-all duration-300 shadow-md group ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-red-500 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-red-100 hover:text-red-600'
              }`}
            >
              <HiMail className="text-2xl group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- Image Content --- */}
        <motion.div 
          className="flex justify-center lg:justify-end relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <div className="relative">
            {/* Animated border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            
            {/* Main image container */}
            <div className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 shadow-2xl ${
              darkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <img 
                src={profileImage}
                alt="Anoop - Frontend Developer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
                darkMode ? 'from-black/40 to-transparent' : 'from-white/20 to-transparent'
              }`}></div>
            </div>
            
            {/* Floating tech icons around the image */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.class} p-3 rounded-full shadow-lg flex items-center justify-center ${
                  darkMode 
                    ? 'bg-gray-900 border border-gray-800' 
                    : 'bg-white border border-gray-200'
                }`}
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                  y: [0, -15, 0],
                  opacity: 1,
                  scale: 1
                } : {}}
                transition={{ 
                  delay: 1 + item.delay,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {item.icon}
              </motion.div>
            ))}
            
            {/* Experience badge */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <FaCode className="text-sm" />
              <span className="text-sm font-medium">1+ Year's Experience</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll to explore</span>
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center relative ${
          darkMode ? 'border-gray-700' : 'border-gray-300'
        }`}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;