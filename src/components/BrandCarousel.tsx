import React from 'react';

const BrandCarousel = () => {
  const brands = [
    { src: '/shopify.PNG', alt: 'Shopify' },
    { src: '/google.WEBP', alt: 'Google' },
    { src: '/meta.PNG', alt: 'Meta' },
    { src: '/picpay-1.svg', alt: 'PicPay' },
    { src: '/mercado.PNG', alt: 'Mercado Pago' },
    { src: '/nubank.PNG', alt: 'Nubank' },
  ];

  // A animação agora é puramente controlada por CSS,
  // removendo a necessidade de useState e useEffect para este componente.
  // Isso torna o componente mais leve e performático.

  return (
    <section className="py-12 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 font-medium" style={{ fontFamily: "'Permanent Marker', cursive" }}>
          Marcas utilizadas
        </p>
        
        {/* 'group' é adicionado para controlar o hover de dentro para fora */}
        <div className="relative w-full overflow-hidden group">
          {/* Fades nas laterais para suavizar a entrada e saída */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee group-hover:pause">
            {/* OTIMIZAÇÃO 1: Reduzido de 5 cópias para apenas 2.
              Isto é tudo que é necessário para um loop perfeito e corta 
              o número de elementos no DOM de 30 para 12.
            */}
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.alt}
                // OTIMIZAÇÃO 2: Adicionado 'loading="lazy"'
                loading="lazy" 
                className="
                  flex-shrink-0
                  h-10
                  w-auto
                  object-contain
                  opacity-80
                  transition-opacity
                  mx-8 /* Usando margem em vez de space-x para melhor consistência */
                "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;