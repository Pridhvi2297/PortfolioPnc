import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import Button from '../UI/Button';
import image from '../../assets/images/pridhvinath.png';

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "Hi, I'm Pridhvinath Chowdary";

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium text-primary-600 dark:text-primary-400"
            >
              SOFTWARE TECHNICAL LEAD & FULL-STACK ENGINEER
            </motion.div>

            <motion.h1
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              {text}
              <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                |
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Passionate about building scalable applications and integrating cutting-edge AI solutions.
              Currently leading teams at T-Mobile to create innovative software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/projects" size="lg" icon={<ArrowRight size={18} />}>
                View My Work
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex space-x-6 mt-10"
            >
              <a
                href="https://github.com/Pridhvi2297"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pridhvinath/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:prudhvinathc.m@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 animate-gradient-xy opacity-20 blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-1.5 w-full h-full shadow-xl">
                <img
                  src={image}
                  alt="Pridhvinath Chowdary"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;