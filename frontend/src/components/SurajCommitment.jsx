import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function SurajCommitment({ onOpenBooking, onImageClick }) {
  return (
    <section className="bg-[#FAF6F0] py-24 px-6 md:px-12 lg:px-16 border-t border-rose-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column: Slide in from left */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ Our Unwavering Pledge ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight leading-tight mb-6">
              Your Grand Vision, Our <br className="hidden sm:block" /> Flawless Illumination
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light mb-8 max-w-lg mx-auto lg:mx-0">
              At Suraj Light House, we understand that grand events require both aesthetic brilliance and absolute technical reliability. Our electrical crews operate with uncompromising standards—testing load balances, synchronizing intelligent lighting consoles, and managing heavy-duty silent power grids on-site from start to finish.
            </p>
            <div>
              <button 
                onClick={() => onOpenBooking('Full Event Lighting')}
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold tracking-wider uppercase shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Your Light
              </button>
            </div>
          </motion.div>

          {/* Right Staggered Photo Cluster: Slide in from right */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-md h-[400px]">
              
              {/* Top Left Card */}
              <div className="absolute top-0 left-4 w-[52%] h-[65%] rounded-2xl overflow-hidden frame-white shadow-xl z-10">
                <img 
                  src={IMAGES.commit1} 
                  alt="Radiating Canopy Drapes & Fairy Lights" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                  onClick={() => onImageClick({ url: IMAGES.commit1, title: "Radiating Canopy Drapes & Center Chandelier" })}
                />
              </div>

              {/* Top Right Card */}
              <div className="absolute top-6 right-2 w-[48%] h-[60%] rounded-2xl overflow-hidden frame-rose shadow-lg">
                <img 
                  src={IMAGES.commit2} 
                  alt="Moonlit Hanging Lanterns & Ambient Trees" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                  onClick={() => onImageClick({ url: IMAGES.commit2, title: "Moonlit Hanging Lanterns & Ambient Trees" })}
                />
              </div>

              {/* Bottom Center Card */}
              <div className="absolute bottom-0 left-[20%] w-[60%] h-[68%] rounded-2xl overflow-hidden frame-white shadow-2xl z-20">
                <img 
                  src={IMAGES.commit3} 
                  alt="Night Bistro Festoon Canopy" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                  onClick={() => onImageClick({ url: IMAGES.commit3, title: "Festoon String Lights & Tree Canopy Illumination" })}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
