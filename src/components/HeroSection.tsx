import React, { useEffect, useState } from 'react';
import { ChevronRight, TrendingUp, Brain, Code, BarChart3, Award, Download, Eye, Target, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    clients: 0,
    experience: 0,
    roas: 0
  });

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const clientsTarget = 120;
      const experienceTarget = 5.9;
      const roasTarget = 4;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedNumbers({
          clients: Math.floor(clientsTarget * easeOut),
          experience: parseFloat((experienceTarget * easeOut).toFixed(1)),
          roas: parseFloat((roasTarget * easeOut).toFixed(1))
        });

        if (step >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Floating Visuals and Grid removed for brevity */}

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center min-h-screen gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-10">
          <div className="inline-flex items-center space-x-3 bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Built Entirely with AI + Analytics</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
              <span className="text-blue-400">Vishal</span>
              <br />
              <span className="text-gray-100">Choudhary</span>
            </h1>

            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200">
                Performance Marketer | Google Ads Specialist
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Turning Ad Spend into Profit with <span className="text-yellow-400 font-semibold">Strategic Insight</span> and
                <span className="text-red-400 font-semibold"> Full-Funnel Execution</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">{animatedNumbers.clients}+</div>
              <div className="text-sm text-gray-400 font-medium">Clients Handled</div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">{animatedNumbers.experience}</div>
              <div className="text-sm text-gray-400 font-medium">Years of Expertise</div>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300">
              <div className="text-3xl font-bold text-red-400 mb-2">{animatedNumbers.roas}x+</div>
              <div className="text-sm text-gray-400 font-medium">Avg. Client ROAS</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#case-studies" className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/25">
              <Eye className="w-5 h-5" />
              <span>View Case Studies</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Vishal-Choudhary-Resume.pdf" download className="group bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-gray-600/50 hover:border-gray-500 flex items-center justify-center space-x-3">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="inline-flex items-center space-x-3 text-sm text-gray-400 bg-gray-900/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/30">
            <Code className="w-4 h-4" />
            <span>This site is powered by AI. Just like my campaigns.</span>
          </div>
        </div>

        {/* Right content remains unchanged unless you want more edits */}

      </div>
    </section>
  );
};

export default HeroSection;
