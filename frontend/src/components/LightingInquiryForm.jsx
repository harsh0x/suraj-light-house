import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitInquiry } from '../services/api';

export default function LightingInquiryForm({ onShowToast }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // 8 Field State Object matching specification
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    email: '',
    phone: '',
    date: '',
    guests: '300 - 600 Guests',
    service: 'Full Event Lighting',
    vision: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage('Please fill in both your name and email address.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await submitInquiry(formData);
      if (onShowToast) {
        onShowToast(res.message || 'Thank you! Your lighting & decor inquiry has been received.');
      }
      // Reset form
      setFormData({
        name: '',
        partnerName: '',
        email: '',
        phone: '',
        date: '',
        guests: '300 - 600 Guests',
        service: 'Full Event Lighting',
        vision: ''
      });
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Unable to submit inquiry. Please call +91 97829 62963 directly.');
    } finally {
      setLoading(false);
    }
  };

  // Form Cascading Animation Variants
  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="inquiry-section" className="bg-[#FAF6F0] py-20 px-6 md:px-12 border-t border-rose-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header with smooth entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Reserve Your Event Date ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-3">
            Let's Illuminate Your Big Day
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto leading-relaxed font-light">
            Connect with Rajasthan's master event illuminators and royal tenting artisans to craft an unforgettable spectacle.
          </p>
        </motion.div>

        {/* Form Container with Staggered Cascading Rows */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-rose-200/90"
        >
          
          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation text-rose-600 text-sm"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          <motion.form 
            variants={formVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-5"
          >
            
            {/* ROW 1: "YOUR NAME *" and "ORGANIZATION / HOST NAME" */}
            <motion.div variants={rowVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                  YOUR NAME *
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                  HOST / EVENT NAME
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Sharma Royal Wedding / Gala Night"
                  value={formData.partnerName}
                  onChange={(e) => handleChange('partnerName', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                />
              </div>
            </motion.div>

            {/* ROW 2: "EMAIL ADDRESS *" and "PHONE NUMBER" */}
            <motion.div variants={rowVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="rajesh@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
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
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                />
              </div>
            </motion.div>

            {/* ROW 3: "EVENT DATE", "VENUE SIZE / AREA", "LIGHTING THEME REQUIRED" */}
            <motion.div variants={rowVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                  EVENT DATE
                </label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                  VENUE SIZE / CAPACITY
                </label>
                <select 
                  value={formData.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
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
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                >
                  <option value="Royal Amber Gold & Crystal Chandeliers">Royal Amber Gold & Crystal Chandeliers</option>
                  <option value="Heritage Shamiyana & Tenting Architecture">Heritage Shamiyana & Tenting Architecture</option>
                  <option value="Concert Stage, Truss & Moving Beams">Concert Stage, Truss & Moving Beams</option>
                  <option value="Starry Night Fairy Tunnel & Edison Globes">Starry Night Fairy Tunnel & Edison Globes</option>
                  <option value="Architectural Facade Wash & Laser FX">Architectural Facade Wash & Laser FX</option>
                  <option value="Full Turnkey Event Illumination & Silent Power">Full Turnkey Event Illumination & Silent Power</option>
                </select>
              </div>
            </motion.div>

            {/* ROW 4: "TELL US ABOUT YOUR EVENT & LIGHTING REQUIREMENTS" */}
            <motion.div variants={rowVariants}>
              <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                TELL US ABOUT YOUR EVENT & LIGHTING REQUIREMENTS
              </label>
              <textarea 
                rows="4"
                placeholder="Describe your venue location (e.g. Nahargarh Fort, Six Senses Barwara, Sawai Vilas), desired chandelier quantities, stage trussing dimensions, generator requirements, or custom decor themes..."
                value={formData.vision}
                onChange={(e) => handleChange('vision', e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
              ></textarea>
            </motion.div>

            {/* Submit Button with Spring Micro-interactions */}
            <motion.div variants={rowVariants} className="pt-3">
              <motion.button 
                whileHover={{ 
                  scale: 1.03, 
                  y: -2, 
                  boxShadow: "0 20px 30px -5px rgba(230, 57, 86, 0.5)" 
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold tracking-widest uppercase text-xs shadow-xl disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Book Your Light</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

        </motion.div>

      </div>
    </section>
  );
}
