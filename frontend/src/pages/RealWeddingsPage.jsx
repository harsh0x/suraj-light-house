import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const categories = [
  { id: 'all', name: 'All Grand Productions' },
  { id: 'ranthambore', name: 'Ranthambore & Sawai Madhopur' },
  { id: 'udaipur', name: 'Udaipur' },
  { id: 'jaipur', name: 'Jaipur' },
  { id: 'jodhpur', name: 'Jodhpur' }
];

const weddingsList = [
  {
    id: 'ritesh-bhavika',
    names: 'Vikramaditya & Ananya',
    category: 'ranthambore',
    venue: 'Nahargarh Palace, Ranthambore',
    bannerImg: '/assets/heritage-palace-stage.jpg',
    thought: 'The royal family envisioned an ethereal palace lighting production. Suraj Light House deployed 40+ imported crystal chandeliers across the main courtyard, warm amber floodlights across the historical ramparts, and a multi-tiered aluminum stage truss for live headline artists.',
    specialNote: 'Executed with 100% silent diesel generator redundancy, ensuring uninterrupted festivities for over 1,200 guests.',
    makers: [
      { role: 'Lighting & Tenting Production', credit: '@suraj_light_house_ranthmbhor' },
      { role: 'Power & Generator Grid', credit: 'Suraj Light House Heavy DG' },
      { role: 'Stage Truss & Beams', credit: 'Suraj Light House Pro AV' },
      { role: 'Venue', credit: 'Nahargarh Palace Ranthambore' }
    ],
    functions: [
      { name: 'Royal Welcome & Haldi', vibe: 'Warm festoon canopies, yellow marigold draping, and soft garden floodlighting.' },
      { name: 'Sangeet Night', vibe: 'Concert-grade sharpie beam moving heads, cold sparkular pyrotechnics, and dry ice low fog.' },
      { name: 'The Royal Pheras', vibe: 'Grand crystal chandelier ceiling with 5,000 warm fairy lights illuminating the palace courtyard.' }
    ]
  },
  {
    id: 'aarav-ananya',
    names: 'Siddharth & Priya',
    category: 'ranthambore',
    venue: 'Six Senses Fort Barwara, Sawai Madhopur',
    bannerImg: '/assets/heritage-lotus-stage.jpg',
    thought: 'A high-profile celebrity heritage wedding set inside a 14th-century royal fort. Suraj Light House engineered custom architectural uplighting, waterproof shamiyana dining pavilions, and computerized DMX lighting sequences synchronized with live musical acts.',
    specialNote: 'Complete cable management hidden behind heritage stone contours without a single nail touching the ancient fort walls.',
    makers: [
      { role: 'Lighting & Tenting', credit: '@suraj_light_house_ranthmbhor' },
      { role: 'Power Redundancy', credit: 'Suraj Light House Silent DG' },
      { role: 'Venue', credit: 'Six Senses Fort Barwara' }
    ],
    functions: [
      { name: 'Fort Twilight Sundowner', vibe: 'Brass lantern pathways and warm amber fort wall washes.' },
      { name: 'Gala Musical Sangeet', vibe: 'High-octane beam moving heads, pixel LED tubes, and laser synchronization.' },
      { name: 'Midnight Pheras', vibe: 'Ethereal fairy light tunnel leading into a floral lotus mandap.' }
    ]
  },
  {
    id: 'karan-meera',
    names: 'Karan & Meera',
    category: 'jaipur',
    venue: 'Fairmont Jaipur, Kukas',
    bannerImg: '/assets/heritage-fountain-stage.jpg',
    thought: 'A massive Pink City celebration requiring heavy aluminum box trussing over the grand central amphitheatre, hydraulic stage lifting, and extensive facade wash.',
    specialNote: 'Custom vintage Edison bulb arrays suspended across 15,000 sq.ft of banquet lawn.',
    makers: [
      { role: 'Lighting & Stage Production', credit: '@suraj_light_house_ranthmbhor' },
      { role: 'Venue', credit: 'Fairmont Jaipur' }
    ],
    functions: [
      { name: 'Bazaar Carnival', vibe: 'Colorful canopy illumination, street lamp posts, and neon photo walls.' },
      { name: 'Rock Sangeet', vibe: 'Stadium scale sharpies, strobe lights, and cryogenic CO2 jets.' },
      { name: 'Grand Pheras', vibe: 'Regal golden chandeliers and sacred fire mandap lighting.' }
    ]
  }
];

export default function RealWeddingsPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedWedding, setExpandedWedding] = useState(null);

  const filtered = activeCategory === 'all' 
    ? weddingsList 
    : weddingsList.filter(w => w.category === activeCategory);

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
        <section className="relative text-white pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 md:px-12 text-center bg-[#E63956] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Real Production Case Studies ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Real Productions & Grand Setups
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed">
              Step inside the grand celebrations, palace fort illuminations, and stagecraft engineered by Suraj Light House.
            </p>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="py-8 bg-white border-b border-rose-100 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E63956] text-white shadow-md'
                    : 'bg-[#FAF6F0] text-[#5A5255] hover:bg-rose-50 hover:text-[#E63956]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Productions List */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl mx-auto space-y-16">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-rose-200/80"
            >
              {/* Banner Image */}
              <div className="h-72 sm:h-96 w-full overflow-hidden relative">
                <img 
                  src={item.bannerImg} 
                  alt={item.names} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-10">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#FFCCD3] block mb-1">
                      {item.venue}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold">
                      {item.names}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-10 space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-[#E63956] font-bold uppercase tracking-wider mb-2">
                    Production Vision & Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed">
                    {item.thought}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-rose-200/60 text-xs text-[#1A1A1A] font-medium flex items-center gap-3">
                  <i className="fa-solid fa-lightbulb text-[#E63956] text-base"></i>
                  <span><strong>Special Feature:</strong> {item.specialNote}</span>
                </div>

                {/* Functions Breakdown */}
                <div>
                  <h3 className="font-serif text-sm text-[#1A1A1A] font-bold uppercase tracking-wider mb-3">
                    Event Breakdown
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.functions.map((fn, fidx) => (
                      <div key={fidx} className="p-4 rounded-2xl border border-rose-100 bg-white">
                        <span className="text-xs font-bold text-[#E63956] block mb-1">{fn.name}</span>
                        <p className="text-[11px] text-[#5A5255] font-light leading-relaxed">{fn.vibe}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credits */}
                <div className="pt-6 border-t border-rose-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    {item.makers.map((m, midx) => (
                      <span key={midx}>
                        <strong className="text-[#1A1A1A]">{m.role}:</strong> {m.credit}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onOpenBooking(`Production Inspo: ${item.names}`)}
                    className="px-6 py-2.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Request Similar Setup
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Banner */}
        <section className="pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Create Your Royal Production ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                Ready to Bring This Grandeur to Your Celebration?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Connect with our master production team to design your stage, chandelier arrays, and generator setup.
              </p>
              <button
                onClick={() => onOpenBooking('Custom Production Setup')}
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
