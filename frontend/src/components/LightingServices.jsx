import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function LightingServices({ onOpenBooking }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: LUXURY_EASE,
      },
    }),
  };

  const services = [
    {
      num: "01",
      title: "Wisteria Canopy & Neon Arch Lighting",
      img: IMAGES.service1,
      desc: "Cascading white wisteria ceiling drapes, glowing LED neon leaf arches, warm candelabra candle pillars, and ambient warm stage washes.",
      serviceName: "Wisteria & Neon Arch Lighting"
    },
    {
      num: "02",
      title: "Cold Spark Pyros & Dry Ice Low Fog",
      img: IMAGES.service2,
      desc: "Smokeless cold sparkular pyro fountain blasters, heavy low-lying dry ice cloud fog machines, and dramatic spotlighting for couple grand entries.",
      serviceName: "Cold Spark Pyros & Low Fog"
    },
    {
      num: "03",
      title: "Illuminated Varmala Glass Bridge",
      img: IMAGES.service3,
      desc: "Elevated glowing glass runway bridges with under-deck floral beds, warm globe sphere lights, fairy string curtains, and celebratory confetti blast FX.",
      serviceName: "Illuminated Varmala Bridge"
    },
    {
      num: "04",
      title: "Light-Up Glass Floral Runway",
      img: IMAGES.service4,
      desc: "Modular LED backlit tempered glass floor tiles filled with fresh floral beds & micro fairy strings, flanked by illuminated crystal branch trees.",
      serviceName: "Light-up Glass Floral Runway"
    },
    {
      num: "05",
      title: "Residential Fairy Lights & Fabric Drapes",
      img: IMAGES.service5,
      desc: "Full building exterior facade illumination with vertical waterfall fairy light curtains, royal teal satin canopy drapery, and floral gate arches.",
      serviceName: "Residential Facade Lighting"
    },
    {
      num: "06",
      title: "Villa Blue Wash & Waterfall String Lights",
      img: IMAGES.service6,
      desc: "Architectural RGBW wash floodlights in royal blue & purple tones, cascading vertical rice bulb waterfall drops, and decorative lattice wall uplighting.",
      serviceName: "Villa Wash & Waterfall Lighting"
    },
    {
      num: "07",
      title: "Lawn Festoon Canopy & Acoustic Stage",
      img: IMAGES.service7,
      desc: "Criss-cross hanging warm Edison festoon string canopies, illuminated floral arch bandstand, and cozy Baithak lounge garden lighting.",
      serviceName: "Lawn Festoon Canopy & Stage"
    },
    {
      num: "08",
      title: "Aluminum Truss Rigging & Sangeet Stage",
      img: IMAGES.service8,
      desc: "Heavy-duty aluminum box truss framework, gold shimmer backdrop drapes, suspended crystal chandeliers, PAR stage washes, and Shamiyana ceiling lighting.",
      serviceName: "Truss Rigging & Sangeet Stage"
    }
  ];

  return (
    <section id="services" className="bg-[#FAF6F0] py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
        >
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Real Event Lighting & Power Equipment ✦
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-4">
            Professional Event Lighting, Trussing & Silent Generators
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            Suraj Light House delivers complete theatrical lighting infrastructure: LED PAR cans, stage wash lights, MI bars, kinetic balls, crystal chandeliers, rise cloud low fog, and heavy silent DG genset rentals across Ranthambore & Rajasthan.
          </p>
        </motion.div>

        {/* 8 Equipment Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 35px -5px rgba(230, 57, 86, 0.22), 0 10px 15px -5px rgba(230, 57, 86, 0.12)",
                transition: { duration: 0.35, ease: LUXURY_EASE } 
              }}
              className="bg-white rounded-3xl p-6 shadow-md flex flex-col justify-between text-center border border-rose-100/90 group relative"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#E63956] text-white font-serif text-sm font-bold flex items-center justify-center shadow-md mx-auto mb-4 group-hover:scale-110 transition">
                  {item.num}
                </div>
                <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-xs">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: LUXURY_EASE }}
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-bold mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#5A5255] leading-relaxed font-light mb-4">
                  {item.desc}
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBooking(item.serviceName)}
                className="w-full py-2.5 rounded-full bg-[#FAF6F0] hover:bg-[#E63956] text-[#E63956] hover:text-white border border-rose-200 text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book This Setup</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
          className="mt-16"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              y: -3, 
              boxShadow: "0 20px 30px -5px rgba(230, 57, 86, 0.45)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onOpenBooking('Full Event Lighting Setup')}
            className="px-10 py-4 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl transition cursor-pointer"
          >
            Book Your Light
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
