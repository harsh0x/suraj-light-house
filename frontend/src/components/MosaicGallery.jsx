import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function MosaicGallery({ onImageClick }) {
  const mosaicItems = [
    { img: IMAGES.mosaic1, title: "Hanging Flora & Birds Chandeliers" },
    { img: IMAGES.mosaic2, title: "Grand Tiered Crystal Chandeliers" },
    { img: IMAGES.mosaic3, title: "Royal Crimson Drape Entrance" },
    { img: IMAGES.mosaic4, title: "Illuminated Flower Lamp Pathway" },
    { img: IMAGES.mosaic5, title: "Grand Floral Arch & Chandeliers" },
    { img: IMAGES.mosaic6, title: "Mirror Pegasus & Chandelier Lawn" },
    { img: IMAGES.mosaic7, title: "Illuminated Leaf Arch Tunnel" },
  ];

  return (
    <section className="bg-[#FAF6F0] py-10 px-4 md:px-8 border-y border-rose-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3 sm:gap-4"
        >
          {mosaicItems.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              onClick={() => onImageClick({ url: item.img, title: item.title })}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer border-2 border-white"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                <p className="text-white text-[11px] font-serif font-semibold leading-tight">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
