import React, { useEffect, useState, useRef } from 'react';
import { Search, Target, BarChart3, MousePointer, Palette, FlaskConical, TrendingUp, Users, Zap, Brain } from 'lucide-react';

interface Service {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    name: 'Google Ads Strategy & Execution',
    percentage: 94,
    icon: <Target className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Full-Funnel Media Planning',
    percentage: 92,
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Data Analytics & Insight Mining',
    percentage: 90,
    icon: <Search className="w-6 h-6" />,
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'Landing Page Optimization',
    percentage: 88,
    icon: <MousePointer className="w-6 h-6" />,
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Paid Creative Direction',
    percentage: 90,
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'A/B Testing & Scaling Strategy',
    percentage: 87,
    icon: <FlaskConical className="w-6 h-6" />,
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'Snapchat + Meta Ads Performance',
    percentage: 85,
    icon: <Zap className="w-6 h-6" />,
    color: 'from-pink-500 to-yellow-500'
  }
];

const ServicesSection: React.FC = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(new Array(services.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animatePercentages();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animatePercentages = () => {
    const duration = 2000;
    const steps = 60;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedPercentages(services.map(service => 
        Math.floor(service.percentage * easeOut)
      ));

      if (step >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Core <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I help brands scale profitably through data-backed media strategies, full-funnel execution, and creative testing – all measured by ROAS and customer LTV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                </div>
                <div className="text-2xl font-bold text-white">
                  {animatedPercentages[index]}%
                </div>
              </div>

              <div className="relative">
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${service.color} transition-all duration-2000 ease-out`}
                    style={{ width: `${animatedPercentages[index]}%` }}
                  ></div>
                </div>

                <div
                  className={`absolute top-0 h-3 w-6 bg-gradient-to-r ${service.color} opacity-70 blur-sm transition-all duration-2000 ease-out animate-pulse`}
                  style={{ 
                    left: `${Math.max(0, animatedPercentages[index] - 5)}%`,
                    opacity: isVisible ? 0.7 : 0
                  }}
                ></div>
              </div>

              <div className="mt-3 text-sm text-gray-400">
                {animatedPercentages[index] >= 90 ? 'Expert Level' : 
                 animatedPercentages[index] >= 85 ? 'Advanced' : 'Proficient'}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-blue-400 mb-2">₹50Cr+</div>
            <div className="text-gray-400 text-sm">Ad Spend Managed</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Industries Served</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-gray-400 text-sm">Campaigns Launched</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-red-400" />
            </div>
            <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
            <div className="text-gray-400 text-sm">Client Retention</div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-gray-700/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Google Marketing Platform Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-400">Google Ads</div>
                <div className="text-sm text-gray-400">Certified Expert</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-red-400">YouTube Ads</div>
                <div className="text-sm text-gray-400">Video Specialist</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-yellow-400">Analytics</div>
                <div className="text-sm text-gray-400">GA4 & GTM</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-400">Tag Manager</div>
                <div className="text-sm text-gray-400">Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
