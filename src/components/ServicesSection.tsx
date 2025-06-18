import React, { useState, useEffect, useRef } from 'react';
import { Target, BarChart3, Search, MousePointer, Palette, FlaskConical, Zap, TrendingUp, Users, Brain } from 'lucide-react';

// Expanded interface for more engaging content on hover
interface Service {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'teal' | 'pink';
}

const services: Service[] = [
  {
    name: 'Google Ads Strategy & Execution',
    icon: <Target className="w-8 h-8" />,
    description: 'Building and managing high-ROAS campaigns across Search, P-Max, and Display networks.',
    color: 'blue',
  },
  {
    name: 'Full-Funnel Media Planning',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Designing integrated media plans that guide users from initial awareness to final conversion.',
    color: 'green',
  },
  {
    name: 'Data Analytics & Insight Mining',
    icon: <Search className="w-8 h-8" />,
    description: 'Using GA4 and analytics platforms to uncover actionable insights that drive strategy.',
    color: 'yellow',
  },
  {
    name: 'Landing Page & CRO',
    icon: <MousePointer className="w-8 h-8" />,
    description: 'Optimizing landing pages and user funnels to maximize conversion rates.',
    color: 'red',
  },
  {
    name: 'Paid Creative Direction',
    icon: <Palette className="w-8 h-8" />,
    description: 'Guiding creative strategy to produce ad assets that resonate and convert.',
    color: 'purple',
  },
  {
    name: 'A/B Testing & Scaling',
    icon: <FlaskConical className="w-8 h-8" />,
    description: 'Implementing rigorous testing frameworks to identify winners and scale them profitably.',
    color: 'teal',
  },
  {
    name: 'Social & Programmatic Ads',
    icon: <Zap className="w-8 h-8" />,
    description: 'Executing performance campaigns on platforms like Meta, Snapchat, and programmatic channels.',
    color: 'pink',
  },
];

// Custom hook for counting up animation
const useCountUp = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const endValue = end;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic function
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(endValue * easeOutProgress));
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(endValue); // Ensure it ends on the exact number
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [end, duration, isVisible]);

  return count;
};


const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const adSpend = useCountUp(50, 2000, isVisible);
  const industries = useCountUp(15, 2000, isVisible);
  const campaigns = useCountUp(1000, 2000, isVisible);
  const retention = useCountUp(98, 2000, isVisible);

  const getColorClasses = (color: Service['color']) => {
      const colors = {
        blue: 'text-blue-400 border-blue-500/50 shadow-blue-500/20 bg-blue-500/10',
        green: 'text-green-400 border-green-500/50 shadow-green-500/20 bg-green-500/10',
        yellow: 'text-yellow-400 border-yellow-500/50 shadow-yellow-500/20 bg-yellow-500/10',
        red: 'text-red-400 border-red-500/50 shadow-red-500/20 bg-red-500/10',
        purple: 'text-purple-400 border-purple-500/50 shadow-purple-500/20 bg-purple-500/10',
        teal: 'text-teal-400 border-teal-500/50 shadow-teal-500/20 bg-teal-500/10',
        pink: 'text-pink-400 border-pink-500/50 shadow-pink-500/20 bg-pink-500/10'
      };
      return colors[color];
  }

  const radius = '16rem'; // You can adjust this for responsiveness
  const getPosition = (index: number) => {
      const angle = (index / services.length) * 2 * Math.PI - Math.PI / 2;
      const x = `calc(50% + ${Math.cos(angle)} * ${radius} - 50px)`;
      const y = `calc(50% + ${Math.sin(angle)} * ${radius} - 50px)`;
      return { top: y, left: x };
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Core Expertise</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I help brands scale profitably through data-backed media strategies, full-funnel execution, and creative testing – all measured by ROAS and customer LTV.
          </p>
        </div>

        {/* Interactive Radial Skill Hub */}
        <div className={`relative h-[40rem] w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-900/50 border border-white/10 rounded-full flex flex-col justify-center items-center p-4 backdrop-blur-sm shadow-2xl">
              <Brain className={`w-12 h-12 transition-colors duration-300 ${hoveredIndex !== null ? getColorClasses(services[hoveredIndex].color).split(' ')[0] : 'text-blue-400'}`} />
              <div className="mt-2 text-white font-bold text-lg leading-tight transition-opacity duration-300">
                {hoveredIndex !== null ? services[hoveredIndex].name : 'Core Skills'}
              </div>
            </div>
            <p className={`mt-4 h-12 text-gray-400 w-64 transition-opacity duration-300`}>
              {hoveredIndex !== null ? services[hoveredIndex].description : 'Hover over a skill to see details.'}
            </p>
          </div>
          
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`absolute w-[100px] h-[100px] rounded-full flex items-center justify-center border transition-all duration-500 ease-out shadow-lg cursor-pointer ${getColorClasses(service.color)}`}
              style={{ 
                ...getPosition(index),
                transform: `scale(${hoveredIndex === index ? 1.15 : (hoveredIndex !== null ? 0.9 : 1)})`,
                opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6,
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.icon}
            </div>
          ))}
        </div>
        
        {/* Key Metrics "Stat Wall" */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-12">
          {[
            { value: `₹${adSpend}Cr+`, label: 'Ad Spend Managed', color: 'text-blue-400' },
            { value: `${industries}+`, label: 'Industries Served', color: 'text-green-400' },
            { value: `${campaigns}+`, label: 'Campaigns Launched', color: 'text-yellow-400' },
            { value: `${retention}%`, label: 'Client Retention', color: 'text-red-400' }
          ].map(stat => (
            <div key={stat.label} className="bg-gray-900/50 border border-white/10 rounded-xl p-6 text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee for Platform Expertise */}
        <div className="mt-20 relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max animate-marquee">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex space-x-12 px-6">
                        <span className="text-xl font-semibold text-gray-400">Google Ads</span>
                        <span className="text-xl font-semibold text-gray-400">YouTube Ads</span>
                        <span className="text-xl font-semibold text-gray-400">Google Analytics (GA4)</span>
                        <span className="text-xl font-semibold text-gray-400">Google Tag Manager</span>
                        <span className="text-xl font-semibold text-gray-400">Meta Ads</span>
                        <span className="text-xl font-semibold text-gray-400">Shopify</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
