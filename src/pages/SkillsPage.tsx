import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import SectionTitle from '../components/UI/SectionTitle';
import { skillsByCategory } from '../data/skills';

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

const SkillsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionTitle
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                {category}
              </h3>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-3 bg-gray-100 dark:bg-gray-700 rounded-lg p-1.5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>

                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm passionate about staying current with the latest technologies and best practices.
            I regularly participate in workshops, online courses, and contribute to open-source
            projects to expand my skill set.
          </p>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;