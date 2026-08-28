import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

// -------------------------------------------------------------
// 1. YouTube Shorts Data Array (Add your YouTube IDs / links here)
// -------------------------------------------------------------
export const youtubeShortsData = [
  {
    id: '-TOMB0dy3Rg',
    url: 'https://youtube.com/shorts/-TOMB0dy3Rg',
    title: 'Grand Stage Production & Live Lighting Highlights',
    tag: 'Live Event'
  },
  {
    id: 'pR0_SaHrrNo',
    url: 'https://youtube.com/shorts/pR0_SaHrrNo',
    title: 'Royal Mandap & Ambient Illumination Showcase',
    tag: 'Mandap Decor'
  },
  {
    id: '8r5cSLzWY1Q',
    url: 'https://youtube.com/shorts/8r5cSLzWY1Q',
    title: 'Concert Truss Rigging & Sharpy Beam Show',
    tag: 'Truss & Lighting'
  },
  {
    id: '_pirCVLpg2U',
    url: 'https://youtube.com/shorts/_pirCVLpg2U',
    title: 'Crystal Chandelier & Atmospheric Light FX',
    tag: 'Lighting FX'
  },
  {
    id: 'S0cH62Fc8KE',
    url: 'https://youtube.com/shorts/S0cH62Fc8KE',
    title: 'High-Energy DJ Stage & Sangeet Night Glow',
    tag: 'DJ & Sound'
  },
  {
    id: '1Y8Qn7Xvf5k',
    url: 'https://youtube.com/shorts/1Y8Qn7Xvf5k',
    title: 'Royal Couple Grand Entry & Cold Pyro Sparks',
    tag: 'Grand Entry FX'
  },
  {
    id: '22zIJcyUzwk',
    url: 'https://youtube.com/shorts/22zIJcyUzwk',
    title: 'Palace Facade Architectural Illumination',
    tag: 'Facade Lighting'
  },
  {
    id: 'erFTwWpW5DQ',
    url: 'https://youtube.com/shorts/erFTwWpW5DQ',
    title: 'DMX Moving Sharpy Beam Light Synchronization',
    tag: 'Moving Beams'
  },
  {
    id: 'WorlfS1EE88',
    url: 'https://youtube.com/shorts/WorlfS1EE88',
    title: 'Fairy Light Canopy & Chandelier Walkway',
    tag: 'Canopy & Flora'
  },
  {
    id: 'oXJb8BbLwLo',
    url: 'https://youtube.com/shorts/oXJb8BbLwLo',
    title: 'Heavy Silent DG Generator & Power Grid Setup',
    tag: 'Power Depot'
  },
  {
    id: 'AVmqbSA3EIE',
    url: 'https://youtube.com/shorts/AVmqbSA3EIE',
    title: 'Dry Ice Low Fog Cloud Walkway & Couple Entry',
    tag: 'Low Fog FX'
  },
  {
    id: 'Oz9nQCyPDRY',
    url: 'https://youtube.com/shorts/Oz9nQCyPDRY',
    title: 'Sangeet Rock Concert Stage Truss & Rigging',
    tag: 'Concert Truss'
  },
  {
    id: 'wI9k7rAUbSk',
    url: 'https://youtube.com/shorts/wI9k7rAUbSk',
    title: 'Golden Royal Shamiyana & Ambient Haldi Decor',
    tag: 'Royal Tenting'
  },
  {
    id: 'u09lh3EtyHk',
    url: 'https://youtube.com/shorts/u09lh3EtyHk',
    title: '360-Degree Stage Sparkular Pyro Fountains',
    tag: 'Cold Pyros'
  },
  {
    id: '3-6qTqAYlkc',
    url: 'https://youtube.com/shorts/3-6qTqAYlkc',
    title: 'Neon Tunnel & Dynamic Lighting Corridor',
    tag: 'Neon Tunnel'
  },
  {
    id: 'KgTUDo3YUNQ',
    url: 'https://youtube.com/shorts/KgTUDo3YUNQ',
    title: 'Luxury Banquet Crystal Chandelier Illumination',
    tag: 'Chandeliers'
  },
  {
    id: 'iejx8iX_NG8',
    url: 'https://youtube.com/shorts/iejx8iX_NG8',
    title: 'Varmala Flower Bridge & Pyro Grand Finale',
    tag: 'Varmala FX'
  },
  {
    id: 'JKVFCI_8KhU',
    url: 'https://youtube.com/shorts/JKVFCI_8KhU',
    title: 'High-Intensity PAR Can Stage Color Washes',
    tag: 'PAR Washes'
  },
  {
    id: 'prgfDRa7r5c',
    url: 'https://youtube.com/shorts/prgfDRa7r5c',
    title: 'Live Band Audio Console & Stage Spotlight Rig',
    tag: 'Sound & Lights'
  },
  {
    id: 'arFVCpt7-_0',
    url: 'https://youtube.com/shorts/arFVCpt7-_0',
    title: 'Nahargarh Palace Courtyard Royal Night Setup',
    tag: 'Royal Palace'
  },
  {
    id: 'WhiUFcCSEZY',
    url: 'https://youtube.com/shorts/WhiUFcCSEZY',
    title: 'Geometric Laser Mapping & Beam Synchrony',
    tag: 'Laser Show'
  },
  {
    id: 'gtfCYSGO6Oo',
    url: 'https://youtube.com/shorts/gtfCYSGO6Oo',
    title: 'Outdoor Poolside Dinner Fairy Light Archway',
    tag: 'Fairy Lights'
  },
  {
    id: 'i1xOjJ35aNU',
    url: 'https://youtube.com/shorts/i1xOjJ35aNU',
    title: 'Mega Sangeet Dance Floor Beam & Truss Array',
    tag: 'Sangeet Night'
  },
  {
    id: 'LlsZuEDCJJA',
    url: 'https://youtube.com/shorts/LlsZuEDCJJA',
    title: 'Six Senses Fort Grand Wedding Light Craft',
    tag: 'Heritage Rig'
  }
];

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
              Real Event Lighting & Video Gallery
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Explore our real stage PAR light washes, silent DG generators, crystal chandeliers, low fog setups, and live YouTube Shorts / Reels.
            </p>

            {/* Quick Section Anchor Switcher */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-black/25 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <a
                href="#real-images-section"
                className="px-5 py-2 rounded-full text-xs font-bold transition-all text-white hover:bg-white/20 flex items-center gap-2"
              >
                <i className="fa-regular fa-image text-rose-200"></i>
                Real Images ({galleryItems.length})
              </a>
              <a
                href="#video-shorts-section"
                className="px-5 py-2 rounded-full text-xs font-bold transition-all bg-white text-[#E63956] shadow-sm hover:bg-rose-50 flex items-center gap-2"
              >
                <i className="fa-brands fa-youtube text-red-600"></i>
                Live Shorts / Videos {youtubeShortsData.length > 0 && `(${youtubeShortsData.length})`}
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: REAL IMAGES SHOWCASE                                           */}
        {/* ========================================================================= */}
        <section id="real-images-section" className="scroll-mt-24">
          {/* Section Header */}
          <div className="pt-16 pb-6 px-4 sm:px-6 md:px-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-[#E63956] text-[11px] font-bold tracking-wider uppercase mb-3">
              <i className="fa-solid fa-camera-retro"></i>
              Section 1: HD Photography
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1A1A]">
              Real Production & Decor Photography
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Browse through high-definition photos of our decor, lighting stages, and ambient rigs across Rajasthan.
            </p>
          </div>

          {/* Categories Filter Bar */}
          <div className="py-4 bg-white/80 backdrop-blur-sm border-y border-rose-100 sticky top-20 z-30 shadow-xs">
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
          </div>

          {/* Images Grid */}
          <div className="py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1520px] mx-auto">
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
                      <span>View HD Photo</span>
                      <i className="fa-solid fa-arrow-right text-[9px]"></i>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: YOUTUBE SHORTS & REELS VIDEO SECTION                          */}
        {/* ========================================================================= */}
        <section id="video-shorts-section" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EC] to-[#FAF6F0] border-t border-rose-200/80 scroll-mt-20">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
            
            {/* Video Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] font-bold tracking-wider uppercase mb-3 shadow-xs">
                <i className="fa-brands fa-youtube text-red-600 text-sm"></i>
                Section 2: Live Video Highlights
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3">
                YouTube Shorts & Live Event Reels
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Experience our lighting craft in motion. Watch our latest cold pyro stage entries, heavy DG power setups, moving sharpy lights, and DJ dance nights in high definition.
              </p>
            </div>

            {/* Video Shorts Grid */}
            {youtubeShortsData && youtubeShortsData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {youtubeShortsData.map((video, idx) => {
                  const rawVal = typeof video === 'string' ? video : (video.id || video.url || '');
                  // Regex to extract clean YouTube ID from shorts URL, watch URL, or raw ID
                  const match = rawVal.match(/(?:shorts\/|v=|\/embed\/|\/v\/|youtu\.be\/|\/watch\?v=|^)([a-zA-Z0-9_-]{11})/);
                  const videoId = match ? match[1] : rawVal;

                  const title = typeof video === 'object' && video.title ? video.title : `Event Highlight #${idx + 1}`;
                  const tag = typeof video === 'object' && video.tag ? video.tag : 'Live Short';

                  return (
                    <motion.div
                      key={videoId || idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "50px" }}
                      transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                      className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-rose-200/90 transition-all duration-300 group hover:-translate-y-1.5"
                    >
                      {/* Top Header Badge */}
                      <div className="px-4 py-3 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white flex items-center justify-between text-xs border-b border-neutral-700">
                        <span className="flex items-center gap-1.5 font-semibold text-rose-300">
                          <i className="fa-brands fa-youtube text-red-500"></i>
                          {tag}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                          9:16 Vertical
                        </span>
                      </div>

                      {/* 9:16 Vertical Aspect Ratio Video Container */}
                      <div className="relative w-full aspect-[9/16] bg-black overflow-hidden shadow-inner">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
                          title={title}
                          className="w-full h-full border-0 absolute inset-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>

                      {/* Bottom Info Card */}
                      {title && (
                        <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                          <h4 className="font-serif font-bold text-sm text-[#1A1A1A] line-clamp-2">
                            {title}
                          </h4>
                          <div className="mt-2 flex items-center justify-between text-[11px] text-[#E63956] font-medium pt-2 border-t border-neutral-100">
                            <span>Suraj Light House</span>
                            <i className="fa-solid fa-play text-[9px]"></i>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* Empty state placeholder waiting for links */
              <div className="max-w-xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white border border-dashed border-rose-300 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2">
                  Ready to Load YouTube Shorts!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 mb-6 leading-relaxed">
                  The vertical (9:16) video container is designed and ready. Provide your YouTube Shorts links and they will appear here instantly with luxury styling.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E63956] bg-rose-50 px-4 py-2 rounded-full border border-rose-200">
                  <i className="fa-solid fa-sparkles"></i>
                  Send your first YouTube Shorts link below
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Fullscreen Lightbox Modal for Images */}
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
