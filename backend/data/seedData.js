const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PortfolioItem = require('../models/PortfolioItem');

dotenv.config();

const portfolioItems = [
  {
    title: "High-Energy Sangeet & Live DJ Concert Production",
    category: "Concert Truss & Sangeet Dance Floor",
    location: "Nahargarh Fort, Ranthambore",
    imageUrl: "/assets/portfolio-dj-dance-sangeet.jpg",
    description: "Full aluminum box truss concert rigging, sharpie beam moving heads, geometric pattern dance floor, and high-wattage live DJ sound & light synchronization.",
    order: 1
  },
  {
    title: "Grand Royal Wedding Mandap & Live Audio Control",
    category: "Theatrical Mandap & Sound Engineering",
    location: "The Oberoi Vanyavilas, Ranthambore",
    imageUrl: "/assets/portfolio-outdoor-mandap-mixer.jpg",
    description: "Dynamic RGBW mandap stage wash lighting, ambient landscape floodlights, multi-channel sound mixing console, and ceremonial lighting control.",
    order: 2
  },
  {
    title: "Regal Bougainvillea Archway & Warm Edison Canopy",
    category: "Heritage Floral Arch & Edison Bulbs",
    location: "Six Senses Fort Barwara",
    imageUrl: "/assets/portfolio-bougainvillea-arch-swing.jpg",
    description: "Intricate carved heritage palace arches festooned with fresh bougainvillea cascades, vintage warm pendant Edison bulbs, and golden uplighting fixtures.",
    order: 3
  },
  {
    title: "Grand Crimson Velvet Stage & Crystal Chandelier Pavilion",
    category: "Royal Crimson Rose & Crystal Chandeliers",
    location: "Sawai Madhopur Palace, Rajasthan",
    imageUrl: "/assets/portfolio-royal-red-rose-palace-stage.jpg",
    description: "Extravagant red rose architectural archways, gilded cage columns, suspended multi-tier crystal chandeliers, and opulent velvet red carpet stage production.",
    order: 4
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/suraj_light_house');
    console.log('✨ Connected to MongoDB for seeding Suraj Light House portfolio...');
    
    await PortfolioItem.deleteMany();
    await PortfolioItem.insertMany(portfolioItems);

    console.log('✅ Seeded Suraj Light House portfolio items successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
