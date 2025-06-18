import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Calendar } from 'lucide-react';

const caseStudies = [
  {
    id: 'matrix-esim',
    company: 'Matrix eSIM',
    period: 'Aug 2022 – June 2025',
    description: 'Scaling Matrix from Offline Dependence to ₹5 Lakh+/Day eCommerce Giant in Under 3 Years',
    content: [
      {
        heading: 'Client',
        text: 'Matrix — India’s leading global travel SIM & eSIM provider'
      },
      {
        heading: 'Industry',
        text: 'eCommerce / Travel / Telecommunications'
      },
      {
        heading: 'Strategic Overview',
        text: "Matrix’s sales are seasonal, with peak demand during major Indian holidays and global travel periods. Budgets were dynamically adjusted based on seasonality, using Google Trends and Destination Insights with Google to predict surges. During off-seasons, we constrained budgets on performance-heavy campaigns and shifted focus to branded search campaigns, sustaining efficiency and mindshare at lower CAC."
      },
      {
        heading: 'Objective',
        text: 'Establish Matrix as a digital-first travel SIM & eSIM brand, and scale daily online revenue from <₹10K to ₹5 Lakhs+ through paid growth, product innovation, and marketing automation.'
      },
      {
        heading: 'Strategic Phases',
        text: 'Aug 2022 – June 2025'
      },
      {
        heading: 'Phase 1: Digital Activation & Foundation (Aug 2022 – Jan 2023)',
        text: 'Challenge: Offline-first brand with minimal online visibility.',
        actions: [
          'Reignited all social platforms with relatable, travel-focused storytelling',
          'Revamped website UX to streamline checkout and increase mobile conversions',
          'Launched early-stage awareness + retargeting campaigns on Meta & Google',
          'Leveraged CRM lists for email reactivation of past flyers'
        ],
        result: 'Created a digital foundation that scaled sales to ₹40K–₹60K/day within 5 months.'
      },
      {
        heading: 'Phase 2: Performance Marketing Scale-Up (Feb 2023 – May 2023)',
        text: 'Challenge: Rapid growth demanded performance-focused budget allocation.',
        actions: [
          'Built full-funnel Google Ads campaigns across Search, Performance Max, and YouTube',
          'Applied 70:30 budget split (Sales vs Awareness) with intent-based segmentation',
          'Ran ongoing A/B tests for creatives, headlines, audiences',
          'Introduced automation rules for pacing, pausing, and scaling campaigns dynamically'
        ],
        result: 'Scaled ad spend to ₹1.2 Lakhs/day with revenue rising to ₹1.5–₹2 Lakhs/day, maintaining 1.25x–1.66x ROAS in early scale stages.'
      },
      {
        heading: 'Phase 3: Influencer-Led Brand Lift & Funnel Optimization (June 2023 – May 2024)',
        text: 'Challenge: Increased competition, content fatigue, and rising CAC.',
        actions: [
          'Partnered with 10+ influencers (ranging 10K–1M+ followers) across travel and tech niches',
          'Migrated site to Shopify for better mobile experience and streamlined checkout',
          'Rolled out product bundles, prepaid packs, and urgency-based offers',
          'Continued creative refresh cycles across Meta + YouTube remarketing layers'
        ],
        result: 'Reduced CPL by 27%, improved conversion rate by 35%, and increased AOV by 22%. Daily revenue crossed ₹3.5 Lakhs+ with ROAS nearing 2.8x.'
      },
      {
        heading: 'Phase 4: eSIM Launch & Category Growth (June 2024 – Present)',
        text: 'Challenge: Shift in global travel telecom — physical SIM sales declining.',
        actions: [
          'Launched Matrix’s Indian-origin eSIM products covering 100+ destinations',
          'Executed PR + blog content marketing around “Why eSIM?” narratives',
          'Targeted eSIM-enabled device users (iPhone, Pixel, Samsung) using GA4 + PMax',
          'Built eSIM-specific landing pages and CRO funnel for frictionless purchase'
        ],
        result: 'eSIMs now contribute 78%+ of all online sales; current ROAS stabilized at 3.5x–4x. Daily revenue has scaled beyond ₹5 Lakhs/day.'
      },
      {
        heading: 'Overall Impact',
        list: [
          'Revenue scaled from <₹10K/day to ₹5 Lakhs+/day',
          'Migrated platform to Shopify and optimized mobile-first funnel',
          'Launched and scaled India’s leading international travel eSIM product',
          'Improved ROAS from 1.2x to 4x',
          'Actively managed seasonal budgets using Google Trends + Destination Insights',
          'Retained long-term — now leading all digital strategy as Marketing Manager'
        ]
      }
    },
    {
      id: 'shiv-naresh',
      company: 'Shiv Naresh',
      period: 'Aug 2022 – May 2024',
      description: 'Redirecting a Legacy Sportswear Brand Toward D2C Growth',
      content: [
        {
          heading: 'Client',
          text: 'Shiv Naresh — A nationally recognized Indian sportswear brand'
        },
        {
          heading: 'Industry',
          text: 'Apparel / Sportswear / eCommerce / D2C'
        },
        {
          heading: 'Background',
          text: 'Before onboarding, Shiv Naresh generated approximately ₹12K–₹15K/day from their own website, while significantly higher revenue came from marketplaces like Amazon and Flipkart. With rising return rates (~20%) and limited control over customer experience, the brand aimed to reduce platform dependency and build a direct-to-consumer (D2C) engine.'
        },
        {
          heading: 'Objective',
          text: 'Boost website-led revenue by repositioning the brand emotionally and functionally — transforming it from a functional sportswear provider into a symbol of athletic pride through strategic paid media and storytelling.'
        },
        {
          heading: 'Strategic Phases',
          text: 'Aug 2022 – May 2024'
        },
        {
          heading: 'Phase 1: Context & Audience Mapping',
          text: 'Challenge: Understand the emotional value behind purchases — is it affordability, quality, or pride?',
          actions: [
            'Conducted trendline research and brand keyword analysis via Google Trends',
            'Identified Shiv Naresh as a pride-driven brand among Indian athletes and sports aspirants'
          ],
          result: 'Built a foundation to market the brand not just as a product, but as a badge of pride.'
        },
        {
          heading: 'Phase 2: Timing-Based Sponsorship Activation',
          text: 'Challenge: Drive mass visibility and brand recall at the right cultural moment.',
          actions: [
            'Partnered with Dabang Delhi as kit sponsor during Pro Kabaddi League (Oct 2022)',
            'Ran supporting Google Ads campaigns aligned with search spikes during the league',
            'Targeted kabaddi fans + local sports communities with contextual Display + YouTube ads'
          ],
          result: 'Brand visibility surged and drove a wave of branded searches and engagement on the website.'
        },
        {
          heading: 'Phase 3: Digital Asset Campaign – “Pride in Performance”',
          text: 'Challenge: Strengthen emotional connection and increase website trust.',
          actions: [
            'Produced a cinematic brand video featuring top Indian athletes across categories',
            'Built the narrative around “Pride of Indian sportswear”',
            'Invested 70% of media budget in video promotion across YouTube, Shorts, and Display'
          ],
          result: 'Drove deep engagement and brand lift, warming up audiences for conversion campaigns.'
        },
        {
          heading: 'Phase 4: Conversion Campaigns & Funnel Optimization',
          text: 'Challenge: Turn awareness into repeatable D2C sales.',
          actions: [
            'Launched Performance Max + branded Search campaigns to capture mid-funnel demand',
            'Created bundled product sets and added urgency-based offers',
            'Integrated Shopify audience tags for remarketing and upselling'
          ],
          result: 'Achieved 11x ROAS on branded campaigns and increased AOV by 18% through bundling.'
        },
        {
          heading: 'Bonus Insight',
          text: '“Sometimes your brand video isn’t just an awareness asset — it’s your best-performing pre-conversion driver. We primed the audience emotionally first, and then hit them with offer-based ads. The ROAS jump wasn’t a coincidence — it was sequencing.”'
        },
        {
          heading: 'Outcome',
          list: [
            'Shifted focus from marketplaces to consistent website-led growth',
            'Positioned Shiv Naresh as a premium Indian sportswear badge, not just an affordable alternative',
            '70% media investment in video led to efficient conversions',
            'Delivered 11x ROAS on branded terms + 18% increase in AOV',
            'Used trend-driven timing (Kabaddi league) to unlock organic momentum'
          ]
        }
      ]
    }
];

