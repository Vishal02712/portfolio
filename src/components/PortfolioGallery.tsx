import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // Framer Motion for smooth text transitions
import { TrendingUp } from 'lucide-react';

interface ScreenshotItem {
  id: string;
  image: string;
  title: string;
  description: string;
  result: {
    value: string;
    label: string;
  };
}

const screenshots: ScreenshotItem[] = [
  {
    id: 'shopping-sales-growth',
    image: 'https://ik.imagekit.io/6l4nizcn3/last-6-months_results.png?updatedAt=1750318701570',
    title: 'Shopping Sales Breakout',
    description: 'Achieved 10.8K+ purchases over six months by systematically scaling Shopping campaigns through optimized bidding, product segmentation, and competitive feed structuring — while maintaining high conversion efficiency and measurable ROAS uplift.',
    result: {
      value: '10.8K orders',
      label: 'Total Purchases',
    },
  },
  {
    id: 'matrix-roas',
    image: 'https://placehold.co/1200x750/1a1a1a/FFF/png?text=Google+Ads+ROAS',
    title: 'Sustained 4.2x ROAS',
    description: 'Google Ads campaign view demonstrating a consistent 4.2x Return On Ad Spend across multiple high-budget campaigns, ensuring profitable scaling.',
    result: {
      value: '4.2x',
      label: 'Return On Ad Spend',
    },
  },
  {
    id: 'shiv-naresh-cpa',
    image: 'https://placehold.co/1200x750/0f0f0f/FFF/png?text=Cost+Per+Acquisition',
    title: 'Cost Per Acquisition Reduction',
    description: 'Performance report highlighting a 60% reduction in Customer Acquisition Cost for Shiv Naresh, achieved by refining audience targeting and creative strategy.',
    result: {
      value: '-60%',
      label: 'Acquisition Cost',
    },
  },
  {
    id: 'pmax-funnel',
    image: 'https://placehold.co/1200x750/1f1f1f/FFF/png?text=Performance+Max+Funnel',
    title: 'Performance Max Optimization',
    description: 'A look inside a Performance Max campaign structure, focusing on asset group optimization and signal targeting that led to a 35% increase in conversion rate.',
    result: {
      value: '+35%',
      label: 'Conversion Rate',
    },
  },
  {
    id: 'esim-targeting',
    image: 'https://placehold.co/1200x750/111111/FFF/png?text=eSIM-Specific+Targeting',
    title: 'eSIM Niche Targeting',
    description: 'GA4 audience builder screenshot showing the precise segmentation used to target eSIM-enabled device users, resulting in 78% of sales coming from this new product line.',
    result: {
      value: '78%',
      label: 'Sales from eSIM',
    },
  },
];

const PortfolioGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Debounce function to limit scroll event firing
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  
  // Logic to find which item is in the center of the viewport
  const findCenterItem = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = -1;
    let smallestDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (item) {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (closestIndex !== -1) {
      setActiveIndex(closestIndex);
    }
  }, []);

  const debouncedFindCenterItem = useCallback(debounce(findCenterItem, 50), [findCenterItem]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', debouncedFindCenterItem);
      return () => container.removeEventListener('scroll', debouncedFindCenterItem);
    }
  }, [debouncedFindCenterItem]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proof in the <span className="text-blue-400">Pixels</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A transparent look into real campaign performance, dashboards, and the results they generated.
          </p>
        </div>
      </div>

      {/* The Scroll-Reel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto py-8 snap-x snap-mandatory scrollbar-hide"
      >
        <div className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4"></div> {/* Spacer */}
        {screenshots.map((item, index) => (
          <div
            key={item.id}
            ref={el => itemRefs.current[index] = el}
            className="flex-shrink-0 w-11/12 md:w-3/5 lg:w-1/2 px-4 snap-center"
          >
            <div
              className={`relative aspect-video w-full rounded-xl overflow-hidden transition-all duration-500 ease-out border-2
                ${activeIndex === index ? 'border-blue-500/80 scale-100 opacity-100' : 'border-transparent scale-90 opacity-50'}`
              }
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
              
              {/* Highlighted Result Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 text-right">
                <p className="text-xs md:text-sm text-green-400">{item.result.label}</p>
                <p className="text-lg md:text-xl font-bold text-white">{item.result.value}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4"></div> {/* Spacer */}
      </div>

      {/* Info Panel Below */}
      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="max-w-3xl mx-auto text-center h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white">{screenshots[activeIndex].title}</h3>
              <p className="text-gray-400 mt-2 leading-relaxed">{screenshots[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
