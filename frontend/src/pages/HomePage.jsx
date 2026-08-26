import React from 'react';
import { motion } from 'framer-motion';

import SurajHero from '../components/SurajHero';
import SurajAbout from '../components/SurajAbout';
import MosaicGallery from '../components/MosaicGallery';
import LightingServices from '../components/LightingServices';
import SetupsPortfolio from '../components/SetupsPortfolio';
import SurajCommitment from '../components/SurajCommitment';
import LightFeatures from '../components/LightFeatures';
import RanthamboreHeritageSection from '../components/RanthamboreHeritageSection';
import LightingFaq from '../components/LightingFaq';
import LightingInquiryForm from '../components/LightingInquiryForm';
import InstagramSection from '../components/InstagramSection';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage({
  portfolioItems,
  onOpenBooking,
  onImageClick,
  onShowToast
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {/* SECTION 1: Grand Hero */}
      <SurajHero onOpenBooking={onOpenBooking} />

      {/* SECTION 2: The Visionaries Behind The Light */}
      <SurajAbout 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* Curated Moments Mosaic Band */}
      <MosaicGallery onImageClick={onImageClick} />

      {/* SECTION 3: Lighting, Tenting & Royal Decor */}
      <LightingServices onOpenBooking={onOpenBooking} />

      {/* SECTION 4: Our Grand Setups & Capabilities */}
      <SetupsPortfolio 
        portfolioItems={portfolioItems}
        onOpenBooking={onOpenBooking}
        onImageClick={onImageClick}
      />

      {/* SECTION 5: Our Commitment */}
      <SurajCommitment 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* SECTION 6: The Suraj Standard (Floating Bubbles & Feature Cards) */}
      <LightFeatures 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* SECTION 7: Ranthambore & Rajasthan Royal Heritage Venues */}
      <RanthamboreHeritageSection 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* SECTION 8: Technical & Logistics FAQ */}
      <LightingFaq onImageClick={onImageClick} />

      {/* SECTION 9: Light Up Your Event Inquiry Form */}
      <LightingInquiryForm onShowToast={onShowToast} />

      {/* SECTION 10: Follow Us On Instagram */}
      <InstagramSection />

      {/* SECTION 11: Newsletter Lookbook & Catalog */}
      <NewsletterSection onShowToast={onShowToast} />
    </motion.div>
  );
}
