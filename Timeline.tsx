import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { timelineEvents } from '../data/timeline';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-['Space_Grotesk'] mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Digital Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Journey through my professional evolution and key milestones
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-pink-500 to-green-400 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const [ref, inView] = useInView({
                threshold: 0.3,
                triggerOnce: true
              });

              return (
                <motion.div
                  key={event.id}
                  ref={ref}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Event Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      {/* Year Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-black font-bold text-sm">
                          {event.year}
                        </div>
                        <Calendar size={16} className="text-gray-400" />
                      </div>

                      {/* Position & Company */}
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin size={16} className="text-cyan-400" />
                        <span className="text-cyan-400 font-medium">{event.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-green-400 font-semibold">
                          <Award size={16} />
                          <span>Key Achievements</span>
                        </div>
                        <ul className="space-y-2">
                          {event.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: (index * 0.2) + (i * 0.1) + 0.3 }}
                              className="flex items-start gap-3 text-sm text-gray-300"
                            >
                              <TrendingUp size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Year Display for Desktop */}
                  <div className={`hidden md:block md:w-2/12 text-center ${
                    index % 2 === 0 ? 'md:order-3' : 'md:order-1'
                  }`}>
                    <div className="text-3xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                      {event.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute left-8 md:left-1/2 bottom-0 w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transform -translate-x-1/2 border-4 border-gray-900"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;