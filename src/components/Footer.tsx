import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-3xl font-black mb-4 font-display">DROP</h4>
            <p className="text-gray-400 mb-4">
              Mais que roupa, é estilo.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-300 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h5 className="font-bold mb-4 text-orange-400">Links Úteis</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h5 className="font-bold mb-4 text-orange-400">Categorias</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Masculino</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feminino</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acessórios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lançamentos</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold mb-4 text-orange-400">Fique por dentro!</h5>
            <p className="text-gray-400 mb-4 text-sm">
              Receba as novidades e promoções exclusivas
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors font-bold">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 DRIP. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Trocas e Devoluções</a>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text font-display">
            DRIP — mais que roupa, é estilo. 🔥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;