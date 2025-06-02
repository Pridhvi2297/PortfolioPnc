import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/Layout/MainLayout';
import SectionTitle from '../components/UI/SectionTitle';
import { education, awards } from '../data/education';
import image from '../assets/images/pridhvinath.png';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionTitle
          title="About Me"
          subtitle="My journey, education, and what drives me as a developer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I am Pridhvinath Chowdary, a Software Technical Lead and Full-Stack 
                Engineer with over 7+ years of experience in the industry. My journey in 
                software development began with a passion for solving complex problems and 
                creating elegant solutions.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with industry giants 
                like T-Mobile, Walmart, and Amazon, where I've led teams in developing 
                innovative software solutions that make a real impact.
              </p>
              <p>
                My expertise spans across full-stack development, AI/ML integration, and 
                cloud architecture. I'm particularly passionate about leveraging cutting-edge 
                technologies to build scalable and efficient applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and staying at the forefront of technological advancements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg blur-2xl opacity-70 dark:opacity-40 animate-gradient-xy"></div>
            <img
              src={image}
              alt="Pridhvinath Chowdary"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 mr-4 bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                    <img
                      src={edu.logoUrl}
                      alt={edu.institution}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.year}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {edu.degree} in {edu.field}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Awards & Certifications
          </h3>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {award.title}
                  </h4>
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-2 md:mt-0">
                    {award.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Issued by {award.issuer}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;