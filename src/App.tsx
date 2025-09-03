import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandCarousel from './components/BrandCarousel';
import FeaturesSection from './components/FeaturesSection';
import CollectionsSection from './components/CollectionsSection';
import ProductShowcase from './components/ProductShowcase';
import LimitedOffers from './components/LimitedOffers';
import ImageSliderSection from './components/ImageSliderSection'; // Importe o novo componente
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* --- Efeito de Luz e Profundidade --- */}
      <div
        className="
          fixed bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-2/3
          bg-glow
          blur-3xl opacity-25
          -z-10 pointer-events-none
        "
      />
      <Header />
      <HeroSection />
      <ProductShowcase />
      <CollectionsSection/>
      <FeaturesSection />
      <LimitedOffers />
      <ImageSliderSection /> {/* Adicione o novo componente aqui */}
      <BrandCarousel />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
