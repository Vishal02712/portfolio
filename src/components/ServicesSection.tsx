import React, { useState, useEffect, useRef } from 'react';
import { Target, BarChart3, Search, MousePointer, Palette, FlaskConical, Zap, TrendingUp, Users, Brain } from 'lucide-react';

interface Service {
  name: string;
  icon: React.ReactNode;
  description: string;
  gridSpan?: string; // For bento grid layout
}

const services: Service[] = [
  {
    name: 'Google Ads Strategy & Execution',
    icon: <Target className="w-8 h-8" />,
    description: 'Building and managing high-ROAS campaigns across Search, P-Max, and Display networks.',
    gridSpan: 'lg:col-span-2', // Make this one wider on large screens
  },
  {
    name: 'Full-Funnel Media Planning',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Designing integrated media plans that guide users from initial awareness to final conversion.',
  },
  {
    name: 'Data Analytics & Insight Mining',
    icon: <Search className="w-8 h-8" />,
    description: 'Using GA4 and analytics platforms to uncover actionable insights that drive strategy.',
  },
  {
    name: 'Landing Page & CRO',
    icon: <MousePointer className="w-8 h-8" />,
    description: 'Optimizing landing pages and user funnels to maximize conversion rates.',
  },
  {
    name: 'Paid Creative & A/B Testing',
    icon: <Palette className="w-8 h-8" />,
    description: 'Guiding creative strategy and implementing rigorous testing frameworks to find and scale winners.',
    gridSpan: 'lg:col-span-2', // Make this one wider on large screens
  },
];


const useCountUp = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let frame = 0;
    const totalFrames = Math.round(duration / (1000 / 60));
    const counter = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(end * progress));
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);
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


  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Core Expertise</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I help brands scale profitably through a blend of data-backed strategy, full-funnel execution, and relentless optimization.
          </p>
        </div>

        {/* Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`group relative rounded-xl p-1 transition-all duration-500 ease-out bg-white/10 hover:bg-transparent ${service.gridSpan || ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-green-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-spin"></div>
              
              <div className="relative h-full rounded-lg bg-gray-900 p-6 overflow-hidden">
                <div className="relative z-10">
                    {/* Icon - Animates to top left */}
                    <div className="transition-all duration-300 ease-out group-hover:scale-75 group-hover:-translate-x-2 group-hover:-translate-y-2">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 inline-block">
                            {service.icon}
                        </div>
                    </div>
                    
                    {/* Content - Animates up/in */}
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-white transition-all duration-300 ease-out group-hover:-translate-y-2">
                            {service.name}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mt-2 h-0 opacity-0 transform translate-y-4 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                            {service.description}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stat Wall */}
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
        <div className="mt-20 relative [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max animate-marquee-fast">
                {/* We repeat the array 4 times to ensure a seamless loop on ultra-wide screens */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-12 px-6">
                        <span className="text-xl font-semibold text-gray-400 whitespace-nowrap">Google Ads</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></div>
                        <span className="text-xl font-semibold text-gray-400 whitespace-nowrap">YouTube Ads</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></div>
                        <span className="text-xl font-semibold text-gray-400 whitespace-nowrap">Google Analytics (GA4)</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></div>
                        <span className="text-xl font-semibold text-gray-400 whitespace-nowrap">Google Tag Manager</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></div>
                        <span className="text-xl font-semibold text-gray-400 whitespace-nowrap">Meta Ads</span>
                        <div className="w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></div>
                        <span className="text-xl font-semibold text-gray-400 whitespace-nowrap">Shopify</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
