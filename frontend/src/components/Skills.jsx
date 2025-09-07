// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FaHtml5, 
//   FaCss3Alt, 
//   FaJs, 
//   FaReact, 
//   FaNodeJs, 
//   FaGitAlt, 
//   FaDatabase,
//   FaPaintBrush,
//   FaBootstrap,
//   FaPython
// } from 'react-icons/fa';
// import { 
//   SiExpress, 
//   SiMongodb, 
//   SiTailwindcss, 
//   SiFramer, 
//   SiSequelize
// } from 'react-icons/si';

// const Skills = () => {
//   const [isInView, setIsInView] = useState(false);
//   const [countedValues, setCountedValues] = useState({});
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const skillsData = [
//     { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, proficiency: 95 },
//     { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, proficiency: 90 },
//     { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, proficiency: 88 },
//     { name: 'Bootstrap', icon: <FaBootstrap className="text-yellow-400" />, proficiency: 88 },

//     { name: 'React.js', icon: <FaReact className="text-cyan-400" />, proficiency: 85 },
//     { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, proficiency: 78 },
//     { name: 'Express.js', icon: <SiExpress className="text-gray-100" />, proficiency: 75 },
//     { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, proficiency: 90 },
//     { name: 'SQL', icon: <SiSequelize className="text-green-600" />, proficiency: 75 },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" />, proficiency: 90 },
//     { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, proficiency: 80 },
//     { name: 'Git/GitHub', icon: <FaGitAlt className="text-orange-600" />, proficiency: 85 },
//     { name: 'REST APIs', icon: <FaDatabase className="text-green-400" />, proficiency: 82 },
//     { name: 'Python', icon: <FaPython className="text-green-400" />, proficiency: 82 },


//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0, scale: 0.8 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   // Get bar color based on proficiency
//   const getBarColor = (proficiency) => {
//     if (proficiency >= 85) return 'from-green-400 to-green-600';
//     if (proficiency >= 75) return 'from-cyan-400 to-purple-500';
//     return 'from-yellow-400 to-orange-500';
//   };

//   // Get text color based on proficiency
//   const getTextColor = (proficiency) => {
//     if (proficiency >= 85) return 'text-green-400';
//     if (proficiency >= 75) return 'text-cyan-400';
//     return 'text-yellow-400';
//   };

//   return (
//     <section id="skills" className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden" ref={sectionRef}>
//       {/* Background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-900 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="container mx-auto max-w-6xl relative z-10">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
//               Technical Expertise
//             </span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
//           <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//             Technologies and tools I use to bring ideas to life and create exceptional digital experiences
//           </p>
//         </motion.div>

//         <motion.div 
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {skillsData.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-5 text-center shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group relative overflow-hidden border border-gray-700"
//               whileHover={{ 
//                 y: -8, 
//                 scale: 1.03,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               {/* Hover effect overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
//               {/* Icon container with gradient border */}
//               <div className="relative mb-4 inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500">
//                 <div className="text-3xl relative z-10">
//                   {skill.icon}
//                 </div>
//               </div>
              
//               <h4 className="font-semibold mb-2 relative z-10 text-gray-100 group-hover:text-white transition-colors">
//                 {skill.name}
//               </h4>
              
//               {/* Animated proficiency percentage */}
             
              
//               {/* Animated proficiency bar */}
//               <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden relative z-10">
//                 <motion.div 
//                   className={`h-full bg-gradient-to-r ${getBarColor(skill.proficiency)} rounded-full`}
//                   initial={{ width: 0 }}
//                   animate={isInView ? { 
//                     width: `${skill.proficiency}%`
//                   } : { width: 0 }}
//                   transition={{ 
//                     delay: 0.9 + (index * 0.5), 
//                     duration: 1.9, 
//                     ease: "easeOut" 
//                   }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

      
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDatabase,
  FaPaintBrush,
  FaBootstrap,
  FaPython
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiFramer, 
  SiSequelize
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const [isInView, setIsInView] = useState(false);
  const [countedValues, setCountedValues] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, proficiency: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, proficiency: 90 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, proficiency: 88 },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" />, proficiency: 88 },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" />, proficiency: 85 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, proficiency: 78 },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800" />, proficiency: 75 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, proficiency: 90 },
    { name: 'SQL', icon: <SiSequelize className="text-blue-600" />, proficiency: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, proficiency: 90 },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, proficiency: 80 },
    { name: 'Git/GitHub', icon: <FaGitAlt className="text-orange-600" />, proficiency: 85 },
    { name: 'REST APIs', icon: <FaDatabase className="text-green-400" />, proficiency: 82 },
    { name: 'Python', icon: <FaPython className="text-blue-600" />, proficiency: 82 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Get bar color based on proficiency
  const getBarColor = (proficiency) => {
    if (proficiency >= 85) return 'from-green-400 to-green-600';
    if (proficiency >= 75) return 'from-cyan-400 to-purple-500';
    return 'from-yellow-400 to-orange-500';
  };

  // Get text color based on proficiency
  const getTextColor = (proficiency) => {
    if (proficiency >= 85) return 'text-green-400';
    if (proficiency >= 75) return 'text-cyan-400';
    return 'text-yellow-400';
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`min-h-screen py-20 px-4 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800'
      }`}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-purple-900' : 'bg-purple-200'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full filter blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-cyan-900' : 'bg-cyan-200'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Technical Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl p-5 text-center shadow-xl transition-all duration-300 group relative overflow-hidden ${
                darkMode 
                  ? 'bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:shadow-cyan-500/10' 
                  : 'bg-white border border-gray-200 hover:shadow-cyan-500/5'
              }`}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode 
                  ? 'from-cyan-500/5 to-purple-500/5' 
                  : 'from-cyan-500/10 to-purple-500/10'
              }`}></div>
              
              {/* Icon container with gradient border */}
              <div className={`relative mb-4 inline-flex items-center justify-center p-3 rounded-xl group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500 ${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10' 
                  : 'bg-gradient-to-r from-cyan-500/5 to-purple-500/5'
              }`}>
                <div className="text-3xl relative z-10">
                  {skill.icon}
                </div>
              </div>
              
              <h4 className={`font-semibold mb-2 relative z-10 transition-colors ${
                darkMode 
                  ? 'text-gray-100 group-hover:text-white' 
                  : 'text-gray-700 group-hover:text-gray-900'
              }`}>
                {skill.name}
              </h4>
              
              {/* Animated proficiency percentage */}
              {/* <motion.span 
                className={`block mb-2 font-bold text-sm ${getTextColor(skill.proficiency)} relative z-10`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 + (index * 0.1) }}
              >
                {skill.proficiency}%
              </motion.span> */}
              
              {/* Animated proficiency bar */}
              <div className={`h-2 w-full rounded-full overflow-hidden relative z-10 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <motion.div 
                  className={`h-full bg-gradient-to-r ${getBarColor(skill.proficiency)} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { 
                    width: `${skill.proficiency}%`
                  } : { width: 0 }}
                  transition={{ 
                    delay: 0.9 + (index * 0.1), 
                    duration: 1.9, 
                    ease: "easeOut" 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;