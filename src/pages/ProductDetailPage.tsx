// src/pages/ProductDetailPage.tsx (Código completo com correção de sintaxe e nova funcionalidade)

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';
import {
  Star,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  Check,
  AlertCircle,
  ChevronDown,
  User,
  ThumbsUp,
  MessageCircle,
  Eye // <-- Ícone 'Eye' agora está junto com os outros imports do lucide-react
} from 'lucide-react';

// Interface para definir a estrutura do produto
interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; hex: string; image?: string }[];
  rating: number;
  reviews: number;
  stock: number;
  isNew: boolean;
  isBestSeller: boolean;
  specifications: { [key: string]: string };
  features: string[];
  deliveryInfo: {
    freeShipping: boolean;
    estimatedDays: string;
    regions: string[];
  };
}

// Interface para avaliações
interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
  size: string;
  color: string;
}

// --- LÓGICA DA NOVA FUNCIONALIDADE (Início) ---

/**
 * Função Helper para gerar o número aleatório.
 * Definimos fora do componente para performance (evita recriação).
 */
const getRandomViewers = () => {
  const min = 102;
  const max = 137;
  // Retorna um inteiro aleatório entre 102 e 137 (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// --- LÓGICA DA NOVA FUNCIONALIDADE (Fim) ---


// Dados mockados do produto (em produção, viriam de uma API)
const mockProduct: Product = {
  id: 1,
  brand: 'DROP',
  name: 'Deixar no design de produto unico e colocar api para testar foto com ia(só fazer um prompt abusurdo e deixar a foto pre pronta da camisa que a pessoa tá querendo testar. aí o input fica a camisa e o prompt pronto e a foto da pessoa',
  price: 69.90,
  originalPrice: 130.36,
  description: 'Deixar no design de produto unico e colocar api para testar foto com ia(só fazer um prompt abusurdo e deixar a foto pre pronta da camisa que a pessoa tá querendo testar. aí o input fica a camisa e o prompt pronto e a foto da pessoa',
  images: [
    'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/617SjBz-tgL._AC_SX569_.jpg',
    'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500',
    'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp'
  ],
  category: 'camisetas',
  sizes: ['P', 'M', 'G', 'GG', 'XG'],
  colors: [
    { name: 'Preto', hex: '#000000' },
    { name: 'Branco', hex: '#FFFFFF' },
    { name: 'Cinza', hex: '#808080' },
    { name: 'Marinho', hex: '#1e3a8a' }
  ],
  rating: 4.8,
  reviews: 127,
  stock: 15,
  isNew: false,
  isBestSeller: true,
  specifications: {
    'Material': '100% Algodão Premium',
    'Gramatura': '180g/m²',
    'Modelagem': 'Oversized',
    'Gola': 'Careca reforçada',
    'Costura': 'Dupla costura nas barras',
    'Lavagem': 'Máquina até 30°C',
    'Origem': 'Nacional'
  },
  features: [
    'Tecido premium com toque macio',
    'Modelagem oversized moderna',
    'Costura reforçada para durabilidade',
    'Estampa de alta qualidade',
    'Pré-encolhido'
  ],
  deliveryInfo: {
    freeShipping: true,
    estimatedDays: '3-7 dias úteis',
    regions: ['Todo o Brasil']
  }
};

// Dados mockados de avaliações
const mockReviews: Review[] = [
  {
    id: 1,
    userName: 'Ana Silva',
    rating: 5,
    comment: 'Camiseta incrível! O tecido é muito macio e o caimento oversized ficou perfeito. Já recebi vários elogios!',
    date: '2024-01-15',
    verified: true,
    helpful: 12,
    size: 'M',
    color: 'Preto'
  },
  {
    id: 2,
    userName: 'Carlos Santos',
    rating: 5,
    comment: 'Qualidade excepcional! Vale cada centavo. A estampa não desbotou após várias lavagens.',
    date: '2024-01-10',
    verified: true,
    helpful: 8,
    size: 'G',
    color: 'Branco'
  },
  {
    id: 3,
    userName: 'Júlia Costa',
    rating: 4,
    comment: 'Muito boa! Só achei que poderia ser um pouco mais oversized, mas ainda assim ficou ótima.',
    date: '2024-01-08',
    verified: true,
    helpful: 5,
    size: 'P',
    color: 'Cinza'
  }
];

// Produtos relacionados mockados
const relatedProducts = [
  {
    id: 2,
    name: 'Moletom Street Style Premium',
    price: 149.90,
    originalPrice: 217.36,
    image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Calça Cargo Premium Tactical',
    price: 179.90,
    originalPrice: 260.86,
    image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Tênis High Top Exclusive',
    price: 219.90,
    originalPrice: 318.86,
    image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estados para controle da interface
  const [product] = useState<Product>(mockProduct);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- APLICAÇÃO DA NOVA FUNCIONALIDADE ---
  // Inicializamos o estado usando a "inicialização preguiçosa".
  // O React só executará getRandomViewers UMA VEZ na montagem inicial.
  const [viewerCount] = useState(getRandomViewers);
  // --- FIM DA APLICAÇÃO ---


  // Função para navegar entre imagens
  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  // Função para adicionar ao carrinho
  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho');
      return;
    }

    setIsAddingToCart(true);
    
    // Simula chamada à API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsAddingToCart(false);
    setShowSuccessMessage(true);
    setIsCartOpen(true); // Abre o carrinho após adicionar
    
    // Esconde mensagem de sucesso após 3 segundos
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  // Função para calcular desconto
  const getDiscountPercentage = () => {
    if (!product.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  }; // <-- CORREÇÃO: Esta chave '}' estava faltando

  // Componente para renderizar estrelas de avaliação
  const StarRating = ({ rating, size = 'w-4 h-4' }: { rating: number; size?: string }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Início
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/produtos" className="hover:text-orange-500 transition-colors">
            Produtos
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/produtos?categoria=${product.category}`} className="hover:text-orange-500 transition-colors">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NOVO
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    MAIS VENDIDO
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{getDiscountPercentage()}%
                  </span>
                )}
              </div>

              {/* Botões de Navegação */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedImageIndex 
                      ? 'border-orange-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            {/* Cabeçalho */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-black text-black mb-4 font-display">
                {product.name}
              </h1>
              
              {/* Avaliações */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <StarRating rating={product.rating} />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  ({product.reviews} avaliações)
                </span>
              </div>

              {/* Preços */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-price font-bold text-black">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">
                    Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
            </div>

            {/* Seleção de Cor */}
            <div>
              <h3 className="text-lg font-bold mb-3">
                Cor: <span className="font-normal">{selectedColor.name}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor.name === color.name
                        ? 'border-orange-500 scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Seleção de Tamanho */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">Tamanho</h3>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-sm text-orange-500 hover:text-orange-600 underline"
                >
                  Guia de tamanhos
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg font-bold transition-all ${
                      selectedSize === size
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div>
              <h3 className="text-lg font-bold mb-3">Quantidade</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 font-bold min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {product.stock} disponíveis
                </span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart || !selectedSize}
                className="w-full bg-black text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isAddingToCart ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adicionando...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Adicionar ao Carrinho
                  </>
                )}
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 py-3 px-4 border-2 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Favoritado' : 'Favoritar'}
                </button>
                <button className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-xl font-bold hover:border-gray-300 transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Compartilhar
                </button>
              </div>
            </div>

            {/* Mensagem de Sucesso */}
            {showSuccessMessage && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">
                  Produto adicionado ao carrinho com sucesso!
                </span>
              </div>
            )}

            {/* Informações de Entrega */}
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-lg mb-4">Informações de Entrega</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Frete Grátis</p>
                    <p className="text-sm text-gray-600">Para todo o Brasil</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Troca Grátis</p>
                    <p className="text-sm text-gray-600">Até 30 dias</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Compra Segura</p>
                    <p className="text-sm text-gray-600">Dados protegidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Abas */}
        <div className="mt-16">
          {/* Navegação das Abas */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex gap-8">
              {[
                { id: 'description', label: 'Descrição' },
                { id: 'specifications', label: 'Especificações' },
                { id: 'reviews', label: `Avaliações (${product.reviews})` },
                { id: 'shipping', label: 'Entrega' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Conteúdo das Abas */}
          <div className="min-h-[400px]">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>
                <h3 className="text-xl font-bold mb-4">Características Principais:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Especificações Técnicas</h3>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="font-medium text-gray-600">{key}:</span>
                        <span className="font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold mb-4">Cuidados com o Produto</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Lavar à máquina em água fria (máx. 30°C)</li>
                    <li>• Não usar alvejante</li>
                    <li>• Secar à sombra</li>
                    <li>• Passar ferro em temperatura baixa</li>
                    <li>• Não usar secadora</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Resumo das Avaliações */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{product.rating}</div>
                      <StarRating rating={product.rating} size="w-6 h-6" />
                      <p className="text-gray-600 mt-2">
                        Baseado em {product.reviews} avaliações
                      </p>
                    </div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ 
                                width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 8 : 2}%` 
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {stars === 5 ? '89' : stars === 4 ? '25' : stars === 3 ? '10' : '3'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lista de Avaliações */}
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-bold">{review.userName}</h4>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Compra verificada
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 mb-3">
                            <StarRating rating={review.rating} />
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="text-sm text-gray-500">
                              Tamanho: {review.size} | Cor: {review.color}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-3">{review.comment}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                              <ThumbsUp className="w-4 h-4" />
                              Útil ({review.helpful})
                            </button>
                            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                              <MessageCircle className="w-4 h-4" />
                              Responder
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Botão para Ver Mais Avaliações */}
                <div className="text-center">
                  <button className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl font-medium transition-colors">
                    Ver todas as avaliações
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Informações de Entrega</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Truck className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Frete Grátis</h4>
                        <p className="text-gray-600">
                          Para compras acima de R$ 99,00 em todo o Brasil.
                          Prazo de entrega: {product.deliveryInfo.estimatedDays}.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <RotateCcw className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Trocas e Devoluções</h4>
                        <p className="text-gray-600">
                          Você tem até 30 dias para trocar ou devolver seu produto.
                          Processo 100% gratuito.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Garantia</h4>
                        <p className="text-gray-600">
                          Todos os produtos possuem garantia contra defeitos de fabricação.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold mb-4">Calcular Frete</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Digite seu CEP:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="00000-000"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                          Calcular
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="mt-16">
          <h2 className="text-3xl font-black text-black mb-8 font-display">
            Produtos <span className="text-orange-500">Relacionados</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/produto/${relatedProduct.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-white rounded-xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={relatedProduct.rating} />
                  <span className="text-sm text-gray-500">({relatedProduct.rating})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-price font-bold">
                    R$ {relatedProduct.price.toFixed(2).replace('.', ',')}
                  </span>
                  {relatedProduct.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      R$ {relatedProduct.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* ===== NOVA LINHA DE PROVA SOCIAL APLICADA AQUI ===== */}
        {/* Adicionado após os produtos relacionados, com animação de pulso */}
        <div className="flex items-center justify-center gap-2 mt-16 text-sm text-gray-700 animate-pulse">
          <Eye className="w-4 h-4 text-orange-500" />
          <span>
            <strong className="font-bold text-black">{viewerCount}</strong> pessoas estão vendo esse produto agora
          </span>
        </div>
        {/* ======================================================= */}

      </div>
      
      {/* Carrinho */}
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default ProductDetailPage;