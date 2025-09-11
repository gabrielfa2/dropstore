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

  // Componente interno para evitar repetição de código
  const BrandImages = () => (
    <>
      {brands.map((brand, index) => (
        <img
          key={index}
          src={brand.src}
          alt={brand.alt}
          loading="lazy"
          className="
            flex-shrink-0      /* Não deixa a imagem encolher */
            h-10               /* Altura fixa */
            w-auto             /* Largura automática */
            object-contain     /* Garante que a imagem caiba sem distorcer */
            mx-8               /* Espaçamento horizontal */
            opacity-80
          "
        />
      ))}
    </>
  );

  return (
    <section className="py-12 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 font-medium" style={{ fontFamily: "'Permanent Marker', cursive" }}>
          Marcas utilizadas
        </p>
        
        <div 
          className="relative w-full overflow-hidden group" 
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex group-hover:[animation-play-state:paused]">
            {/* A nova abordagem:
              Renderizamos DOIS containers. O primeiro anima para a esquerda.
              Quando ele sai da tela, o segundo está exatamente no lugar, criando um loop perfeito.
              A animação `animate-marquee` agora vem direto da configuração do Tailwind.
            */}
            <div className="flex flex-shrink-0 items-center animate-marquee">
              <BrandImages />
            </div>
            <div className="flex flex-shrink-0 items-center animate-marquee">
              <BrandImages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;