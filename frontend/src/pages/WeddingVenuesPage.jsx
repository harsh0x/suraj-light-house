import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const categories = [
  { id: 'all', name: 'All Heritage Venues' },
  { id: 'ranthambore', name: 'Ranthambore & Sawai Madhopur' },
  { id: 'palaces', name: 'Royal Palaces & Forts' },
  { id: 'havelis', name: 'Heritage Havelis & Resorts' },
  { id: 'ballrooms', name: 'Luxury Convention Ballrooms' }
];

const venuesList = [
  {
    id: 'nahargarh-ranthambore',
    name: 'Nahargarh Palace Ranthambore',
    category: 'ranthambore',
    location: 'Sawai Madhopur, Rajasthan',
    type: 'Aristocratic Rajputana Fortress Palace',
    capacity: '200 - 1500 Guests',
    rooms: '100+ Royal Rooms & Haveli Courtyards',
    spaces: 'Hathi Kund, Lancer Lawns, Amphitheatre, Mughal Courtyard',
    image: 'https://images.unsplash.com/photo-photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80',
    tag: 'Ranthambore Flagship',
    priceCategory: 'Heritage Fort Luxury'
  },
  {
    id: 'six-senses-fort-barwara',
    name: 'Six Senses Fort Barwara',
    category: 'ranthambore',
    location: 'Chauth Ka Barwara, Sawai Madhopur',
    type: '14th-Century Restored Royal Citadel',
    capacity: '150 - 600 Guests',
    rooms: '48 Palatial Suites',
    spaces: 'Zenana Mahal Lawns, Barwara Courtyard, Pool Pavilion',
    image: 'https://images.unsplash.com/photo-1590059390046-5544719b0270?auto=format&fit=crop&w=1200&q=80',
    tag: 'Celebrity Fort Sanctuary',
    priceCategory: 'Ultra Luxury Citadel'
  },
  {
    id: 'the-oberoi-vanyavilas',
    name: 'The Oberoi Vanyavilas Wildlife Resort',
    category: 'ranthambore',
    location: 'Ranthambore Road, Sawai Madhopur',
    type: '5-Star Luxury Jungle Pavilion Estate',
    capacity: '80 - 300 Guests',
    rooms: '25 Luxury Tents',
    spaces: 'Mango Orchard, Lily Pond Lawn, Amphitheatre',
    image: 'https://images.unsplash.com/photo-photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    tag: 'Jungle Luxury Pavilion',
    priceCategory: '5-Star Wildlife Resort'
  },
  {
    id: 'sawai-vilas-ranthambore',
    name: 'Sawai Vilas Ranthambore',
    category: 'ranthambore',
    location: 'Sawai Madhopur, Rajasthan',
    type: 'Boutique Heritage Villa Retreat',
    capacity: '100 - 500 Guests',
    rooms: '60 Luxury Villas',
    spaces: 'Main Pool Courtyard, Central Banquet Lawn, Terrace',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    tag: 'Exclusive Villa Retreat',
    priceCategory: 'Boutique Luxury'
  },
  {
    id: 'rambagh-palace',
    name: 'Rambagh Palace Jaipur',
    category: 'palaces',
    location: 'Jaipur, Rajasthan',
    type: 'Royal Residence of the Maharaja',
    capacity: '200 - 1500 Guests',
    rooms: '78 Luxury Suites',
    spaces: 'Mughal Lawns, Oriental Garden, Jaigarh Hall',
    image: 'https://images.unsplash.com/photo-photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    tag: 'Jewel of Jaipur',
    priceCategory: 'Ultra Luxury Palace'
  },
  {
    id: 'the-leela-palace-udaipur',
    name: 'The Leela Palace Udaipur',
    category: 'palaces',
    location: 'Lake Pichola, Udaipur',
    type: 'Lakeside Palace Resort',
    capacity: '100 - 500 Guests',
    rooms: '80 Lake-View Rooms & Royal Suites',
    spaces: 'Pichola Lawns, Guava Garden, Marwar Hall',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tag: 'Iconic Lakefront',
    priceCategory: 'Ultra Luxury'
  },
  {
    id: 'samode-palace',
    name: 'Samode Palace & Haveli',
    category: 'havelis',
    location: 'Samode, Rajasthan',
    type: 'Historic 475-Year Haveli',
    capacity: '100 - 600 Guests',
    rooms: '43 Heritage Suites',
    spaces: 'Sheesh Mahal, Darbar Hall, Rooftop Infinity Pool',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Mirrored Sheesh Mahal',
    priceCategory: 'Heritage Royalty'
  },
  {
    id: 'fairmont-jaipur',
    name: 'Fairmont Jaipur',
    category: 'palaces',
    location: 'Kukas, Jaipur',
    type: 'Grand Mughal Palace & Amphitheatre',
    capacity: '250 - 2000 Guests',
    rooms: '245 Royal Rooms',
    spaces: 'Central Courtyard, Grand Ballroom, Aravalli Lawns',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tag: 'Palatial Amphitheatre',
    priceCategory: 'Luxury Palace'
  }
];

export default function WeddingVenuesPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVenue, setSelectedVenue] = useState(null);

  const filteredVenues = activeCategory === 'all' 
    ? venuesList 
    : venuesList.filter(v => v.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      <div>
        {/* Hero Section */}
        <section className="relative text-white pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 md:px-12 text-center bg-[#E63956] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Ranthambore & Royal Rajasthan ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Iconic Heritage Venues We Illuminate
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the prestigious palaces, wildlife luxury resorts, and fort citadels where Suraj Light House provides end-to-end event lighting, tenting, and heavy power grids.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-8 bg-white border-b border-rose-100 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#E63956] text-white shadow-md'
                    : 'bg-[#FAF6F0] text-[#5A5255] hover:bg-rose-50 hover:text-[#E63956]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Venues Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, idx) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-rose-200/80 hover:shadow-2xl transition duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-60 w-full overflow-hidden relative">
                    <img 
                      src={venue.image} 
                      alt={venue.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#E63956] shadow-sm">
                      {venue.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 bg-[#1A1A1A]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm">
                      {venue.capacity}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#E63956] mb-1 uppercase tracking-wider">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{venue.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-bold mb-2">{venue.name}</h3>
                    <p className="text-xs text-gray-500 font-medium mb-4">{venue.type}</p>
                    
                    <div className="pt-3 border-t border-rose-100 space-y-1.5 text-xs text-[#5A5255]">
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-bed text-[#E63956] text-xs w-4"></i>
                        <span>{venue.rooms}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-solid fa-layer-group text-[#E63956] text-xs w-4"></i>
                        <span>{venue.spaces}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(`Lighting Setup at ${venue.name}`)}
                    className="w-full py-3 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
                  >
                    Inquire For This Venue
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">✦ Have Another Venue in Mind? ✦</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold mb-4">
                We Deploy Anywhere Across Rajasthan
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Whether an open-ground royal farm, a wildlife resort, or a private haveli courtyard, our team brings heavy generators, aluminum trusses, and grand chandeliers to your venue.
              </p>
              <button
                onClick={() => onOpenBooking('Custom Venue Lighting')}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Inquire For Your Venue</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
