import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

// Dados de exemplo para os produtos, agora com a propriedade 'stock'.
const products = [
  {
    id: 1,
    name: 'Moletom Essencial',
    price: 'R$ 179,90',
    originalPrice: 'R$ 249,90',
    imageUrl: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    stock: 3,
  },
  {
    id: 2,
    name: 'Tênis Urban Runner',
    price: 'R$ 299,90',
    originalPrice: 'R$ 399,90',
    imageUrl: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    stock: 3,
  },
  {
    id: 3,
    name: 'Calça Cargo Stride',
    price: 'R$ 159,90',
    originalPrice: 'R$ 219,90',
    imageUrl: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    stock: 3,
  },
  {
    id: 4,
    name: 'Camiseta Básica Premium',
    price: 'R$ 79,90',
    originalPrice: 'R$ 119,90',
    imageUrl: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    stock: 3,
  },
];

const LimitedOffers = () => {
  // Função auxiliar para converter o preço em string para número
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace('R$ ', '').replace(',', '.'));
  };

  return (
    <div className="bg-zinc-900 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white font-display uppercase tracking-wider">
            Ofertas <span className="text-yellow-400">Limitadas</span>
          </h2>
          <p className="text-lg text-zinc-400 mt-2 max-w-2xl mx-auto">
            As melhores camisetas com os melhores preços, mas por tempo limitado!
          </p>
        </div>
        
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 -mx-4 px-4 md:grid md:grid-cols-4 md:mx-0 md:px-0 scrollbar-hide">
          {products.map((product) => {
            // --- 1. CÁLCULO DO DESCONTO ---
            const originalPrice = parsePrice(product.originalPrice);
            const currentPrice = parsePrice(product.price);
            const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

            return (
              <Link  
                to={`/produto/${product.id}`}  
                key={product.id}  
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20 flex-shrink-0 w-3/4 sm:w-[45%] md:w-auto aspect-[3/4]"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* --- 2. BADGE DE DESCONTO (RENDERIZA APENAS SE HOUVER DESCONTO) --- */}
                {discount > 0 && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md z-10">
                    -{discount}% OFF
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  {/* Selo de Urgência */}
                  <div className="absolute top-3 right-3 bg-red-600/95 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse shadow-md">
                    <Flame className="w-4 h-4" />
                    <span>ÚLTIMAS UNIDADES</span>
                  </div>

                  {/* Conteúdo de Texto */}
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase font-price">{product.name}</h3>
                    <div className="flex items-baseline gap-2 -mt-1">
                      <p className="text-xl font-semibold text-orange-400 font-price">{product.price}</p>
                      <p className="text-sm text-zinc-300 line-through font-inter">{product.originalPrice}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default LimitedOffers;