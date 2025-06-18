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
    description: 'From 2k to ₹5L/day in revenue – A global eSIM breakthrough driven by automation + analytics.',
    challenge: 'Matrix eSIM wanted to dominate the global travel SIM market while keeping CAC low and retention high.',
    solution: [
      '→ Built full-funnel campaign structures across Google Search, YouTube, and Meta',
      '→ Created automated budget rules and smart bidding strategies',
      '→ Deployed server-side conversion tracking for improved attribution',
      '→ Used real-time analytics dashboards to adjust campaigns daily'
    ],
    results: [
      {
        metric: 'Revenue (Daily)',
        value: '₹5L+',
        change: 'from ₹2K baseline',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        metric: 'ROAS',
        value: '4.2x',
        change: '↑ +180%',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        metric: 'User Growth',
        value: '50K+',
        change: 'active global users',
        icon: <Users className="w-5 h-5" />
      },
      {
        metric: 'eSIM Sales Share',
        value: '78%',
        change: 'of total brand revenue',
        icon: <Target className="w-5 h-5" />
      }
    ],
    keyAchievements: [
      'Achieved 4.2x blended ROAS across Google & Meta',
      'Scaled daily revenue 24900% within 12 months',
      'eSIM product became primary source of revenue',
      'Built automation workflows for bid + budget management'
    ]
  },
  {
    id: 'shiv-naresh',
    company: 'Shiv Naresh',
    period: 'Aug 2022 – May 2024',
    description: 'Taking an iconic sportswear brand digital – without losing its roots.',
    challenge: 'They had never done digital ads before – but wanted scale, branding, and quality leads.',
    solution: [
      '→ Built paid strategy with sharp targeting (sports enthusiasts + institutional buyers)',
      '→ Designed multiple landing pages with CRO in mind',
      '→ Ran full-funnel campaigns from awareness to retargeting on Google & Meta',
      '→ Setup end-to-end tracking using GA4 + server-side tagging'
    ],
    results: [
      {
        metric: 'Revenue Growth',
        value: '↑ 320%',
        change: 'within 12 months',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        metric: 'Lead Quality',
        value: '85%',
        change: 'scored qualified leads',
        icon: <Target className="w-5 h-5" />
      },
      {
        metric: 'Cost/Lead',
        value: '↓ 60%',
        change: 'vs. industry avg.',
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        metric: 'Regional Share',
        value: '35%',
        change: 'dominance in target area',
        icon: <Users className="w-5 h-5" />
      }
    ],
    keyAchievements: [
      'Shifted legacy brand to full digital acquisition model',
      'Brought CPL below ₹60 while improving lead quality',
      'Captured 35% market share in key states',
      'Built reporting system for daily creative testing results'
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
            Proof of performance – from ambitious startups to category leaders
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300"
            >
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
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedCase === study.id ? 'rotate-180' : ''}`}
                  />
                </div>
                <p className="text-gray-300 mt-4">{study.description}</p>
              </div>

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

              {expandedCase === study.id && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="pt-6 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
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
