import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Lock, Truck, Gift, Star, ArrowRight } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface UpsellProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  isPopular?: boolean;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Camiseta Oversized Urban Black',
      price: 89.90,
      originalPrice: 130.36,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/617SjBz-tgL._AC_SX569_.jpg',
      size: 'M',
      color: 'Preto',
      quantity: 1
    }
  ]);

  const [upsellProducts] = useState<UpsellProduct[]>([
    {
      id: 101,
      name: 'Kit 3 Cuecas Boxer Cotton Preta - Alpha Co',
      price: 89.99,
      originalPrice: 107.97,
      image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: 17,
      isPopular: true
    },
    {
      id: 102,
      name: 'Camiseta Over Classic Preto',
      price: 99.99,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp'
    },
    {
      id: 103,
      name: 'Moletom Hoodie Premium',
      price: 149.90,
      originalPrice: 199.90,
      image: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
      discount: 25
    }
  ]);

  const [addedUpsells, setAddedUpsells] = useState<number[]>([]);
  const [showUpsells, setShowUpsells] = useState(true);

  // Calcular subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 155.10;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const hasFreeShipping = subtotal >= freeShippingThreshold;

  // Funções do carrinho
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addUpsell = (product: UpsellProduct) => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: 'M',
      color: 'Padrão',
      quantity: 1
    };
    
    setCartItems(items => [...items, newItem]);
    setAddedUpsells(prev => [...prev, product.id]);
  };

  const paymentMethods = [
    { name: 'American Express', icon: '/payment-icons/amex.svg' },
    { name: 'Apple Pay', icon: '/payment-icons/apple-pay.svg' },
    { name: 'Google Pay', icon: '/payment-icons/google-pay.svg' },
    { name: 'Klarna', icon: '/payment-icons/klarna.svg' },
    { name: 'Maestro', icon: '/payment-icons/maestro.svg' },
    { name: 'Mastercard', icon: '/payment-icons/mastercard.svg' },
    { name: 'PayPal', icon: '/payment-icons/paypal.svg' },
    { name: 'Shop Pay', icon: '/payment-icons/shop-pay.svg' },
    { name: 'Visa', icon: '/payment-icons/visa.svg' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-black" />
            <h2 className="text-xl font-black text-black font-display">
              Carrinho
              {cartItems.length > 0 && (
                <span className="ml-2 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Progress Bar para Frete Grátis */}
        {!hasFreeShipping && (
          <div className="p-4 bg-green-50 border-b border-green-200">
            <div className="text-center mb-3">
              <p className="text-sm font-medium text-green-800">
                Gaste mais <span className="font-bold">R$ {remainingForFreeShipping.toFixed(2).replace('.', ',')}</span> e tenha frete grátis!
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {hasFreeShipping && (
          <div className="p-4 bg-green-100 border-b border-green-200 text-center">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-bold">Parabéns! Você desbloqueou o frete grátis!</p>
            </div>
          </div>
        )}

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Seu carrinho está vazio</h3>
              <p className="text-gray-600 mb-6">Adicione alguns produtos incríveis!</p>
              <button
                onClick={onClose}
                className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-black text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {item.color} | {item.size}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-black">
                            R$ {item.price.toFixed(2).replace('.', ',')}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-2 p-1 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Upsell Section */}
              {showUpsells && (
                <div className="border-2 border-blue-500 rounded-xl p-4 bg-blue-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-black text-black text-lg font-display">
                      SEU TREINO COMPLETO
                    </h3>
                    <button
                      onClick={() => setShowUpsells(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {upsellProducts.slice(0, 2).map((product) => (
                      <div key={product.id} className="bg-white rounded-lg p-3 relative">
                        {product.isPopular && (
                          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-20 object-cover rounded-lg mb-2"
                        />
                        <h4 className="font-bold text-xs text-black mb-1 line-clamp-2">
                          {product.name}
                        </h4>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-baseline gap-1">
                            <span className="font-bold text-red-600 text-sm">
                              R$ {product.price.toFixed(2).replace('.', ',')}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                              </span>
                            )}
                          </div>
                        </div>
                        {addedUpsells.includes(product.id) ? (
                          <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-bold">
                            <Gift className="w-3 h-3" />
                            Adicionado
                          </div>
                        ) : (
                          <button
                            onClick={() => addUpsell(product)}
                            className="w-full bg-blue-600 text-white text-xs font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            Adicionar
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer - Checkout Section */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-4 space-y-4">
            {/* Shipping Info */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Frete:</span>
              <span className="font-bold text-green-600">
                {hasFreeShipping ? 'Grátis' : 'R$ 15,90'}
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold border-t pt-4">
              <span>Total:</span>
              <span className="text-2xl">
                R$ {(subtotal + (hasFreeShipping ? 0 : 15.90)).toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg">
              <Lock className="w-5 h-5" />
              FINALIZAR COMPRA SEGURA
            </button>

            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-3">Formas de pagamento aceitas:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {/* Payment Icons */}
                <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  AMEX
                </div>
                <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded text-xs font-bold">
                  APPLE PAY
                </div>
                <div className="flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                  G PAY
                </div>
                <div className="flex items-center gap-1 bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold">
                  KLARNA
                </div>
                <div className="flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  MAESTRO
                </div>
                <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  MASTER
                </div>
                <div className="flex items-center gap-1 bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold">
                  PAYPAL
                </div>
                <div className="flex items-center gap-1 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                  SHOP PAY
                </div>
                <div className="flex items-center gap-1 bg-blue-800 text-white px-2 py-1 rounded text-xs font-bold">
                  VISA
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
              <Lock className="w-4 h-4" />
              <span>Compra 100% segura e protegida</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;