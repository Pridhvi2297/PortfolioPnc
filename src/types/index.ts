export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'fullstack' | 'mobile' | 'ai' | 'game';
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements: string[];
  technologies: string[];
  logoUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'languages' | 'frameworks' | 'frontend' | 'backend' | 'mobile' | 'database' | 'cloud' | 'devops' | 'testing' | 'tools';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  logoUrl: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}