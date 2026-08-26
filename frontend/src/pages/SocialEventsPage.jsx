import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const categories = [
  {
    image: 'https://images.unsplash.com/photo-photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    tag: 'Milestone Celebrations',
    icon: 'fa-solid fa-cake-candles',
    title: 'Grand Birthday & Jubilee Lights',
    desc: 'Landmark celebrations illuminated with warm string canopies, vintage Edison bulbs, custom neon backdrop lighting, and private DJ sound setups.',
    highlight: 'Warm Ambient Lighting'
  },
  {
    image: 'https://images.unsplash.com/photo-photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    tag: 'Romantic Banquets',
    icon: 'fa-solid fa-heart',
    title: 'Anniversaries & Vow Renewals',
    desc: 'Candlelit garden banquets, crystal chandelier canopies, romantic amber facade uplighting, and bespoke floral shamiyana pavilions.',
    highlight: 'Chandelier Canopies'
  },
  {
    image: 'https://images.unsplash.com/photo-photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80',
    tag: 'Pastel High Tea',
    icon: 'fa-solid fa-baby-carriage',
    title: 'Baby Showers & Family Feasts',
    desc: 'Soft pastel fairy lighting, illuminated floral archways, shamiyana dining tents, and gentle acoustic sound reinforcement.',
    highlight: 'Heritage Tents'
  },
  {
    image: 'https://images.unsplash.com/photo-photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    tag: 'Pre-Wedding Radiance',
    icon: 'fa-solid fa-ring',
    title: 'Sangeet Nights & Ring Ceremonies',
    desc: 'High-energy stage trussing, sharpie moving head beams, synchronized pixel tubes, cold pyros, and heavy low fog for memorable family dances.',
    highlight: 'Concert Grade Truss'
  },
  {
    image: 'https://images.unsplash.com/photo-photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    tag: 'Alfresco Nights',
    icon: 'fa-solid fa-martini-glass-citrus',
    title: 'Cocktail Soirées & Lounges',
    desc: 'Courtyard festoon strings, brass lantern pathways, pool perimeter water reflection lighting, and ambient chill-out lounge setups.',
    highlight: 'Festoon & Lanterns'
  },
  {
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80',
    tag: 'Diwali & New Year',
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Holiday Galas & Festival Lights',
    desc: 'Diwali palace floodlighting, New Year countdown light shows, pyrotechnics, and extensive fairy light wrap on heritage estate trees.',
    highlight: 'Festival Illuminations'
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', title: 'Midnight Countdown Lights' },
  { url: 'https://images.unsplash.com/photo-photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', title: 'Bespoke Chandelier Dinner' },
  { url: 'https://images.unsplash.com/photo-photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80', title: 'Private Courtyard Soirée' },
  { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80', title: 'Grand Sangeet Production' }
];

const SOCIAL_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Unforgettable Personal Milestones ✦',
    title: 'Social Celebrations & Sangeet Nights',
    desc: 'From high-energy pre-wedding sangeets and anniversaries to milestone birthdays, Suraj Light House turns intimate and royal celebrations into magical experiences.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Alfresco Magic & Fairy Canopies ✦',
    title: 'Enchanted Courtyard Galas',
    desc: 'Drape your open-air soirées in ten thousand fairy lights, crystal chandelier arrays, and Rajasthani shamiyana pavilions that enchant every guest.'
  }
];

export default function SocialEventsPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SOCIAL_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SOCIAL_SLIDES[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      <div>
        {/* Hero Section with Automatic Multi-Slide Carousel */}
        <section className="relative text-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
          
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
                <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed mb-8 px-2 drop-shadow-sm">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4 z-20">
              <a 
                href="#categories" 
                className="px-8 py-3.5 rounded-full bg-white text-[#1A1A1A] hover:bg-rose-50 text-xs font-bold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                View Setups
              </a>
              <button 
                onClick={() => onOpenBooking('Social & Sangeet Lighting')}
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105 cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>

        </section>

        {/* Categories Grid */}
        <section id="categories" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Social & Sangeet Celebrations ✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
              Magical Lighting For Every Milestone
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mt-2 font-light">
              Crafting unforgettable atmospheres for anniversaries, cocktail dinners, sangeet nights, and grand celebrations in Ranthambore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: LUXURY_EASE }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-rose-200/80 hover:shadow-2xl transition duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 w-full overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#E63956] shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E63956] flex items-center justify-center text-lg mb-4 shadow-xs">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-[#E63956] font-bold">
                    <span>{item.highlight}</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Showcase */}
        <section className="py-16 bg-white border-y border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">✦ Visual Radiance ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] font-bold">
                Recent Social & Sangeet Moments
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-md h-48 sm:h-64 group relative"
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition p-4 flex items-end">
                    <span className="text-white text-xs font-bold">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Light Up Your Night ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                Planning a Sangeet, Birthday or Private Soirée?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Let Suraj Light House design an enchanting lighting and tenting layout tailored to your family's celebration.
              </p>
              <button
                onClick={() => onOpenBooking('Social & Sangeet Lighting')}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Inquire For Your Celebration</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
