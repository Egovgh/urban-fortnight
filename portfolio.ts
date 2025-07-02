import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'SmartWatch OS Interface',
    description: 'Revolutionary smartwatch operating system with AI-powered health monitoring and seamless connectivity.',
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartwatch Projects',
    techStack: ['React Native', 'C++', 'IoT', 'Bluetooth LE'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Cyberpunk E-Commerce Platform',
    description: 'Futuristic e-commerce platform with immersive 3D product visualization and AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Development',
    techStack: ['React', 'Three.js', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Neural Network Dashboard',
    description: 'Advanced machine learning model visualization dashboard with real-time training metrics and performance analytics.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Software Engineering',
    techStack: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '4',
    title: 'Holographic UI Design System',
    description: 'Comprehensive design system for next-generation holographic interfaces with spatial interaction patterns.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'UI/UX Design',
    techStack: ['Figma', 'Blender', 'After Effects', 'Unity'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '5',
    title: 'Quantum Fitness Tracker',
    description: 'Next-gen fitness tracking app with quantum-inspired algorithms for personalized health optimization.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Smartwatch Projects',
    techStack: ['Swift', 'HealthKit', 'Core ML', 'WatchOS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '6',
    title: 'Brand Identity Portfolio',
    description: 'Collection of cutting-edge brand identities for tech startups, featuring dynamic logos and digital brand systems.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Graphic Design',
    techStack: ['Adobe Creative Suite', 'Cinema 4D', 'Sketch'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export const categories = [
  'All Projects',
  'Smartwatch Projects',
  'Web Development',
  'Software Engineering',
  'UI/UX Design',
  'Graphic Design'
];