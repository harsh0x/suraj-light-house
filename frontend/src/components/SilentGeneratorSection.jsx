import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function SilentGeneratorSection({ onOpenBooking, onImageClick }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];
  const [activeTab, setActiveTab] = useState(0);

  const generatorFleet = [
    {
      id: '25-62kva',
      capacity: '25 kVA – 62.5 kVA',
      tag: 'Pre-Weddings & Villa Decor',
      title: 'Compact Silent DG Genset',
      idealFor: 'Haldi, Mehendi, Cocktail Evenings, Baithaks & Villa Facade Illumination',
      features: [
        'Whisper-Quiet Acoustic Enclosure (< 65 dBA at 1m)',
        'Compact Footprint for Intimate Lawns & Residential Gates',
        'Pure Sine Wave Output for Delicate Sound & LED Strips',
        'Built-in Fuel Tank for 8-12 Hours Continuous Backup'
      ],
      badge: 'Quick Mobilization',
      servicePayload: 'Silent Generator Rental (25-62.5 kVA)'
    },
    {
      id: '125-250kva',
      capacity: '125 kVA – 250 kVA',
      tag: 'Most Popular for Royal Weddings',
      title: 'Heavy-Duty 3-Phase Silent Genset',
      idealFor: 'Grand Mandap Ceremonies, Crystal Chandelier Grids, Catering Pavilions & Bandstands',
      features: [
        'Sound-Attenuated Weatherproof Canopy',
        '3-Phase 415V Heavy Armored Distribution Box with ELCB',
        'Synchronized Redundancy with Auto-Transfer Capability',
        'Dedicated On-Site Senior Power Engineer & Load Balancing'
      ],
      badge: 'Top Wedding Choice',
      servicePayload: 'Silent Generator Rental (125-250 kVA)'
    },
    {
      id: '320-500kva',
      capacity: '320 kVA – 500+ kVA',
      tag: 'Mega Concerts & Palace Banquets',
      title: 'High-Output Powerhouse Genset Grid',
      idealFor: 'Palace Resort Mega Grounds, Heavy AC Chillers, Concert Truss Moving Heads & Low Fog FX',
      features: [
        'Multi-Genset Parallel Synchronization & Auto Load Sharing',
        'Zero Voltage Fluctuations for High-End DMX & Broadcast Gear',
        'Heavy Rubberized Cable Protector Bridges for Guest Walkways',
        '24/7 Redundant Standby Backup & Continuous Fuel Logistics'
      ],
      badge: 'Max Power Grid',
      servicePayload: 'Silent Generator Rental (320-500+ kVA)'
    }
  ];

  const highlights = [
    {
      icon: 'fa-solid fa-volume-xmark',
      title: 'Acoustic Soundproof Enclosures',
      desc: 'Advanced sound attenuation guarantees near-silent operation so solemn vows, music, and royal ceremonies proceed without distracting engine noise.'
    },
    {
      icon: 'fa-solid fa-bolt-lightning',
      title: 'Zero Voltage Drop & Surge Protection',
      desc: 'Precision micro-processor AVR controllers protect expensive sound consoles, LED screens, and delicate imported chandeliers from voltage spikes.'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Complete 3-Phase Power Distribution',
      desc: 'Includes industrial distribution panels, waterproof armored copper cabling, and heavy-duty floor cable ramps to keep guest areas safe.'
    },
    {
      icon: 'fa-solid fa-user-shield',
      title: '24/7 On-Site Power Crew & Fuel Management',
      desc: 'Certified electrical technicians remain on duty throughout your event to manage load switches, fuel replenishment, and emergency standby.'
    }
  ];

  return (
    <section id="generator-rental" className="bg-[#FAF6F0] py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden border-t border-b border-rose-100/80">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/25 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full filter blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] mb-3 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 shadow-xs">
            <i className="fa-solid fa-bolt text-[11px]"></i>
            <span>Heavy-Duty Soundproof Power Rental</span>
            <i className="fa-solid fa-bolt text-[11px]"></i>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-5 leading-tight">
            Silent Generators on Rent for Grand Weddings & Events
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#5A5255] leading-relaxed font-light">
            Never let a power outage interrupt your royal celebration. Suraj Light House provides whisper-quiet commercial diesel generators (DG Gensets) with certified technicians and 3-phase cabling across Sawai Madhopur, Ranthambore, and Rajasthan.
          </p>
        </motion.div>

        {/* Featured Showcase Card + Fleet Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          
          {/* Left Column: Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Visual Frame */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-md bg-neutral-900">
              <img 
                src={IMAGES.generatorRental || "/assets/silent-generator-rental.jpg"} 
                alt="Silent DG Generator on Rent for Luxury Wedding Events" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out cursor-pointer"
                onClick={() => onImageClick && onImageClick({
                  url: IMAGES.generatorRental || "/assets/silent-generator-rental.jpg",
                  title: "Heavy-Duty Acoustic Silent Generator Setup for Luxury Palace Wedding"
                })}
              />

              {/* Status Pill on Top */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                <span>Acoustic Whisper-Quiet Enclosure</span>
              </div>

              {/* Badge Bottom Right */}
              <div className="absolute bottom-3 right-3 bg-[#E63956]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                25 kVA – 500+ kVA Fleet
              </div>
            </div>

            {/* Content summary */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-bold">
                  Turnkey Power Backup & Grid Management
                </h3>
                <span className="text-xs font-bold text-[#E63956] bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200/60">
                  100% Uptime Guarantee
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light mb-6">
                Engineered specifically for luxury weddings, destination resorts, corporate galas, and live concerts where flawless continuous power for lighting, sound, mandap rituals, and AC units is mission-critical.
              </p>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                <div className="bg-[#FAF6F0] p-3 rounded-xl border border-rose-100 text-center">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Noise Level</span>
                  <span className="font-serif text-sm font-bold text-[#1A1A1A]">&lt; 65 dBA</span>
                </div>
                <div className="bg-[#FAF6F0] p-3 rounded-xl border border-rose-100 text-center">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Output</span>
                  <span className="font-serif text-sm font-bold text-[#1A1A1A]">3-Phase 415V</span>
                </div>
                <div className="bg-[#FAF6F0] p-3 rounded-xl border border-rose-100 text-center col-span-2 sm:col-span-1">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Operator</span>
                  <span className="font-serif text-sm font-bold text-[#1A1A1A]">24/7 Included</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking('Silent Generator Rental')}
                className="flex-1 py-3.5 px-6 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Reserve Silent Generator</span>
                <i className="fa-solid fa-arrow-right text-[11px]"></i>
              </motion.button>
              
              <a 
                href="tel:+919782962963"
                className="py-3.5 px-5 rounded-full bg-[#FAF6F0] hover:bg-rose-50 text-[#1A1A1A] border border-rose-200 text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-phone text-[#E63956]"></i>
                <span>Direct Hotline</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Fleet Selection & Package Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: LUXURY_EASE }}
            className="lg:col-span-6 flex flex-col justify-between space-y-4"
          >
            {generatorFleet.map((gen, idx) => {
              const isSelected = activeTab === idx;
              return (
                <motion.div
                  key={gen.id}
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveTab(idx)}
                  className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border ${
                    isSelected 
                      ? 'bg-white shadow-xl border-[#E63956] ring-2 ring-[#E63956]/20' 
                      : 'bg-white/80 hover:bg-white shadow-md border-rose-100/90'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A]">
                          {gen.capacity}
                        </span>
                        <span className="text-[11px] font-bold text-[#E63956] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60">
                          {gen.tag}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">
                        {gen.title}
                      </h4>
                    </div>

                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition ${
                      isSelected ? 'bg-[#E63956] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isSelected ? <i className="fa-solid fa-check text-[10px]"></i> : idx + 1}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#5A5255] mb-3">
                    <strong className="font-semibold text-gray-800">Best for: </strong>{gen.idealFor}
                  </p>

                  {/* Bullet points for active card */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-3 border-t border-rose-100 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {gen.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-[11px] text-gray-600">
                              <i className="fa-solid fa-circle-check text-[#E63956] text-[10px] mt-0.5 shrink-0"></i>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex items-center justify-between gap-4">
                          <span className="text-xs font-semibold text-gray-500">
                            Includes Fuel, Cabling & Crew
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenBooking(gen.servicePayload);
                            }}
                            className="py-2 px-4 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
                          >
                            <span>Book This Capacity</span>
                            <i className="fa-solid fa-arrow-right text-[9px]"></i>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: LUXURY_EASE }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-rose-100/90 hover:shadow-md hover:border-rose-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#E63956] border border-rose-200/80 flex items-center justify-center text-lg mb-4 shadow-xs">
                <i className={item.icon}></i>
              </div>
              <h3 className="font-serif text-base text-[#1A1A1A] font-bold mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#5A5255] leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking & Quick Contact Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25, ease: LUXURY_EASE }}
          className="mt-14 bg-gradient-to-r from-[#1A1A1A] via-[#2A1C20] to-[#1A1A1A] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Decorative Sparkle / Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#E63956]/30 rounded-full filter blur-2xl pointer-events-none"></div>

          <div className="text-center md:text-left relative z-10">
            <span className="text-[#FFCCD3] text-xs font-bold uppercase tracking-widest block mb-1">
              ✦ Need Immediate Power Assessment? ✦
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Calculate Your Event's Exact kVA Load
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl">
              Our lead electrical supervisor will calculate total wattage for your lighting truss, mandap, audio gear, and venue requirements free of charge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenBooking('Silent Generator Rental')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition cursor-pointer"
            >
              Book Silent Generator
            </motion.button>
            <a
              href="https://wa.me/919782962963?text=Hello%20Suraj%20Light%20House,%20I%20am%20looking%20to%20rent%20a%20Silent%20Generator%20for%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
