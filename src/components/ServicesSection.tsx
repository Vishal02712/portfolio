import React, { useState, useEffect } from 'react';
import { Target, BarChart3, Search, Lightbulb, Palette, TestTube, TrendingUp } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const targetValues = [94, 92, 90, 88, 90, 87];
    const animateProgress = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setProgressValues(targetValues.map(target => Math.floor(progress * target)));

        if (currentStep >= steps) {
          setProgressValues(targetValues);
          clearInterval(timer);
        }
      }, interval);
    };

    const timer = setTimeout(animateProgress, 1000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Target,
      title: "Google Ads Strategy & Execution",
      description: "End-to-end Google Ads management with advanced bidding strategies, keyword optimization, and performance tracking that delivers consistent ROAS.",
      progress: progressValues[0],
      targetProgress: 94,
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Full-Funnel Media Planning",
      description: "Comprehensive media strategy across all touchpoints, from awareness to conversion, ensuring optimal budget allocation and maximum impact.",
      progress: progressValues[1],
      targetProgress: 92,
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insight Mining",
      description: "Deep-dive analytics and data interpretation that uncover hidden opportunities and drive strategic decision-making for campaign optimization.",
      progress: progressValues[2],
      targetProgress: 90,
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500/30",
      iconColor: "text-red-400"
    },
    {
      icon: Search,
      title: "Landing Page Optimization",
      description: "Conversion-focused landing page design and optimization using A/B testing and user behavior analysis to maximize conversion rates.",
      progress: progressValues[3],
      targetProgress: 88,
      color: "from-yellow-500 to-yellow-600",
      borderColor: "border-yellow-500/30",
      iconColor: "text-yellow-400"
    },
    {
      icon: Palette,
      title: "Paid Creative Direction",
      description: "Strategic creative development for paid campaigns, including ad copy, visual assets, and creative testing frameworks that drive engagement.",
      progress: progressValues[4],
      targetProgress: 90,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: TestTube,
      title: "A/B Testing & Scaling Strategy",
      description: "Systematic testing methodologies and scaling frameworks that identify winning campaigns and optimize performance at scale.",
      progress: progressValues[5],
      targetProgress: 87,
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-green-500/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-red-500/5 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Core Services &
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent">
                Expertise Areas
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing services backed by data-driven strategies 
              and proven methodologies that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border ${service.borderColor} hover:border-opacity-60 transition-all duration-300 transform hover:scale-105 group cursor-pointer`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                
                {/* Animated Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">Expertise Level</span>
                    <span className={`text-sm font-semibold ${service.iconColor}`}>{service.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${service.color} h-3 rounded-full transition-all duration-2000 ease-out ${
                        hoveredService === index ? 'animate-pulse' : ''
                      }`}
                      style={{ 
                        width: `${service.progress}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Marketing?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how these proven strategies can transform your business growth. 
                Every campaign is tailored to your unique goals and market dynamics.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
