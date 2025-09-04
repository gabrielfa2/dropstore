import React from 'react';
import HeroSection from '../components/HeroSection';
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