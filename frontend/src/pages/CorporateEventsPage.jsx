import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const services = [
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tag: 'Black Tie & Awards',
    icon: 'fa-solid fa-trophy',
    title: 'Annual Galas & Awards',
    desc: 'Grand black-tie celebrations honoring achievement. We provide complete stage trussing, crystal chandelier rows, intelligent wash lighting, and red carpet entrance setups.',
    highlight: 'Stage Truss & Lighting'
  },
  {
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    tag: 'Summits & Conventions',
    icon: 'fa-solid fa-microphone-lines',
    title: 'Conferences & Global Summits',
    desc: 'Seamless multi-day conventions with heavy-duty aluminum rigging, immersive LED stage walls, speech audio clarity, and 100% generator power redundancy.',
    highlight: 'Heavy Power & Rigging'
  },
  {
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    tag: 'Brand Unveilings',
    icon: 'fa-solid fa-rocket',
    title: 'Product Launches & Activations',
    desc: 'Captivating media and influencer brand experiences with high-intensity beam lasers, architectural facade washes, and computerized DMX light shows.',
    highlight: 'DMX Lighting Shows'
  },
  {
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    tag: 'Private Offsites',
    icon: 'fa-solid fa-gem',
    title: 'Executive Retreats in Ranthambore',
    desc: 'Luxury corporate offsites at 5-star wildlife resorts and heritage palaces in Sawai Madhopur, complete with ambient dinner setups and warm festoon lighting.',
    highlight: 'Ranthambore Venues'
  },
  {
    image: 'https://images.unsplash.com/photo-photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    tag: 'Concert Grade Tech',
    icon: 'fa-solid fa-sliders',
    title: 'End-to-End AV & Heavy Power',
    desc: 'In-house commercial silent diesel generators, aluminum box truss structures, cold pyros, low fog, and flawless on-site electrical engineering.',
    highlight: 'Zero Downtime Power'
  },
  {
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
    tag: 'Grand Pavilions',
    icon: 'fa-solid fa-campground',
    title: 'Corporate Tenting & Hangars',
    desc: 'Waterproof German hangar tents, royal Rajasthani shamiyana canopies, and luxury dining pavilions for large corporate delegations and exhibitions.',
    highlight: 'German Hangar Tents'
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', title: 'Leadership Summit Stage' },
  { url: 'https://images.unsplash.com/photo-photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80', title: 'Grand Ballroom Awards' },
  { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', title: 'VIP Banquet Lighting' },
  { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', title: 'Brand Launch Stagecraft' }
];

const CORPORATE_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Executive Excellence & Theatrical Production ✦',
    title: 'Corporate Events & Summits',
    desc: 'From multinational leadership conclaves and high-profile product unveilings to annual award galas, Suraj Light House delivers flawless lighting, heavy trussing, and generator power across Rajasthan.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Grand Gala Dinners & Award Ceremonies ✦',
    title: 'Opulent Brand Milestones',
    desc: 'Curating distinguished evenings of recognition, crystal chandelier dining canopies, and cinematic stage productions that resonate with industry leaders.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ State-of-the-Art Production & AV ✦',
    title: 'Immersive Product Reveals',
    desc: 'Transforming corporate grounds with high-power beam sharpies, computerized light consoles, and synchronised effects engineered for maximum impact.'
  }
];

export default function CorporateEventsPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CORPORATE_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = CORPORATE_SLIDES[currentSlide];

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
                href="#capabilities" 
                className="px-8 py-3.5 rounded-full bg-white text-[#1A1A1A] hover:bg-rose-50 text-xs font-bold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                Explore Capabilities
              </a>
              <button 
                onClick={() => onOpenBooking('Corporate Setup')}
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105 cursor-pointer"
              >
                Request Proposal
              </button>
            </div>
          </div>

        </section>

        {/* Stats Strip */}
        <section className="py-12 bg-white border-b border-rose-100 shadow-sm relative z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#E63956] font-bold block">400+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Corporate Setups</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#E63956] font-bold block">50+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Top Brands & Summits</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#E63956] font-bold block">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">On-Time Execution</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#E63956] font-bold block">Heavy DG</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Power Redundancy</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Technical Capabilities ✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
              Tailored Corporate & Summit Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mt-2 font-light">
              We engineer state-of-the-art event environments through heavy aluminum trussing, intelligent DMX lighting, German hangars, and soundproof power generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
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
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">✦ Visual Excellence ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] font-bold">
                Recent Corporate Showcase
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

        {/* 4-Step Process */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">✦ Flawless Process ✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
              The Suraj Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#E63956] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">01</span>
              <h3 className="font-serif text-xl font-bold mb-2">Technical Scoping</h3>
              <p className="text-xs text-[#5A5255] font-light leading-relaxed">RFP evaluation, load calculations, generator sizing, and venue site surveys.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#E63956] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">02</span>
              <h3 className="font-serif text-xl font-bold mb-2">Truss & Rigging Design</h3>
              <p className="text-xs text-[#5A5255] font-light leading-relaxed">CAD layouts, aluminum box truss schematics, DMX light cue mapping.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#E63956] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">03</span>
              <h3 className="font-serif text-xl font-bold mb-2">On-Site Erection</h3>
              <p className="text-xs text-[#5A5255] font-light leading-relaxed">Early morning rigging, armored power line distribution, and live load testing.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#E63956] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">04</span>
              <h3 className="font-serif text-xl font-bold mb-2">Live Show Execution</h3>
              <p className="text-xs text-[#5A5255] font-light leading-relaxed">Continuous DMX console operation, generator monitoring, and zero-downtime support.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rose-50 -z-0"></div>
            <div className="relative z-10">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Elevate Your Brand Event ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                Ready to Engineer Your Corporate Event?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Connect with our senior technical directors for a comprehensive lighting, tenting, and power proposal in Ranthambore & Rajasthan.
              </p>
              <button
                onClick={() => onOpenBooking('Corporate Setup')}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Request Corporate Proposal</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
