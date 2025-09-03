import React from 'react';

const ProductShowcase = () => {
  // Array de imagens facilmente editável - adicione/remova/altere conforme necessário
  const showcaseImages = [
    {
      id: 1,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/print2.webp',
      alt: 'Look urbano masculino',
      caption: 'Estilo que fala por você 🔥'
    },
    {
      id: 2,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/printinsta.jpg',
      alt: 'Moda feminina jovem',
      caption: 'Seja a tendência ✨'
    },
    {
      id: 3,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/print2.webp',
      alt: 'Street style',
      caption: 'Autenticidade em cada peça'
    },
    {
      id: 4,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/printinsta.jpg',
      alt: 'Look casual chic',
      caption: 'Conforto com estilo 💫'
    },
    {
      id: 5,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/print2.webp',
      alt: 'Moda jovem',
      caption: 'Vista sua personalidade'
    },
    {
      id: 6,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/printinsta.jpg',
      alt: 'Tendência urbana',
      caption: 'O futuro da moda 🚀'
    },
    {
      id: 7,
      src: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/print2.webp',
      alt: 'Estilo autêntico',
      caption: 'Seja você mesmo'
    }
  ];

  return (
    <section className="pt-8 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4">
            Quem usa DROP, <span className="text-orange-500">usa MODA!</span>
          </h3>
          <p className="text-xl text-gray-600 font-medium">
            Vai ficar de fora?
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade effect nas laterais */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-cream to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-cream to-transparent z-10"></div>
          
          {/* Carrossel contínuo */}
          <div className="flex animate-[scroll_5s_linear_infinite] items-center space-x-6">
            {/* Duplicamos o array para criar o loop infinito */}
            {[...showcaseImages, ...showcaseImages].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <div className="w-48 h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay com caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-bold text-center">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action com o novo botão */}
        <div className="text-center mt-12">
           <button className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
             <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
             <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />
             <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
               <span className="select-none font-bold">Quero fazer parte! 🔥</span>
             </div>
           </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;