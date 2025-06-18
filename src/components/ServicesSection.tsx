import React, { useState, useEffect, useRef } from 'react';
import { Target, BarChart3, Search, MousePointer, Palette, FlaskConical, Zap, TrendingUp, Users, Brain } from 'lucide-react';

interface Service {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'teal' | 'pink';
}

const services: Service[] = [
  {
    name: 'Google Ads Strategy & Execution',
    icon: <Target className="w-7 h-7" />,
    description: 'Building and managing high-ROAS campaigns across Search, P-Max, and Display networks.',
    color: 'blue',
  },
  {
    name: 'Full-Funnel Media Planning',
    icon: <BarChart3 className="w-7 h-7" />,
    description: 'Designing integrated media plans that guide users from initial awareness to final conversion.',
    color: 'green',
  },
  {
    name: 'Data Analytics & Insight Mining',
    icon: <Search className="w-7 h-7" />,
    description: 'Using GA4 and analytics platforms to uncover actionable insights that drive strategy.',
    color: 'yellow',
  },
  {
    name: 'Landing Page & CRO',
    icon: <MousePointer className="w-7 h-7" />,
    description: 'Optimizing landing pages and user funnels to maximize conversion rates.',
    color: 'red',
  },
  {
    name: 'Paid Creative Direction',
    icon: <Palette className="w-7 h-7" />,
    description: 'Guiding creative strategy to produce ad assets that resonate and convert.',
    color: 'purple',
  },
  {
    name: 'A/B Testing & Scaling',
    icon: <FlaskConical className="w-7 h-7" />,
    description: 'Implementing rigorous testing frameworks to identify winners and scale them profitably.',
    color: 'teal',
  },
  {
    name: 'Social & Programmatic Ads',
    icon: <Zap className="w-7 h-7" />,
    description: 'Executing performance campaigns on platforms like Meta, Snapchat, and programmatic channels.',
    color: 'pink',
  },
];

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
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.floor(endValue * progress));
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(endValue);
      }
    }, frameDuration);
    return () => clearInterval(counter);
  }, [end, duration, isVisible]);
  return count;
};

const ServicesSection: React.FC = () => {
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
      { rootMargin: '0px 0px -100px 0px' }
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
      blue: { text: 'text-blue-400', shadow: 'shadow-blue-500/30', bg: 'bg-blue-900/10' },
      green: { text: 'text-green-400', shadow: 'shadow-green-500/30', bg: 'bg-green-900/10' },
      yellow: { text: 'text-yellow-400', shadow: 'shadow-yellow-500/30', bg: 'bg-yellow-900/10' },
      red: { text: 'text-red-400', shadow: 'shadow-red-500/30', bg: 'bg-red-900/10' },
      purple: { text: 'text-purple-400', shadow: 'shadow-purple-500/30', bg: 'bg-purple-900/10' },
      teal: { text: 'text-teal-400', shadow: 'shadow-teal-500/30', bg: 'bg-teal-900/10' },
      pink: { text: 'text-pink-400', shadow: 'shadow-pink-500/30', bg: 'bg-pink-900/10' }
    };
    return colors[color];
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Core Expertise</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I help brands scale profitably through data-backed media strategies, full-funnel execution, and creative testing – all measured by ROAS and customer LTV.
          </p>
        </div>

        {/* Interactive Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const color = getColorClasses(service.color);
            return (
              <div
                key={service.name}
                className={`group relative p-6 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Glow on Hover */}
                <div className={`absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${color.bg} ${color.shadow}`}></div>
                
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-2 rounded-lg ${color.text} ${color.bg.replace('/10', '/20')}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  
                  {/* Description revealed on hover */}
                  <div className="flex-grow flex items-center">
                      <p className="text-gray-400 leading-relaxed transition-all duration-300 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">
                        {service.description}
                      </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Key Metrics "Stat Wall" */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-20">
           {[
            { value: `₹${adSpend}Cr+`, label: 'Ad Spend Managed', color: 'text-blue-400' },
            { value: `${industries}+`, label: 'Industries Served', color: 'text-green-400' },
            { value: `${campaigns}+`, label: 'Campaigns Launched', color: 'text-yellow-400' },
            { value: `${retention}%`, label: 'Client Retention', color: 'text-red-400' }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className={`bg-gray-900/50 border border-white/10 rounded-xl p-6 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms`}}
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee */}
        <div className="mt-20 relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max animate-marquee">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-12 px-6">
                        <span className="text-xl font-semibold text-gray-400">Google Ads</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <span className="text-xl font-semibold text-gray-400">YouTube Ads</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <span className="text-xl font-semibold text-gray-400">Google Analytics (GA4)</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <span className="text-xl font-semibold text-gray-400">Google Tag Manager</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <span className="text-xl font-semibold text-gray-400">Meta Ads</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
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
