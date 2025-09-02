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
          <span className="bg-white text-red-600 px-2 py-1 rounded font-mono">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Header Principal */}
      <div className="shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* --- Coluna da Esquerda --- */}
          <div className="flex items-center justify-start w-1/3 space-x-2">
            {/* Ícone da Lista (Menu Hambúrguer) - SÓ APARECE NO MOBILE */}
            <button className="md:hidden p-2">
              <Menu className="w-8 h-8" />
            </button>
          </div>

          {/* --- Coluna Central (Logo) --- */}
          <div className="flex items-center justify-center w-1/3">
            <img 
              src="/logodrop.PNG" 
              alt="DROP Logo"
              className="h-14 md:h-14 w-auto"
            />
          </div>

          {/* --- Coluna da Direita --- */}
          <div className="flex items-center justify-end w-1/3 space-x-4">
            {/* Ícone da Lupa */}
            <a href="#busca" className="hover:opacity-75 transition-opacity">
              <img src="/iconlupa.PNG" alt="Ícone de Busca" className="w-7 h-7" />
            </a>
            
            {/* Carrinho */}
            <button className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};


export default Header;