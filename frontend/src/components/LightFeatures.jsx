import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function LightFeatures({ onOpenBooking, onImageClick }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  const bubbles = IMAGES.whyBubbles || [];

  return (
    <section className="bg-[#E63956] py-28 px-6 md:px-12 lg:px-16 text-white relative overflow-hidden">
      
      {/* ======================================================== */}
      {/* --- SCATTERED DECORATIVE PHOTO BUBBLES (Matching Design) --- */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: bubble.delay,
            }}
            className={`absolute ${bubble.pos} ${bubble.size} pointer-events-auto`}
          >
            {/* Continuous Organic Floating Motion Wrapper */}
            <motion.div
              animate={{
                y: [0, bubble.floatY, 0],
                x: [0, bubble.floatX, 0],
                rotate: [0, bubble.floatX > 0 ? 3 : -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: bubble.floatDuration,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 30,
                boxShadow: "0 20px 30px -5px rgba(0, 0, 0, 0.4), 0 0 20px 2px rgba(255, 255, 255, 0.6)",
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onImageClick && onImageClick({ url: bubble.url, title: bubble.title })}
              className="w-full h-full rounded-full border-2 border-white/60 hover:border-white overflow-hidden shadow-xl cursor-pointer transition-colors duration-300 relative bg-black/30"
              title={bubble.title}
            >
              <img
                src={bubble.url}
                alt={bubble.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* --- CENTER HEADINGS & 3 MAIN FEATURE CARDS --- */}
      {/* ======================================================== */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
        >
          {/* Subheading */}
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2 drop-shadow-sm">
            ✦ The Suraj Standard ✦
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight mb-16 drop-shadow">
            Engineered excellence and royal grandeur in every beam and canopy.
          </h2>
        </motion.div>

        {/* 3 Main Circular Feature Cards (Bespoke Lighting, Royal Tenting, Flawless Execution) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
          
          {/* Card 1: Bespoke Lighting */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: LUXURY_EASE }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 cursor-pointer relative bg-black/20" 
              onClick={() => onImageClick({ url: IMAGES.why1, title: "Bespoke Grand Ballroom Chandeliers & Floral Ceiling" })}
            >
              <img 
                src={IMAGES.why1} 
                alt="Bespoke Grand Ballroom Lighting" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
            </motion.div>
            <h3 className="font-serif text-2xl text-white font-bold mb-3">
              Bespoke Lighting
            </h3>
            <p className="font-sans text-xs text-white/95 leading-relaxed font-light max-w-xs">
              Architectural palace washes, imported crystal chandeliers, fairy light tunnel canopies, and computerized DMX light shows tailored to your royal theme.
            </p>
          </motion.div>

          {/* Card 2: Royal Tenting */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.28, ease: LUXURY_EASE }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 cursor-pointer relative bg-black/20" 
              onClick={() => onImageClick({ url: IMAGES.why2, title: "Royal Scalloped Silk Tenting & Drop Lanterns" })}
            >
              <img 
                src={IMAGES.why2} 
                alt="Royal Scalloped Silk Tenting" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
            </motion.div>
            <h3 className="font-serif text-2xl text-white font-bold mb-3">
              Royal Tenting
            </h3>
            <p className="font-sans text-xs text-white/95 leading-relaxed font-light max-w-xs">
              Custom hand-crafted Rajasthani shamiyanas, waterproof German pagodas, and majestic silk-draped pavilions engineered for imperial celebrations.
            </p>
          </motion.div>

          {/* Card 3: Flawless Execution */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.40, ease: LUXURY_EASE }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 cursor-pointer relative bg-black/20" 
              onClick={() => onImageClick({ url: IMAGES.why3, title: "Illuminated Fairy Light Walkway & Chandeliers" })}
            >
              <img 
                src={IMAGES.why3} 
                alt="Illuminated Fairy Light Walkway" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
            </motion.div>
            <h3 className="font-serif text-2xl text-white font-bold mb-3">
              Flawless Execution
            </h3>
            <p className="font-sans text-xs text-white/95 leading-relaxed font-light max-w-xs">
              Heavy-duty aluminum trussing, triple-redundant silent power generator grids, and master electrical engineers guaranteeing uninterrupted splendor.
            </p>
          </motion.div>

        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.45, ease: LUXURY_EASE }}
        >
          <motion.button 
            whileHover={{ 
              scale: 1.06, 
              y: -2, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.25)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="px-9 py-3.5 rounded-full bg-white hover:bg-rose-50 text-[#E63956] text-xs font-bold tracking-wider uppercase shadow-xl transition cursor-pointer"
          >
            Book Your Light
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
