import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const destinationsInIndia = [
  {
    id: 'ranthambore',
    city: 'Ranthambore & Sawai Madhopur',
    tag: 'Royal Wilderness & Heritage Forts',
    image: 'https://images.unsplash.com/photo-photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    desc: 'Our home territory. Grand fairy light canopies, royal shamiyana dining pavilions, and crystal chandeliers set against the majestic backdrop of Ranthambore Fort and jungle resorts.',
    venues: ['Nahargarh Palace', 'Six Senses Fort Barwara', 'The Oberoi Vanyavilas', 'Sawai Vilas'],
    idealSeason: 'October to March',
    capacity: '150 - 1500+ Guests',
    highlights: ['Courtyard Chandelier Arrays', 'Heavy DG Power Grids', 'Fairy Light Tunnel Entrances']
  },
  {
    id: 'jaipur',
    city: 'Jaipur, Rajasthan',
    tag: 'Regal Palaces & Heritage Forts',
    image: 'https://images.unsplash.com/photo-photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    desc: 'Echoing the grandeur of Maharajas with palace rampart floodlighting, massive stage trussing, and royal Mughal garden shamiyanas.',
    venues: ['Rambagh Palace', 'Jai Mahal Palace', 'Fairmont Jaipur', 'Samode Palace'],
    idealSeason: 'October to April',
    capacity: '200 - 2000+ Guests',
    highlights: ['Palace Facade Uplighting', 'Concert Stage Rigging', 'Mughal Garden Banquets']
  },
  {
    id: 'udaipur',
    city: 'Udaipur, Rajasthan',
    tag: 'City of Lakes & Palaces',
    image: 'https://images.unsplash.com/photo-photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80',
    desc: 'Fairytale lakefront illumination, shimmering water reflection beams, and opulent courtyard chandeliers fit for royalty.',
    venues: ['Taj Lake Palace', 'The Leela Palace', 'Jagmandir Island', 'Oberoi Udaivilas'],
    idealSeason: 'October to March',
    capacity: '150 - 800+ Guests',
    highlights: ['Lakeside Water Reflection Wash', 'Jagmandir Island Trussing', 'Palatial Heritage Lighting']
  },
  {
    id: 'jodhpur',
    city: 'Jodhpur, Rajasthan',
    tag: 'Sandstone Citadels',
    image: 'https://images.unsplash.com/photo-1609137144822-48f574d6c41b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dramatic golden-yellow sandstone architecture, amber floodlighting, and imperial shamiyana banquet canopies.',
    venues: ['Umaid Bhawan Palace', 'Ajit Bhawan', 'Indana Palace', 'Fort Khejarla'],
    idealSeason: 'October to March',
    capacity: '150 - 1000+ Guests',
    highlights: ['Umaid Bhawan Amber Glow', 'Desert Dune Light Shows', 'Langa Folk Symphony Stage']
  },
  {
    id: 'goa',
    city: 'Goa (North & South)',
    tag: 'Coastal Sunset Setups',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    desc: 'Waterproof electrical setups on private sandy coves, warm festoon light strings, and neon pool party stage lighting.',
    venues: ['Taj Exotica', 'The St. Regis Goa', 'W Goa', 'Alila Diwa'],
    idealSeason: 'November to May',
    capacity: '100 - 600+ Guests',
    highlights: ['Weatherproof Beach Cabling', 'Neon Sundowner Stages', 'Sunset Mandap Lighting']
  },
  {
    id: 'jimcorbett',
    city: 'Jim Corbett & Uttarakhand',
    tag: 'Wilderness Luxury',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    desc: 'Crisp mountain breezes and secluded luxury jungle lodges illuminated with fairy light canopies and warm bonfires.',
    venues: ['Taj Corbett Resort', 'The Riverview Retreat', 'JW Marriott Mussoorie', 'Aahana Resort'],
    idealSeason: 'Year-Round',
    capacity: '100 - 500+ Guests',
    highlights: ['Silent Generator Grids', 'Forest Tree Fairy Wraps', 'Riverbank Lantern Pathways']
  }
];

const indianPackages = [
  {
    name: 'The Royal Rajputana Setup',
    subtitle: 'Palace & Fort Illumination',
    price: 'Bespoke Scale',
    features: [
      'Over 40+ Imported Crystal Chandeliers',
      'Architectural Palace Amber Facade Wash',
      'Heavy-Duty Aluminum Box Stage Trussing',
      'Intelligent Computerized DMX Moving Heads',
      '100% Silent Diesel Generator Redundancy',
      'On-Site 24/7 Electrical Engineering Crew'
    ],
    popular: true
  },
  {
    name: 'Heritage Shamiyana & Tenting',
    subtitle: 'Grand Outdoor Canopy',
    price: 'Custom Sizing',
    features: [
      'Waterproof German Hangar Pavilions',
      'Royal Hand-Stitched Silk Canopies',
      'Warm Brass Lantern Pathway Arrays',
      'Fairy Light Tunnels & Roof Ceilings',
      'Dedicated Stage Audio-Visual Cabling',
      'Rapid Turnaround Logistics Fleet'
    ],
    popular: false
  },
  {
    name: 'Sangeet Stage & Special FX',
    subtitle: 'High-Energy Concert Production',
    price: 'Full Production',
    features: [
      'Concert-Grade Sharpie Beams & Lasers',
      'Stage Sparkular Cold Pyrotechnics',
      'Heavy Low-Lying Dry Ice Fog Machines',
      'Live Artist Sound Reinforcement Power',
      'Pixel Tube & Dynamic Backdrop Mapping',
      'DMX Show Caller & Technical Director'
    ],
    popular: false
  }
];

const DESTINATION_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Royal Rajasthan & Pan-India Destinations ✦',
    title: 'Grand Destination Event Lighting',
    desc: 'From the royal tiger heartland of Ranthambore to majestic forts in Jaipur, Udaipur, and Jodhpur, Suraj Light House delivers majestic lighting, tenting, and power grids across India.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=85',
    sub: '✦ Forts, Palaces & Luxury Wilderness ✦',
    title: 'Illuminating Landmark Properties',
    desc: 'Flawless electrical infrastructure, custom crystal chandelier canopies, and architectural lighting engineered for India’s finest heritage venues.'
  }
];

export default function DestinationIndiaPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DESTINATION_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = DESTINATION_SLIDES[currentSlide];

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
                Explore Destinations
              </a>
              <button 
                onClick={() => onOpenBooking('Destination Lighting Setup')}
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105 cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>

        </section>

        {/* Destinations Grid */}
        <section id="destinations" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Palaces & Resorts Across India ✦</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
              Iconic Destination Venues We Illuminate
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mt-2 font-light">
              Equipped with our specialized transport fleet, heavy commercial DG sets, and experienced rigging crews ready for nationwide deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsInIndia.map((item, idx) => (
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
                      alt={item.city} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#E63956] shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-2">{item.city}</h3>
                    <p className="text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="space-y-1.5 pt-3 border-t border-rose-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E63956] block">Key Venues:</span>
                      <p className="text-xs text-[#1A1A1A] font-medium">{item.venues.join(' • ')}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <button 
                    onClick={() => onOpenBooking(`Destination Lighting: ${item.city}`)}
                    className="w-full py-3 rounded-full bg-[#FAF6F0] hover:bg-[#E63956] text-[#E63956] hover:text-white border border-rose-200 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Inquire For This Destination
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 sm:py-24 bg-white border-y border-rose-100 px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Comprehensive Solutions ✦</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight">
                Destination Lighting & Tenting Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {indianPackages.map((pkg, i) => (
                <div key={i} className={`rounded-3xl p-8 border ${pkg.popular ? 'border-[#E63956] bg-rose-50/40 shadow-xl' : 'border-rose-200 bg-[#FAF6F0] shadow-md'} flex flex-col justify-between`}>
                  <div>
                    {pkg.popular && (
                      <span className="px-3 py-1 rounded-full bg-[#E63956] text-white text-[10px] font-bold tracking-wider uppercase inline-block mb-3">
                        Most Requested
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-1">{pkg.name}</h3>
                    <p className="text-xs text-[#E63956] font-bold uppercase tracking-wider mb-6">{pkg.subtitle}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-xs text-[#5A5255]">
                          <i className="fa-solid fa-check text-[#E63956] text-xs"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => onOpenBooking(`Package: ${pkg.name}`)}
                    className="w-full py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs uppercase tracking-widest transition shadow-md cursor-pointer"
                  >
                    Request Custom Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Pan-India Execution ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                Planning a Destination Event Across Rajasthan or India?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Our logistics transport fleet and generator grids travel wherever your grand celebration takes place.
              </p>
              <button
                onClick={() => onOpenBooking('Destination Lighting Setup')}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Plan Destination Setup</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
