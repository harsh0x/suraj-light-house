import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const filterCategories = [
  { id: 'decoration-stage', name: 'Stage & Mandap PAR Lighting' },
  { id: 'par-wash-truss', name: 'PAR Lights & Moving Beams' },
  { id: 'silent-generators', name: 'Silent Generators & Gensets' },
  { id: 'mi-bars-kinetic', name: 'MI Bars & Kinetic Light Balls' },
  { id: 'chandeliers-tents', name: 'Crystal Chandeliers & Tenting' },
  { id: 'rise-cloud-fx', name: 'Rise Cloud Low Fog & Pyros' }
];

const galleryItems = [
  // Stage & Mandap PAR Lighting
  { id: 1, category: 'decoration-stage', title: 'Flower Wall PAR Light Wash & Stage Mandap', location: 'Ranthambore Palace Grounds', url: 'https://images.unsplash.com/photo-photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=1400&q=85' },
  { id: 2, category: 'decoration-stage', title: 'Illuminated Mandap with Crystal Drops & Golden Wash', location: 'Nahargarh Palace Courtyard', url: 'https://images.unsplash.com/photo-photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1400&q=85' },
  { id: 3, category: 'decoration-stage', title: 'Red Drape Peacock Floral Entrance Archway', location: 'Sawai Vilas Resort', url: 'https://images.unsplash.com/photo-photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=85' },
  { id: 4, category: 'decoration-stage', title: 'Ambient Welcome Board & Fairy Light Pathway', location: 'Six Senses Fort Barwara', url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=85' },

  // PAR Lights & Moving Beams
  { id: 5, category: 'par-wash-truss', title: 'High-Power LED PAR 64 Stage Floor Uplights', location: 'Fairmont Jaipur Ballroom', url: 'https://images.unsplash.com/photo-photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85' },
  { id: 6, category: 'par-wash-truss', title: 'Heavy Aluminum Box Truss with Sharpy Moving Heads', location: 'Grand Sangeet Stage Arena', url: 'https://images.unsplash.com/photo-photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1400&q=85' },
  { id: 7, category: 'par-wash-truss', title: 'Concert RGBW Stage Wash Floodlights', location: 'Ranthambore Musical Night', url: 'https://images.unsplash.com/photo-photo-1468359601543-843bfaef291a?auto=format&fit=crop&w=1400&q=85' },
  { id: 8, category: 'par-wash-truss', title: 'DMX Computerized Beam Synchronized Light Show', location: 'Rajasthan Convention Center', url: 'https://images.unsplash.com/photo-photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=85' },

  // Silent Generators & Gensets
  { id: 9, category: 'silent-generators', title: 'Soundproof Cummins Silent Diesel Generator Set', location: 'Ranthambore Outdoor Event Fleet', url: 'https://images.unsplash.com/photo-photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=85' },
  { id: 10, category: 'silent-generators', title: 'Heavy Commercial Power DG Genset on Site', location: 'Six Senses Fort Barwara Power Grid', url: 'https://images.unsplash.com/photo-photo-1609137144822-48f574d6c41b?auto=format&fit=crop&w=1400&q=85' },
  { id: 11, category: 'silent-generators', title: '3-Phase Armored Power Distribution Panel Grid', location: 'Palace Amphitheatre Substation', url: 'https://images.unsplash.com/photo-photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85' },
  { id: 12, category: 'silent-generators', title: 'Heavy Duty Event Power Redundancy Grid', location: 'Grand Royal Lawn Setup', url: 'https://images.unsplash.com/photo-photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85' },

  // MI Bars & Kinetic Light Balls
  { id: 13, category: 'mi-bars-kinetic', title: 'Vertical DMX Pixel LED Tubes on Live Stage', location: 'Mega Sangeet Stage Setup', url: 'https://images.unsplash.com/photo-photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85' },
  { id: 14, category: 'mi-bars-kinetic', title: 'Motorized Dynamic Kinetic Light Spheres', location: 'Royal Grand Ballroom Ceiling', url: 'https://images.unsplash.com/photo-photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85' },
  { id: 15, category: 'mi-bars-kinetic', title: 'Moving MI Bar Pixel Lighting Chases', location: 'Celebrity DJ Concert Stage', url: 'https://images.unsplash.com/photo-photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85' },
  { id: 16, category: 'mi-bars-kinetic', title: '3D Suspended Kinetic Ball Matrix Installation', location: 'VIP Gala Night Lounge', url: 'https://images.unsplash.com/photo-photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85' },

  // Crystal Chandeliers & Tenting
  { id: 17, category: 'chandeliers-tents', title: 'Grand 40-Chandelier Suspended Open Canopy', location: 'Nahargarh Palace Main Courtyard', url: 'https://images.unsplash.com/photo-photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85' },
  { id: 18, category: 'chandeliers-tents', title: 'Multi-Tiered Crystal Chandelier Dining Pavilion', location: 'Sawai Vilas Luxury Lawn', url: 'https://images.unsplash.com/photo-photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=85' },
  { id: 19, category: 'chandeliers-tents', title: 'Waterproof German Hangar & Handcrafted Shamiyana', location: 'Ranthambore Luxury Grounds', url: 'https://images.unsplash.com/photo-photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85' },
  { id: 20, category: 'chandeliers-tents', title: 'Golden Silk Ceiling Drapes with Festoon Lights', location: 'Heritage Fort Courtyard', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85' },

  // Rise Cloud Low Fog & Pyros
  { id: 21, category: 'rise-cloud-fx', title: 'Thick White Dry Ice Low Fog Rise Cloud on Stage', location: 'Royal Couple Grand Dance', url: 'https://images.unsplash.com/photo-photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85' },
  { id: 22, category: 'rise-cloud-fx', title: 'Sparkular Cold Pyrotechnic Fountain Grand Entry', location: 'Nahargarh Main Amphitheatre', url: 'https://images.unsplash.com/photo-photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85' },
  { id: 23, category: 'rise-cloud-fx', title: 'Cryogenic CO2 Jets & Stage Fog Special FX', location: 'Sangeet Headline Concert', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85' },
  { id: 24, category: 'rise-cloud-fx', title: '10,000 Fairy Light Canopy Starlight Tunnel', location: 'The Oberoi Vanyavilas Garden', url: 'https://images.unsplash.com/photo-photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=85' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('decoration-stage');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

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
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-3xl overflow-hidden shadow-md border border-rose-200/80 bg-white cursor-pointer h-80 sm:h-96"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity p-6 sm:p-8 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFCCD3] block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl text-white font-bold leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view in full HD</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
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
