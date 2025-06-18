import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Calendar, Target, DollarSign, Users } from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  period: string;
  description: string;
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
    change: string;
    icon: React.ReactNode;
  }[];
  keyAchievements: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'matrix-esim',
    company: 'Matrix eSIM',
    period: 'Aug 2022 – Present',
    description: 'Pioneering international eSIM adoption with a performance-led digital strategy.',
    challenge:
      'Matrix eSIM needed to break into the saturated global eSIM market while keeping acquisition cost low and maximizing revenue from India-based travelers.',
    solution: [
      'Designed high-conversion landing experiences for 40+ destinations',
      'Ran Google Ads across 6 campaign types including Performance Max & Demand Gen',
      'Built and deployed AI-powered scripts to auto-pause non-converting search terms',
      'Implemented my proprietary PURE Framework for daily optimization'
    ],
    results: [
      {
        metric: 'Daily Revenue',
        value: '₹5L+',
        change: 'from ₹2K baseline',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        metric: 'Top Product Revenue Share',
        value: '78%',
        change: 'from eSIMs alone',
        icon: <Target className="w-5 h-5" />
      },
      {
        metric: 'Avg. ROAS',
        value: '4.2x',
        change: 'with stable scaling',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        metric: 'Customer Base',
        value: '50K+',
        change: 'unique eSIM buyers',
        icon: <Users className="w-5 h-5" />
      }
    ],
    keyAchievements: [
      'Grew sales from ₹2,000 to ₹5,00,000/day in <12 months',
      'Maintained 4.2x+ ROAS while scaling 40x+',
      'Reduced Cost/Conv through AI-led optimizations',
      'Implemented full-funnel tracking with server-side attribution'
    ]
  },
  {
    id: 'shiv-naresh',
    company: 'Shiv Naresh',
    period: 'Aug 2022 – May 2024',
    description: 'Digitizing a legacy Indian brand with high-performing paid ads.',
    challenge:
      'Shiv Naresh needed to evolve from offline-first retail to a digital-first model, while driving qualified leads for both B2C and institutional sales.',
    solution: [
      'Launched full-funnel lead-gen campaigns on Google, Meta, and YouTube',
      'Deployed advanced location-based targeting for event sponsorships & cricket merchandise',
      'Custom-built landing experiences for lead magnet forms and direct WhatsApp CTAs',
      'Trained internal team (Annanya) on ad operations for long-term autonomy'
    ],
    results: [
      {
        metric: 'Revenue Growth',
        value: '320%',
        change: 'in 14 months',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        metric: 'Lead Quality',
        value: '85%',
        change: 'rated qualified',
        icon: <Target className="w-5 h-5" />
      },
      {
        metric: 'Cost per Lead',
        value: '-60%',
        change: 'reduction achieved',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        metric: 'Market Penetration',
        value: '35%',
        change: 'in key regions',
        icon: <Users className="w-5 h-5" />
      }
    ],
    keyAchievements: [
      'Tripled lead volume while reducing CPL by 60%',
      'Delivered 320% YoY revenue surge',
      'Collaborated with in-house marketing (Annanya) for seamless handoff',
      'Established Shiv Naresh as a top-of-mind brand online'
    ]
  }
];

const CaseStudiesSection: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const toggleExpansion = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Success <span className="text-green-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From traditional retail to AI-first scale-ups – a look at my data-backed transformation journeys.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
              {/* Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpansion(study.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {study.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{study.period}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      expandedCase === study.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <p className="text-gray-300 mt-4">{study.description}</p>
              </div>

              {/* Results Grid - Always Visible */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 rounded-lg p-4 border border-gray-700"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="text-blue-400">{result.icon}</div>
                        <span className="text-sm text-gray-400">{result.metric}</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                      <div className="text-sm text-green-400">{result.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCase === study.id && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="pt-6 space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Solution</h4>
                      <ul className="space-y-2">
                        {study.solution.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Key Achievements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.keyAchievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 bg-gray-900/30 rounded-lg p-3"
                          >
                            <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
