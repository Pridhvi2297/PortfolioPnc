import { Project } from '../types';
import chatbot from '../assets/images/chatbot.png'
import eye from '../assets/images/eye.png'

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Script-to-Video Generator',
    description: 'An AI-powered application that converts written scripts into fully rendered videos with customizable avatars and scenes.',
    technologies: ['React', 'Node.js', 'OpenAI', 'FFmpeg', 'AWS'],
    imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'ai',
    featured: true
  },
  {
    id: '2',
    title: 'Eye gaze correction',
    description: 'Eye gaze correction improves accessibility and user experience by dynamically adjusting visual content based on a user`s actual point of regard, compensating for involuntary eye movements or misalignments.',
    technologies: ['TensorFlow', 'Python', 'React', 'FastAPI', 'Docker'],
    imageUrl: eye,
    githubUrl: 'https://github.com/Pridhvi2297/EyeContact',
    category: 'ai',
    featured: true
  },
  {
    id: '3',
    title: 'Crypto Trend Predictor',
    description: 'LSTM-based neural network for predicting cryptocurrency price trends with high accuracy.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'React'],
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'ai',
    featured: false
  },
  {
    id: '4',
    title: 'E-Commerce Mobile App',
    description: 'A cross-platform mobile app for e-commerce with AR product visualization.',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'AR Kit'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    githubUrl: 'https://github.com/Pridhvi2297/PNC-Marketplace',
    category: 'mobile',
    featured: false
  },
  {
    id: '5',
    title: 'Multiplayer Battle Game',
    description: 'A real-time multiplayer battle game with matchmaking and leaderboards.',
    technologies: ['Unity', 'C#', 'Firebase', 'WebSockets', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    githubUrl: 'https://github.com/Pridhvi2297/NostalgiaDevelopment',
    category: 'game',
    featured: false
  },
  {
    id: '6',
    title: 'LangChain Chatbot',
    description: 'A context-aware chatbot that uses LangChain to provide accurate and helpful responses.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'React'],
    imageUrl: chatbot,
    category: 'ai',
    featured: false
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const projectsByCategory = {
  all: projects,
  fullstack: projects.filter(project => project.category === 'fullstack'),
  mobile: projects.filter(project => project.category === 'mobile'),
  ai: projects.filter(project => project.category === 'ai'),
  game: projects.filter(project => project.category === 'game')
};