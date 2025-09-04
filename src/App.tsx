import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Loader from './components/Loader'; // Importe o novo componente

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Função para lidar com a navegação com loader
  const handleNavigateWithLoader = (path: string) => {
    // Não exibe o loader se já estiver na página de destino
    if (location.pathname === path) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 713); // Atraso de 1 segundo
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Overlay de Carregamento */}
      {isLoading && (
        <div className="fixed inset-0 bg-cream/90 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <Loader />
        </div>
      )}

      {/* --- Efeito de Luz e Profundidade --- */}
      <div
        className="
          fixed bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-2/3
          bg-glow
          blur-3xl opacity-25
          -z-10 pointer-events-none
        "
      />
      
      {/* Passa a função para o Header via props */}
      <Header onLogoClick={() => handleNavigateWithLoader('/')} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;