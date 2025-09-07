import React, { useState, useEffect } from 'react'; // ADICIONADO: useState e useEffect

// (Componente interno ProductColumn permanece o mesmo)
const ProductColumn = ({ product }: { product: any }) => (
  <div className="bg-card-bg rounded-lg shadow-lg overflow-hidden w-72">
    <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-xl font-price font-bold mt-2">{product.price}</p>
    </div>
  </div>
);

const ProductShowcase = () => {
  // (Array de produtos permanece o mesmo)
  const products = [
    { image: '/antescerto.PNG', name: 'Vintage Washed Tee', category: 'T-Shirts', price: 'R$129,90' },
    { image: '/depoiscerto.PNG', name: 'Acid Wash Hoodie', category: 'Hoodies', price: 'R$249,90' },
    { image: '/antescerto.PNG', name: 'Urban Cargo Pants', category: 'Pants', price: 'R$279,90' },
    { image: '/depoiscerto.PNG', name: 'Distressed Denim Jacket', category: 'Jackets', price: 'R$349,90' },
    { image: '/antescerto.PNG', name: 'Oversized Graphic Tee', category: 'T-Shirts', price: 'R$149,90' },
    { image: '/depoiscerto.PNG', name: 'Vintage Crewneck', category: 'Sweatshirts', price: 'R$219,90' },
    { image: '/antescerto.PNG', name: 'Utility Vest', category: 'Vests', price: 'R$199,90' },
    { image: '/depoiscerto.PNG', name: 'Washed Cap', category: 'Accessories', price: 'R$89,90' },
    { image: '/antescerto.PNG', name: 'Relaxed Fit Jeans', category: 'Jeans', price: 'R$259,90' },
    { image: '/depoiscerto.PNG', name: 'Fleece Lined Hoodie', category: 'Hoodies', price: 'R$299,90' },
  ];

  // ADICIONADO: Estado para controlar a animação (mesma lógica do BrandCarousel)
  const [animate, setAnimate] = useState(false);

  // ADICIONADO: Hook para ativar a animação após a montagem
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-brick-wall overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* ... Títulos ... */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Produtos</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Peças selecionadas que definem o streetwear moderno. Qualidade e estilo em cada detalhe.
          </p>
        </div>
        
        {/* Contêiner do Carrossel */}
        <div className="relative w-full overflow-hidden h-[120vh] max-h-[1000px]">
          {/* Fades (gradientes) */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent z-10" />
          
          <div className="absolute inset-0 flex justify-center space-x-4 p-4">
            
            {/* --- ALTERAÇÃO AQUI --- */}
            {/* Coluna 1 (Normal) - Classe de animação agora é condicional */}
            <div className={`flex flex-col space-y-4 ${animate ? 'animate-marquee-slow' : ''}`}>
              {[...products, ...products].map((product, i) => (
                <ProductColumn key={i} product={product} />
              ))}
            </div>

            {/* --- ALTERAÇÃO AQUI --- */}
            {/* Coluna 2 (Reversa) - Classe de animação agora é condicional */}
            <div className={`flex flex-col space-y-4 ${animate ? 'animate-marquee-slow-reverse' : ''}`}>
              {[...products.slice().reverse(), ...products.slice().reverse()].map((product, i) => (
                <ProductColumn key={product.name + i} product={product} />
              ))}
            </div>
            {/* (Nota: Mudei a 'key' no segundo map para ser mais robusta, embora não seja a causa do bug) */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;