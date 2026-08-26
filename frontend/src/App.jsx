import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import LightboxModal from './components/LightboxModal';
import Toast from './components/Toast';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Preloader from './components/Preloader';

// Page Components
import HomePage from './pages/HomePage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import CorporateEventsPage from './pages/CorporateEventsPage';
import SocialEventsPage from './pages/SocialEventsPage';
import CelebrityArtistPage from './pages/CelebrityArtistPage';
import DestinationIndiaPage from './pages/DestinationIndiaPage';
import DestinationAbroadPage from './pages/DestinationAbroadPage';
import WeddingVenuesPage from './pages/WeddingVenuesPage';
import RealWeddingsPage from './pages/RealWeddingsPage';
import GalleryPage from './pages/GalleryPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFound from './pages/NotFound';

import { INITIAL_PORTFOLIO } from './data/lightingData';
import { fetchPortfolio } from './services/api';

// Scroll To Top on Route Change Helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Animated Route Container with Framer Motion AnimatePresence
function AnimatedRoutes({
  portfolioItems,
  onOpenBooking,
  onImageClick,
  onShowToast
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* Route 1: Home Landing Page */}
        <Route 
          path="/" 
          element={
            <HomePage
              portfolioItems={portfolioItems}
              onOpenBooking={onOpenBooking}
              onImageClick={onImageClick}
              onShowToast={onShowToast}
            />
          } 
        />

        {/* Route 1.5: Our Heritage / About Us Page */}
        <Route 
          path="/about" 
          element={
            <AboutUsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 2: Client Appreciations / Testimonials Page */}
        <Route 
          path="/testimonials" 
          element={
            <TestimonialsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 3: Light Up Your Event / Contact Us Page */}
        <Route 
          path="/contact" 
          element={
            <ContactPage 
              onShowToast={onShowToast}
            />
          } 
        />

        {/* Route 4: Corporate Events */}
        <Route 
          path="/services/corporate" 
          element={
            <CorporateEventsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 5: Social Events */}
        <Route 
          path="/services/social" 
          element={
            <SocialEventsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 6: Celebrity & Artist Management */}
        <Route 
          path="/services/celebrity-artist" 
          element={
            <CelebrityArtistPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 7: Destination Wedding in India */}
        <Route 
          path="/destination-wedding-india" 
          element={
            <DestinationIndiaPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 8: Destination Wedding in Abroad */}
        <Route 
          path="/destination-wedding-abroad" 
          element={
            <DestinationAbroadPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 9: Wedding Venues */}
        <Route 
          path="/wedding-venues" 
          element={
            <WeddingVenuesPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 10: Real Productions & Grand Setups */}
        <Route 
          path="/real-weddings" 
          element={
            <RealWeddingsPage onOpenBooking={onOpenBooking} />
          } 
        />

        {/* Route 11: Gallery */}
        <Route 
          path="/gallery" 
          element={
            <GalleryPage />
          } 
        />

        {/* Route 12: 404 Not Found Page */}
        <Route 
          path="*" 
          element={
            <NotFound 
              onOpenBooking={onOpenBooking} 
            />
          } 
        />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Event Lighting');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState(INITIAL_PORTFOLIO);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for sticky nav & bottom scroll-to-top detection
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 80;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const scrollPosition = window.innerHeight + window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          const isNearBottom = totalHeight > window.innerHeight && scrollPosition >= (totalHeight - 1000);
          setShowScrollTop(isNearBottom);

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch live portfolio data from MongoDB backend
  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const items = await fetchPortfolio();
        if (items && items.length > 0 && !items.some(it => it.location?.includes('Florida') || it.location?.includes('Miami') || it.title?.includes('Sunlit'))) {
          setPortfolioItems(items);
        }
      } catch (err) {
        console.log('Using initial lighting portfolio data');
      }
    };
    loadPortfolio();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleOpenBooking = (serviceName = 'Full Event Lighting') => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      {/* Premium Initial Preloader Animation */}
      <Preloader duration={2800} />

      <div className="relative min-w-full min-h-screen bg-[#FAF6F0] text-[#1A1A1A] font-sans selection:bg-[#E63956] selection:text-white flex flex-col justify-between">
        
        {/* Route Scroll Position Reset */}
        <ScrollToTop />

        {/* Toast Feedback */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

        {/* Lightbox Modal */}
        <LightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />

        {/* Quote Modal */}
        <QuoteModal 
          isOpen={bookingModalOpen} 
          onClose={() => setBookingModalOpen(false)}
          initialService={selectedService}
          onSuccess={(msg) => showToast(msg)}
        />

        {/* Global Navigation with Animated Dropdown */}
        <Navbar 
          isScrolled={isScrolled} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Multi-Page Animated Routing Outlet */}
        <main className="flex-grow">
          <AnimatedRoutes 
            portfolioItems={portfolioItems}
            onOpenBooking={handleOpenBooking}
            onImageClick={(img) => setLightboxImage(img)}
            onShowToast={showToast}
          />
        </main>

        {/* Global Luxury Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Floating WhatsApp Action Widget */}
        <FloatingWhatsAppButton 
          phoneNumber="+919782962963"
          message="Hello Suraj Light House! I am interested in your event lighting & tenting services in Ranthambore."
          theme="luxury"
          tooltipText="Chat with Suraj Light House"
        />

        {/* Floating Scroll-to-Top Button */}
        {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-[#E63956] border border-rose-200 shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 duration-200 backdrop-blur-sm animate-fade-in cursor-pointer"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-chevron-up text-xs"></i>
          </button>
        )}

      </div>
    </BrowserRouter>
  );
}
