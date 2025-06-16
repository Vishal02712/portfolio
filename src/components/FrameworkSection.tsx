import React, { useEffect, useState, useRef } from 'react';
import { Search, Lightbulb, RefreshCw, Target } from 'lucide-react';

interface FrameworkStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

const frameworkSteps: FrameworkStep[] = [
  {
    title: 'PROBE',
    subtitle: 'Deep Market Research',
    description: 'Comprehensive analysis of market dynamics, competitor strategies, and audience behavior patterns.',
    icon: <Search className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    details: [
      'Competitor landscape analysis',
      'Keyword research & gap analysis',
      'Customer journey mapping',
      'Market opportunity assessment'
    ]
  },
  {
    title: 'UNDERSTAND',
    subtitle: 'Data-Driven Insights',
    description: 'Transform raw data into actionable insights that drive strategic decision-making.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'from-yellow-500 to-yellow-600',
    details: [
      'Performance metrics analysis',
      'Customer segmentation',
      'Attribution modeling',
      'Predictive analytics'
    ]
  },
  {
    title: 'REFINE',
    subtitle: 'Strategic Optimization',
    description: 'Continuous improvement through testing, optimization, and strategic refinements.',
    icon: <RefreshCw className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    details: [
      'A/B testing campaigns',
      'Conversion rate optimization',
      'Budget reallocation',
      'Creative iterations'
    ]
  },
  {
    title: 'EXTRACT',
    subtitle: 'Maximum ROI',
    description: 'Extract maximum value from every marketing dollar through precision targeting and optimization.',
    icon: <Target className="w-8 h-8" />,
    color: 'from-red-500 to-red-600',
    details: [
      'Performance scaling',
      'ROI maximization',
      'Automated optimizations',
      'Strategic expansion'
    ]
  }
];

const FrameworkSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(frameworkSteps.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.3 }
      );
    });

    stepRefs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index]!.observe(ref);
      }
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="text-yellow-400">PURE</span> Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My systematic approach to delivering consistent, measurable results across all marketing campaigns
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {frameworkSteps.map((step, index) => (
            <div
              key={index}
              ref={el => stepRefs.current[index] = el}
              className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 transition-all duration-1000 ${
                visibleSteps[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="lg:w-1/2 space-y-6 lg:px-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} text-white transform transition-transform duration-500 ${
                      visibleSteps[index] ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                      <p className="text-lg text-gray-400">{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className={`flex items-center space-x-3 transform transition-all duration-500 ${
                        visibleSteps[index] 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${detailIndex * 100 + 300}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="lg:w-1/2 mt-8 lg:mt-0 lg:px-8">
                <div className={`relative transform transition-all duration-1000 ${
                  visibleSteps[index] 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}>
                  <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`}></div>
                    </div>
                    
                    {/* Step Number */}
                    <div className="relative">
                      <div className="text-6xl font-bold opacity-20 text-white mb-4">
                        0{index + 1}
                      </div>
                      
                      {/* Mock Data Visualization */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Progress</span>
                          <span className="text-white font-semibold">{85 + index * 3}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${step.color} transition-all duration-2000 ease-out ${
                              visibleSteps[index] ? 'w-full' : 'w-0'
                            }`}
                            style={{ transitionDelay: '500ms' }}
                          ></div>
                        </div>
                        
                        {/* Sample Metrics */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">
                              {visibleSteps[index] ? (12 + index * 8) : 0}%
                            </div>
                            <div className="text-xs text-gray-400">Improvement</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">
                              {visibleSteps[index] ? (3.2 + index * 0.4).toFixed(1) : 0}x
                            </div>
                            <div className="text-xs text-gray-400">ROI</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;