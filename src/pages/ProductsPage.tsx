import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Moletom Essencial',
    price: 'R$ 179,90',
    originalPrice: 'R$ 249,90',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: true,
  },
  {
    id: 2,
    name: 'Tênis Urban Runner',
    price: 'R$ 299,90',
    originalPrice: 'R$ 399,90',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    isNew: false,
  },
  {
    id: 3,
    name: 'Calça Cargo Stride',
    price: 'R$ 159,90',
    originalPrice: 'R$ 219,90',
    imageUrl: 'https://images.unsplash.com/photo-1604176424472-17cd6a210170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: false,
  },
  {
    id: 4,
    name: 'Camiseta Básica Premium',
    price: 'R$ 79,90',
    originalPrice: 'R$ 119,90',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: true,
  },
   {
    id: 5,
    name: 'Jaqueta Corta-Vento',
    price: 'R$ 259,90',
    originalPrice: 'R$ 329,90',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d916e6caea4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    isNew: true,
  },
  {
    id: 6,
    name: 'Boné Trucker',
    price: 'R$ 89,90',
    originalPrice: 'R$ 119,90',
    imageUrl: 'https://images.unsplash.com/photo-1588782656923-1d4a06b05876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    isNew: false,
  },
];

const ProductsPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-gray-800 font-display uppercase">Nossos Produtos</h1>
          <p className="text-gray-600 mt-2">Explore nossa coleção completa de roupas e acessórios.</p>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link to={`/produto/${product.id}`} key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded">NOVO</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 font-serif truncate">{product.name}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-lg font-semibold text-gray-900 font-serif">{product.price}</p>
                  <p className="text-xs text-gray-500 line-through font-serif">{product.originalPrice}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

