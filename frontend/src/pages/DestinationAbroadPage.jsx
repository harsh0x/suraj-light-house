import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const destinationsAbroad = [
  {
    id: 'dubai',
    country: 'Dubai & Abu Dhabi, UAE',
    tag: 'Desert Dunefests & Royal Ballrooms',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Unrivaled opulence, high-tech beam lighting, Burj Al Arab backdrop terraces, and luxury desert safari sangeet productions.',
    venues: ['Atlantis The Royal', 'Emirates Palace Abu Dhabi', 'Bab Al Shams Resort', 'Armani Hotel Dubai'],
    idealSeason: 'November to April',
    capacity: '150 - 1000+ Guests',
    highlights: ['Desert Dunefest Light Shows', 'Grand Ballroom Chandelier Rows', 'Skyline Laser Beams']
  },
  {
    id: 'bali',
    country: 'Bali, Indonesia',
    tag: 'Clifftop Oceanfront Canopies',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    desc: 'Oceanfront clifftop chapels in Uluwatu, private rainforest estates in Ubud, and fairy light canopies over infinity pools.',
    venues: ['BVLGARI Resort Bali', 'The Edge Bali', 'Alila Villas Uluwatu', 'Ayana Resort & Spa'],
    idealSeason: 'April to October',
    capacity: '80 - 400 Guests',
    highlights: ['Clifftop Glass Mandap Illumination', 'Fairytale Fairy Light Pools', 'Sunset Fire Dance FX']
  },
  {
    id: 'thailand',
    country: 'Phuket & Koh Samui, Thailand',
    tag: 'Turquoise Lagoons & Beach Mandaps',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Private island cove pheras, vibrant pool party sangeet light shows, and floating water stage setups.',
    venues: ['Sri Panwa Phuket', 'Banyan Tree Samui', 'JW Marriott Phuket', 'Four Seasons Koh Samui'],
    idealSeason: 'November to April',
    capacity: '100 - 500 Guests',
    highlights: ['Over-Water Floating Stage', 'Beachfront Festoon Canopies', 'Island Sky Lanterns']
  },
  {
    id: 'turkey',
    country: 'Istanbul & Antalya, Turkey',
    tag: 'Ottoman Palaces & Bosphorus Waterfront',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    desc: 'Historic Ottoman waterfront palaces on the Bosphorus strait illuminated with amber architectural facade washes and royal chandeliers.',
    venues: ['Çırağan Palace Kempinski', 'Four Seasons Bosphorus', 'Mardan Palace Antalya', 'Mandarin Oriental'],
    idealSeason: 'April to October',
    capacity: '100 - 600 Guests',
    highlights: ['Ottoman Palace Facade Wash', 'Waterfront Chandelier Canopies', 'Bosphorus Yacht Lights']
  },
  {
    id: 'italy',
    country: 'Lake Como & Amalfi, Italy',
    tag: 'Lakeside Renaissance Villas',
    image: 'https://images.unsplash.com/photo-photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    desc: 'Lakeside palazzos, cascading cliffside Mediterranean gardens, and candlelit courtyard chandelier banquets.',
    venues: ['Villa d’Este Lake Como', 'Villa Balbiano', 'Belmond Hotel Caruso', 'Villa Cimbrone'],
    idealSeason: 'May to October',
    capacity: '50 - 300 Guests',
    highlights: ['Villa Facade Architectural Wash', 'Lakeside Chandelier Banquets', 'Vintage Edison Strings']
  },
  {
    id: 'greece',
    country: 'Santorini & Athens, Greece',
    tag: 'Aegean Sunsets & Whitewashed Elegance',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dazzling whitewashed cliffside terraces overlooking the Aegean, illuminated with soft golden amber glow and warm brass lanterns.',
    venues: ['Canaves Oia', 'Grace Hotel Auberge', 'Cavo Tagoo Mykonos', 'Four Seasons Astir Palace'],
    idealSeason: 'May to October',
    capacity: '40 - 250 Guests',
    highlights: ['Caldera Sunset Mandap Lighting', 'Minimalist Warm Glow', 'Brass Lantern Pathways']
  }
];

const internationalServices = [
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Lighting & Decor Consulting',
    desc: 'Technical riders, 3D lighting design plots, and equipment specifications tailored to international resort guidelines.'
  },
  {
    icon: 'fa-solid fa-truck-plane',
    title: 'Specialty Tech Freight',
    desc: 'Coordination and shipping for specialized crystal chandeliers, custom monogram projection gobos, and proprietary control consoles.'
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'Master Technical Direction',
    desc: 'Deploying our senior lighting designers and DMX console operators on-site to lead international AV production crews.'
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Power & Voltage Compatibility',
    desc: 'Precise load distribution and transformer planning for 110V/220V/380V international venue standards with zero failure risk.'
  }
];

const INTERNATIONAL_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Global Stagecraft & Royal Heritage ✦',
    title: 'International Destination Production',
    desc: 'Bringing Rajasthan’s royal lighting elegance, crystal chandelier grandeur, and flawless technical direction to luxury destination celebrations worldwide.'
  }
];

export default function DestinationAbroadPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % INTERNATIONAL_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = INTERNATIONAL_SLIDES[currentSlide];

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
                href="#destinations" 
                className="px-8 py-3.5 rounded-full bg-white text-[#1A1A1A] hover:bg-rose-50 text-xs font-bold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                Explore Global Hubs
              </a>
              <button 
                onClick={() => onOpenBooking('Global Destination Lighting')}
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105 cursor-pointer"
              >
                Inquire For Overseas Event
              </button>
            </div>
          </div>

        </section>

        {/* Global Destinations Grid */}
        <section id="destinations" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ World-Class Event Destinations ✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
              International Event Production & Technical Design
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mt-2 font-light">
              Providing technical direction, chandelier design, and specialized lighting plots for prestigious venues worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsAbroad.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: LUXURY_EASE }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-rose-200/80 hover:shadow-2xl transition duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 w-full overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.country} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#E63956] shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-2">{item.country}</h3>
                    <p className="text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="space-y-1.5 pt-3 border-t border-rose-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E63956] block">Signature Venues:</span>
                      <p className="text-xs text-[#1A1A1A] font-medium">{item.venues.join(' • ')}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <button 
                    onClick={() => onOpenBooking(`International Destination: ${item.country}`)}
                    className="w-full py-3 rounded-full bg-[#FAF6F0] hover:bg-[#E63956] text-[#E63956] hover:text-white border border-rose-200 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Inquire For This Location
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Services Grid */}
        <section className="py-16 sm:py-24 bg-white border-y border-rose-100 px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ International Expertise ✦</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
                Global Production Management
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internationalServices.map((srv, i) => (
                <div key={i} className="bg-[#FAF6F0] rounded-3xl p-6 border border-rose-200/80 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#E63956] flex items-center justify-center text-xl mx-auto mb-4">
                    <i className={srv.icon}></i>
                  </div>
                  <h3 className="font-serif text-lg text-[#1A1A1A] font-bold mb-2">{srv.title}</h3>
                  <p className="text-xs text-[#5A5255] font-light leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Worldwide Capabilities ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                Planning an International Celebration?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Connect with Suraj Light House for global technical direction, stage design, and lighting curation.
              </p>
              <button
                onClick={() => onOpenBooking('Global Destination Lighting')}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Inquire For International Event</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
