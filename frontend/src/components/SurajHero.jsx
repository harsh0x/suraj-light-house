import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/assets/hero-facade-lighting.jpg',
    subTitle: "Suraj Light's Ranthambore",
    heading: "Illuminating Ranthambore's Most Royal Celebrations",
    desc: 'From royal heritage palace weddings to mega corporate summits, we engineer breathtaking event lighting, majestic tenting, and grand Rajasthani decor with precision craftsmanship and zero-downtime execution.'
  },
  {
    id: 2,
    image: '/assets/hero-royal-stage.jpg',
    subTitle: 'Grand Royal Stage & Chandeliers',
    heading: 'Where Opulent Radiance Meets Royal Heritage',
    desc: 'Lush botanical floral canopies, imported crystal chandeliers, and warm architectural wash lights crafting breathtaking mandaps and royal stages.'
  },
  {
    id: 3,
    image: '/assets/hero-canopy-lighting.jpg',
    subTitle: 'Heritage Tenting & Star Canopy',
    heading: 'Grand Fairy Light Marquees & Open-Sky Canopies',
    desc: 'Radiant starlit fairy light marquees and festoon canopies transforming expansive heritage palace lawns into luminous open-sky celebrations.'
  }
];

export default function SurajHero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  // Automatic Slide Timer (every 5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative min-h-[92vh] md:min-h-[100vh] flex flex-col justify-between overflow-hidden group">
      
      {/* Background Image Carousel with Ken-Burns Smooth Zoom & Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            scale: { duration: 6.5, ease: "easeOut" }
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      </AnimatePresence>

      {/* Signature Cinematic Coral-Crimson & Obsidian Charcoal Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.55) 0%, rgba(230, 57, 86, 0.65) 55%, rgba(230, 57, 86, 0.94) 100%)' }}
      />

      {/* Hero Center Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto pt-32 sm:pt-36 pb-16 sm:pb-20 select-none">
        
        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="flex flex-col items-center"
          >
            {/* Top Subheading: Regal Serif Caps */}
            <p className="font-serif tracking-[0.25em] uppercase text-sm sm:text-base md:text-lg text-[#FFCCD3] drop-shadow-md mb-3 font-semibold">
              ✦ {slide.subTitle} ✦
            </p>

            {/* Main Heading: Large white elegant serif */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg mb-6 max-w-3xl">
              {slide.heading}
            </h1>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto leading-relaxed font-light mb-10 drop-shadow">
              {slide.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons: Two pill-shaped buttons side-by-side */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto z-20"
        >
          {/* Left Button: Solid Crimson Coral */}
          <button
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
          >
            Book Your Light
          </button>

          {/* Right Button: White pill button */}
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-rose-50 text-[#E63956] border-2 border-[#E63956] text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-2xl text-center transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Grand Setups
          </a>
        </motion.div>

      </div>

    </div>
  );
}
