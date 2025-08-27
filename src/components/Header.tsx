import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full">
      {/* Banner de Urgência */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <span>🔥</span>
          <span>Frete grátis termina em</span>
          <span className="text-red-600 px-2 py-1 rounded font-mono">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Header Principal */}
      <div className="shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Menu Mobile */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img 
              src="/image.png" 
              alt="DROP Logo"
              className="h-12 md:h-12 w-auto"
            />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#masculino" className="font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              icon da camisa e calça do lado do logo da lista no superior esquerdo da tela
            </a>
            <a href="#feminino" className="font-semibold text-gray-800 hover:text-orange-500 transition-colors">
              icon da lupa
            </a>
          </nav>

          {/* Carrinho */}
          <button className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;