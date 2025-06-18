import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Calendar, Target, Award, Quote, UserCheck } from 'lucide-react';

// New, more detailed interface to match your content
interface Phase {
  title: string;
  challenge: string;
  actions: string[];
  result: string;
  colorClass: string; // For Google-themed colors
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  period: string;
  strategicOverview: string;
  objective: string;
  phases: Phase[];
  overallImpact: string[];
  bonusInsight?: {
    author: string;
    quote: string;
  };
  personalRole?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'matrix-esim',
    title: 'Scaling Matrix from Offline Dependence to ₹5 Lakh+/Day eCommerce Giant',
    client: 'Matrix',
    industry: 'eCommerce / Travel / Telecommunications',
    period: 'Aug 2022 – June 2025',
    strategicOverview: "Matrix’s sales are seasonal, peaking during holidays. Budgets were dynamically adjusted using Google Trends and Destination Insights. During off-seasons, we shifted focus to branded search, sustaining efficiency and mindshare at a lower Customer Acquisition Cost.",
    objective: 'Establish Matrix as a digital-first travel SIM & eSIM brand, and scale daily online revenue from under ₹10K to over ₹5 Lakhs through paid growth, product innovation, and marketing automation.',
    phases: [
      {
        title: 'Phase 1: Digital Activation & Foundation',
        challenge: 'Offline-first brand with minimal online visibility.',
        actions: [
          'Reignited all social platforms with relatable, travel-focused storytelling.',
          'Revamped website UX to streamline checkout and increase mobile conversions.',
          'Launched early-stage awareness and retargeting campaigns on Meta & Google.',
          'Leveraged CRM lists for email reactivation of past flyers.'
        ],
        result: 'Created a digital foundation that scaled sales to ₹40K–₹60K/day within 5 months.',
        colorClass: 'green',
      },
      {
        title: 'Phase 2: Performance Marketing Scale-Up',
        challenge: 'Rapid growth demanded performance-focused budget allocation.',
        actions: [
          'Built full-funnel Google Ads campaigns across Search, Performance Max, and YouTube.',
          'Applied 70:30 budget split (Sales vs Awareness) with intent-based segmentation.',
          'Ran ongoing A/B tests for creatives, headlines, and audiences.',
          'Introduced automation rules for pacing, pausing, and scaling campaigns dynamically.'
        ],
        result: 'Scaled ad spend to ₹1.2 Lakhs/day with revenue rising to ₹1.5–₹2 Lakhs/day, maintaining 1.25x–1.66x ROAS.',
        colorClass: 'blue',
      },
      {
        title: 'Phase 3: Influencer-Led Brand Lift & Funnel Optimization',
        challenge: 'Increased competition, content fatigue, and rising CAC.',
        actions: [
          'Partnered with 10+ influencers (10K–1M+ followers) across travel and tech niches.',
          'Migrated site to Shopify for a better mobile experience and streamlined checkout.',
          'Rolled out product bundles, prepaid packs, and urgency-based offers.',
          'Continued creative refresh cycles across Meta + YouTube remarketing layers.'
        ],
        result: 'Reduced CPL by 27%, improved conversion rate by 35%, and increased AOV by 22%. Daily revenue crossed ₹3.5 Lakhs+ with ROAS nearing 2.8x.',
        colorClass: 'yellow',
      },
      {
        title: 'Phase 4: eSIM Launch & Category Growth',
        challenge: 'Shift in global travel telecom — physical SIM sales declining.',
        actions: [
          'Launched Matrix’s Indian-origin eSIM products covering 100+ destinations.',
          'Executed PR & blog content marketing around “Why eSIM?” narratives.',
          'Targeted eSIM-enabled device users (iPhone, Pixel, Samsung) using GA4 & PMax.',
          'Built eSIM-specific landing pages and CRO funnel for frictionless purchase.'
        ],
        result: 'eSIMs now contribute 78%+ of all online sales. ROAS stabilized at 3.5x–4x, and daily revenue scaled beyond ₹5 Lakhs/day.',
        colorClass: 'red',
      }
    ],
    overallImpact: [
      'Revenue scaled from <₹10K/day to ₹5 Lakhs+/day',
      'Migrated platform to Shopify and optimized mobile-first funnel',
      'Launched and scaled India’s leading international travel eSIM product',
      'Improved ROAS from 1.2x to 4x',
      'Actively managed seasonal budgets using Google Trends + Destination Insights',
    ],
    personalRole: "Retained long-term — now leading all digital strategy as Marketing Manager."
  },
  {
    id: 'shiv-naresh',
    title: 'Redirecting a Legacy Sportswear Brand Toward D2C Growth',
    client: 'Shiv Naresh',
    industry: 'Apparel / Sportswear / D2C',
    period: 'Aug 2022 – May 2024',
    strategicOverview: "Before onboarding, Shiv Naresh generated ~₹15K/day from their website, with most revenue from marketplaces. High return rates (~20%) and limited customer control prompted a shift towards building a direct-to-consumer (D2C) engine.",
    objective: 'Boost website-led revenue by repositioning the brand emotionally and functionally—transforming it from a provider into a symbol of athletic pride through strategic paid media and storytelling.',
    phases: [
      {
        title: 'Phase 1: Context & Audience Mapping',
        challenge: 'Understand the emotional value behind purchases: affordability, quality, or pride?',
        actions: [
          'Conducted trendline research and brand keyword analysis via Google Trends.',
          'Identified Shiv Naresh as a pride-driven brand among Indian athletes and sports aspirants.'
        ],
        result: 'Built a foundation to market the brand not just as a product, but as a badge of pride.',
        colorClass: 'green',
      },
      {
        title: 'Phase 2: Timing-Based Sponsorship Activation',
        challenge: 'Drive mass visibility and brand recall at the right cultural moment.',
        actions: [
          'Partnered with Dabang Delhi as kit sponsor during Pro Kabaddi League (Oct 2022).',
          'Ran supporting Google Ads campaigns aligned with search spikes during the league.',
          'Targeted kabaddi fans and local sports communities with contextual Display & YouTube ads.'
        ],
        result: 'Brand visibility surged, driving a wave of branded searches and website engagement.',
        colorClass: 'blue',
      },
      {
        title: 'Phase 3: Digital Asset Campaign – “Pride in Performance”',
        challenge: 'Strengthen emotional connection and increase website trust.',
        actions: [
          'Produced a cinematic brand video featuring top Indian athletes across categories.',
          'Built the narrative around “Pride of Indian sportswear”.',
          'Invested 70% of media budget in video promotion across YouTube, Shorts, and Display.'
        ],
        result: 'Drove deep engagement and brand lift, warming up audiences for conversion campaigns.',
        colorClass: 'yellow',
      },
      {
        title: 'Phase 4: Conversion Campaigns & Funnel Optimization',
        challenge: 'Turn awareness into repeatable D2C sales.',
        actions: [
          'Launched Performance Max and branded Search campaigns to capture mid-funnel demand.',
          'Created bundled product sets and added urgency-based offers.',
          'Integrated Shopify audience tags for remarketing and upselling.'
        ],
        result: 'Achieved 11x ROAS on branded campaigns and increased AOV by 18% through bundling.',
        colorClass: 'red',
      }
    ],
    overallImpact: [
      'Shifted focus from marketplaces to consistent website-led growth',
      'Positioned brand as a premium Indian sportswear badge',
      '70% media investment in video led to efficient conversions',
      'Delivered 11x ROAS on branded terms',
      'Increased Average Order Value by 18%',
      'Used trend-driven timing (Kabaddi league) to unlock organic momentum'
    ],
    bonusInsight: {
      author: "Vishal's 'Video-to-Conversion Hack'",
      quote: "Sometimes your brand video isn’t just an awareness asset—it’s your best-performing pre-conversion driver. We primed the audience emotionally first, then hit them with offer-based ads. The ROAS jump wasn’t a coincidence—it was sequencing."
    }
  }
];

// Helper to get color classes based on the phase color name
const getColorClasses = (color: string) => {
  switch (color) {
    case 'green':
      return {
        border: 'border-green-500',
        text: 'text-green-400',
        bg: 'bg-green-500',
      };
    case 'blue':
      return {
        border: 'border-blue-500',
        text: 'text-blue-400',
        bg: 'bg-blue-500',
      };
    case 'yellow':
      return {
        border: 'border-yellow-500',
        text: 'text-yellow-400',
        bg: 'bg-yellow-500',
      };
    case 'red':
      return {
        border: 'border-red-500',
        text: 'text-red-400',
        bg: 'bg-red-500',
      };
    default:
      return {
        border: 'border-gray-500',
        text: 'text-gray-400',
        bg: 'bg-gray-500',
      };
  }
};


const CaseStudiesSection: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>('matrix-esim'); // Default to open the first one

  const toggleExpansion = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Success <span className="text-blue-400">Stories</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A deep dive into the strategies, challenges, and data-driven results that transformed businesses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              {/* Collapsible Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpansion(study.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                      {study.client.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.client}</h3>
                      <p className="text-sm text-gray-400">{study.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0 space-x-4">
                     <p className="text-sm text-gray-500 hidden md:block">{study.period}</p>
                     <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          expandedCase === study.id ? 'rotate-180' : ''
                        }`}
                      />
                  </div>
                </div>
                <h4 className="text-lg md:text-xl text-gray-200 mt-4 font-semibold">{study.title}</h4>
              </div>

              {/* Expanded Content */}
              {expandedCase === study.id && (
                <div className="px-6 pb-8 pt-4 border-t border-gray-800 animate-fadeIn">
                  <div className="space-y-8">
                    
                    {/* Overview & Objective */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mb-3">Strategic Overview</h5>
                            <p className="text-gray-300 leading-relaxed">{study.strategicOverview}</p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mb-3">Objective</h5>
                            <p className="text-gray-300 leading-relaxed">{study.objective}</p>
                        </div>
                    </div>
                  
                    {/* Strategic Phases Timeline */}
                    <div>
                      <h5 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mb-4">Strategic Phases</h5>
                      <div className="space-y-6">
                        {study.phases.map((phase, index) => {
                          const colors = getColorClasses(phase.colorClass);
                          return (
                            <div key={index} className={`pl-6 border-l-4 ${colors.border}`}>
                              <h6 className={`font-bold text-lg ${colors.text} mb-1`}>{phase.title}</h6>
                              <p className="text-sm text-gray-400 mb-3 italic">Challenge: {phase.challenge}</p>
                              <ul className="space-y-2 mb-3">
                                {phase.actions.map((action, i) => (
                                  <li key={i} className="flex items-start space-x-3">
                                    <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-[7px] flex-shrink-0`}></div>
                                    <span className="text-gray-300">{action}</span>
                                  </li>
                                ))}
                              </ul>
                              <p className="font-semibold text-gray-200">Result: <span className="font-normal text-gray-300">{phase.result}</span></p>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Overall Impact / Outcome */}
                    <div>
                      <h5 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mb-4">{study.id === 'matrix-esim' ? 'Overall Impact' : 'Outcome'}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                        {study.overallImpact.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                             <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bonus Insight (Conditional) */}
                    {study.bonusInsight && (
                        <div>
                            <h5 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mb-3">{study.bonusInsight.author}</h5>
                            <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-500/10 rounded-r-lg">
                                <p className="text-yellow-200 italic">"{study.bonusInsight.quote}"</p>
                            </blockquote>
                        </div>
                    )}

                    {/* Personal Role (Conditional) */}
                    {study.personalRole && (
                        <div>
                             <h5 className="font-semibold text-gray-400 uppercase tracking-wider text-sm mb-3">Personal Role</h5>
                             <div className="flex items-center space-x-3 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                                <UserCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <p className="text-blue-200">{study.personalRole}</p>
                             </div>
                        </div>
                    )}

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
