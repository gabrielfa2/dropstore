// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ShoppingCart from './ShoppingCart';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 17,
    seconds: 23
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className={`w-full transition-all duration-300 ease-in-out ${isScrolled ? 'md:pt-0' : 'md:pt-0'}`}>
      {/* Banner de Urgência */}
      <div className={`bg-red-600 text-white py-2 px-4 text-center font-bold transition-all duration-300 ease-in-out ${isScrolled ? 'md:max-h-0 md:py-0 md:opacity-0' : 'md:max-h-12 md:opacity-100'}`}>
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

      {/* ===== ÁREA MODIFICADA ===== */}
      <div className={`
        w-full z-20 transition-all duration-300 ease-in-out
        ${isScrolled 
          // Estilo QUANDO a página é rolada (com fundo e sombra)
          ? 'fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-3' 
          // Estilo INICIAL (transparente e sem sombra)
          : 'absolute p-4' // A MUDANÇA ESTÁ AQUI: de 'relative' para 'absolute'
        }
      `}>
      {/* ===== FIM DA ÁREA MODIFICADA ===== */}
        <div className="flex items-center justify-between">
          
          <div className="flex items-center justify-start w-1/3 space-x-2">
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 flex items-center gap-1 text-sm font-semibold hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
              <span>MENU</span>
            </button>
          </div>

          <div className="flex items-center justify-center w-1/3">
            <button onClick={onLogoClick} className="focus:outline-none" aria-label="Voltar para a página inicial">
              <img 
                src="/logodrop.PNG" 
                alt="DROP Logo"
                className="w-auto h-8 transition-all duration-300 ease-in-out"
              />
            </button>
          </div>

          <div className="flex items-center justify-end w-1/3 space-x-4">
            <a href="#busca" className="hover:opacity-75 transition-opacity">
              <img src="/iconlupa.PNG" alt="Ícone de Busca" className="w-6 h-6" />
            </a>
            
            <button onClick={toggleCart} className="relative hover:opacity-75 transition-opacity">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <ShoppingCart isOpen={isCartOpen} onClose={closeCart} />
    </header>
  );
};

export default Header;