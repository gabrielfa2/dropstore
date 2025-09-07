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

  return (
    <section className="py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 font-medium" style={{ fontFamily: "'Permanent Marker', cursive" }}>
          Marcos utilizados
        </p>
        
        <div className="relative w-full overflow-hidden">
          {/* Efeito de fade nas laterais para suavizar a entrada e saída */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Use `animate-marquee` e `group-hover:paused` */}
          <div className="flex animate-marquee items-center space-x-16">
            {/* Duplicando as logos para o loop infinito */}
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.alt}
                className="
                  flex-shrink-0
                  h-10
                  w-auto
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition-all
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