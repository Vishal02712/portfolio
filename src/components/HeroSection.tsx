import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, TrendingUp, Target, BarChart3, Zap, Quote } from 'lucide-react';

// A simple hook for the count-up animation, can be placed inside or outside the component
const useCountUp = (end: number, duration: number = 2) => {
  const [count, setCount] = React.useState(0);
  const controls = React.useRef<any>(null);

  React.useEffect(() => {
    const node = { value: 0 };
    controls.current = motion.div({
        value: end
    }, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
            setCount(parseFloat(latest.value.toFixed(1)));
        }
    });

    // Dummy subscription to start the animation
    const unsubscribe = controls.current.state.value.onChange(() => {});
    return () => unsubscribe();
  }, [end, duration]);

  return count;
};

const HeroSection: React.FC = () => {
  const clients = useCountUp(120);
  const experience = useCountUp(5.9);
  const roas = useCountUp(4.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15),transparent_60%)]"></div>
        <div 
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Vishal Choudhary
              </span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 leading-snug"
              variants={itemVariants}
            >
              Performance Marketer driving business growth through data-driven ad strategies.
            </motion.p>
            
            {/* New Core Philosophy Quote */}
            <motion.div 
              className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-500/10"
              variants={itemVariants}
            >
              <Quote className="w-6 h-6 text-blue-400 mb-2 opacity-70" fill="currentColor" />
              <p className="text-xl italic text-gray-200">
                I treat every campaign like a business, not just a budget.
              </p>
            </motion.div>
            
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <a 
                href="#case-studies" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:opacity-100 transition-opacity duration-200 opacity-70"></div>
                <div className="relative z-10 flex items-center">
                  View Case Studies
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
              <a 
                href="/Vishal-Choudhary-Resume.pdf" 
                download 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg border border-white/20 hover:border-white/40"
              >
                Download Resume
                <Download className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - The "Performance Module" */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Live Performance Snapshot</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live Data</span>
                </div>
              </div>

              {/* Animated Graph */}
              <div className="h-40 bg-black/30 rounded-lg p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {[40, 65, 45, 80, 60, 90, 75, 95, 85, 100, 70, 88].map((height, index) => (
                    <motion.div
                      key={index}
                      className="w-3 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">{clients}+</div>
                <div className="text-xs text-gray-400">Clients</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">{experience}</div>
                <div className="text-xs text-gray-400">Years Expertise</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-red-400">{roas}x</div>
                <div className="text-xs text-gray-400">Avg. ROAS</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
