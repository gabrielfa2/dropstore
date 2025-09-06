import React from 'react';
import { Link } from 'react-router-dom';

const LimitedOffers = () => {
  const products = [
    {
      id: 1,
      brand: 'DROP',
      name: 'Camiseta Oversized Urban',
      price: 89.90,
      originalPrice: 130.36,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/617SjBz-tgL._AC_SX569_.jpg',
    },
    {
      id: 2,
      brand: 'DROP',
      name: 'Moletom Street Style',
      price: 149.90,
      originalPrice: 217.36,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    },
    {
      id: 3,
      brand: 'DROP',
      name: 'Calça Cargo Premium',
      price: 179.90,
      originalPrice: 260.86,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    },
    {
      id: 4,
      brand: 'DROP',
      name: 'Tênis High Top',
      price: 219.90,
      originalPrice: 318.86,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/0aa24ecd8062b1acf005538baa23376d.png',
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4 font-display">
            <span className="text-orange-500">Promoções</span> Imperdíveis
          </h3>
          <p className="text-xl text-gray-600 font-medium">
            Aproveite antes que acabe! Estoque limitado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={`/produto/${product.id}`} className="group relative text-left cursor-pointer">
              <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-600 text-white text-xs font-bold px-1 py-1 rounded">
                  -45%
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{product.brand}</p>
                <h4 className="text-md md:text-lg font-bold text-black truncate">
                  {product.name}
                </h4>
                <div className="mt-0 flex items-baseline gap-2">
                  <p className="text-lg md:text-xl font-price font-bold text-black">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-sm md:text-md font-medium text-gray-400 line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/produtos" className="inline-block bg-black text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LimitedOffers;