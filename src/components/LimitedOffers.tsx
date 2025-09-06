import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

// Dados de exemplo para os produtos, agora com a propriedade 'stock'.
const products = [
  {
    id: 1,
    name: 'Moletom Essencial',
    price: 'R$ 179,90',
    originalPrice: 'R$ 249,90',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stock: 3,
  },
  {
    id: 2,
    name: 'Tênis Urban Runner',
    price: 'R$ 299,90',
    originalPrice: 'R$ 399,90',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    stock: 3,
  },
  {
    id: 3,
    name: 'Calça Cargo Stride',
    price: 'R$ 159,90',
    originalPrice: 'R$ 219,90',
    imageUrl: 'https://images.unsplash.com/photo-1604176424472-17cd6a210170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stock: 3,
  },
  {
    id: 4,
    name: 'Camiseta Básica Premium',
    price: 'R$ 79,90',
    originalPrice: 'R$ 119,90',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stock: 3,
  },
];

const LimitedOffers = () => {
  return (
    <div className="bg-zinc-900 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white font-display uppercase tracking-wider">
            Ofertas <span className="text-yellow-400">Limitadas</span>
          </h2>
          <p className="text-lg text-zinc-400 mt-2 max-w-2xl mx-auto">
            Estoque acabando!
          </p>
        </div>
        
        {/* Container rolável em telas pequenas, grade em telas grandes */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 -mx-4 px-4 md:grid md:grid-cols-4 md:mx-0 md:px-0 scrollbar-hide">
          {products.map((product) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                {/* Selo de Urgência */}
                <div className="absolute top-3 right-3 bg-red-600/95 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse shadow-md">
                  <Flame className="w-4 h-4" />
                  <span>ÚLTIMAS UNIDADES</span>
                </div>

                {/* Conteúdo de Texto */}
                <div>
                  <h3 className="text-lg font-bold text-white uppercase">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-xl font-semibold text-yellow-400">{product.price}</p>
                    <p className="text-sm text-zinc-300 line-through">{product.originalPrice}</p>
                  </div>
                  <p className="text-sm font-semibold text-yellow-300 mt-2">
                    Restam apenas {product.stock} unidades!
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-lg hover:text-yellow-300 transition-colors group"
          >
            Ver todas as ofertas
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffers;

