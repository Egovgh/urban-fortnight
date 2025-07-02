import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend Skills
  { name: 'React', level: 95, category: 'Frontend', x: 20, y: 25, connections: ['JavaScript', 'TypeScript', 'Node.js'] },
  { name: 'TypeScript', level: 90, category: 'Frontend', x: 35, y: 15, connections: ['React', 'Node.js'] },
  { name: 'JavaScript', level: 98, category: 'Frontend', x: 15, y: 40, connections: ['React', 'Node.js', 'CSS3'] },
  { name: 'CSS3', level: 92, category: 'Frontend', x: 30, y: 50, connections: ['HTML5', 'JavaScript'] },
  { name: 'HTML5', level: 95, category: 'Frontend', x: 45, y: 45, connections: ['CSS3'] },
  
  // Backend Skills
  { name: 'Node.js', level: 88, category: 'Backend', x: 65, y: 20, connections: ['React', 'Python', 'Docker'] },
  { name: 'Python', level: 85, category: 'Backend', x: 70, y: 35, connections: ['Node.js', 'SQL', 'Docker'] },
  { name: 'SQL', level: 80, category: 'Backend', x: 80, y: 50, connections: ['Python'] },
  
  // Design Skills
  { name: 'Figma', level: 90, category: 'Design', x: 20, y: 70, connections: ['Adobe Suite'] },
  { name: 'Adobe Suite', level: 85, category: 'Design', x: 35, y: 80, connections: ['Figma'] },
  
  // Tools
  { name: 'Git', level: 92, category: 'Tools', x: 65, y: 65, connections: ['Docker'] },
  { name: 'Docker', level: 78, category: 'Tools', x: 80, y: 75, connections: ['Git', 'Node.js', 'Python'] }
];