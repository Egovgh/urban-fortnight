export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  connections: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}