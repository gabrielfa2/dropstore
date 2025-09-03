import React from 'react';

const LimitedOffers = () => {
  // Estrutura de dados simplificada para o novo design
  const products = [
    {
      id: 1,
      brand: 'DROP',
      name: 'Camiseta Oversized Urban',
      price: 89.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/617SjBz-tgL._AC_SX569_.jpg',
    },
    {
      id: 2,
      brand: 'DROP',
      name: 'Oversized Street Style',
      price: 149.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    },
    {
      id: 3,
      brand: 'DROP',
      name: 'Camiseta Cargo Premium',
      price: 179.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    },
    {
      id: 4,
      brand: 'DROP',
      name: 'Tênis High Top',
      price: 219.90,
      image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=400',
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-1">

        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4 font-display">
            <span className="text-orange-500">Promoções</span> Imperdíveis
          </h3>
          <p className="text-xl text-gray-600 font-medium">
            Aproveite antes que acabe! Estoque limitado.
          </p>
        </div>

        {/* Grid de Produtos com Novo Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative text-left cursor-pointer">
              <div className="w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{product.brand}</p>
                <h4 className="text-md md:text-lg font-bold text-black truncate">
                  {product.name}
                </h4>
                <p className="mt-1 text-lg md:text-xl font-black text-black">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
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

