import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'CEO',
    company: 'Matrix eSIM',
    content: 'Vishal transformed our digital presence completely. His strategic approach to Google Ads helped us scale from ₹2K to ₹5L daily revenue. The ROI we achieved was beyond our expectations, and his data-driven insights continue to drive our growth.',
    rating: 5,
    initials: 'RK',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Marketing Head',
    company: 'Shiv Naresh',
    content: 'Working with Vishal was a game-changer for our traditional business. He brought modern digital marketing strategies while respecting our brand values. The 320% revenue growth speaks for itself. Highly recommended!',
    rating: 5,
    initials: 'PS',
    color: 'from-green-500 to-green-600'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Digital Marketing Manager',
    company: 'TechFlow Solutions',
    content: 'Vishal\'s expertise in Google Ads and data analytics is exceptional. He helped us reduce our CAC by 60% while improving lead quality. His systematic approach and attention to detail make him stand out in the industry.',
    rating: 5,
    initials: 'MC',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: '4',
    name: 'Sarah Williams',
    role: 'Founder',
    company: 'GrowthHive',
    content: 'I\'ve worked with many marketing professionals, but Vishal\'s combination of technical expertise and strategic thinking is rare. His PURE framework approach delivered consistent results across all our campaigns.',
    rating: 5,
    initials: 'SW',
    color: 'from-red-500 to-red-600'
  },
  {
    id: '5',
    name: 'Amit Patel',
    role: 'Co-founder',
    company: 'DataDriven',
    content: 'Vishal doesn\'t just run ads; he builds growth systems. His deep understanding of analytics and conversion optimization helped us achieve sustainable 4x ROAS. A true marketing strategist.',
    rating: 5,
    initials: 'AP',
    color: 'from-purple-500 to-purple-600'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Client <span className="text-green-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-white" />
            </div>

            <div className="relative">
              {/* Testimonial Content */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-gray-100 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold`}>
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full border border-gray-600 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full border border-gray-600 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-400">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;