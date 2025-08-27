import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandCarousel from './components/BrandCarousel';
import FeaturesSection from './components/FeaturesSection';
import ProductShowcase from './components/ProductShowcase';
import LimitedOffers from './components/LimitedOffers';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <BrandCarousel />
      <FeaturesSection />
      <ProductShowcase />
      <LimitedOffers />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
