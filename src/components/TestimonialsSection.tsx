import React, { useState, useEffect, useCallback } from 'react';
import { Quote } from 'lucide-react';

// Updated interface to include a color property
interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  color: 'blue' | 'red' | 'yellow' | 'green';
}

// Added 'color' to each testimonial, cycling through Google's theme
const testimonials: Testimonial[] = [
  {
    name: 'Gaurav Khanna',
    role: 'CEO',
    company: 'Matrix.in',
    quote: 'Vishal isn’t just a campaign runner — he’s a full-blown strategist. His PURE framework helped us cut wasted spend by 40% while scaling conversions by over 2.5x. He knows how to combine data and creativity like few others.',
    color: 'blue'
  },
  {
    name: 'Mrs. Annanya',
    role: 'Marketing Head',
    company: 'Shiv Naresh Sports',
    quote: 'We came to Vishal for ad campaigns — but ended up getting a complete growth system. From product bundling to funnel tweaks, he helped double our website sales in just 6 months.',
    color: 'red'
  },
  {
    name: 'Rahul Saxena',
    role: 'Ex-Colleague',
    company: 'Paid Ads Specialist',
    quote: 'One of the sharpest minds in digital performance. Vishal sees beyond metrics — he sees business impact. His strategies are both scalable and smart.',
    color: 'yellow'
  },
  {
    name: 'Komal',
    role: 'Junior Paid Media Analyst',
    company: 'Mentee',
    quote: 'Working under Vishal’s leadership was a masterclass. I learned more in 6 months about performance marketing, GTM setups, and creative testing than in years of trial and error.',
    color: 'green'
  },
  {
    name: 'Faytech',
    role: 'International Client',
    company: 'Global Campaigns',
    quote: 'We partnered with Vishal for lead generation in India, Germany, the Middle East, and Africa. His targeting precision and multi-region experience brought in qualified leads with a measurable drop in CPL across the board.',
    color: 'blue' // Repeating blue for the 5th item
  }
];

// Helper function to get color classes
const getColorClasses = (color: 'blue' | 'red' | 'yellow' | 'green') => {
  switch (color) {
    case 'blue':
      return {
        border: 'border-blue-500',
        bg: 'bg-blue-500/10',
        shadow: 'shadow-blue-500/20',
        indicator: 'bg-blue-500',
        accentText: 'text-blue-500/10',
        cardBorder: 'border-blue-500/30'
      };
    case 'red':
      return {
        border: 'border-red-500',
        bg: 'bg-red-500/10',
        shadow: 'shadow-red-500/20',
        indicator: 'bg-red-500',
        accentText: 'text-red-500/10',
        cardBorder: 'border-red-500/30'
      };
    case 'yellow':
       return {
        border: 'border-yellow-500',
        bg: 'bg-yellow-500/10',
        shadow: 'shadow-yellow-500/20',
        indicator: 'bg-yellow-500',
        accentText: 'text-yellow-500/10',
        cardBorder: 'border-yellow-500/30'
      };
    case 'green':
      return {
        border: 'border-green-500',
        bg: 'bg-green-500/10',
        shadow: 'shadow-green-500/20',
        indicator: 'bg-green-500',
        accentText: 'text-green-500/10',
        cardBorder: 'border-green-500/30'
      };
  }
};


const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const handleSelect = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsAutoPlaying(false);
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 200);
  }, [activeIndex]);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (isAutoPlaying) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setIsFading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isAutoPlaying]);

  // Get the active testimonial and its corresponding color classes
  const activeTestimonial = testimonials[activeIndex];
  const activeColors = getColorClasses(activeTestimonial.color);

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black opacity-70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Clients & Teammates Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real feedback from leaders, colleagues, and partners I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Side: Testimonial Selectors */}
          <div className="lg:w-1/3 space-y-3">
            {testimonials.map((testimonial, index) => {
              const itemColors = getColorClasses(testimonial.color);
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ease-in-out relative overflow-hidden group ${
                    activeIndex === index
                      ? `${itemColors.border} ${itemColors.bg} shadow-lg ${itemColors.shadow}`
                      : 'border-transparent bg-gray-800/20 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${itemColors.indicator} transition-transform duration-300 ease-in-out ${
                      activeIndex === index ? 'scale-y-100' : 'scale-y-0'
                    } group-hover:scale-y-100`}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Main Display Card */}
          <div className="lg:w-2/3">
            <div className={`relative bg-white/5 backdrop-blur-lg border rounded-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center transition-colors duration-300 ${activeColors.cardBorder}`}>
              <Quote className={`absolute top-8 right-8 w-24 h-24 transition-colors duration-300 ${activeColors.accentText}`} />
              
              <div
                className={`transition-opacity duration-200 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
              >
                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8">
                  “{activeTestimonial.quote}”
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-white text-xl">{activeTestimonial.name}</p>
                  <p className="text-gray-400">{activeTestimonial.role}, {activeTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
