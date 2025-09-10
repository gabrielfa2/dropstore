import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const ImageSliderSection = () => {
  return (
    // Seção com vídeo de fundo em 9:16
    <div className="relative mx-auto my-1 px-4 aspect-[9/16] max-w-sm">
      
      {/* Vídeo de fundo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/fundoslider.mp4" type="video/mp4" />
      </video>

      {/* Conteúdo sobreposto ao vídeo */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <h3 className="text-3xl font-black text-black mb-4 font-display">
          O que é usar <span className="text-orange-500">DRIP:</span>
        </h3>
        <p className="text-lg text-gray-700 mb-8 font-medium">
          Arraste para comparar o antes e depois.
        </p>

        {/* Slider destacado */}
        <div className="w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md p-2 shadow-2xl">
          <ImgComparisonSlider value="30">
            <img slot="first" src={"/depoiscerto.PNG"} alt="Antes" />
            <img slot="second" src={"/antescerto.PNG"} alt="Depois" />
          </ImgComparisonSlider>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderSection;
