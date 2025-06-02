import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import ExperienceSection from '../components/Home/ExperienceSection';
import SkillsSection from '../components/Home/SkillsSection';
import ContactCTA from '../components/Home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProjects />
      <ExperienceSection />
      <SkillsSection />
      <ContactCTA />
    </MainLayout>
  );
};

export default HomePage;