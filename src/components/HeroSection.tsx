import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Banner Mobile - Sem alterações */}
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
      
      {/* Banner Desktop - com altura vertical diminuída */}
      <img
        src="/bannerpc.PNG"
        alt="bannerpc"
        className="
          hidden
          md:block
          w-full          // Mantém a largura total
          aspect-[24/9]   // -> ALTERADO! De 16/9 para 21/9. Isso diminui a altura.
          object-cover    // Garante que a imagem cubra o novo espaço, cortando o excesso verticalmente
        "
      />
    </section>
  );
};

export default HeroSection;