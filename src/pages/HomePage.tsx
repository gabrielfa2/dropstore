import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSlider from '../components/InfoSlider'; // Importe o novo componente
import BrandCarousel from '../components/BrandCarousel';
import FeaturesSection from '../components/FeaturesSection';
import CollectionsSection from '../components/CollectionsSection';
import ProductShowcase from '../components/ProductShowcase';
import LimitedOffers from '../components/LimitedOffers';
import ImageSliderSection from '../components/ImageSliderSection';
import SocialProof from '../components/SocialProof';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <InfoSlider /> {/* Adicione o slider aqui */}
      <ProductShowcase />
      <LimitedOffers />
      <FeaturesSection />
      <CollectionsSection />
      <ImageSliderSection />
      <BrandCarousel />
      <SocialProof />
    </>
  );
};

export default HomePage;