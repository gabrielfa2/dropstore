import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ativa a animação um pouco depois do componente ser montado
    // para garantir que o usuário veja o efeito.
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // 100ms de delay

    return () => clearTimeout(timer);
  }, []);

  return (
    // Adicionamos 'relative' para que a imagem da camisa possa ser
    // posicionada de forma absoluta dentro desta seção.
    <section className="w-full relative">
      {/* --- Imagens de Fundo --- */}
      {/* Banner de fundo para Mobile */}
      <img
        src="/banner01.PNG"
        alt="bannermobile"
        className="
          block
          md:hidden
          w-full
          aspect-[4/4]
          object-cover
        "
      />
      {/* Banner de fundo para Desktop */}
      <img
        src="/bannerpc.PNG"
        alt="bannerpc"
        className="
          hidden
          md:block
          w-full
          aspect-[24/9]
          object-cover
        "
      />

      {/* --- Imagem da Camisa Animada --- */}
      {/* Esta é a imagem que vai "voar" para dentro da tela. */}
      <img
        src="/banner02.png" // Certifique-se que o nome do arquivo está correto
        alt="Camisa em destaque"
        className={`
          absolute
          top-0 
          left-1/2 
          -translate-x-1/2 
          w-2/3
          md:w-1/2
          lg:w-1/3
          transition-transform 
          duration-1000 
          ease-out
          ${isLoaded ? 'translate-y-0' : '-translate-y-full'}
        `}
        // A lógica da animação:
        // 'absolute top-0 left-1/2 -translate-x-1/2': Centraliza a imagem horizontalmente no topo.
        // 'transition-transform duration-1000 ease-out': Define a animação de transformação (movimento).
        // A mágica acontece aqui:
        // Se 'isLoaded' for true, aplica 'translate-y-0' (posição final).
        // Se 'isLoaded' for false, aplica '-translate-y-full' (posição inicial, fora da tela, acima).
      />
    </section>
  );
};

export default HeroSection;