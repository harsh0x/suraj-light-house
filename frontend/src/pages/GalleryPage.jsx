import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const filterCategories = [
  { id: 'all', name: 'All Showcases (30)' },
  { id: 'decoration-stage', name: 'Stage & Mandap Decor' },
  { id: 'par-wash-truss', name: 'Concert Truss & Beams' },
  { id: 'chandeliers-tents', name: 'Crystal Chandeliers & Tents' },
  { id: 'silent-generators', name: 'Power Grids & Consoles' },
  { id: 'rise-cloud-fx', name: 'Cold Pyros & Low Fog FX' }
];

const galleryItems = [
  // 1. Stage & Mandap Decor
  { id: 1, category: 'decoration-stage', title: 'Illuminated Lotus Backdrop & Floral Arched Stage', location: 'Ranthambore Palace Grounds', url: '/assets/heritage-lotus-stage.jpg' },
  { id: 2, category: 'decoration-stage', title: 'Fountain Lawn Stage with Floral Arch Illumination', location: 'Sawai Madhopur Grand Estate', url: '/assets/heritage-fountain-stage.jpg' },
  { id: 3, category: 'decoration-stage', title: 'Grand Royal Palace Facade & Candelabra Mandap Stage', location: 'Nahargarh Palace Courtyard', url: '/assets/heritage-palace-stage.jpg' },
  { id: 4, category: 'decoration-stage', title: 'White Wisteria Arches with Neon & Candelabras', location: 'Six Senses Fort Barwara', url: '/assets/service-hanging-wisteria-arches.jpg' },
  { id: 5, category: 'decoration-stage', title: 'Illuminated Varmala Flower Bridge & Confetti Shower', location: 'The Oberoi Vanyavilas', url: '/assets/service-varmala-flower-bridge.jpg' },
  { id: 6, category: 'decoration-stage', title: 'Bougainvillea Heritage Archway & Vintage Pendants', location: 'Sawai Vilas Resort', url: '/assets/portfolio-bougainvillea-arch-swing.jpg' },
  { id: 7, category: 'decoration-stage', title: 'Royal Crimson Rose Velvet Pavilion', location: 'Fairmont Jaipur Ambiance', url: '/assets/portfolio-royal-red-rose-palace-stage.jpg' },

  // 2. Concert Truss & Moving Beams
  { id: 8, category: 'par-wash-truss', title: 'High-Power Aluminum Box Concert Truss & Sharpy Beams', location: 'Mega Sangeet Arena', url: '/assets/04bf0b1c6eb47feba6d01048b603293c.jpg' },
  { id: 9, category: 'par-wash-truss', title: 'Dynamic Spotlight Tracking & Live Band Stagecraft', location: 'Royal Concert Lawn', url: '/assets/25ace1e7c3fbb3df2814920e8a4fc7f0.jpg' },
  { id: 10, category: 'par-wash-truss', title: 'DMX Computerized Beam Synchronized Light Show', location: 'Headline Sangeet Night', url: '/assets/27a5e8a51e99073fdd959bdb7a456bbf.jpg' },
  { id: 11, category: 'par-wash-truss', title: 'Live Headline Concert Rigging & Multi-Tier Stage', location: 'Nahargarh Amphitheatre', url: '/assets/a29e0332418ba85517134a9dfd3c597b.jpg' },
  { id: 12, category: 'par-wash-truss', title: 'High-Energy DJ Concert Sangeet Production', location: 'Rajasthan Convention Grounds', url: '/assets/portfolio-dj-dance-sangeet.jpg' },
  { id: 13, category: 'par-wash-truss', title: 'Golden Truss Qawwali & Sufi Symphony Stage', location: 'Palace Courtyard Live Night', url: '/assets/service-sangeet-truss-gold-stage.jpg' },
  { id: 14, category: 'par-wash-truss', title: 'Geometric Pattern Laser & Beam Stage Mapping', location: 'VIP Gala Stage Arena', url: '/assets/d9d1e8d007790aec01a5b0813af2a7fc.jpg' },

  // 3. Crystal Chandeliers & Tenting
  { id: 15, category: 'chandeliers-tents', title: 'Grand Floral Archway Crystal Chandelier Dining Walkway', location: 'Nahargarh Palace Main Courtyard', url: '/assets/heritage-dining-chandelier-arches.jpg' },
  { id: 16, category: 'chandeliers-tents', title: 'Suspended Crystal Chandelier Velvet Lawn', location: 'Sawai Vilas Luxury Lawn', url: '/assets/mosaic-floral-arch-chandeliers.jpg' },
  { id: 17, category: 'chandeliers-tents', title: 'Royal Bespoke Banquet & Crystal Chandeliers', location: 'Ranthambore Luxury Grounds', url: '/assets/standard-bespoke-banquet.jpg' },
  { id: 18, category: 'chandeliers-tents', title: 'Handcrafted Royal Shamiyana & Scalloped Canopy', location: 'Heritage Fort Courtyard', url: '/assets/standard-royal-tenting.jpg' },
  { id: 19, category: 'chandeliers-tents', title: 'Multi-Tiered Crystal Drop Chandeliers & Flora', location: 'Grand Ballroom Pavilion', url: '/assets/mosaic-grand-tier-chandelier.jpg' },
  { id: 20, category: 'chandeliers-tents', title: 'Radiating Drapes & 360-Degree Canopy Fairy Lights', location: 'Fairmont Courtyard Canopy', url: '/assets/commitment-canopy-chandelier.jpg' },
  { id: 21, category: 'chandeliers-tents', title: 'Blue Cabana Fairy Lights & Outdoor Dining Pavilion', location: 'Six Senses Poolside Garden', url: '/assets/about-blue-cabana.jpg' },
  { id: 22, category: 'chandeliers-tents', title: 'Gold Sequin Table & Grand Crystal Chandelier Arrays', location: 'VIP Wedding Gala', url: '/assets/about-gold-chandelier.jpg' },

  // 4. Power Grids & Generators
  { id: 23, category: 'silent-generators', title: 'Soundproof Commercial DG Silent Generator Depot', location: 'Sawai Madhopur Fleet Depot', url: '/assets/a0c329f7956fb9ff501d284d5948d4ae.jpg' },
  { id: 24, category: 'silent-generators', title: 'Theatrical Sound & Multi-Channel Light Console Station', location: 'Ranthambore Live Control', url: '/assets/portfolio-outdoor-mandap-mixer.jpg' },
  { id: 25, category: 'silent-generators', title: 'Palace Facade Amber Illumination & 3-Phase Grid', location: 'Ranthambore Fort Ramparts', url: '/assets/hero-facade-lighting.jpg' },

  // 5. Cold Pyros, Fog & Ambient Special FX
  { id: 26, category: 'rise-cloud-fx', title: 'Stage Sparkular Cold Pyrotechnic Fountain Grand Entry', location: 'Nahargarh Main Amphitheatre', url: '/assets/8a660f910a9795b965d2aadb619b83e0.jpg' },
  { id: 27, category: 'rise-cloud-fx', title: 'Thick White Dry Ice Low Cloud Fog Walkway', location: 'Royal Couple Grand Aisle', url: '/assets/service-cold-pyro-fog-aisle.jpg' },
  { id: 28, category: 'rise-cloud-fx', title: 'Illuminated Leaf Archway Light Tunnel', location: 'Sawai Madhopur Palace Entrance', url: '/assets/mosaic-illuminated-arch-tunnel.jpg' },
  { id: 29, category: 'rise-cloud-fx', title: 'Electric Blue Neon Geometric Pathway Tunnel', location: 'After-Party Nightclub Corridor', url: '/assets/about-neon-tunnel.jpg' },
  { id: 30, category: 'rise-cloud-fx', title: 'Illuminated Glass Floral Runway & Tree Floodlights', location: 'The Oberoi Vanyavilas Garden', url: '/assets/service-glass-floral-aisle.jpg' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    let timer = null;
    if (isSlideshow && lightboxIndex !== null) {
      timer = setInterval(() => {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isSlideshow, lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsSlideshow(false);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      <div>
        {/* Top Hero Banner */}
        <section className="bg-[#E63956] text-white pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Production Showcase ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Real Event Lighting & Equipment Gallery
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our real stage PAR light washes, heavy silent DG generators, MI bars, kinetic balls, crystal chandeliers, and rise cloud low fog setups across Ranthambore & Rajasthan.
            </p>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="py-8 bg-white border-b border-rose-100 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E63956] text-white shadow-md'
                    : 'bg-[#FAF6F0] text-[#5A5255] hover:bg-rose-50 hover:text-[#E63956]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1520px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.04 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-200/80 bg-neutral-900 cursor-pointer h-60 sm:h-68 md:h-72 transition duration-500"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition duration-700 brightness-[0.92] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 sm:p-5 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#FFCCD3] block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base md:text-lg text-white font-bold leading-snug line-clamp-2 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View HD</span>
                    <i className="fa-solid fa-arrow-right text-[9px]"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {currentItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between text-white z-10 max-w-6xl" onClick={(e) => e.stopPropagation()}>
                <span className="text-xs text-gray-400 font-medium">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSlideshow(!isSlideshow)} 
                    className={`text-xs px-3 py-1 rounded-full border ${isSlideshow ? 'bg-[#E63956] border-[#E63956]' : 'border-white/30 text-white'} transition cursor-pointer`}
                  >
                    {isSlideshow ? 'Pause Slideshow' : 'Play Slideshow'}
                  </button>
                  <button 
                    onClick={() => setIsZoomed(!isZoomed)} 
                    className="text-white/80 hover:text-white transition text-lg cursor-pointer"
                    title="Zoom"
                  >
                    <i className={`fa-solid ${isZoomed ? 'fa-magnifying-glass-minus' : 'fa-magnifying-glass-plus'}`}></i>
                  </button>
                  <button 
                    onClick={() => setLightboxIndex(null)} 
                    className="text-white/80 hover:text-[#E63956] transition text-2xl cursor-pointer"
                    title="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E63956] text-white flex items-center justify-center text-lg backdrop-blur-md transition cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

                <img 
                  src={currentItem.url} 
                  alt={currentItem.title} 
                  className={`max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain transition-transform duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E63956] text-white flex items-center justify-center text-lg backdrop-blur-md transition cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="text-center text-white z-10 max-w-2xl" onClick={(e) => e.stopPropagation()}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFCCD3] block mb-1">
                  {currentItem.location}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold">
                  {currentItem.title}
                </h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
