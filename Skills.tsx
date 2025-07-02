import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getSkillConnections = (skillName: string) => {
    const skill = skills.find(s => s.name === skillName);
    return skill?.connections || [];
  };

  const isConnected = (skill1: string, skill2: string) => {
    const connections1 = getSkillConnections(skill1);
    const connections2 = getSkillConnections(skill2);
    return connections1.includes(skill2) || connections2.includes(skill1);
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-['Space_Grotesk'] mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Skills Circuit Board
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interactive skill network showcasing technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="relative w-full h-96 md:h-[500px] bg-gray-900/30 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {skills.map((skill) =>
              skill.connections.map((connection) => {
                const connectedSkill = skills.find(s => s.name === connection);
                if (!connectedSkill) return null;

                const isHighlighted = hoveredSkill === skill.name || hoveredSkill === connection;
                
                return (
                  <motion.line
                    key={`${skill.name}-${connection}`}
                    x1={`${skill.x}%`}
                    y1={`${skill.y}%`}
                    x2={`${connectedSkill.x}%`}
                    y2={`${connectedSkill.y}%`}
                    stroke={isHighlighted ? '#00ff94' : '#374151'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    opacity={isHighlighted ? 0.8 : 0.3}
                    className="transition-all duration-300"
                  />
                );
              })
            )}
          </svg>

          {/* Skill Nodes */}
          {skills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const isConnectedToHovered = hoveredSkill && isConnected(skill.name, hoveredSkill);
            
            return (
              <motion.div
                key={skill.name}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.2 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: Math.random() * 0.5 }}
              >
                <div
                  className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? 'bg-green-400 border-green-400 text-black'
                      : isConnectedToHovered
                      ? 'bg-cyan-400/20 border-cyan-400 text-cyan-400'
                      : 'bg-gray-800 border-gray-600 text-gray-300'
                  }`}
                >
                  <div className="text-xs font-bold text-center leading-tight">
                    {skill.name.split(' ').map((word, i) => (
                      <div key={i}>{word}</div>
                    ))}
                  </div>

                  {/* Proficiency Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.2"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - skill.level / 100)}`}
                      initial={{ strokeDashoffset: `${2 * Math.PI * 30}` }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 30 * (1 - skill.level / 100)}` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg p-3 min-w-max z-10"
                    >
                      <div className="text-sm font-semibold text-white">{skill.name}</div>
                      <div className="text-xs text-gray-400">{skill.category}</div>
                      <div className="text-xs text-green-400 font-bold">{skill.level}% Proficiency</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Legend */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Frontend', 'Backend', 'Design', 'Tools'].map((category) => (
            <div key={category} className="text-center">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">{category}</h4>
              <div className="space-y-2">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="text-sm text-gray-400">
                      {skill.name}
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;