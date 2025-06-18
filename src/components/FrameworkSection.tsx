import React, { useEffect, useState, useRef } from 'react';
import { Search, BrainCircuit, Filter, Rocket, TrendingUp, Lightbulb } from 'lucide-react';

// New interface tailored to the PURE framework content
interface FrameworkStep {
  letter: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'yellow' | 'green' | 'red';
}

const frameworkSteps: FrameworkStep[] = [
  {
    letter: 'P',
    title: 'Probe',
    description: 'Start broad. Use broad match keywords targeting your core product and industry terms. Let the algorithm gather wide intent signals.',
    icon: <Search className="w-7 h-7" />,
    color: 'blue',
  },
  {
    letter: 'U',
    title: 'Understand',
    description: 'Let the campaigns run for at least 10 days. Analyze the Search Terms Report to uncover what real users are actually searching.',
    icon: <BrainCircuit className="w-7 h-7" />,
    color: 'yellow',
  },
  {
    letter: 'R',
    title: 'Refine',
    description: 'From the data, group low-CPC, high-ROAS search terms. These are your golden performers. Separate signal from noise.',
    icon: <Filter className="w-7 h-7" />,
    color: 'green',
  },
  {
    letter: 'E',
    title: 'Extract',
    description: 'Create a new ad group using the refined search terms. Add them as exact and phrase match only. Apply tighter budgets and better bidding logic.',
    icon: <Rocket className="w-7 h-7" />,
    color: 'red',
  }
];

// Helper to get Tailwind CSS color classes
const getColorClasses = (color: 'blue' | 'yellow' | 'green' | 'red') => {
  switch (color) {
    case 'blue':
      return { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', iconBg: 'bg-blue-500' };
    case 'yellow':
      return { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', iconBg: 'bg-yellow-500' };
    case 'green':
      return { text: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30', iconBg: 'bg-green-500' };
    case 'red':
      return { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', iconBg: 'bg-red-500' };
  }
};

const FrameworkSection: React.FC = () => {
  const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});
  const refs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = Array.from(refs.current.keys()).find(
              (k) => refs.current.get(k) === entry.target
            );
            if (key) {
              setVisibleElements((prev) => ({ ...prev, [key]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (key: string) => (el: HTMLDivElement | null) => {
    if (el) {
      refs.current.set(key, el);
    } else {
      refs.current.delete(key);
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div 
          ref={addToRefs('header')}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ease-out ${visibleElements['header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="text-blue-400">P</span><span className="text-yellow-400">U</span><span className="text-green-400">R</span><span className="text-red-400">E</span> Framework
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            My Proven System for Scaling ROAS with Google Ads
          </p>
          <p className="text-gray-400 leading-relaxed">
            Over the years, I’ve built a personal framework called PURE — a lean, data-driven process that helps uncover hidden performance in paid campaigns by turning chaos into clarity. Whether you’re starting fresh or optimizing a mature account, PURE helps identify, isolate, and scale the keywords that truly move the needle.
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {frameworkSteps.map((step, index) => {
            const colors = getColorClasses(step.color);
            const key = `step-${index}`;
            return (
              <div
                key={key}
                ref={addToRefs(key)}
                className={`relative p-8 rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden transition-all duration-700 ease-out hover:border-white/30 hover:scale-[1.02] ${visibleElements[key] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colors.iconBg} text-white`}>
                      {step.icon}
                    </div>
                    <div className={`font-bold text-6xl ${colors.text} opacity-70`}>{step.letter}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Result & Bonus Tip Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {/* Result Card */}
          <div 
            ref={addToRefs('result')}
            className={`bg-green-500/10 border border-green-500/30 rounded-2xl p-8 transition-all duration-700 ease-out ${visibleElements['result'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-green-400 mt-1">
                <TrendingUp className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">The Result?</h4>
                <p className="text-green-200/80 leading-relaxed">
                  ROAS often improves within days, cost per acquisition drops, and your campaign efficiency spikes. This isn’t guesswork — it’s sequencing backed by pattern and practice.
                </p>
              </div>
            </div>
          </div>

          {/* Bonus Tip Card */}
          <div
            ref={addToRefs('bonus')}
            className={`bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 transition-all duration-700 ease-out ${visibleElements['bonus'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-yellow-400 mt-1">
                <Lightbulb className="w-6 h-6"/>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Bonus Tip</h4>
                <p className="text-yellow-200/80 leading-relaxed">
                  Most people test creatives — few test keyword purity. PURE flips the typical script by prioritizing the refinement of search intent first.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FrameworkSection;
