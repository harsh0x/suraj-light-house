import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitInquiry } from '../services/api';

export default function QuoteModal({ isOpen, onClose, initialService = 'Full Event Lighting', onSuccess }) {
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

  // Prefill service
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
      if (onSuccess) {
        onSuccess(res.message || 'Thank you! Your lighting & decor inquiry has been received.');
      }
      onClose();
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[105] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto cursor-pointer"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 shadow-2xl border border-rose-200/80 relative my-8 cursor-default"
          >
            
            {/* Top-Right Close 'X' Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-rose-50 text-[#E63956] hover:bg-[#E63956] hover:text-white flex items-center justify-center transition shadow-sm border border-rose-200 cursor-pointer"
              aria-label="Close modal"
              title="Close form (ESC)"
            >
              <i className="fa-solid fa-xmark text-base"></i>
            </motion.button>

            {/* Modal Header */}
            <div className="text-center mb-8 pr-8 pl-8 flex flex-col items-center">
              <img 
                src="/logo.png" 
                alt="Suraj Light's Ranthambore" 
                className="h-14 sm:h-16 w-auto object-contain mb-2 drop-shadow"
              />
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block">✦ Suraj Light's Ranthambore ✦</span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-bold mt-1">
                Request an Event Lighting Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5255] mt-2 max-w-lg mx-auto font-light leading-relaxed">
                Connect directly with our master lighting designers and electrical engineers for your celebration in Ranthambore & Rajasthan.
              </p>
            </div>

            {/* Error Alert */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
                <i className="fa-solid fa-circle-exclamation text-rose-600 text-sm"></i>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 8-Field Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* ROW 1: "YOUR NAME *" and "EVENT / HOST NAME" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                    EVENT / HOST NAME
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Rathore Royal Sangeet & Reception"
                    value={formData.partnerName}
                    onChange={(e) => handleChange('partnerName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* ROW 2: "EMAIL ADDRESS *" and "PHONE NUMBER" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* ROW 3: "ESTIMATED DATE", "ESTIMATED GUESTS", "DESIRED SERVICE" */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                    EVENT DATE
                  </label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                    ESTIMATED GUESTS
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => handleChange('guests', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                  >
                    <option value="Under 150 Guests">Under 150 Guests</option>
                    <option value="150 - 300 Guests">150 - 300 Guests</option>
                    <option value="300 - 600 Guests">300 - 600 Guests</option>
                    <option value="600 - 1200 Guests">600 - 1200 Guests</option>
                    <option value="1200+ Royal Mega Setup">1200+ Royal Mega Setup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                    DESIRED SERVICE
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                  >
                    <option value="Full Event Lighting">Full Event Lighting</option>
                    <option value="Tenting & Decor">Tenting & Decor</option>
                    <option value="Corporate Setup">Corporate Setup</option>
                    <option value="Royal Heritage Wedding Decor">Royal Heritage Wedding Decor</option>
                    <option value="Stage & Truss Illumination">Stage & Truss Illumination</option>
                    <option value="Sound & Generator Redundancy">Sound & Generator Redundancy</option>
                  </select>
                </div>
              </div>

              {/* ROW 4: "TELL US ABOUT YOUR EVENT & LIGHTING REQUIREMENTS" */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                  TELL US ABOUT YOUR EVENT & LIGHTING REQUIREMENTS
                </label>
                <textarea 
                  rows="4"
                  placeholder="Describe your venue location, tenting needs, stage trussing, generator requirements, or custom themes..."
                  value={formData.vision}
                  onChange={(e) => handleChange('vision', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                ></textarea>
              </div>

              {/* Submit & Cancel Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="flex-1 w-full py-4 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold tracking-widest uppercase text-xs shadow-xl disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                      <span>Transmitting to Suraj Light House Concierge...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Lighting Inquiry</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </>
                  )}
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FAF6F0] hover:bg-rose-50 text-[#5A5255] hover:text-[#1A1A1A] border border-rose-200 text-xs font-bold tracking-widest uppercase transition cursor-pointer"
                >
                  Close
                </motion.button>
              </div>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
