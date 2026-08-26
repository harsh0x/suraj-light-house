import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isScrolled, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);
  const [venueDropdownOpen, setVenueDropdownOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDestinationOpen, setMobileDestinationOpen] = useState(false);
  const [mobileVenueOpen, setMobileVenueOpen] = useState(false);

  const location = useLocation();
  const aboutTimerRef = useRef(null);
  const servicesTimerRef = useRef(null);
  const destinationTimerRef = useRef(null);
  const venueTimerRef = useRef(null);

  const isHome = location.pathname === '/';
  const isSolid = isScrolled || !isHome;

  // Dropdown hover helpers with 200ms grace period
  const handleAboutEnter = () => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimerRef.current = setTimeout(() => setAboutDropdownOpen(false), 200);
  };

  const handleServicesEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesDropdownOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimerRef.current = setTimeout(() => setServicesDropdownOpen(false), 200);
  };

  const handleDestinationEnter = () => {
    if (destinationTimerRef.current) clearTimeout(destinationTimerRef.current);
    setDestinationDropdownOpen(true);
  };
  const handleDestinationLeave = () => {
    destinationTimerRef.current = setTimeout(() => setDestinationDropdownOpen(false), 200);
  };

  const handleVenueEnter = () => {
    if (venueTimerRef.current) clearTimeout(venueTimerRef.current);
    setVenueDropdownOpen(true);
  };
  const handleVenueLeave = () => {
    venueTimerRef.current = setTimeout(() => setVenueDropdownOpen(false), 200);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
        setMobileAboutOpen(false);
        setMobileServicesOpen(false);
        setMobileDestinationOpen(false);
        setMobileVenueOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 6, 
      scale: 0.98, 
      transition: { duration: 0.15, ease: "easeInOut" } 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const isAboutActive = location.pathname === '/about' || location.pathname === '/testimonials' || location.pathname === '/contact';
  const isServicesActive = location.pathname.startsWith('/services');
  const isDestinationActive = location.pathname === '/destination-wedding-india' || location.pathname === '/destination-wedding-abroad';
  const isVenueActive = location.pathname === '/wedding-venues';

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
      className={`w-full z-50 transition-all duration-300 ${
        isSolid 
          ? 'fixed top-0 left-0 glass-nav shadow-md py-2.5 sm:py-3 text-[#1A1A1A]' 
          : 'absolute top-0 left-0 py-3 sm:py-4 text-white'
      }`}
    >
      <div className="max-w-[1520px] w-full mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Name: SURAJ LIGHT'S RANTHAMBORE */}
        <Link 
          to="/"
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer py-0.5 flex-shrink-0"
        >
          <img 
            src="/logo.png" 
            alt="Suraj Light's Ranthambore Logo" 
            className="h-8 xs:h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className={`font-serif tracking-[0.10em] sm:tracking-[0.16em] uppercase font-black text-xs sm:text-base lg:text-lg transition leading-tight ${
              isSolid 
                ? 'text-[#1A1A1A] group-hover:text-[#E63956]' 
                : 'text-white group-hover:text-[#FFCCD3]'
            }`}>
              SURAJ LIGHT'S
            </span>
            <span className={`text-[7px] sm:text-[8.5px] tracking-[0.16em] sm:tracking-[0.24em] uppercase font-bold transition ${
              isSolid ? 'text-[#E63956]' : 'text-[#FFCCD3]'
            }`}>
              RANTHAMBORE • ROYAL DECOR
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Visible on xl: >= 1280px) */}
        <nav className="hidden xl:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4 text-[10.5px] xl:text-[11px] 2xl:text-xs tracking-wider uppercase font-bold whitespace-nowrap">
          
          {/* 1. Home */}
          <Link 
            to="/" 
            className={`px-2 py-1.5 transition-colors relative ${
              location.pathname === '/' 
                ? 'text-[#E63956] font-bold' 
                : (isSolid ? 'text-[#1A1A1A] hover:text-[#E63956]' : 'text-white/90 hover:text-[#FFCCD3]')
            }`}
          >
            <span>Home</span>
            {location.pathname === '/' && (
              <motion.span layoutId="navUnderline" className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#E63956]" />
            )}
          </Link>

          {/* 2. Our Heritage Dropdown */}
          <div 
            className="relative py-1"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <Link 
              to="/about"
              className={`flex items-center gap-1 px-2 py-1.5 uppercase transition-colors cursor-pointer ${
                isAboutActive 
                  ? 'text-[#E63956] font-bold border-b-2 border-[#E63956]' 
                  : (isSolid ? 'text-[#1A1A1A] hover:text-[#E63956]' : 'text-white/90 hover:text-[#FFCCD3]')
              }`}
            >
              <span>Our Heritage</span>
              <motion.i 
                animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </Link>

            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                  className="absolute top-full left-0 pt-2 w-64 z-50 text-[#1A1A1A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <Link
                        to="/about"
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/about' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-crown text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Our Heritage & Legacy</span>
                          <span className="block text-[10px] text-gray-400 font-light">Suraj Light House story</span>
                        </div>
                      </Link>

                      <Link
                        to="/testimonials"
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/testimonials' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-star text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Client Stories</span>
                          <span className="block text-[10px] text-gray-400 font-light">Spectacular reviews & feedback</span>
                        </div>
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/contact' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-regular fa-envelope text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Contact & Studio</span>
                          <span className="block text-[10px] text-gray-400 font-light">Ranthambore office & booking</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Heritage Tenting & Lighting Dropdown */}
          <div 
            className="relative py-1"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1 px-2 py-1.5 uppercase transition-colors cursor-pointer ${
                isServicesActive || servicesDropdownOpen 
                  ? 'text-[#E63956] font-bold' 
                  : (isSolid ? 'text-[#1A1A1A] hover:text-[#E63956]' : 'text-white/90 hover:text-[#FFCCD3]')
              }`}
            >
              <span>Heritage Tenting</span>
              <motion.i 
                animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                  className="absolute top-full left-0 pt-2 w-72 z-50 text-[#1A1A1A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <a
                        href="/#services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956] transition-all group"
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-lightbulb text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Grand Lighting & Tenting</span>
                          <span className="block text-[10px] text-gray-400 font-light">Chandeliers, fairy canopies & hangars</span>
                        </div>
                      </a>

                      <Link
                        to="/services/corporate"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/services/corporate' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-building text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Corporate & Summit Setups</span>
                          <span className="block text-[10px] text-gray-400 font-light">AV, stage trussing & power</span>
                        </div>
                      </Link>

                      <Link
                        to="/services/social"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/services/social' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-champagne-glasses text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Social & Sangeet Nights</span>
                          <span className="block text-[10px] text-gray-400 font-light">Dynamic theme illumination</span>
                        </div>
                      </Link>

                      <Link
                        to="/services/celebrity-artist"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/services/celebrity-artist' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-compact-disc text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Concert Truss & Special FX</span>
                          <span className="block text-[10px] text-gray-400 font-light">Intelligent moving heads & pyros</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Destination Setups Dropdown */}
          <div 
            className="relative py-1"
            onMouseEnter={handleDestinationEnter}
            onMouseLeave={handleDestinationLeave}
          >
            <button 
              onClick={() => setDestinationDropdownOpen(!destinationDropdownOpen)}
              className={`flex items-center gap-1 px-2 py-1.5 uppercase transition-colors cursor-pointer ${
                isDestinationActive || destinationDropdownOpen 
                  ? 'text-[#E63956] font-bold' 
                  : (isSolid ? 'text-[#1A1A1A] hover:text-[#E63956]' : 'text-white/90 hover:text-[#FFCCD3]')
              }`}
            >
              <span>Destinations</span>
              <motion.i 
                animate={{ rotate: destinationDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </button>

            <AnimatePresence>
              {destinationDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleDestinationEnter}
                  onMouseLeave={handleDestinationLeave}
                  className="absolute top-full left-0 pt-2 w-72 z-50 text-[#1A1A1A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <Link
                        to="/destination-wedding-india"
                        onClick={() => setDestinationDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/destination-wedding-india' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-archway text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Ranthambore & Rajasthan</span>
                          <span className="block text-[10px] text-gray-400 font-light">Forts, Palaces & Luxury Resorts</span>
                        </div>
                      </Link>

                      <Link
                        to="/destination-wedding-abroad"
                        onClick={() => setDestinationDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/destination-wedding-abroad' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-plane-departure text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Pan-India & Royal Events</span>
                          <span className="block text-[10px] text-gray-400 font-light">Jaipur, Udaipur, Goa & Beyond</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. Heritage Venues Dropdown */}
          <div 
            className="relative py-1"
            onMouseEnter={handleVenueEnter}
            onMouseLeave={handleVenueLeave}
          >
            <button 
              onClick={() => setVenueDropdownOpen(!venueDropdownOpen)}
              className={`flex items-center gap-1 px-2 py-1.5 uppercase transition-colors cursor-pointer ${
                isVenueActive || venueDropdownOpen 
                  ? 'text-[#E63956] font-bold' 
                  : (isSolid ? 'text-[#1A1A1A] hover:text-[#E63956]' : 'text-white/90 hover:text-[#FFCCD3]')
              }`}
            >
              <span>Palace Venues</span>
              <motion.i 
                animate={{ rotate: venueDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </button>

            <AnimatePresence>
              {venueDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleVenueEnter}
                  onMouseLeave={handleVenueLeave}
                  className="absolute top-full left-0 pt-2 w-72 z-50 text-[#1A1A1A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <Link
                        to="/wedding-venues"
                        onClick={() => setVenueDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs normal-case transition-all group ${
                          location.pathname === '/wedding-venues' ? 'bg-rose-50 text-[#E63956] font-semibold' : 'text-[#1A1A1A] hover:bg-rose-50 hover:text-[#E63956]'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#E63956]">
                          <i className="fa-solid fa-hotel text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-bold">Ranthambore Venues</span>
                          <span className="block text-[10px] text-gray-400 font-light">Nahargarh, Six Senses, Vanyavilas</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 6. Grand Setups */}
          <Link 
            to="/real-weddings" 
            className={`px-2 py-1.5 hover:text-[#E63956] transition-colors relative ${
              location.pathname === '/real-weddings' 
                ? 'text-[#E63956] font-bold border-b-2 border-[#E63956]' 
                : (isSolid ? 'text-[#1A1A1A]' : 'text-white/90')
            }`}
          >
            Grand Setups
          </Link>

          {/* 7. Gallery */}
          <Link 
            to="/gallery" 
            className={`px-2 py-1.5 hover:text-[#E63956] transition-colors relative ${
              location.pathname === '/gallery' 
                ? 'text-[#E63956] font-bold border-b-2 border-[#E63956]' 
                : (isSolid ? 'text-[#1A1A1A]' : 'text-white/90')
            }`}
          >
            Gallery
          </Link>

        </nav>

        {/* Far Right CTA: BOOK YOUR LIGHT (Desktop) */}
        <div className="hidden xl:flex items-center flex-shrink-0">
          <button
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="px-5 py-2.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-[11px] font-bold tracking-widest uppercase transition transform hover:scale-[1.03] shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer border border-white/20"
          >
            BOOK YOUR LIGHT
          </button>
        </div>

        {/* Mobile & Tablet Header Controls (Visible on < 1280px) */}
        <div className="xl:hidden flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          <button
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase transition shadow-sm cursor-pointer"
          >
            Quote
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition cursor-pointer ${
              isSolid ? 'text-[#1A1A1A] hover:bg-rose-100/60' : 'text-white hover:bg-white/15'
            }`}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base sm:text-lg`}></i>
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#FAF6F0] text-[#1A1A1A] border-b border-rose-200 px-5 sm:px-8 py-4 shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col space-y-1.5 text-xs font-bold tracking-wider uppercase">
              
              {/* Home */}
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-rose-100 flex items-center justify-between text-[#1A1A1A] hover:text-[#E63956]"
              >
                <span>Home</span>
                <i className="fa-solid fa-house text-xs opacity-50"></i>
              </Link>

              {/* Our Heritage Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#E63956]"
                >
                  <span>Our Heritage</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileAboutOpen ? 'rotate-180 text-[#E63956]' : 'opacity-50'}`}></i>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#5A5255]">
                    <Link 
                      to="/about" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-crown text-xs text-[#E63956] mr-2"></i>
                      Our Heritage & Legacy
                    </Link>
                    <Link 
                      to="/testimonials" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-star text-xs text-[#E63956] mr-2"></i>
                      Client Appreciations & Reviews
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-regular fa-envelope text-xs text-[#E63956] mr-2"></i>
                      Contact Us & Studio Info
                    </Link>
                  </div>
                )}
              </div>

              {/* Lighting & Decor Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#E63956]"
                >
                  <span>Lighting & Decor</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileServicesOpen ? 'rotate-180 text-[#E63956]' : 'opacity-50'}`}></i>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#5A5255]">
                    <a 
                      href="/#services" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-lightbulb text-xs text-[#E63956] mr-2"></i>
                      Full Event Lighting & Chandeliers
                    </a>
                    <Link 
                      to="/services/corporate" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-building text-xs text-[#E63956] mr-2"></i>
                      Corporate Events & Summits
                    </Link>
                    <Link 
                      to="/services/social" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-champagne-glasses text-xs text-[#E63956] mr-2"></i>
                      Social & Sangeet Nights
                    </Link>
                    <Link 
                      to="/services/celebrity-artist" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-compact-disc text-xs text-[#E63956] mr-2"></i>
                      Concert Trussing & Stage Special FX
                    </Link>
                  </div>
                )}
              </div>

              {/* Destination Setups Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileDestinationOpen(!mobileDestinationOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#E63956]"
                >
                  <span>Destination Setups</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileDestinationOpen ? 'rotate-180 text-[#E63956]' : 'opacity-50'}`}></i>
                </button>
                {mobileDestinationOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#5A5255]">
                    <Link 
                      to="/destination-wedding-india" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-archway text-xs text-[#E63956] mr-2"></i>
                      Ranthambore & Rajasthan
                    </Link>
                    <Link 
                      to="/destination-wedding-abroad" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-plane-departure text-xs text-[#E63956] mr-2"></i>
                      Pan-India & Royal Events
                    </Link>
                  </div>
                )}
              </div>

              {/* Heritage Venues Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileVenueOpen(!mobileVenueOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#E63956]"
                >
                  <span>Heritage Venues</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileVenueOpen ? 'rotate-180 text-[#E63956]' : 'opacity-50'}`}></i>
                </button>
                {mobileVenueOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#5A5255]">
                    <Link 
                      to="/wedding-venues" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#E63956]"
                    >
                      <i className="fa-solid fa-hotel text-xs text-[#E63956] mr-2"></i>
                      Ranthambore Resorts & Palaces
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Grand Setups */}
              <Link 
                to="/real-weddings" 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 border-b border-rose-100 flex items-center justify-between ${
                  location.pathname === '/real-weddings' ? 'text-[#E63956] font-bold' : 'text-[#1A1A1A] hover:text-[#E63956]'
                }`}
              >
                <span>Our Setups</span>
                <i className="fa-regular fa-image text-xs opacity-50"></i>
              </Link>

              {/* Gallery */}
              <Link 
                to="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 border-b border-rose-100 flex items-center justify-between ${
                  location.pathname === '/gallery' ? 'text-[#E63956] font-bold' : 'text-[#1A1A1A] hover:text-[#E63956]'
                }`}
              >
                <span>Gallery</span>
                <i className="fa-solid fa-camera-retro text-xs opacity-50"></i>
              </Link>

              {/* Get A Quote Full Width Button */}
              <div className="pt-3">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('Full Event Lighting');
                  }}
                  className="w-full py-3.5 rounded-full bg-[#E63956] text-white text-center font-bold tracking-widest uppercase block shadow-md cursor-pointer hover:bg-[#CF203E] transition"
                >
                  GET A QUOTE
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
