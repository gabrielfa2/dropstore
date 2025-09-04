import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 17,
    seconds: 23
  });
  
  // Novo estado para controlar se o header está "flutuando"
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para o contador de tempo (sem alterações)
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
  
  // NOVO: Efeito para detectar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      // Ativa a animação se o scroll passar de 10 pixels
      setIsScrolled(window.scrollY > 10);
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente for desmontado
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

  return (
    // O container agora precisa de uma classe para a animação de altura
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

      {/* NOVO: Wrapper para o header principal que será fixo e animado.
        A lógica condicional com `isScrolled` aplica as classes de animação.
      */}
      <div className={`
        transition-all duration-300 ease-in-out
        w-full z-20 
        
        md:static md:shadow-sm md:rounded-none md:p-4

        ${isScrolled 
          ? 'fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-3' 
          : 'relative shadow-sm p-4'
        }
      `}>
        <div className="flex items-center justify-between">
          
          {/* --- Coluna da Esquerda --- */}
          <div className="flex items-center justify-start w-1/3 space-x-2">
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 flex items-center gap-1 text-sm font-semibold hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
              <span>MENU</span>
            </button>
          </div>

          {/* --- Coluna Central (Logo) --- */}
          <div className="flex items-center justify-center w-1/3">
            <img 
              src="/logodrop.PNG" 
              alt="DROP Logo"
              // A logo também diminui de tamanho com a animação
              className={`w-auto transition-all duration-300 ease-in-out ${isScrolled ? 'h-10' : 'h-12'}`}
            />
          </div>

          {/* --- Coluna da Direita --- */}
          <div className="flex items-center justify-end w-1/3 space-x-4">
            <a href="#busca" className="hover:opacity-75 transition-opacity">
              <img src="/iconlupa.PNG" alt="Ícone de Busca" className="w-6 h-6" />
            </a>
            
            <button className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;
