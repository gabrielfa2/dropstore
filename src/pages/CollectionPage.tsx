import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown, ChevronRight } from 'lucide-react';

// Interface para definir a estrutura de um produto
interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  size: string[];
  colors: string[];
  rating: number;
  reviews: number;
  isNew: boolean;
  isBestSeller: boolean;
}

// Dados mockados dos produtos por categoria
const productsByCategory: Record<string, Product[]> = {
  oversized: [
    {
      id: 1,
      brand: 'DRIP',
      name: 'Camiseta Oversized Urban Black',
      price: 89.90,
      originalPrice: 130.36,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/617SjBz-tgL._AC_SX569_.jpg',
      category: 'oversized',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Cinza'],
      rating: 4.8,
      reviews: 127,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 5,
      brand: 'DRIP',
      name: 'Camiseta Oversized Graffiti',
      price: 94.90,
      originalPrice: 139.90,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'oversized',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco'],
      rating: 4.5,
      reviews: 78,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 8,
      brand: 'DRIP',
      name: 'Moletom Hoodie Oversized',
      price: 169.90,
      originalPrice: 249.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
      category: 'oversized',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Cinza', 'Verde'],
      rating: 4.8,
      reviews: 145,
      isNew: true,
      isBestSeller: true
    }
  ],
  polo: [
    {
      id: 6,
      brand: 'DRIP',
      name: 'Polo Essentials Classic',
      price: 119.90,
      originalPrice: 169.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/158184-camisa-polo-adulto-head-play-preto1.webp',
      category: 'polo',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Branco', 'Marinho'],
      rating: 4.4,
      reviews: 92,
      isNew: false,
      isBestSeller: false
    },
    {
      id: 9,
      brand: 'DRIP',
      name: 'Polo Premium Sport',
      price: 139.90,
      originalPrice: 199.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/158184-camisa-polo-adulto-head-play-preto1.webp',
      category: 'polo',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Azul', 'Branco', 'Verde'],
      rating: 4.6,
      reviews: 67,
      isNew: true,
      isBestSeller: false
    }
  ],
  calcas: [
    {
      id: 3,
      brand: 'DRIP',
      name: 'Calça Cargo Premium Tactical',
      price: 179.90,
      originalPrice: 260.86,
      image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'calcas',
      size: ['38', '40', '42', '44'],
      colors: ['Verde', 'Preto', 'Bege'],
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 10,
      brand: 'DRIP',
      name: 'Calça Jeans Destroyed',
      price: 199.90,
      originalPrice: 289.90,
      image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'calcas',
      size: ['38', '40', '42', '44', '46'],
      colors: ['Azul', 'Preto'],
      rating: 4.5,
      reviews: 89,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 11,
      brand: 'DRIP',
      name: 'Calça Moletom Street',
      price: 149.90,
      originalPrice: 219.90,
      image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'calcas',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Preto', 'Cinza', 'Marinho'],
      rating: 4.3,
      reviews: 134,
      isNew: false,
      isBestSeller: true
    }
  ],
  shorts: [
    {
      id: 7,
      brand: 'DRIP',
      name: 'Shorts Cargo Street',
      price: 89.90,
      originalPrice: 129.90,
      image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'shorts',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Verde', 'Preto', 'Bege'],
      rating: 4.3,
      reviews: 64,
      isNew: false,
      isBestSeller: false
    },
    {
      id: 12,
      brand: 'DRIP',
      name: 'Shorts Jeans Destroyed',
      price: 179.90,
      originalPrice: 149.90,
      image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'shorts',
      size: ['P', 'M', 'G', 'GG'],
      colors: ['Azul', 'Preto'],
      rating: 4.4,
      reviews: 78,
      isNew: true,
      isBestSeller: false
    }
  ],
  tenis: [
    {
      id: 4,
      brand: 'DRIP',
      name: 'Tênis High Top Exclusive',
      price: 219.90,
      originalPrice: 318.86,
      image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'tenis',
      size: ['38', '39', '40', '41', '42', '43'],
      colors: ['Preto', 'Branco'],
      rating: 4.6,
      reviews: 203,
      isNew: false,
      isBestSeller: false
    },
    {
      id: 13,
      brand: 'DRIP',
      name: 'Tênis Low Top Classic',
      price: 189.90,
      originalPrice: 269.90,
      image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'tenis',
      size: ['38', '39', '40', '41', '42', '43'],
      colors: ['Branco', 'Preto', 'Cinza'],
      rating: 4.7,
      reviews: 156,
      isNew: true,
      isBestSeller: true
    }
  ]
};

// Configurações das coleções
const collectionConfig = {
  oversized: {
    title: 'Coleção Oversized',
    subtitle: 'Estilo urbano com caimento perfeito',
    hero: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp'
  },
  polo: {
    title: 'Coleção Polo',
    subtitle: 'Elegância casual para o dia a dia',
    hero: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/158184-camisa-polo-adulto-head-play-preto1.webp'
  },
  calcas: {
    title: 'Coleção Calças',
    subtitle: 'Versatilidade e estilo em cada modelo',
    hero: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  shorts: {
    title: 'Coleção Shorts',
    subtitle: 'Conforto e estilo para os dias quentes',
    hero: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  tenis: {
    title: 'Coleção Tênis',
    subtitle: 'Pisada firme, estilo único',
    hero: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
};
const CollectionPage = () => {
  const { collection } = useParams<{ collection: string }>();
  const [sortBy, setSortBy] = useState('relevancia');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Validação da coleção
  if (!collection || !collectionConfig[collection as keyof typeof collectionConfig]) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-black mb-4 font-display">
            Coleção não encontrada
          </h1>
          <p className="text-gray-600 mb-8">A coleção que você procura não existe.</p>
          <Link 
            to="/produtos" 
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    );
  }

  const config = collectionConfig[collection as keyof typeof collectionConfig];
  const products = productsByCategory[collection] || [];

  const sortOptions = [
    { value: 'relevancia', label: 'Mais Relevantes' },
    { value: 'menor-preco', label: 'Menor Preço' },
    { value: 'maior-preco', label: 'Maior Preço' },
    { value: 'mais-vendidos', label: 'Mais Vendidos' },
    { value: 'lancamentos', label: 'Lançamentos' }
  ];

  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    switch (sortBy) {
      case 'menor-preco':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'maior-preco':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'mais-vendidos':
        sorted.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'lancamentos':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        sorted.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return b.rating - a.rating;
        });
    }

    return sorted;
  }, [products, sortBy]);

  const ProductCard = ({ product }: { product: Product }) => (
    <Link to={`/produto/${product.id}`} className="group relative text-left cursor-pointer">
      <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-600 text-white text-xs font-bold px-1 py-1 rounded">
          -45%
        </div>
        {product.isNew && (
          <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-green-600 text-white text-xs font-bold px-1 py-1 rounded">
            NOVO
          </div>
        )}
        {product.isBestSeller && (
          <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-orange-600 text-white text-xs font-bold px-1 py-1 rounded">
            BEST
          </div>
        )}
      </div>
      <div className="mt-1">
        <h4 className="text-md md:text-lg font-bold text-black truncate font-price">
          {product.name}
        </h4>
        <div className="-mt-1 flex items-baseline gap-2">
          <p className="text-2lg md:text-xl font-price font-bold text-black">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-sm md:text-md font-medium text-gray-400 line-through">
            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-1">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Início
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/produtos" className="hover:text-orange-500 transition-colors">
            Produtos
          </Link>
          <ChevronRight className="w-4 h-3" />
          <span className="text-gray-900 font-medium">{config.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative h-48 md:h-64 mb-12 overflow-hidden">
        <img
          src={config.hero}
          alt={config.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black mb-2 font-display">
              {config.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              {config.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Controles */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              Mostrando <span className="font-bold">{sortedProducts.length}</span> produtos
            </p>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl font-bold"
            >
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            
            <div className="hidden md:flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className={`
            flex flex-col md:flex-row justify-center items-center gap-4 pt-4 md:pt-0
            ${showFilters ? 'flex' : 'hidden md:flex'}
          `}>
            <div className="relative w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className={`grid gap-x-4 gap-y-8 md:gap-x-8 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-2 md:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mensagem quando não há produtos */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              Esta coleção ainda não possui produtos disponíveis.
            </p>
            <Link
              to="/produtos"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center py-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl">
          <h3 className="text-3xl font-black text-white mb-4 font-display">
            Não encontrou o que procurava?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Novos produtos chegam toda semana! Cadastre-se para ser avisado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 w-full sm:w-auto px-4 py-3 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Quero ser avisado!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;