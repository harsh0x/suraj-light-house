import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function RanthamboreHeritageSection({ onOpenBooking, onImageClick }) {
  return (
    <section className="relative bg-[#1A1A1A] text-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Background Palace Watermark */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: `url('${IMAGES.destSouthBg}')` }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FF6B81] block mb-2">
              ✦ Ranthambore & Rajasthan ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4">
              Illuminating Royal Heritage Venues
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-8 max-w-md mx-auto lg:mx-0">
              As Ranthambore’s foremost event lighting, shamiyana tenting, and truss production house, we bring unmatched local mastery to heritage forts, wildlife luxury resorts, and royal palace venues across Sawai Madhopur, Ranthambore, and greater Rajasthan.
            </p>
            <div>
              <button 
                onClick={() => onOpenBooking ? onOpenBooking('Heritage Venue Lighting') : null}
                className="inline-block px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold tracking-wider uppercase shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Light Up Your Event
              </button>
            </div>
          </motion.div>

          {/* Right 3 Destination Cards with Staggered Entrance */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            
            {/* Ranthambore Luxury Resorts */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="bg-[#242022] rounded-2xl overflow-hidden border border-white/10 shadow-xl group cursor-pointer"
              onClick={() => onImageClick && onImageClick({ url: IMAGES.destMiami, title: "Royal Floral Mandap & Crystal Chandeliers" })}
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={IMAGES.destMiami} 
                  alt="Royal Floral Mandap & Crystal Chandeliers" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <div className="p-3 bg-[#E63956] text-center">
                <span className="text-[11px] font-bold tracking-wider uppercase text-white block">
                  Ranthambore Resorts
                </span>
                <span className="text-[9px] text-rose-100">Nahargarh & Six Senses Fort</span>
              </div>
            </motion.div>

            {/* Sawai Madhopur Palaces */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="bg-[#242022] rounded-2xl overflow-hidden border border-white/10 shadow-xl group cursor-pointer"
              onClick={() => onImageClick && onImageClick({ url: IMAGES.destPalmBeach, title: "Purple Floral Ceiling & Neon Chandelier" })}
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={IMAGES.destPalmBeach} 
                  alt="Purple Floral Ceiling & Neon Chandelier" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <div className="p-3 bg-[#E63956] text-center">
                <span className="text-[11px] font-bold tracking-wider uppercase text-white block">
                  Sawai Madhopur
                </span>
                <span className="text-[9px] text-rose-100">Vanyavilas & Sawai Vilas</span>
              </div>
            </motion.div>

            {/* Rajasthan Royal Venues */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="bg-[#242022] rounded-2xl overflow-hidden border border-white/10 shadow-xl group cursor-pointer"
              onClick={() => onImageClick && onImageClick({ url: IMAGES.destNaples, title: "Crimson Velvet & Geometric Floral Backdrop" })}
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={IMAGES.destNaples} 
                  alt="Crimson Velvet & Geometric Floral Backdrop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <div className="p-3 bg-[#E63956] text-center">
                <span className="text-[11px] font-bold tracking-wider uppercase text-white block">
                  Palaces of Rajasthan
                </span>
                <span className="text-[9px] text-rose-100">Jaipur, Udaipur & Beyond</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
