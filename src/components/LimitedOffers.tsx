import React from 'react';

const LimitedOffers = () => {
  // Adicionado um quarto produto para preencher a grade
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
    },
    {
      id: 4,
      name: 'Tênis High Top',
      price: 219.90,
      originalPrice: 299.90,
      image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'NOVO DROP'
    }
  ];

  return (
    <section className="py-12">
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

        {/* Grid de Produtos Responsivo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs md:text-sm font-bold">
                  {product.badge}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h4 className="text-md md:text-xl font-bold text-black mb-3 h-12">
                  {product.name}
                </h4>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
                  <span className="text-xl md:text-2xl font-black text-orange-500">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-sm md:text-lg text-gray-400 line-through font-medium">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold py-3 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">
                  Adicionar ao Carrinho 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

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

