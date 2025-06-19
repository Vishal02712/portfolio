import React, { useState, useCallback } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

// A simpler, more focused interface for the screenshots
interface ScreenshotItem {
  id: string;
  image: string; // The direct path to your screenshot
  title: string;
  description: string;
  result: {
    value: string;
    label: string;
  };
}

// Your 5 campaign screenshots will go here
const screenshots: ScreenshotItem[] = [
  {
    id: 'shopping-sales-growth',
    image: 'https://ik.imagekit.io/6l4nizcn3/Untitled%20design.png?updatedAt=1750321791689',
    title: 'Shopping Sales Breakout',
    description: 'Achieved 10.8K+ purchases over six months by systematically scaling Shopping campaigns through optimized bidding, product segmentation, and competitive feed structuring — while maintaining high conversion efficiency and measurable ROAS uplift.',
    result: {
      value: '10.8K orders',
      label: 'Total Purchases',
    },
  },
  {
    id: 'pmax-audience-efficiency',
    image: 'https://ik.imagekit.io/6l4nizcn3/1.png?updatedAt=1750321927752',
    title: 'PMax Audience Expansion Win',
    description: 'Generated ₹3.09M in Shopping revenue at 2.12x ROAS by deploying Performance Max to acquire new and affinity-based audiences. Balanced aggressive CPC strategy (₹21.54 avg.) with high intent targeting to scale cost-efficiently.',
    result: {
      value: '₹3.09M',
      label: 'Shopping Revenue',
    },
  },
  {
    id: 'remarketing-efficiency',
    image: 'https://ik.imagekit.io/6l4nizcn3/2.png?updatedAt=1750321927757',
    title: 'High-ROAS Remarketing Push',
    description: 'Drove 304 conversions at 2.67x ROAS with ₹248K spend by retargeting high-intent visitors using tailored Shopping creatives and segmented audience lists — achieving both volume and efficiency in the final stage of the funnel.',
    result: {
      value: '2.67x',
      label: 'ROAS from Remarketing',
    },
  },
  {
    id: 'brand-video-roas',
    image: 'https://ik.imagekit.io/6l4nizcn3/3.png?updatedAt=1750321927455',
    title: '3.94x ROAS Post Brand Video',
    description: 'elivered 3.94x ROAS following a brand video launch that significantly improved emotional resonance and recall. Campaign scaled to ₹4.82M revenue on ₹1.22M spend, driven by elevated brand search and high-converting branded traffic.',
    result: {
      value: '3.94x',
      label: 'Branded ROAS',
    },
  },
];

const PortfolioGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSelect = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 300); // Duration matches the fade-out transition
  }, [activeIndex]);
  
  const activeScreenshot = screenshots[activeIndex];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background radial gradient for a futuristic feel */}
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Screenshot Display */}
          <div className="lg:col-span-9">
            <div className="relative aspect-video w-full bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
                <img
                  key={activeScreenshot.id} // Key change triggers re-render
                  src={activeScreenshot.image}
                  alt={activeScreenshot.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                    isFading ? 'opacity-0' : 'opacity-100'
                  }`}
                />
            </div>
          </div>

          {/* Side Panel: Info & Thumbnails */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Highlighted Result */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 transition-opacity duration-300 ease-in-out">
                <p className="text-sm text-green-400 mb-1">{activeScreenshot.result.label}</p>
                <p className="text-4xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  {activeScreenshot.result.value}
                </p>
              </div>

              {/* Text Info */}
              <div className="space-y-2 transition-opacity duration-300 ease-in-out">
                <h3 className="text-2xl font-bold text-white">{activeScreenshot.title}</h3>
                <p className="text-gray-400 leading-relaxed">{activeScreenshot.description}</p>
              </div>
            </div>

            {/* Thumbnail "Filmstrip" */}
            <div className="mt-8 lg:mt-0 flex lg:flex-col gap-3">
              {screenshots.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(index)}
                  className={`relative aspect-video lg:aspect-auto lg:h-20 w-full rounded-md overflow-hidden transition-all duration-300 border-2 ${
                    activeIndex === index 
                      ? 'border-blue-500 scale-105' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
