import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const LimitedOffers = () => {
  const products = [
    {
      id: 1,
      name: 'Camiseta Oversized Urban',
      price: 89.90,
      originalPrice: 129.90,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'ÚLTIMAS PEÇAS'
    },
    {
      id: 2,
      name: 'Moletom Street Style',
      price: 149.90,
      originalPrice: 199.90,
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'MAIS VENDIDO'
    },
    {
      id: 3,
      name: 'Calça Cargo Premium',
      price: 179.90,
      originalPrice: 249.90,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'EXCLUSIVO'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4 font-display">
            <span className="text-orange-500">Promoções</span> Imperdíveis
          </h3>
          <p className="text-xl text-gray-600 font-medium">
            Aproveite antes que acabe! Estoque limitado.
          </p>
        </div>

        {/* Grid de Produtos (sem alterações) */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.badge}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-3">
                  {product.name}
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-black text-orange-500">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-lg text-gray-400 line-through font-medium">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                  Adicionar ao Carrinho 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- SEÇÃO DO COMPARADOR DE IMAGENS ATUALIZADA --- */}
        <div className="my-16">
          {/* Container principal com fundo e posicionamento relativo */}
          <div className="relative isolate overflow-hidden bg-cream rounded-3xl p-8 md:p-16">
            
            {/* Elemento para a textura de tijolos */}
            <div className="absolute inset-0 bg-brick-wall opacity-60 mix-blend-multiply -z-10"></div>
            
            {/* Elementos para os brilhos pulsantes */}
            <div 
              className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-400/50 to-yellow-400/0 rounded-full animate-pulse-glow -z-10"
              style={{ animationDelay: '0s' }}
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-yellow-300/50 to-orange-400/0 rounded-full animate-pulse-glow -z-10"
              style={{ animationDelay: '3s' }}
            ></div>

            {/* Conteúdo que fica por cima do fundo */}
            <div className="relative z-10">
              <div className="text-center">
                <h3 className="text-4xl font-black text-black mb-4 font-display">
                    O que é usar <span className="text-orange-500">DROP:</span>
                </h3>
                <p className="text-xl text-gray-600 mb-8 font-medium">
                    Arraste para comparar o antes e depois.
                </p>
              </div>
              <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                  <ImgComparisonSlider value="30">
                      <img slot="first" src={"/antescerto.PNG"} alt="Antes" />
                      <img slot="second" src={"/depoiscerto.PNG"} alt="Depois" />
                  </ImgComparisonSlider>
              </div>
            </div>
          </div>
        </div>
        {/* --- FIM DA SEÇÃO ATUALIZADA --- */}

        {/* CTA Final */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
            Ver todos os produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;
