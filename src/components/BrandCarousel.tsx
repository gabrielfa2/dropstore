import React, { useState, useEffect } from 'react'; // ADICIONADO: useState e useEffect

const BrandCarousel = () => {
  const brands = [
    { src: '/shopify.PNG', alt: 'Shopify' },
    { src: '/google.WEBP', alt: 'Google' },
    { src: '/meta.PNG', alt: 'Meta' },
    { src: '/picpay-1.svg', alt: 'PicPay' },
    { src: '/mercado.PNG', alt: 'Mercado Pago' },
    { src: '/nubank.PNG', alt: 'Nubank' },
  ];

  // ADICIONADO: Estado para controlar a animação
  const [animate, setAnimate] = useState(false);

  // ADICIONADO: Hook para ativar a animação APÓS a montagem do componente
  useEffect(() => {
    // Usamos um pequeno timeout para garantir que o navegador renderize o DOM
    // e calcule o layout 'w-max' antes de aplicar a classe de animação.
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Um pequeno atraso (100ms) é geralmente suficiente.

    return () => clearTimeout(timer);
  }, []); // O array vazio [] garante que isso rode apenas uma vez (na montagem)

  return (
    <section className="py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 font-medium" style={{ fontFamily: "'Permanent Marker', cursive" }}>
          Marcas utilizadas
        </p>
       
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* ALTERADO: A classe 'animate-marquee' agora é condicional.
            Ela só será adicionada quando o estado 'animate' for verdadeiro.
          */}
          <div 
            className={`flex items-center space-x-16 w-max ${animate ? 'animate-marquee' : ''}`}
          >
            {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
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