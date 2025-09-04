import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';

// Dados dos produtos expandidos
const allProducts = [
  {
    id: 1,
    brand: 'DROP',
    name: 'Camiseta Oversized Urban Black',
    price: 89.90,
    originalPrice: 130.36,
    image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/617SjBz-tgL._AC_SX569_.jpg',
    category: 'camisetas',
    size: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco', 'Cinza'],
    rating: 4.8,
    reviews: 127,
    isNew: false,
    isBestSeller: true
  },
  {
    id: 2,
    brand: 'DROP',
    name: 'Moletom Street Style Premium',
    price: 149.90,
    originalPrice: 217.36,
    image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    category: 'moletons',
    size: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Cinza', 'Marinho'],
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 3,
    brand: 'DROP',
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
    id: 4,
    brand: 'DROP',
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
    id: 5,
    brand: 'DROP',
    name: 'Camiseta Oversized Graffiti',
    price: 94.90,
    originalPrice: 139.90,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'camisetas',
    size: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco'],
    rating: 4.5,
    reviews: 78,
    isNew: true,
    isBestSeller: false
  },
  {
    id: 6,
    brand: 'DROP',
    name: 'Polo Essentials Classic',
    price: 119.90,
    originalPrice: 169.90,
    image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/158184-camisa-polo-adulto-head-play-preto1.webp',
    category: 'polos',
    size: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Branco', 'Marinho'],
    rating: 4.4,
    reviews: 92,
    isNew: false,
    isBestSeller: false
  },
  {
    id: 7,
    brand: 'DROP',
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
    id: 8,
    brand: 'DROP',
    name: 'Moletom Hoodie Oversized',
    price: 169.90,
    originalPrice: 249.90,
    image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    category: 'moletons',
    size: ['P', 'M', 'G', 'GG'],
    colors: ['Preto', 'Cinza', 'Verde'],
    rating: 4.8,
    reviews: 145,
    isNew: true,
    isBestSeller: true
  }
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('categoria') || 'todos';

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState('relevancia');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: 'todos', label: 'Todos os Produtos' },
    { value: 'camisetas', label: 'Camisetas' },
    { value: 'moletons', label: 'Moletons' },
    { value: 'calcas', label: 'Calça' },
    { value: 'shorts', label: 'Shorts' },
    { value: 'polos', label: 'Polo' },
    { value: 'tenis', label: 'Tênis' }
  ];

  const sortOptions = [
    { value: 'relevancia', label: 'Mais Relevantes' },
    { value: 'menor-preco', label: 'Menor Preço' },
    { value: 'maior-preco', label: 'Maior Preço' },
    { value: 'mais-vendidos', label: 'Mais Vendidos' },
    { value: 'lancamentos', label: 'Lançamentos' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      return selectedCategory === 'todos' || product.category === selectedCategory;
    });

    switch (sortBy) {
      case 'menor-preco':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'maior-preco':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'mais-vendidos':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'lancamentos':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => {
          if (a.isBestSeller && !b.isBestSeller) return -1;
          if (!a.isBestSeller && b.isBestSeller) return 1;
          return b.rating - a.rating;
        });
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  React.useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const ProductCard = ({ product }) => (
    <div className="group relative text-left cursor-pointer">
      <div className="relative w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
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
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pt-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-black mb-2 font-display">
            Todos os <span className="text-orange-500">Produtos</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Descubra peças únicas que definem seu estilo
          </p>
        </div>

        {/* Barra de Controles */}
        <div className="mb-8">
          {/* Linha Superior: Contagem de produtos e Botão de Filtros (Mobile) / View Toggles (Desktop) */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              Mostrando <span className="font-bold">{filteredAndSortedProducts.length}</span> produtos
            </p>
            
            {/* Botão de Filtros para Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl font-bold"
            >
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            
            {/* View Toggles para Desktop */}
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

          {/* Seletores de Filtro e Ordenação (Condicionalmente visível em mobile) */}
          <div className={`
            flex flex-col md:flex-row justify-center items-center gap-4 pt-4 md:pt-0
            ${showFilters ? 'flex' : 'hidden md:flex'}
          `}>
              {/* Categoria */}
              <div className="relative w-full md:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Ordenar por */}
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

        <div className={`grid gap-x-4 gap-y-8 md:gap-x-8 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-2 md:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSortBy('relevancia');
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

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

export default ProductsPage;
