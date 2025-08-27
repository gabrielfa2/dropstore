import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandCarousel from './components/BrandCarousel';
import ProductShowcase from './components/ProductShowcase';
import LimitedOffers from './components/LimitedOffers';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-300">
      <Header />
      <HeroSection />
      <BrandCarousel />
      <ProductShowcase />
      <LimitedOffers />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;