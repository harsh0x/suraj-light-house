import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitInquiry } from '../services/api';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    partner_name: '',
    email: '',
    phone: '',
    date: '',
    guests: '300 - 600 Guests',
    service: 'Full Event Lighting',
    vision: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await submitInquiry(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(res.message || 'Something went wrong. Please call +91 97829 62963 directly.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or call our direct numbers.');
    } finally {
      setLoading(false);
    }
  };

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
        <section className="bg-[#E63956] text-white pt-28 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 md:px-12 text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Suraj Light's Ranthambore ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">
              Let's Illuminate Your Big Day
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed px-2">
              Connect directly with our master lighting designers, tenting architects, and electrical engineers to sculpt an awe-inspiring royal celebration in Ranthambore & Rajasthan.
            </p>
          </motion.div>
        </section>

        {/* 1-Column Luxury Form Layout */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-4xl mx-auto w-full">
          
          {/* Main 1-Column Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: LUXURY_EASE }}
            className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-rose-200/90 shadow-2xl w-full mb-12"
          >
            
            {submitted ? (
              <div className="text-center py-12 sm:py-16 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-100 text-[#E63956] flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-6 shadow-md">
                  <i className="fa-solid fa-check"></i>
                </div>
                <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
                  ✦ Illumination Request Received ✦
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] font-bold mb-4">
                  Thank You, {formData.name}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-md mx-auto leading-relaxed mb-8 font-light">
                  Your event lighting and tenting parameters have been received. Our chief electrical engineer will reach out with a detailed layout within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-full bg-[#E63956] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CF203E] transition cursor-pointer shadow-lg"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 text-center">
                  <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">
                    ✦ Reserve Your Date ✦
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-bold">
                    Let's Illuminate Your Big Day
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A5255] font-light mt-2 max-w-lg mx-auto">
                    Please provide your venue specifications and aesthetic requirements below for a bespoke lighting and tenting blueprint.
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
                    <i className="fa-solid fa-circle-exclamation text-rose-600 text-sm"></i>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* ROW 1: Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        YOUR NAME *
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Vikramaditya Rathore"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        HOST / EVENT NAME
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Rathore Royal Wedding & Sangeet"
                        value={formData.partner_name}
                        onChange={(e) => handleChange('partner_name', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* ROW 2: Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="vikram@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        PHONE NUMBER
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+91 97829 62963"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* ROW 3: Date, Venue Size, Lighting Theme */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        EVENT DATE
                      </label>
                      <input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        VENUE SIZE / AREA
                      </label>
                      <select 
                        value={formData.guests}
                        onChange={(e) => handleChange('guests', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                      >
                        <option value="Intimate Lawn (Under 5,000 Sq Ft / 150 Guests)">Intimate Lawn (Under 5,000 Sq Ft)</option>
                        <option value="Courtyard & Hall (5,000 - 15,000 Sq Ft / 300 Guests)">Courtyard & Hall (5,000 - 15,000 Sq Ft)</option>
                        <option value="Grand Palace Grounds (15,000 - 35,000 Sq Ft / 600 Guests)">Grand Palace Grounds (15,000 - 35,000 Sq Ft)</option>
                        <option value="Monumental Arena (35,000+ Sq Ft / 1200+ Guests)">Monumental Arena (35,000+ Sq Ft)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        LIGHTING THEME REQUIRED
                      </label>
                      <select 
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                      >
                        <option value="Royal Amber Gold & Crystal Chandeliers">Royal Amber Gold & Crystal Chandeliers</option>
                        <option value="Heritage Shamiyana & Tenting Architecture">Heritage Shamiyana & Tenting Architecture</option>
                        <option value="Concert Stage, Truss & Moving Beams">Concert Stage, Truss & Moving Beams</option>
                        <option value="Starry Night Fairy Tunnel & Edison Globes">Starry Night Fairy Tunnel & Edison Globes</option>
                        <option value="Architectural Facade Wash & Laser FX">Architectural Facade Wash & Laser FX</option>
                        <option value="Full Turnkey Event Illumination & Silent Power">Full Turnkey Event Illumination & Silent Power</option>
                      </select>
                    </div>
                  </div>

                  {/* ROW 4: Vision & Notes */}
                  <div>
                    <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                      TELL US ABOUT YOUR EVENT & LIGHTING REQUIREMENTS
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Detail your venue in Ranthambore/Rajasthan, stage dimensions, chandelier quantities, generator redundancy requirements, or custom lighting cues..."
                      value={formData.vision}
                      onChange={(e) => handleChange('vision', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl transition transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                          <span>Transmitting to Suraj Light's Team...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Your Light</span>
                          <i className="fa-solid fa-arrow-right text-xs"></i>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            )}

          </motion.div>

          {/* 3 Contact Info Cards Below the Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* Contact Card 1: Concierge Email */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-md text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-lg mb-4 shadow-sm">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <h3 className="font-serif text-lg text-[#1A1A1A] font-bold mb-1">
                Inquiry Email
              </h3>
              <p className="text-xs text-[#5A5255] font-light mb-3">
                For formal quotation requests & schematics:
              </p>
              <a 
                href="mailto:seo.harsh9351@gmail.com" 
                className="text-xs sm:text-sm font-bold text-[#E63956] hover:text-[#CF203E] transition break-all"
              >
                seo.harsh9351@gmail.com
              </a>
            </div>

            {/* Contact Card 2: Phone Numbers */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-md text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-lg mb-4 shadow-sm">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 className="font-serif text-lg text-[#1A1A1A] font-bold mb-1">
                Direct Phone Lines
              </h3>
              <p className="text-xs text-[#5A5255] font-light mb-3">
                Call directly for urgent reservations & power setups:
              </p>
              <div className="space-y-1 text-xs">
                <p className="font-bold text-[#1A1A1A]">+91 9782962963 <span className="font-normal text-gray-500">(Rinku Chinky)</span></p>
                <p className="font-bold text-[#1A1A1A]">+91 9414310499 <span className="font-normal text-gray-500">(Suraj Mal Saini)</span></p>
              </div>
            </div>

            {/* Contact Card 3: Location Studio */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-md text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-lg mb-4 shadow-sm">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="font-serif text-lg text-[#1A1A1A] font-bold mb-1">
                Headquarters
              </h3>
              <p className="text-xs text-[#1A1A1A] font-medium leading-relaxed mb-1">
                Ranthambore National Park Road, Sawai Madhopur, Rajasthan
              </p>
              <p className="text-[11px] text-gray-500 font-light">
                Serving all heritage forts, palaces & resorts across Rajasthan.
              </p>
            </div>

          </div>

          {/* Map & Studio Location Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: LUXURY_EASE }}
            className="bg-white rounded-3xl border border-rose-200/90 shadow-2xl overflow-hidden"
          >
            {/* Header Header */}
            <div className="p-6 sm:p-10 border-b border-rose-100/80 bg-gradient-to-r from-rose-50/50 via-white to-rose-50/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">
                  ✦ Studio & Equipment Warehouse Location ✦
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-bold">
                  Suraj Light House • Ranthambore HQ
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5255] font-light mt-1 max-w-xl">
                  Visit our studio showroom and staging warehouse on Ranthambore Road, Sawai Madhopur.
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-3">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Suraj+Light+House+Ranthambore+Road+Sawai+Madhopur+Rajasthan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition transform hover:scale-105"
                >
                  <i className="fa-solid fa-diamond-turn-right text-xs"></i>
                  <span>Open Directions</span>
                </a>
              </div>
            </div>

            {/* Interactive Map & Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Map Iframe Column */}
              <div className="lg:col-span-8 h-[380px] sm:h-[460px] relative bg-neutral-100">
                <iframe
                  title="Suraj Light House Location Map"
                  src="https://maps.google.com/maps?q=Ranthambore+Road,+Sawai+Madhopur,+Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.05] saturate-[1.1]"
                ></iframe>
                
                {/* Floating Map Pin Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-rose-200/80 flex items-center gap-3 pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-[#E63956] text-white flex items-center justify-center text-xs shadow-md">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-xs text-[#1A1A1A] block">Suraj Light House</span>
                    <span className="text-[10px] text-gray-500">Ranthambore Road, Sawai Madhopur</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Info Column */}
              <div className="lg:col-span-4 p-6 sm:p-8 bg-[#FAF6F0] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-rose-100">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-map-pin text-[#E63956]"></i>
                      <span>Physical Address</span>
                    </h4>
                    <p className="text-xs text-[#5A5255] leading-relaxed font-light">
                      Suraj Light House<br />
                      Ranthambore National Park Road<br />
                      Sawai Madhopur, Rajasthan — 322001
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-clock text-[#E63956]"></i>
                      <span>Studio Working Hours</span>
                    </h4>
                    <p className="text-xs text-[#5A5255] leading-relaxed font-light">
                      <strong className="text-[#1A1A1A]">Consultation:</strong> Mon – Sun: 9:00 AM – 9:00 PM<br />
                      <strong className="text-[#1A1A1A]">Event Deployments:</strong> 24/7 Active Field Dispatch
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-truck-fast text-[#E63956]"></i>
                      <span>Service Radius</span>
                    </h4>
                    <p className="text-xs text-[#5A5255] leading-relaxed font-light">
                      Ranthambore, Sawai Madhopur, Jaipur, Udaipur, Jodhpur, and all luxury destination wedding resorts across Rajasthan.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-rose-200/80">
                  <a
                    href="tel:+919782962963"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-rose-50 text-[#E63956] border border-rose-200 font-bold text-xs tracking-wider uppercase shadow-sm flex items-center justify-center gap-2 transition"
                  >
                    <i className="fa-solid fa-phone text-xs"></i>
                    <span>Call +91 97829 62963</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </section>
      </div>

    </motion.div>
  );
}
