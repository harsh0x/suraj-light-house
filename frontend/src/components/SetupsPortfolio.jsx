import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_PORTFOLIO } from '../data/lightingData';

export default function SetupsPortfolio({ portfolioItems = [], onOpenBooking, onImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const rawItems = portfolioItems && portfolioItems.length > 0 ? portfolioItems : INITIAL_PORTFOLIO;
  const items = rawItems.some(it => it.title?.includes('Sunlit') || it.location?.includes('Florida'))
    ? INITIAL_PORTFOLIO 
    : rawItems;
  const currentItem = items[activeIndex] || items[0] || {};

  // Auto-slide effect every 4.5 seconds (pauses when hovering over the carousel)
  useEffect(() => {
    if (!items || items.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [items, isPaused]);

  return (
    <section id="portfolio" className="bg-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with smooth entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Our Grand Setups ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-4">
            Transforming Spaces Into Luminous Spectacles
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-2xl mx-auto leading-relaxed font-light">
            Take a visual tour through landmark royal weddings, palace receptions, and music festivals illuminated and constructed by the Suraj Light House team.
          </p>
        </motion.div>

        {/* Interactive Carousel Showcase */}
        {items.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative bg-[#FAF6F0] rounded-3xl p-4 sm:p-8 shadow-xl border border-rose-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Interactive Large Image */}
              <div className="lg:col-span-8 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentItem.id || activeIndex}
                    src={currentItem.image || currentItem.imageUrl} 
                    alt={currentItem.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition duration-700"
                    onClick={() => onImageClick({ 
                      url: currentItem.image || currentItem.imageUrl, 
                      title: currentItem.title 
                    })}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setActiveIndex((activeIndex - 1 + items.length) % items.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1A1A1A] flex items-center justify-center shadow-lg transition backdrop-blur-sm z-10"
                  aria-label="Previous portfolio item"
                >
                  <i className="fa-solid fa-chevron-left text-sm"></i>
                </button>
                <button 
                  onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1A1A1A] flex items-center justify-center shadow-lg transition backdrop-blur-sm z-10"
                  aria-label="Next portfolio item"
                >
                  <i className="fa-solid fa-chevron-right text-sm"></i>
                </button>

                {/* Enlarge Hint */}
                <div className="absolute bottom-4 right-4 bg-[#1A1A1A]/80 text-white text-[11px] px-3 py-1.5 rounded-full backdrop-blur-sm z-10">
                  <i className="fa-solid fa-expand mr-1.5"></i> Click to enlarge
                </div>
              </div>

              {/* Right: Details */}
              <div className="lg:col-span-4 flex flex-col justify-center px-2">
                <span className="text-xs uppercase tracking-widest text-[#E63956] font-bold mb-2">
                  {currentItem.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-bold mb-3">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-[#5A5255] flex items-center gap-2 mb-4">
                  <i className="fa-solid fa-location-dot text-[#E63956]"></i>
                  <span>{currentItem.location}</span>
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light mb-6">
                  {currentItem.desc || currentItem.description}
                </p>

                {/* Indicator dots */}
                <div className="flex items-center gap-2 mb-6">
                  {items.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#E63956]' : 'w-2.5 bg-rose-200 hover:bg-rose-300'}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={() => onOpenBooking(`Setup Inquiry: ${currentItem.title}`)}
                  className="w-full py-3 rounded-full bg-[#1A1A1A] hover:bg-[#E63956] text-white text-xs font-bold tracking-wider uppercase transition shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Inquire About This Setup
                </button>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
