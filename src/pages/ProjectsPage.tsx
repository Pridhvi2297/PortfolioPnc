import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github as GitHub, ArrowUpRight } from 'lucide-react';
import MainLayout from '../components/Layout/MainLayout';
import SectionTitle from '../components/UI/SectionTitle';
import { projectsByCategory } from '../data/projects';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'game', name: 'Games' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projectsByCategory>('all');

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my work across various technologies and domains."
          centered
        />

        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as keyof typeof projectsByCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {projectsByCategory[activeCategory].map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                        >
                          <GitHub size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MainLayout>
  );
};
export default ProjectsPage;