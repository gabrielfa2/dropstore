import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const ImageSliderSection = () => {
  return (
    // Container para o espaçamento vertical e padding horizontal
    <div className="my-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Container principal com fundo e posicionamento relativo */}
        <div className="relative isolate overflow-hidden rounded-3xl p-8 md:p-16">
          
          {/* Vídeo de fundo */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover -z-20"
          >
            <source src="/fundoslider.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo em HTML5.
          </video>

          {/* Camada de overlay para dar contraste */}
          <div className="absolute inset-0 bg-gray-200/40 -z-10"></div>

          {/* Elemento para a textura de tijolos */}
          <div className="absolute inset-0 bg-brick-wall opacity-50 mix-blend-multiply -z-10"></div>
          
          {/* Elementos para os brilhos pulsantes */}
          <div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-400/40 to-yellow-400/0 rounded-full animate-pulse-glow -z-10"
            style={{ animationDelay: '0s' }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-300/40 to-orange-400/0 rounded-full animate-pulse-glow -z-10"
            style={{ animationDelay: '3s' }}
          ></div>

          {/* Conteúdo que fica por cima do fundo */}
          <div className="relative z-10">
            <div className="text-center">
              <h3 className="text-4xl font-black text-black mb-4 font-display">
                  O que é usar <span className="text-orange-500">DRIP:</span>
              </h3>
              <p className="text-xl text-gray-700 mb-8 font-medium">
                  Arraste para comparar o antes e depois.
              </p>
            </div>

            {/* Slider com efeito glassmorphism */}
            <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md p-2">
              <ImgComparisonSlider value="30">
                <img slot="first" src={"/depoiscerto.PNG"} alt="Antes" />
                <img slot="second" src={"/antescerto.PNG"} alt="Depois" />
              </ImgComparisonSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderSection;
