// Importe o 'useCallback' do React
import React, { useState, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CollectionPage from './pages/CollectionPage';
import Loader from './components/Loader';
// Importe o novo componente do botão flutuante
import FloatingContactButton from './components/FloatingContactButton';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // A sua função original
  const handleNavigateWithLoader = (path: string) => {
    if (location.pathname === path) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 613);
  };

  // 1. Crie uma versão "memorizada" da função de clique do logo usando useCallback.
  //    Isso garante que a função 'handleLogoClick' não seja recriada a cada renderização.
  const handleLogoClick = useCallback(() => {
    handleNavigateWithLoader('/');
    // 2. Adicione as dependências. A função só será recriada se 'navigate' ou 'location.pathname' mudarem.
  }, [navigate, location.pathname]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {isLoading && (
        <div className="fixed inset-0 bg-cream/90 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <Loader />
        </div>
      )}
      
      {/* 3. Passe a função memorizada para o Header */}
      <Header onLogoClick={handleLogoClick} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produto/:id" element={<ProductDetailPage />} />
        <Route path="/colecao/:collection" element={<CollectionPage />} />
      </Routes>
      
      <Footer />

      {/* Adicione o botão flutuante aqui para que ele apareça em todas as páginas */}
      <FloatingContactButton />
    </div>
  );
}

export default App;
