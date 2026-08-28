import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const roster = [
  {
    image: '/assets/04bf0b1c6eb47feba6d01048b603293c.jpg',
    tag: 'Red Carpet & Stages',
    icon: 'fa-solid fa-film',
    title: 'Celebrity Stage & Trussing',
    desc: 'Heavy-duty aluminum box trussing, elevated multi-tier stages, hydraulic ramps, and red carpet lighting for celebrity performances and royal arrivals.',
    highlight: 'Box Truss & Rigging'
  },
  {
    image: '/assets/25ace1e7c3fbb3df2814920e8a4fc7f0.jpg',
    tag: 'Concert Experience',
    icon: 'fa-solid fa-microphone',
    title: 'Live Band & Vocalist Lighting',
    desc: 'Dynamic spotlight tracking, computerized beam sharpies, warm stage wash, and in-ear monitor power lines for live Sufi & Bollywood performers.',
    highlight: 'DMX Spot & Beams'
  },
  {
    image: '/assets/27a5e8a51e99073fdd959bdb7a456bbf.jpg',
    tag: 'EDM & Laser Cues',
    icon: 'fa-solid fa-compact-disc',
    title: 'DJ Truss & Moving Heads',
    desc: 'High-octane moving head light shows, full-color RGB laser mapping, pixel LED tubes, and synchronized beats for electrifying after-parties.',
    highlight: 'Laser & Moving Heads'
  },
  {
    image: '/assets/769b6a2c2a7199080b009a014956bd12.jpg',
    tag: 'Classical Grandeur',
    icon: 'fa-solid fa-music',
    title: 'Folk & Symphony Ambiance',
    desc: 'Graceful warm golden uplighting, brass lantern walkways, and acoustic stage setups for royal Rajasthani folk artists and string ensembles.',
    highlight: 'Heritage Gold Wash'
  },
  {
    image: '/assets/8a660f910a9795b965d2aadb619b83e0.jpg',
    tag: 'Special FX',
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Cold Pyros, Fog & Confetti',
    desc: 'Stage sparkular cold pyros, low-lying dry ice fog, stadium confetti blasters, and flame simulators engineered for dramatic grand entry moments.',
    highlight: 'Cold Pyros & FX'
  },
  {
    image: '/assets/a0c329f7956fb9ff501d284d5948d4ae.jpg',
    tag: 'Dedicated Power',
    icon: 'fa-solid fa-shield-halved',
    title: 'Rider Technical Compliance',
    desc: 'Complete sound-attenuated diesel generators, 3-phase power distribution boxes, and technical rider fulfillment with zero downtime.',
    highlight: 'Silent DG Backup'
  }
];

const galleryImages = [
  { url: '/assets/a29e0332418ba85517134a9dfd3c597b.jpg', title: 'Live Headline Concert Rigging' },
  { url: '/assets/c6d73bda66c9049138873f62548e4505.jpg', title: 'Illuminated Stage & Confetti Blast' },
  { url: '/assets/c70c0f3d7828169baa4bf1e894b7c51c.jpg', title: 'Acoustic Band Festoon Stage' },
  { url: '/assets/d9d1e8d007790aec01a5b0813af2a7fc.jpg', title: 'Laser Geometric Sangeet Production' }
];

const CELEBRITY_SLIDES = [
  {
    id: 1,
    image: '/assets/portfolio-dj-dance-sangeet.jpg',
    sub: '✦ Concert Grade Stagecraft ✦',
    title: 'Stage Trussing & Special FX Production',
    desc: 'Suraj Light House delivers heavy aluminum box trussing, sharpie moving head beams, lasers, and cold pyros for top-tier artist performances and grand celebrations across Rajasthan.'
  },
  {
    id: 2,
    image: '/assets/service-cold-pyro-fog-aisle.jpg',
    sub: '✦ High-Octane After-Parties ✦',
    title: 'Electrifying Sangeet Light Shows',
    desc: 'Computerized intelligent DMX consoles, moving heads, cryogenic fog, and concert-grade acoustics designed to keep your audience enthralled until sunrise.'
  }
];

export default function CelebrityArtistPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CELEBRITY_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = CELEBRITY_SLIDES[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      <div>
        {/* Hero Section */}
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
                href="#roster" 
                className="px-8 py-3.5 rounded-full bg-white text-[#1A1A1A] hover:bg-rose-50 text-xs font-bold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                Explore Stage Tech
              </a>
              <button 
                onClick={() => onOpenBooking('Stage & Truss Illumination')}
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105 cursor-pointer"
              >
                Request Tech Rider
              </button>
            </div>
          </div>

        </section>

        {/* Stage & Tech Capabilities Grid */}
        <section id="roster" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Concert & Artist Stagecraft ✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
              Concert Grade Rigging & Lighting Tech
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mt-2 font-light">
              We engineer dynamic stage environments for headline singers, celebrity hosts, international DJs, and traditional folk troupes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roster.map((item, idx) => (
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
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">✦ High-Octane Energy ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] font-bold">
                Stage & Lighting Production Gallery
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
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Concert Scale Lighting ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                Booking a Celebrity Artist or Live Band?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Ensure your stage, aluminum trussing, and generator power meet professional technical riders with 100% precision.
              </p>
              <button
                onClick={() => onOpenBooking('Stage & Truss Illumination')}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Inquire For Stage Production</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
