import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES, FAQS } from '../data/lightingData';

export default function LightingFaq({ onImageClick }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Photo Cluster */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden frame-white shadow-xl h-44 sm:h-52">
              <img 
                src={IMAGES.faqLeftTop} 
                alt="House Entrance Fairy Lights & Traditional Signage" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.faqLeftTop, title: "House Entrance Illumination & Traditional Gate Decor" })}
              />
            </div>
            <div className="rounded-2xl overflow-hidden frame-rose shadow-lg h-36 sm:h-44">
              <img 
                src={IMAGES.faqLeftBottom} 
                alt="Street Facade Drapes & Waterfall Lights" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.faqLeftBottom, title: "Street Facade Colorful Drapes & Waterfall String Lights" })}
              />
            </div>
          </motion.div>

          {/* Center FAQ Accordions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 text-center"
          >
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ Technical & Logistics FAQ ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-bold tracking-tight mb-8">
              Everything You Need To Know
            </h2>

            <div className="space-y-3 mt-4 text-left">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAF6F0] rounded-2xl border border-rose-200/70 overflow-hidden transition shadow-sm"
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-serif text-sm sm:text-base text-[#1A1A1A] font-bold hover:text-[#E63956] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-xs text-[#E63956] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}></i>
                  </button>

                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light border-t border-rose-100 overflow-hidden"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-8">
              <p className="font-sans text-sm text-[#5A5255]">
                Have specific technical or generator requirements? <br />
                <a href="#contact" className="text-[#E63956] font-bold underline hover:text-[#CF203E]">Speak With Our Chief Lighting Engineer</a>
              </p>
            </div>
          </motion.div>

          {/* Right Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden frame-white shadow-2xl w-full h-[320px] sm:h-[400px]">
              <img 
                src={IMAGES.faqRight} 
                alt="Rooftop Fairy Light Canopy & Sangeet Setup" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.faqRight, title: "Rooftop & Terrace Fairy Light Mesh Canopy & Floor Sangeet" })}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
