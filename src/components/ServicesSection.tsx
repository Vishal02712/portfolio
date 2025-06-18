import React, { useState, useEffect, useRef } from 'react';
import { Target, BarChart3, Search, MousePointer, Palette, FlaskConical, TrendingUp, Users, Brain } from 'lucide-react';

interface Service {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'teal';
}

const services: Service[] = [
  {
    name: 'Google Ads & Performance Marketing',
    icon: <Target className="w-8 h-8" />,
    description: 'Building and managing high-ROAS campaigns across Search, P-Max, and Display networks. My core focus is on profitable, data-driven scaling.',
    color: 'blue',
  },
  {
    name: 'Full-Funnel Media Strategy',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Designing integrated media plans that guide users from initial awareness with video and display, to final conversion with search and retargeting.',
    color: 'green',
  },
  {
    name: 'Analytics & Insight Mining',
    icon: <Search className="w-8 h-8" />,
    description: 'Using GA4, server-side tracking, and data platforms to uncover actionable insights that drive every strategic decision.',
    color: 'yellow',
  },
  {
    name: 'Conversion Rate Optimization (CRO)',
    icon: <MousePointer className="w-8 h-8" />,
    description: 'A/B testing landing pages, ad creatives, and user funnels to systematically increase conversion rates and reduce acquisition costs.',
    color: 'red',
  },
  {
    name: 'Creative Strategy for Paid Media',
    icon: <Palette className="w-8 h-8" />,
    description: 'Guiding creative strategy to produce ad assets—from static images to short-form video—that resonate with the target audience and convert.',
    color: 'purple',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -200px 0px' });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const adSpend = useCountUp(50, 2000, isVisible);
  const industries = useCountUp(15, 2000, isVisible);
  const campaigns = useCountUp(1000, 2000, isVisible);
  const retention = useCountUp(98, 2000, isVisible);

  const getColorClasses = (color: Service['color']) => {
    const colors = {
      blue: { text: 'text-blue-300', border: 'border-blue-500/50', shadow: 'shadow-blue-500/50' },
      green: { text: 'text-green-300', border: 'border-green-500/50', shadow: 'shadow-green-500/50' },
      yellow: { text: 'text-yellow-300', border: 'border-yellow-500/50', shadow: 'shadow-yellow-500/50' },
      red: { text: 'text-red-300', border: 'border-red-500/50', shadow: 'shadow-red-500/50' },
      purple: { text: 'text-purple-300', border: 'border-purple-500/50', shadow: 'shadow-purple-500/50' },
      teal: { text: 'text-teal-300', border: 'border-teal-500/50', shadow: 'shadow-teal-500/50' },
    };
    return colors[color];
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">The Skill Stack</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My expertise is a full-stack approach to growth. From high-level strategy to hands-on execution, each skill builds upon the others to create a powerful, cohesive engine for your brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: The Interactive Skill Stack */}
          <div className="relative h-[28rem] w-full">
            {services.map((service, index) => {
              const offset = (index - activeIndex + services.length) % services.length;
              const isActive = offset === 0;
              const colors = getColorClasses(service.color);

              return (
                <div
                  key={service.name}
                  onClick={() => setActiveIndex(index)}
                  className="absolute w-full h-full cursor-pointer transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateY(${offset * 1.5}rem) scale(${1 - offset * 0.05})`,
                    zIndex: services.length - offset,
                    opacity: offset > 2 ? 0 : 1, // Show top 3 cards
                  }}
                >
                  <div className={`relative w-full h-full rounded-2xl p-6 border transition-all duration-500 ease-in-out
                    ${isActive ? `${colors.border} ${colors.shadow} bg-gray-900/40 backdrop-blur-md` : 'bg-gray-900/20 backdrop-blur-sm border-white/10'}`}
                  >
                    <div className={`transition-all duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg transition-colors duration-500 ${isActive ? colors.text.replace('300', '400') + ' bg-white/10' : 'text-gray-300'}`}>
                          {service.icon}
                        </div>
                        <h3 className={`text-xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                          {service.name}
                        </h3>
                      </div>
                      <p className={`mt-4 text-gray-300 transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Stat Wall */}
          <div className="grid grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
