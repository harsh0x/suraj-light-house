import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const ABOUT_SLIDES = [
  {
    id: 1,
    image: "/assets/heritage-lotus-stage.jpg",
    sub: "✦ Passion, Engineering & Royal Grandeur ✦",
    title: "The Visionaries Behind The Light",
    desc: "For decades, Suraj Light House (Suraj Light's Ranthambore) has been Rajasthan's premier mastercraft event lighting, heritage tenting, and theatrical decor company."
  },
  {
    id: 2,
    image: "/assets/heritage-fountain-stage.jpg",
    sub: "✦ Masters of Theatrical Illumination ✦",
    title: "Crafting Luminous Spectacles",
    desc: "Transforming open grounds, wildlife resorts, and royal fort courtyards into breathtaking wonderlands with crystal chandeliers and fairy light canopies."
  },
  {
    id: 3,
    image: "/assets/heritage-palace-stage.jpg",
    sub: "✦ Industrial Grade Reliability ✦",
    title: "Fail-Safe Heavy Power Grids",
    desc: "Equipped with dedicated silent diesel generators, aluminum truss architecture, and computerized DMX consoles for zero-downtime celebrations."
  }
];

export default function AboutUsPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = ABOUT_SLIDES[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      <div>
        {/* 1. HERO SECTION WITH AUTOMATIC SLIDER & SIGNATURE CRIMSON OVERLAY */}
        <section className="relative text-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
          
          {/* Background Images Crossfade & Ken-Burns */}
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

          {/* Signature Crimson & Obsidian Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.55) 0%, rgba(230, 57, 86, 0.70) 55%, rgba(230, 57, 86, 0.94) 100%)' }}
          />

          <div className="max-w-4xl mx-auto relative z-20 flex-1 flex flex-col items-center justify-center select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: LUXURY_EASE }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-3">
                  {slide.sub}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-5 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto font-light leading-relaxed mb-8 px-2 drop-shadow-sm">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4 z-20">
              <a 
                href="#about-story" 
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:scale-105 border border-white/20"
              >
                Discover Our Heritage
              </a>
              <button 
                onClick={() => onOpenBooking('Full Event Lighting')}
                className="px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs tracking-widest uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105 cursor-pointer"
              >
                Book Your Light
              </button>
            </div>
          </div>
        </section>

        {/* 2. SECTION 1: ABOUT US */}
        <section id="about-story" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Chandelier Setup Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-700">
                <img 
                  src="/assets/heritage-palace-stage.jpg" 
                  alt="Suraj Light House Royal Chandelier Setup" 
                  className="w-full h-[520px] sm:h-[600px] object-cover object-center"
                />
              </div>
              {/* Decorative Glow */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column: Overlapping Elegant About Us Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-7"
            >
              <div className="bg-white border border-[#EEDCE0] shadow-xl rounded-2xl p-8 sm:p-12 md:p-14 text-center sm:text-left relative">
                
                {/* Header */}
                <div className="text-center sm:text-left mb-6">
                  <img 
                    src="/logo.png" 
                    alt="Suraj Light's Ranthambore Logo" 
                    className="h-16 sm:h-20 w-auto object-contain mb-3 mx-auto sm:mx-0 drop-shadow"
                  />
                  <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">
                    ✦ The Story of Suraj Light's Ranthambore ✦
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mt-1">
                    The Visionaries Behind The Light
                  </h2>
                </div>

                {/* Bold Subtitle */}
                <p className="font-sans text-sm sm:text-base md:text-lg font-bold text-[#1A1A1A] leading-snug mb-6 text-center sm:text-left">
                  Welcome to Suraj Light's Ranthambore — where engineering mastery meets royal Rajasthani grandeur.
                </p>

                {/* Descriptive Paragraph */}
                <p className="font-sans text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed mb-6 text-justify">
                  Headquartered in Sawai Madhopur, Suraj Light House has grown to become the defining force in grand wedding lighting, royal tenting (shamiyana), and stage trussing across Ranthambore and Rajasthan. We specialize in transforming vast outdoor landscapes, jungle luxury resorts, and ancient fort courtyards into luminous, fairytale venues. Every wire, bulb, generator, and chandelier is deployed with relentless attention to safety, power balance, and aesthetic perfection.
                </p>

                {/* Signature flourish line */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 border-t border-rose-200/60">
                  <span className="font-serif tracking-widest uppercase text-sm font-bold text-[#E63956]">Suraj Light House • Ranthambore</span>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. SECTION 2: VISION & TECHNICAL MASTERY */}
        <section className="py-20 sm:py-24 bg-white border-y border-rose-100 px-4 sm:px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="max-w-4xl mx-auto"
          >
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ Our Mission & Capabilities ✦
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-8">
              Transforming Nightscapes Into Unforgettable Wonder
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#5A5255] font-light leading-relaxed mb-6">
              From our humble beginnings to executing 1000+ guest royal sangeets and corporate summits at iconic venues like Nahargarh Fort, Six Senses Fort Barwara, and Oberoi Vanyavilas, our mission is clear: to engineer flawless event environments that leave guests in pure awe.
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#5A5255] font-light leading-relaxed mb-6">
              We own and maintain the largest inventory of heavy-duty aluminum box trussing, computer-controlled sharpie beam moving heads, imported crystal chandeliers, waterproof German pagodas, and soundproof commercial generator sets in Sawai Madhopur.
            </p>

            {/* Bold Final Motto */}
            <p className="font-sans text-sm sm:text-base md:text-lg font-bold text-[#E63956] tracking-wide">
              ✦ Suraj Light House: Where Every Celebration Shines with Royal Dignity ✦
            </p>

          </motion.div>
        </section>

        {/* 4. SECTION 4: QUALITY POLICY & STATS */}
        <section className="py-20 sm:py-24 bg-[#FAF6F0] px-4 sm:px-6 md:px-12 text-center">
          <div className="max-w-6xl mx-auto">
            
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ The Suraj Benchmark ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-14">
              Our Pillars of Excellence
            </h2>

            {/* 6 Quality Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mb-20">
              
              {/* 1. Heavy Aluminum Trussing */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Aluminum Truss Rigging</span>
              </motion.div>

              {/* 2. Crystal Chandeliers */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Crystal Chandeliers</span>
              </motion.div>

              {/* 3. Heritage Tenting */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-campground"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Heritage Shamiyana</span>
              </motion.div>

              {/* 4. Generator Redundancy */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">100% DG Power Backup</span>
              </motion.div>

              {/* 5. Intelligent DMX Control */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-sliders"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Intelligent DMX Sync</span>
              </motion.div>

              {/* 6. On-Site Technical Crew */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">24/7 Electrical Crew</span>
              </motion.div>

            </div>

            {/* Bottom Statistics Counter Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-rose-100 text-center">
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">950+</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">EVENTS ILLUMINATED</span>
              </div>
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">120+</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">FORTS & RESORTS</span>
              </div>
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">100%</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">POWER REDUNDANCY</span>
              </div>
              <div className="p-4">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">500+</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">DELIGHTED FAMILIES</span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. SECTION 5: WE MANAGE */}
        <section className="py-16 sm:py-20 bg-white border-t border-rose-100 px-4 sm:px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="max-w-5xl mx-auto"
          >
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ End-to-End Infrastructure ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-12">
              We Manage Complete Event Production
            </h2>

            {/* Items Grid */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-6 max-w-4xl mx-auto">
              
              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-lightbulb text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Palace Facade Illumination</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-gem text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Crystal Chandelier Canopies</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-campground text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Handcrafted Shamiyana</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-cubes-stacked text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Stage & Truss Architecture</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-bolt text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Silent Diesel Generators</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-fire text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Cold Pyros & Special FX</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-music text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Concert Audio Support</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-ring text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Royal Mandap Lighting</span>
              </motion.div>

            </div>

          </motion.div>
        </section>

        {/* 5.5. SECTION 5.5: STUDIO & HEADQUARTERS MAP */}
        <section className="py-20 sm:py-24 bg-[#FAF6F0] px-4 sm:px-6 md:px-12 lg:px-16 border-t border-rose-100">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
                ✦ Studio, Workshop & Generator Depot ✦
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-4">
                Visit Our Studio in Sawai Madhopur
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed">
                Located on Ranthambore National Park Road, our state-of-the-art staging hub houses our complete inventory of crystal chandeliers, trussing systems, and silent generator fleets.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: LUXURY_EASE }}
              className="bg-white rounded-3xl border border-rose-200/90 shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Map Column */}
                <div className="lg:col-span-7 h-[400px] sm:h-[480px] relative bg-neutral-100">
                  <iframe
                    title="Suraj Light House Studio Map"
                    src="https://maps.google.com/maps?q=Ranthambore+Road,+Sawai+Madhopur,+Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.05] saturate-[1.1]"
                  ></iframe>

                  {/* Floating Location Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-rose-200/80 flex items-center gap-3 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-[#E63956] text-white flex items-center justify-center text-xs shadow-md">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <span className="font-serif font-bold text-xs text-[#1A1A1A] block">Suraj Light House Studio</span>
                      <span className="text-[10px] text-gray-500">Ranthambore Road, Rajasthan</span>
                    </div>
                  </div>
                </div>

                {/* Studio Hub Highlights */}
                <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-b from-white to-[#FAF6F0] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-rose-100">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#E63956] block mb-1">
                        CENTRAL STAGING BASE
                      </span>
                      <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold">
                        Ranthambore Production Hub
                      </h3>
                      <p className="text-xs text-[#5A5255] mt-2 leading-relaxed font-light">
                        Our centralized operations facility ensures rapid 24/7 mobilization across Nahargarh Palace, Six Senses Fort Barwara, Oberoi Vanyavilas, and venues throughout Rajasthan.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100">
                        <i className="fa-solid fa-wand-magic-sparkles text-[#E63956] text-sm mb-1.5 block"></i>
                        <h5 className="font-serif text-xs font-bold text-[#1A1A1A]">Lighting Studio</h5>
                        <p className="text-[10px] text-gray-500 font-light mt-0.5">Custom chandelier & DMX beam staging</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100">
                        <i className="fa-solid fa-bolt text-[#E63956] text-sm mb-1.5 block"></i>
                        <h5 className="font-serif text-xs font-bold text-[#1A1A1A]">Power Grid Depot</h5>
                        <p className="text-[10px] text-gray-500 font-light mt-0.5">Heavy soundproof Cummins DG gensets</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100">
                        <i className="fa-solid fa-campground text-[#E63956] text-sm mb-1.5 block"></i>
                        <h5 className="font-serif text-xs font-bold text-[#1A1A1A]">Tenting Workshop</h5>
                        <p className="text-[10px] text-gray-500 font-light mt-0.5">Handcrafted shamiyanas & German pagodas</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100">
                        <i className="fa-solid fa-handshake text-[#E63956] text-sm mb-1.5 block"></i>
                        <h5 className="font-serif text-xs font-bold text-[#1A1A1A]">Client Lounge</h5>
                        <p className="text-[10px] text-gray-500 font-light mt-0.5">Personalized wedding lighting consultations</p>
                      </div>
                    </div>

                    <div className="space-y-1 pt-1 text-xs text-[#5A5255]">
                      <p><strong className="text-[#1A1A1A]">Address:</strong> Ranthambore National Park Road, Sawai Madhopur, RJ 322001</p>
                      <p><strong className="text-[#1A1A1A]">Direct Contacts:</strong> +91 9782962963 • +91 9414310499</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-rose-200/80 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Suraj+Light+House+Ranthambore+Road+Sawai+Madhopur+Rajasthan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition"
                    >
                      <i className="fa-solid fa-diamond-turn-right text-xs"></i>
                      <span>Get Directions</span>
                    </a>

                    <a
                      href="tel:+919782962963"
                      className="py-3 px-5 rounded-xl bg-white hover:bg-rose-50 text-[#E63956] border border-rose-200 font-bold text-xs tracking-wider uppercase shadow-sm flex items-center justify-center gap-2 transition"
                    >
                      <i className="fa-solid fa-phone text-xs"></i>
                      <span>Call Us</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* 6. SECTION 6: OUR EXPERTISE BANNER */}
        <section 
          className="py-16 sm:py-20 text-white px-4 sm:px-6 md:px-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #E63956 70%, #CF203E 100%)' }}
        >
          <div className="max-w-7xl mx-auto relative border border-dashed border-white/40 rounded-2xl py-12 px-6 sm:px-10 text-center">
            
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Suraj Light House ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
              Ready to Light Up Your Grand Celebration?
            </h2>

            <p className="font-sans text-xs sm:text-sm text-white/95 font-light tracking-wide mb-8 max-w-xl mx-auto">
              Destination Weddings | Palace Receptions | Corporate Summits | Sangeet Stage Productions
            </p>

            <button 
              onClick={() => onOpenBooking('Full Event Lighting')}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white hover:bg-rose-50 text-[#E63956] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get a Proposal</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>

          </div>
        </section>

      </div>
    </motion.div>
  );
}
