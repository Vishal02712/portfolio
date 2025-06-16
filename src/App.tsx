import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import FrameworkSection from './components/FrameworkSection';
import TestimonialsSection from './components/TestimonialsSection';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <FrameworkSection />
      <TestimonialsSection />
      <PortfolioGallery />
      <ContactSection />
    </div>
  );
}

export default App;