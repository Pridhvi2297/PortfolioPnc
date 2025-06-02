import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import SectionTitle from '../components/UI/SectionTitle';
import { experiences } from '../data/experiences';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const ExperiencePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionTitle
          title="My Experience"
          subtitle="A journey through my professional career in software development."
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary-500/10 dark:bg-primary-500/20 animate-pulse"></div>
                    <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-md">
                      <img
                        src={experience.logoUrl}
                        alt={experience.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.role}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-4">
                    {experience.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {experience.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 mt-2 mr-2 bg-primary-500 rounded-full"></span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ExperiencePage;