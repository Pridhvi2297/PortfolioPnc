import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';
import { experiences } from '../../data/experiences';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="My Experience"
          subtitle="I've worked with leading companies to deliver impactful software solutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mt-12"
        >
          {experiences.slice(0, 3).map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/3 flex justify-center md:justify-start">
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

              <div className="md:w-2/3 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
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
                <div className="flex flex-wrap gap-2 mt-3">
                  {experience.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {experience.technologies.length > 5 && (
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                      +{experience.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button to="/experience" variant="outline">
            View Full Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;