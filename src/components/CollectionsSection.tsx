import React, { useState, useEffect, useRef } from 'react';
// 1. IMPORTAÇÃO ADICIONADA:
import { TypeAnimation } from 'react-type-animation';

const collections = [
  {
    id: 1,
    name: 'Oversized',
    href: '/colecao/oversized',
    imageSrc: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/b_3eed98ea421395ee91f107b8c6717453.webp',
    gridClasses: 'col-span-2 md:col-span-1',
    heightClasses: 'h-64 md:h-80',
  },
  {
    id: 2,
    name: 'Polo',
    href: '/colecao/polo',
    imageSrc: 'https://pub-61992242d95c4c08a5588448f8a876fc.r2.dev/158184-camisa-polo-adulto-head-play-preto1.webp',
    gridClasses: 'col-span-1 md:col-span-2',
    heightClasses: 'h-56 md:h-80',
  },
  {
    id: 3,
    name: 'Calças',
    href: '/colecao/calcas',
    imageSrc: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gridClasses: 'col-span-2 md:col-span-1',
    heightClasses: 'h-64 md:h-80',
  },
  {
    id: 4,
    name: 'Shorts',
    href: '/colecao/shorts',
    imageSrc: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gridClasses: 'col-span-1 md:col-span-2',
    heightClasses: 'h-56 md:h-80',
  },
  {
    id: 5,
    name: 'Tênis',
    href: '/colecao/tenis',
    imageSrc: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gridClasses: 'col-span-1 md:col-span-2',
    heightClasses: 'h-32 md:h-80',
  },
];

// Sub-componente para o Card
const CollectionCard = ({ collection }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={collection.href}
      className={`${collection.gridClasses} ${collection.heightClasses} relative rounded-2xl overflow-hidden group shadow-lg`}
    >
      <img
        src={collection.imageSrc}
        alt={collection.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      {/* Overlay de ruído que some no hover */}
      <div className="noise-overlay absolute inset-0 group-hover:opacity-0 transition-opacity" />
      
      {/* Overlay para escurecer */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
      
      {/* Texto com animação */}
      <div className="relative h-full flex items-center justify-center">
        {isAnimated && (
          /* 2. CÓDIGO MODIFICADO ABAIXO: */
          <h4 
            /* Removemos a 'key' pois o TypeAnimation controla a própria renderização */
            className="text-white text-3xl font-black uppercase tracking-widest group-hover:spray-animation font-display"
          >
            {/* O texto estático foi substituído pelo componente de animação */}
            <TypeAnimation
                sequence={[collection.name]} // Digita o nome da coleção
                speed={1}          // Velocidade de digitação
                repeat={0}          // Roda a animação apenas uma vez
                cursor={false}      // Esconde o cursor piscante após terminar
              />
          </h4>
        )}
      </div>
    </a>
  );
};


const CollectionsSection = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black font-display">COLEÇÕES</h3>
          <p className="text-xl text-gray-600 mt-2">Explore nossos estilos únicos</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;