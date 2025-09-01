import React from 'react';
// 1. Importa a nova biblioteca
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

  // As imagens para o slider continuam as mesmas
  const beforeImage = "/foto2.PNG";
  const afterImage = "/foto3.PNG";

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Grid de Produtos */}
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
                  <span className="text-lg text-gray-400 line-through">
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

        {/* --- INÍCIO DA SEÇÃO DO COMPARADOR DE IMAGENS (COM A NOVA BIBLIOTECA) --- */}
        <div className="my-16 text-center">
            <h3 className="text-4xl font-black text-black mb-4">
                O que é usar <span className="text-orange-500">DROP!</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8">
                Arraste para comparar o antes e depois.
            </p>
            <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                {/* 2. Usa o novo componente com a sintaxe correta */}
                <ImgComparisonSlider>
                  
                    <img slot="first" src={"/depoiscerto.PNG"} alt="Antes" />
                    <img slot="second" src={"/antescerto.PNG"} alt="Depois" />
                  
                </ImgComparisonSlider>
            </div>
        </div>
        {/* --- FIM DA SEÇÃO DO COMPARADOR DE IMAGENS --- */}

        {/* CTA Final */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
            Ver todos os produtos 👀
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;
