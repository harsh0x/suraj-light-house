import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function SurajAbout({ onOpenBooking, onImageClick }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  // Tile hover animation tokens
  const tileHoverProps = {
    whileHover: { 
      y: -8, 
      boxShadow: "0 25px 35px -5px rgba(230, 57, 86, 0.35), 0 12px 16px -6px rgba(230, 57, 86, 0.2)",
      transition: { duration: 0.45, ease: LUXURY_EASE } 
    }
  };

  const imageHoverProps = {
    whileHover: { 
      scale: 1.08, 
      transition: { duration: 0.7, ease: LUXURY_EASE } 
    }
  };

  const aboutWordsLine1 = ["The", "Visionaries", "Behind"];
  const aboutWordsLine2 = ["The", "Magical", "Light"];

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <section id="about" className="relative bg-white pt-16 sm:pt-20 pb-24 px-6 md:px-12 lg:px-16 overflow-visible z-20">
      
      {/* Floating Arrow Button with continuous gentle breathing bounce (Centered with Flexbox) */}
      <div className="absolute -top-7 sm:-top-8 left-0 right-0 w-full flex items-center justify-center z-30 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="pointer-events-auto flex items-center justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.15, boxShadow: "0 20px 30px -5px rgba(230, 57, 86, 0.6)" }}
            whileTap={{ scale: 0.92 }}
            href="#about"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(230,57,86,0.45)] transition border-4 border-white cursor-pointer select-none"
            aria-label="Scroll down to About section"
          >
            <i className="fa-solid fa-arrow-down text-base sm:text-lg"></i>
          </motion.a>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-4 sm:mt-6">
        {/* Main 3-column asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Photo Cluster: 2 Overlapping Interactive Image Tiles */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: LUXURY_EASE }}
            className="lg:col-span-4 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm h-[380px] sm:h-[420px]">
              
              {/* Back/Bottom Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute bottom-0 left-0 w-[78%] h-[68%] rounded-2xl overflow-hidden frame-rose shadow-xl cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutLeftBack, title: "Royal Heritage Shamiyana Tent Setup" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutLeftBack} 
                  alt="Royal Heritage Shamiyana Setup"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Front/Top Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute top-0 right-2 w-[62%] h-[72%] rounded-2xl overflow-hidden frame-white shadow-2xl z-10 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutLeftFront, title: "Crystal Chandelier & Fairy Light Canopy" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutLeftFront} 
                  alt="Crystal Chandelier Array"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* Center Text Area: Staggered Typography & Smooth Fade-Slide */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.15, ease: LUXURY_EASE }}
            className="lg:col-span-4 text-center px-2 sm:px-6"
          >
            
            {/* Subheading: "✦ Our Heritage & Legacy ✦" */}
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ Suraj Light House Legacy ✦
            </span>

            {/* Main Heading with Staggered Cascading Words */}
            <motion.h2 
              variants={wordContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-serif text-3xl sm:text-4xl lg:text-4xl text-[#1A1A1A] font-bold tracking-tight leading-snug mb-5 overflow-hidden"
            >
              <div className="flex flex-wrap justify-center gap-x-2">
                {aboutWordsLine1.map((w, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">{w}</motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-2">
                {aboutWordsLine2.map((w, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block text-[#E63956]">{w}</motion.span>
                ))}
              </div>
            </motion.h2>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light mb-8 max-w-md mx-auto">
              With a celebrated heritage rooted in Ranthambore and Sawai Madhopur, Suraj Light House crafts mesmerizing night atmospheres for the grandest destination weddings, royal celebrations, and corporate galas. We unite heavy-duty electrical engineering with regal aesthetic mastery—delivering spectacular chandelier canopies, heritage tents, stage trussing, and fail-safe power redundancy.
            </p>

            {/* Action Buttons with Spring Micro-interactions */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: "0 15px 25px -5px rgba(230, 57, 86, 0.45)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => onOpenBooking('Full Event Lighting')}
                className="px-6 py-2.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-semibold tracking-wider uppercase shadow-md cursor-pointer"
              >
                Book Your Light
              </motion.button>
              
              <motion.a 
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#services"
                className="px-6 py-2.5 rounded-full bg-white hover:bg-rose-50 text-[#E63956] border border-[#E63956] text-xs font-semibold tracking-wider uppercase shadow-sm cursor-pointer"
              >
                Our Setups
              </motion.a>
            </div>

          </motion.div>

          {/* Right Photo Cluster: 2 Overlapping Interactive Image Tiles */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.25, ease: LUXURY_EASE }}
            className="lg:col-span-4 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm h-[380px] sm:h-[420px]">
              
              {/* Back/Top Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute top-0 left-4 w-[65%] h-[72%] rounded-2xl overflow-hidden frame-white shadow-2xl z-10 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutRightBack, title: "Royal Courtyard Night Illumination" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutRightBack} 
                  alt="Night Courtyard Illumination"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Front/Bottom Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute bottom-0 right-0 w-[68%] h-[70%] rounded-2xl overflow-hidden frame-rose shadow-xl cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutRightFront, title: "Royal Rajasthani Mandap & Amber Lighting" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutRightFront} 
                  alt="Royal Rajasthani Mandap Lighting"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
