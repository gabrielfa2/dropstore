import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Textos que irão aparecer no slider
const slides = [
  { text: 'CUPOM PRIMEIRA COMPRA', code: 'bemvindo10' },
  { text: 'PARCELE EM ATÉ 12X SEM JUROS' },
  { text: 'COMPRAS ACIMA DE R$297 FRETE GRÁTIS' }
];

const InfoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Efeito para trocar de slide automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    // Limpa o timer quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-white w-full py-3 overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-center text-center h-6">
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <div className="text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
            <span>{currentSlide.text}</span>
            {/* Mostra o código do cupom se ele existir no slide atual */}
            {currentSlide.code && (
              <span className="ml-2 font-bold bg-gray-200 text-black px-2 py-0.5 rounded-md">
                {currentSlide.code}
              </span>
            )}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSlider;