import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import { skills } from '../../data/skills';
import Button from '../UI/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const categories = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'devops', name: 'DevOps' },
  { id: 'cloud', name: 'Cloud' },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="My Skills"
          subtitle="I've worked with a variety of technologies across the full stack."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.name}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                {skills
                  .filter((skill) => skill.category === category.id)
                  .slice(0, 9)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex flex-col items-center"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-sm mb-2">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/skills" variant="outline">
            View All Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;