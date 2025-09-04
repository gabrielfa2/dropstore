import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-8 lg:px-16 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Logo e Redes Sociais */}
        <div className="flex flex-col items-start space-y-4">
          {/* AQUI ESTÁ A MUDANÇA: Substituímos o texto pela imagem da logo */}
          <img 
            src="/logodrop.PNG" // Certifique-se de que este caminho está correto para sua imagem
            alt="DROP Logo" 
            className="h-10 w-auto" // Ajuste a altura (h-10) conforme necessário para o rodapé
          />
          <p className="text-gray-400">Mais que roupa, é mensagem.</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links Úteis */}
        <div className="flex flex-col items-start space-y-3">
          <h3 className="text-orange-500 font-bold text-lg mb-2">Links Úteis</h3>
          <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a>
          <a href="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
          <a href="/suporte" className="text-gray-400 hover:text-white transition-colors">Suporte</a>
          <a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
        </div>

        {/* Coluna 3 (vazia ou para futuros itens) */}
        <div></div>

        {/* Coluna 4: Fique por dentro! (Newsletter) */}
        <div className="flex flex-col items-start space-y-3">
          <h3 className="text-orange-500 font-bold text-lg mb-2">Fique por dentro!</h3>
          <p className="text-gray-400">Receba as novidades e promoções exclusivas</p>
          <div className="flex w-full max-w-sm">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="flex-grow p-3 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded-r-md hover:bg-orange-600 transition-colors">
              OK
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DROP. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;