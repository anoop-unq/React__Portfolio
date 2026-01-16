import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase,
  FaPython, FaFigma, FaCode
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiFramer, SiSequelize,
  SiPostman, SiVercel
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  
  // Categorized Skills Data (Kept same as your code)
  const skillCategories = [
    {
      title: "Frontend & Design",
      description: "Crafting pixel-perfect, responsive user interfaces.",
      skills: [
        { name: 'Figma to React', icon: <FaFigma className="text-pink-500" />, proficiency: 98, badge: 'Pixel Perfect' },
        { name: 'React.js', icon: <FaReact className="text-cyan-400" />, proficiency: 95 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, proficiency: 95 },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, proficiency: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, proficiency: 92 },
        { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400" />, proficiency: 88 },
        { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" />, proficiency: 85 },
      ]
    },
    {
      title: "Backend & Database",
      description: "Building robust, scalable server-side logic.",
      skills: [
        { name: 'REST APIs', icon: <FaDatabase className="text-green-400" />, proficiency: 98 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, proficiency: 88 },
        { name: 'Express.js', icon: <SiExpress className="text-gray-500" />, proficiency: 85 },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, proficiency: 80 },
        { name: 'SQL', icon: <SiSequelize className="text-blue-600" />, proficiency: 75 },
        { name: 'Python', icon: <FaPython className="text-blue-500" />, proficiency: 70 },
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Streamlining workflow and deployment.",
      skills: [
        { name: 'VS Code', icon: <FaCode className="text-blue-500" />, proficiency: 95 },
        { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" />, proficiency: 92 },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" />, proficiency: 90 },
        { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-600" />, proficiency: 88 },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const getBarGradient = (proficiency) => {
    if (proficiency >= 95) return 'from-emerald-400 to-green-600';
    if (proficiency >= 85) return 'from-cyan-400 to-blue-600';
    return 'from-rose-500 to-red-600';
  };

  const getBarShadow = (proficiency) => {
    if (proficiency >= 95) return 'shadow-[0_0_15px_rgba(16,185,129,0.4)]';
    if (proficiency >= 85) return 'shadow-[0_0_15px_rgba(6,182,212,0.4)]';
    return 'shadow-[0_0_15px_rgba(244,63,94,0.4)]';
  };

  return (
    <section 
      id="skills" 
      className={`min-h-screen py-20 px-4 relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gray-50'
      }`}
    >
      {/* Background Decorators */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header - Fixed Trigger */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Technical Expertise
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
             A robust stack of modern technologies I use to turn concepts into high-performance digital reality.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Skill Categories Loop */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Title - Fixed Trigger */}
              <motion.div 
                className="mb-8 pl-4 border-l-4 border-cyan-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {category.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {category.description}
                </p>
              </motion.div>

              {/* Grid for this category - Fixed Trigger */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // Reduced amount for mobile
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`relative p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 group ${
                      darkMode 
                        ? 'bg-gray-800/40 border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800/60' 
                        : 'bg-white/60 border-gray-200 hover:border-cyan-400 hover:shadow-lg hover:bg-white/80'
                    }`}
                  >
                    {skill.badge && (
                        <div className="absolute -top-3 -right-2 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg transform rotate-3">
                          {skill.badge}
                        </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                        <div className="text-3xl">
                          {skill.icon}
                        </div>
                      </div>
                      <span className={`text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.proficiency}%
                      </span>
                    </div>

                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {skill.name}
                    </h4>

                    {/* Progress Bar */}
                    <div className={`h-2.5 w-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${getBarGradient(skill.proficiency)} rounded-full ${getBarShadow(skill.proficiency)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;