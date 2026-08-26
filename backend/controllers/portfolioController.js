const PortfolioItem = require('../models/PortfolioItem');

// Fallback seed portfolio data if database is empty
const defaultPortfolio = [
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

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
exports.getPortfolio = async (req, res) => {
  try {
    let items = await PortfolioItem.find().sort({ order: 1 });
    if (!items || items.length === 0) {
      items = defaultPortfolio;
    }
    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    // Return default items gracefully if DB is disconnected
    res.status(200).json({
      success: true,
      count: defaultPortfolio.length,
      data: defaultPortfolio
    });
  }
};
