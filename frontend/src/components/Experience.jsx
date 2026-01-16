import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaTools, 
  FaLaptopCode, 
  FaServer, 
  FaCloudUploadAlt, 
  FaServicestack 
} from 'react-icons/fa';
import { 
  SiPostman, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiNetlify, 
  SiFirebase, 
  SiRender, 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs 
} from 'react-icons/si';

const JourneySection = ({ sectionRef, darkMode }) => {
  const [activeTab, setActiveTab] = useState('experience');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`min-h-screen py-20 px-4 md:px-8 relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gray-50'
      }`}
    >
      {/* CSS to hide scrollbar but allow scrolling */}
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background Decorators */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20`}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Professional Journey
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Tracing my path through code, creativity, and continuous learning.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`inline-flex p-1.5 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            {['experience', 'education', 'tools'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                    : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* --- EXPERIENCE SECTION --- */}
        {activeTab === 'experience' && (
          <motion.div
            className={`p-6 md:p-8 rounded-3xl border shadow-2xl backdrop-blur-sm ${
              darkMode 
                ? 'bg-gray-900/60 border-gray-800' 
                : 'bg-white/70 border-gray-200'
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                <FaBriefcase className="h-6 w-6" />
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Work Experience
              </h2>
            </div>

            {/* SCROLLABLE AREA STARTS HERE */}
            <div className="hide-scroll max-h-[400px] overflow-y-auto pr-2 pb-4">
              <motion.div
                className="space-y-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Job 1 */}
                <motion.div className="relative pl-8 pb-12 border-l-2 border-green-500/30 last:border-0" variants={itemVariants}>
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                  <motion.div
                    className={`p-6 rounded-2xl transition-all duration-300 border ${
                      darkMode 
                        ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700 hover:border-green-500/50' 
                        : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Frontend Developer</h3>
                        <span className="text-sm font-semibold px-3 py-1 bg-green-500/10 text-green-500 rounded-full w-fit mt-2 md:mt-0">
                            Oct 2025 - Present
                        </span>
                    </div>
                    <p className="text-lg text-green-500 font-medium mb-3">Photon Software</p>
                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Frontend Developer translating Figma designs into responsive, production-ready user interfaces using modern web technologies. Implementing UI enhancements, integrating APIs, and ensuring performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Tailwind', 'Figma', 'API Integration'].map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Job 2 */}
                <motion.div className="relative pl-8 pb-12 border-l-2 border-green-500/30" variants={itemVariants}>
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                  <motion.div
                    className={`p-6 rounded-2xl transition-all duration-300 border ${
                      darkMode 
                        ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700 hover:border-green-500/50' 
                        : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                     <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Web Developer Intern</h3>
                        <span className="text-sm font-semibold px-3 py-1 bg-green-500/10 text-green-500 rounded-full w-fit mt-2 md:mt-0">
                            Feb 2025 - May 2025
                        </span>
                    </div>
                    <p className="text-lg text-green-500 font-medium mb-3">Labmentix</p>
                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Developed and maintained responsive web applications using React, JavaScript, and Tailwind CSS. Collaborated with UX designers to implement user-friendly interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'JavaScript', 'Tailwind CSS', 'UI/UX'].map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Job 3 */}
                <motion.div className="relative pl-8 pb-0 border-l-2 border-green-500/30" variants={itemVariants}>
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                  <motion.div
                    className={`p-6 rounded-2xl transition-all duration-300 border ${
                      darkMode 
                        ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700 hover:border-green-500/50' 
                        : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                     <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full Stack Intern</h3>
                        <span className="text-sm font-semibold px-3 py-1 bg-green-500/10 text-green-500 rounded-full w-fit mt-2 md:mt-0">
                            Apr 2025 - June 2025
                        </span>
                    </div>
                    <p className="text-lg text-green-500 font-medium mb-3">Unified Private Limited</p>
                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Assisted in developing both frontend and backend components. Gained hands-on experience with Node.js, Express, and MongoDB databases.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'MongoDB', 'Full Stack'].map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            {/* SCROLLABLE AREA ENDS HERE */}
            
            {/* Scroll indicator hint */}
            <div className={`text-center text-xs mt-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
               Scroll for more history
            </div>
          </motion.div>
        )}

        {/* --- EDUCATION SECTION --- */}
        {activeTab === 'education' && (
          <motion.div
            className={`p-6 md:p-8 rounded-3xl border shadow-2xl backdrop-blur-sm ${
                darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/70 border-gray-200'
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <FaGraduationCap className="h-6 w-6" />
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Education & Learning
              </h2>
            </div>

            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div className="relative pl-8 pb-8 border-l-2 border-blue-500/30" variants={itemVariants}>
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                <motion.div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Bachelor's in Computer Applications</h3>
                  <p className="text-blue-500 font-medium mb-2">Nizam College • 2021 - 2024</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Focused on software development principles, algorithms, data structures, and web technologies.</p>
                </motion.div>
              </motion.div>
              
              <motion.div className="relative pl-8 pb-2 border-l-2 border-blue-500/30" variants={itemVariants}>
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                <motion.div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Full Stack Courses</h3>
                  <p className="text-blue-500 font-medium mb-2">10000 Coders</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Continuously expanding knowledge through online learning platforms. Completed courses in React, Node.js, and responsive design.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* --- TOOLS SECTION --- */}
        {activeTab === 'tools' && (
          <motion.div
            className={`p-6 md:p-8 rounded-3xl border shadow-2xl backdrop-blur-sm ${
                darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/70 border-gray-200'
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
             <div className="flex items-center mb-8">
              <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                <FaTools className="h-6 w-6" />
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Tech Stack
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Left Column: Editors & Deployment */}
               <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
                  {/* Card 1 */}
                  <motion.div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`} variants={cardVariants}>
                     <h3 className={`text-lg font-bold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        <FaLaptopCode className="mr-2 text-blue-500" /> Development
                     </h3>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                           { name: 'VS Code', icon: <FaServicestack />, color: 'bg-blue-500' },
                           { name: 'Postman', icon: <SiPostman />, color: 'bg-orange-500' },
                           { name: 'Git', icon: <SiGit />, color: 'bg-red-500' },
                           { name: 'GitHub', icon: <SiGithub />, color: 'bg-purple-600' },
                        ].map((tool) => (
                           <div key={tool.name} className={`flex flex-col items-center p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                              <div className={`${tool.color} p-2 rounded-full text-white mb-2`}>{tool.icon}</div>
                              <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{tool.name}</span>
                           </div>
                        ))}
                     </div>
                  </motion.div>
                  {/* Card 2 */}
                  <motion.div className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`} variants={cardVariants}>
                     <h3 className={`text-lg font-bold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        <FaCloudUploadAlt className="mr-2 text-green-500" /> Deployment
                     </h3>
                     <div className="grid grid-cols-2 gap-4">
                        {[
                           { name: 'Vercel', icon: <SiVercel />, color: 'bg-black' },
                           { name: 'Netlify', icon: <SiNetlify />, color: 'bg-blue-600' },
                           { name: 'Firebase', icon: <SiFirebase />, color: 'bg-yellow-500' },
                           { name: 'Render', icon: <SiRender />, color: 'bg-green-600' },
                        ].map((tool) => (
                           <div key={tool.name} className={`flex flex-col items-center p-3 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                              <div className={`${tool.color} p-2 rounded-full text-white mb-2`}>{tool.icon}</div>
                              <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{tool.name}</span>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>

               {/* Right Column: MERN Stack */}
               <motion.div 
                  className={`p-6 rounded-2xl border h-full ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`} 
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
               >
                   <h3 className={`text-lg font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        <FaServer className="mr-2 text-purple-500" /> MERN Stack
                   </h3>
                   <div className="grid grid-cols-2 gap-4">
                      {[
                         { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-600' },
                         { name: 'Express', icon: <SiExpress />, color: 'bg-gray-700' },
                         { name: 'React', icon: <SiReact />, color: 'bg-cyan-500' },
                         { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-emerald-500' },
                      ].map((tool) => (
                         <div key={tool.name} className={`flex flex-col items-center p-6 rounded-xl transition-transform hover:scale-105 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                            <div className={`${tool.color} p-4 rounded-full text-white mb-3 shadow-lg`}>
                               {React.cloneElement(tool.icon, { className: "text-2xl" })}
                            </div>
                            <span className={`text-sm font-bold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{tool.name}</span>
                         </div>
                      ))}
                   </div>
               </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default JourneySection;