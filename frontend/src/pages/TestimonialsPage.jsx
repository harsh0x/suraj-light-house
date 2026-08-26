import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    couple: "Vikramaditya & Ananya Rathore",
    venue: "Nahargarh Palace, Ranthambore",
    date: "December 2025",
    rating: 5,
    quote: "Suraj Light's team turned Nahargarh into an absolute royal wonderland! The 40+ imported crystal chandeliers hanging over our open-air palace courtyard and the amber facade wash took everyone's breath away. Their silent generator grids ran flawlessly throughout our 1,200-guest sangeet and reception without a single microsecond of flicker.",
    image: "/assets/client-couple-1.jpg"
  },
  {
    id: 2,
    couple: "Siddharth & Priya Singhania",
    venue: "Six Senses Fort Barwara, Sawai Madhopur",
    date: "January 2026",
    rating: 5,
    quote: "The heavy concert stage trussing and intelligent moving beam lighting engineered by Suraj Light's master technicians made our musical sangeet night truly unforgettable. Sharpie moving heads, laser synchronization, and heavy low fog created a stadium-grade spectacle that left our guests mesmerized.",
    image: "/assets/client-couple-2.jpg"
  },
  {
    id: 3,
    couple: "Kabir & Meera Shekhawat",
    venue: "The Oberoi Vanyavilas, Ranthambore",
    date: "November 2025",
    rating: 5,
    quote: "Suraj Light's handcrafted royal shamiyanas and 10,000-bulb fairy light tunnel canopy created an ethereal atmosphere for our royal pheras under the desert night sky. Their on-site electrical engineers monitored every single luminaire with seamless perfection.",
    image: "/assets/client-couple-3.jpg"
  },
  {
    id: 4,
    couple: "Devendra & Radhika Joshi",
    venue: "Fort Rajwada & Royal Courtyards",
    date: "October 2025",
    rating: 5,
    quote: "We required multi-tier crystal chandeliers, custom truss arches, and triple-redundant power for a 3-day royal celebration. Suraj Light's team handled the entire electrical distribution and majestic decor lighting with effortless authority. The premier lighting house in Rajasthan!",
    image: "/assets/client-couple-4.jpg"
  },
  {
    id: 5,
    couple: "Ranveer & Padmini Sisodia",
    venue: "Sawai Vilas Resort, Sawai Madhopur",
    date: "February 2026",
    rating: 5,
    quote: "Punctual setup, pristine heavy-duty equipment, and unmatched mastery of Ranthambore power loads. Suraj Light's team arrived a day early, erected waterproof German pagodas, and sculpted the most magnificent amber architectural lighting display we have ever witnessed.",
    image: "/assets/client-couple-5.jpg"
  }
];

export default function TestimonialsPage({ onOpenBooking }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#FAF6F0]"
    >
      
      {/* HERO BANNER: Royal Coral Crimson Header */}
      <section className="bg-[#E63956] text-white pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        
        {/* Subtle Watermark Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2"
          >
            ✦ Words of Appreciation ✦
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Client Appreciations
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Hear from royal families, wedding couples, and event producers who trusted Suraj Light House to illuminate their grandest celebrations in Ranthambore & Rajasthan.
          </motion.p>
        </div>
      </section>

      {/* TESTIMONIALS GRID: 3-Column Cascading Cards */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 25px 35px -5px rgba(230, 57, 86, 0.25)",
                transition: { duration: 0.35 }
              }}
              className="bg-white rounded-3xl p-8 shadow-md border border-rose-200/80 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#E63956] text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-sm shadow-sm">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Couple Details & Thumbnail Frame */}
              <div className="pt-6 border-t border-rose-100/90 flex items-center gap-4">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E63956]/60 shadow-md flex-shrink-0">
                  <img src={item.image} alt={item.couple} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-bold leading-tight mb-1">
                    {item.couple}
                  </h3>
                  <p className="text-[11px] font-bold text-[#E63956]">
                    {item.venue}
                  </p>
                  <p className="text-[10px] text-gray-400 font-light">
                    {item.date}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white rounded-3xl p-10 md:p-14 text-center border border-rose-200/80 shadow-xl max-w-4xl mx-auto"
        >
          <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Light Up Your Milestone ✦
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-bold mb-4">
            Plan Your Grand Illumination & Tenting
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Contact our senior event lighting team to receive a tailored layout and generator proposal for your celebration in Ranthambore.
          </p>
          <button 
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
          >
            <span>Request an Event Quote</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </motion.div>

      </section>

    </motion.div>
  );
}
