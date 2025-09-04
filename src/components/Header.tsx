import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 17,
    seconds: 23
  });
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      // A lógica para definir se o scroll ocorreu permanece a mesma
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // Otimização: { passive: true }

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
    // Adicionamos 'will-change-transform' para o navegador otimizar a animação
    <header className="w-full transition-all duration-300 ease-in-out will-change-transform">
      {/* Banner de Urgência OTIMIZADO */}
      <div 
        className={`
          bg-red-600 text-white py-2 px-4 text-center font-bold 
          transition-all duration-300 ease-in-out
          ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
        `}
      >
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

      {/* Wrapper do header OTIMIZADO */}
      <div 
        className={`
          w-full z-20 transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-3' 
            : 'relative shadow-sm p-4'
          }
        `}
      >
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
                className={`w-auto transition-all duration-300 ease-in-out ${isScrolled ? 'h-10' : 'h-12'}`}
              />
            </button>
          </div>

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
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;