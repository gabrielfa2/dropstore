import React from 'react';

const BrandCarousel = () => {
  // 1. Estrutura de dados modificada para aceitar imagens
  //    Cada item é um objeto com 'src' (caminho da imagem) e 'alt' (texto alternativo)
  const brands = [
  { src: '/shopifylogo.png', alt: 'Shopify' },
  { src: '/google.WEBP', alt: 'Google' },
  { src: '/meta.PNG', alt: 'Meta' },
  { src: '/picpay-1.svg', alt: 'PicPay' },
  { src: '/mercado.PNG', alt: 'Mercado Pago' },
  { src: '/nubank.PNG', alt: 'Nubank' },
  // Você pode adicionar mais objetos aqui quando tiver os logos correspondentes.
  ];

  return (
    <section className="py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-8 font-medium">
          Marcas parceiras
        </p>
        
        <div className="relative w-full overflow-hidden">
          {/* Opcional: Efeito de fade nas laterais para suavizar a entrada e saída */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-cream to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-cream to-transparent z-10"></div>
          
          {/* A classe animate-scroll virá do arquivo de configuração do Tailwind */}
          <div className="flex animate-scroll items-center space-x-16">
            {/* 2. Mapeando o array duplicado para criar o loop infinito */}
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand.src} // O caminho da imagem que você irá definir
                alt={brand.alt} // O texto alternativo para acessibilidade
                // 3. Estilos aplicados diretamente na imagem
                className="
                  flex-shrink-0      // Impede que a imagem encolha
                  h-10               // Altura fixa para todos os logos (ajuste conforme necessário)
                  w-auto             // Largura automática para manter a proporção
                  object-contain     // Garante que a imagem inteira seja visível
                  filter grayscale   // Deixa os logos em escala de cinza
                  hover:grayscale-0  // Remove o filtro ao passar o mouse
                  opacity-80         // Leve transparência
                  hover:opacity-100  // Opacidade total ao passar o mouse
                  transition-all     // Animação suave para os efeitos
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