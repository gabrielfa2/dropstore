import React, { useState } from 'react';
import { Bot, X, Headset, MessageSquare } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Links de contato (substitua pelos seus links reais)
  const whatsappLink = "https://wa.me/5500000000000"; // Ex: https://wa.me/5511999999999
  const chatLink = "#"; // Substitua pelo link do seu chat 24h

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Opções de Contato (Visível quando aberto) */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Opção 1: Atendente 24h */}
        <a
          href={chatLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition-colors group"
        >
          <span className="text-white font-semibold text-sm whitespace-nowrap">
            Atendente 24h (instantâneo)
          </span>
          <Headset className="w-5 h-5 text-white" />
        </a>

        {/* Opção 2: Whatsapp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-colors group"
        >
          <span className="text-white font-semibold text-sm whitespace-nowrap">
            Whatsapp
          </span>
          <MessageSquare className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Botão Principal (FAB) */}
      <div className="relative group">
        {/* Tooltip (Dica) */}
        {!isOpen && (
          <div className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 pointer-events-none">
            Fale Conosco
          </div>
        )}
        
        {/* O Botão */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 p-1 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-105"
          aria-label="Abrir menu de contato"
        >
          <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
            {isOpen ? (
              <X className="w-8 h-8 text-white transition-transform duration-300 rotate-90 scale-100" />
            ) : (
              <Bot className="w-8 h-8 text-white transition-transform duration-300 rotate-0 scale-100" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FloatingContactButton;