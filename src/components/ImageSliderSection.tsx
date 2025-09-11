import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const ImageSliderSection = () => {
      {/* Conteúdo sobreposto ao vídeo */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <h3 className="text-4xl font-black text-black mb-4 font-display">
          O que é usar <span className="text-orange-500">DRIP:</span>
        </h3>
        <p className="text-lg text-gray-700 mb-8 font-medium">
          Arraste para comparar o antes e depois.
        </p>

        {/* Slider destacado */}
        <div className="w-full rounded-2xl overflow-hidden bg-black/30 backdrop-blur-md p-2 shadow-3xl">
          <ImgComparisonSlider 
            value="30" 
            style={{ 
              '--divider-line-color': 'black', 
              '--divider-handle-color': 'black',
              '--divider-handle-glow': 'black'
            }}>
            <img slot="first" src={"/depoiscerto.PNG"} alt="Antes" />
            <img slot="second" src={"/antescerto.PNG"} alt="Depois" />
          </ImgComparisonSlider>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderSection;