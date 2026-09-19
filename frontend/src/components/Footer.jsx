import React from 'react';
import { motion } from 'framer-motion';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-[#FAF6F0] text-[#5A5255] pt-20 pb-0 px-6 md:px-12 border-t border-rose-200/50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Col 1: Brand & Socials */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 flex flex-col items-center md:items-start">
              <img 
                src="/logo.png" 
                alt="Suraj Light's Ranthambore" 
                className="h-16 sm:h-20 w-auto object-contain mb-3 drop-shadow"
              />
              <span className="font-serif tracking-[0.18em] uppercase font-black text-lg text-[#1A1A1A] block">
                SURAJ LIGHT'S
              </span>
              <p className="text-[11px] text-[#E63956] mt-0.5 font-bold tracking-widest uppercase">
                Ranthambore • Event Lighting & Royal Decor
              </p>
              <p className="text-[9px] text-[#D4AF37] font-semibold tracking-wider uppercase mt-0.5">
                A Bright Future Starts Here
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/suraj_light_house_ranthmbhor?utm_source=qr" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-50 text-[#E63956] hover:bg-[#E63956] hover:text-white flex items-center justify-center text-xs transition shadow-sm" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-50 text-[#E63956] hover:bg-[#E63956] hover:text-white flex items-center justify-center text-xs transition shadow-sm" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-50 text-[#E63956] hover:bg-[#E63956] hover:text-white flex items-center justify-center text-xs transition shadow-sm" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="/" className="hover:text-[#E63956] transition">Home</a></li>
              <li><a href="/about" className="hover:text-[#E63956] transition">Our Heritage</a></li>
              <li><a href="/gallery" className="hover:text-[#E63956] transition">Gallery Showcase</a></li>
              <li><a href="/real-weddings" className="hover:text-[#E63956] transition">Our Grand Setups</a></li>
              <li><a href="/wedding-venues" className="hover:text-[#E63956] transition">Heritage Venues</a></li>
              <li><a href="/testimonials" className="hover:text-[#E63956] transition">Client Appreciations</a></li>
              <li><a href="/services/corporate" className="hover:text-[#E63956] transition">Corporate & Summit Lighting</a></li>
              <li><a href="/services/social" className="hover:text-[#E63956] transition">Sangeet & Social Events</a></li>
              <li><a href="/services/celebrity-artist" className="hover:text-[#E63956] transition">Concert Stage Trussing</a></li>
              <li><a href="/contact" className="hover:text-[#E63956] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="mailto:Rinkuchinki91@gmail.com" className="hover:text-[#E63956] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-regular fa-envelope text-[#E63956] text-xs"></i>
                  <span>Rinkuchinki91@gmail.com</span>
                </a>
              </li>
              <li className="pt-1">
                <a href="tel:+919782962963" className="hover:text-[#E63956] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-solid fa-phone text-[#E63956] text-xs"></i>
                  <span>+91 9782962963 <span className="text-[11px] text-gray-500 font-normal">(Rinku Chinky)</span></span>
                </a>
              </li>
              <li>
                <a href="tel:+919414310499" className="hover:text-[#E63956] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-solid fa-phone text-[#E63956] text-xs"></i>
                  <span>+91 9414310499 <span className="text-[11px] text-gray-500 font-normal">(Suraj Mal Saini)</span></span>
                </a>
              </li>
              <li>
                <a href="tel:+919982142355" className="hover:text-[#E63956] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-solid fa-phone text-[#E63956] text-xs"></i>
                  <span>+91 9982142355 <span className="text-[11px] text-gray-500 font-normal">(Visnu Saini)</span></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio & Warehouse Location */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">
              Headquarters
            </h4>
            <p className="text-xs font-light leading-relaxed mb-2 text-[#1A1A1A]">
              Suraj Light House, Ranthambore National Park Road, Sawai Madhopur, Rajasthan 322001, India
            </p>
            <p className="text-[11px] text-gray-500 font-light">
              Providing majestic lighting, heavy power grids, and royal tenting across Rajasthan & India.
            </p>
          </div>

        </div>

      </motion.div>

      {/* Bottom Full-Width Thin Strip */}
      <div className="w-full bg-[#E63956] text-white py-3 text-center -mx-6 md:-mx-12 px-6 mt-10">
        <p className="text-[11px] font-medium tracking-wide">
          © 2026 Suraj Light's Ranthambore (Suraj Light House). All Rights Reserved. Mastercraft event lighting & royal decor.
        </p>
      </div>

    </footer>
  );
}
