import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_PORTFOLIO } from '../data/lightingData';

export default function SetupsPortfolio({ portfolioItems = [], onOpenBooking, onImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const rawItems = portfolioItems && portfolioItems.length > 0 ? portfolioItems : INITIAL_PORTFOLIO;
  const items = rawItems.some(it => it.title?.includes('Sunlit') || it.location?.includes('Florida'))
    ? INITIAL_PORTFOLIO 
    : rawItems;
  const currentItem = items[activeIndex] || items[0] || {};

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
            className="relative bg-[#FAF6F0] rounded-3xl p-4 sm:p-8 shadow-xl border border-rose-100 mb-20"
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

        {/* "And more!" Feature Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8"
        >
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Complete Capabilities ✦
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto leading-relaxed mb-12 font-light">
            From heavy structural trussing to crystal chandeliers and sound-attenuated power grids, we engineer total event peace of mind.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            {/* 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#E63956] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E63956] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-bold mb-1">
                Intelligent DMX Lighting
              </h4>
              <p className="text-[11px] text-[#5A5255]">Computerized moving heads & stage cues</p>
            </motion.div>

            {/* 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#E63956] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E63956] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-gem"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-bold mb-1">
                Crystal Chandeliers
              </h4>
              <p className="text-[11px] text-[#5A5255]">Grand multi-tier crystal installations</p>
            </motion.div>

            {/* 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#E63956] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E63956] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-campground"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-bold mb-1">
                Heritage Shamiyana & Tents
              </h4>
              <p className="text-[11px] text-[#5A5255]">Waterproof hangars & luxury silk tents</p>
            </motion.div>

            {/* 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#E63956] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E63956] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-bold mb-1">
                Generator & Power Backup
              </h4>
              <p className="text-[11px] text-[#5A5255]">Heavy-duty silent DG sets & redundancy</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
