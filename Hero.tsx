import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Watch, Zap, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Graphics Designer', 'Web Developer', 'Software Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-pink-500 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-green-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-cyan-400"
            >
              <Watch size={40} />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-cyan-400 via-pink-500 to-green-400 bg-clip-text text-transparent">
              AskQris.inc
            </h1>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green-400"
            >
              <Zap size={40} />
            </motion.div>
          </div>

          <div className="text-2xl md:text-4xl font-medium text-gray-300 mb-8 h-12 flex items-center justify-center">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
            >
              {roles[currentRole]}
            </motion.span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting next-generation digital experiences through innovative smartwatch technology, 
            cutting-edge web development, and immersive design solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Explore Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 flex items-center gap-2"
            >
              <Code2 size={20} />
              View Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;