import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* --- Efeito de Luz e Profundidade --- */}
      <div
        className="
          fixed bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-2/3
          bg-glow
          blur-3xl opacity-25
          -z-10 pointer-events-none
        "
      />
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}


export default App;
