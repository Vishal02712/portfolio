import React, { useState } from 'react';
import { X, ZoomIn, ExternalLink, Calendar, Tag } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Google Ads Dashboard - Matrix eSIM Campaign',
    category: 'Google Ads',
    description: 'Complete Google Ads campaign dashboard showing performance metrics, conversion tracking, and automated bidding strategies for international eSIM services.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Dec 2024',
    tags: ['Google Ads', 'Performance Marketing', 'eSIM']
  },
  {
    id: '2',
    title: 'Analytics Dashboard - Revenue Growth Tracking',
    category: 'Analytics',
    description: 'Custom Google Analytics dashboard tracking revenue growth from ₹2K to ₹5L daily, with detailed attribution modeling and customer journey analysis.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800',
    date: 'Nov 2024',
    tags: ['Google Analytics', 'Revenue Tracking', 'Data Analysis']
  },
  {
    id: '3',
    title: 'Search Campaign Performance Report',
    category: 'Campaign Reports',
    description: 'Detailed performance report showing search campaign optimization results with keyword analysis, quality score improvements, and ROAS achievements.',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpg?auto=compress&cs=tinysrgb&w=800',
    date: 'Oct 2024',
    tags: ['Search Ads', 'Keyword Strategy', 'Performance Report']
  },
  {
    id: '4',
    title: 'Display Campaign Creative Performance',
    category: 'Display Ads',
    description: 'Creative performance analysis for display campaigns showing engagement metrics, audience insights, and creative optimization strategies.',
    image: 'https://images.pexels.com/photos/193349/pexels-photo-193349.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Sep 2024',
    tags: ['Display Ads', 'Creative Strategy', 'Audience Targeting']
  },
  {
    id: '5',
    title: 'Conversion Tracking Setup',
    category: 'Technical Setup',
    description: 'Screenshot of conversion tracking implementation showing Google Tag Manager setup, enhanced ecommerce tracking, and attribution modeling configuration.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Aug 2024',
    tags: ['GTM', 'Conversion Tracking', 'Technical Implementation']
  },
  {
    id: '6',
    title: 'YouTube Ads Performance Dashboard',
    category: 'Video Ads',
    description: 'YouTube advertising campaign dashboard showing video performance metrics, audience engagement, and cost-per-view optimization results.',
    image: 'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'Jul 2024',
    tags: ['YouTube Ads', 'Video Marketing', 'Performance Metrics']
  }
];

const categories = ['All', 'Google Ads', 'Analytics', 'Campaign Reports', 'Display Ads', 'Technical Setup', 'Video Ads'];

const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Campaign <span className="text-blue-400">Screenshots</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real campaign dashboards and performance screenshots from live Google Ads accounts and analytics platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(item)}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ZoomIn className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-3 py-1 bg-blue-500/90 text-white rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                  <span className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-96 object-contain rounded-lg bg-gray-900"
                />

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedItem.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>

                  {/* All Tags */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold flex items-center space-x-2">
                      <Tag className="w-4 h-4" />
                      <span>Tags:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;