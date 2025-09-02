import React from 'react';

// Dados das coleções com classes de altura específicas para desktop
const collections = [
  {
    id: 1,
    name: 'Oversized',
    href: '#oversized',
    imageSrc: 'https://images.pexels.com/photos/1484806/pexels-photo-1484806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileClasses: 'col-span-2 h-64',
    desktopHeight: 'md:h-96', // <-- Card alto
  },
  {
    id: 2,
    name: 'Polo',
    href: '#polo',
    imageSrc: 'https://images.pexels.com/photos/3765171/pexels-photo-3765171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileClasses: 'col-span-1 h-64',
    desktopHeight: 'md:h-80', // <-- Card baixo
  },
  {
    id: 3,
    name: 'Shorts',
    href: '#shorts',
    imageSrc: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileClasses: 'col-span-1 h-64',
    desktopHeight: 'md:h-80', // <-- Card baixo
  },
  {
    id: 4,
    name: 'Tênis',
    href: '#tenis',
    imageSrc: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mobileClasses: 'col-span-2 h-64',
    desktopHeight: 'md:h-96', // <-- Card alto
  },
];

const CollectionsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black">
            COLEÇÕES
          </h3>
          <p className="text-xl text-gray-600 mt-2">
            Explore nossos estilos únicos
          </p>
        </div>

        {/* Grid das Coleções */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={collection.href}
              // Classes para layout mobile e desktop são aplicadas aqui
              className={`${collection.mobileClasses} ${collection.desktopHeight} md:col-span-1 relative rounded-2xl overflow-hidden group shadow-lg`}
            >
              {/* Imagem de Fundo */}
              <img
                src={collection.imageSrc}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Overlay para escurecer */}
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />

              {/* Texto */}
              <div className="relative h-full flex items-center justify-center">
                <h4 className="text-white text-3xl font-black uppercase tracking-widest transform transition-transform duration-500 group-hover:scale-105">
                  {collection.name}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;