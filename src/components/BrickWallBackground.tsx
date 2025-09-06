// src/components/BrickWallAnimation.tsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Este componente recebe o 'isVisible' da sua lógica IntersectionObserver
interface BrickWallProps {
  isVisible: boolean;
}

const BrickWallAnimation: React.FC<BrickWallProps> = ({ isVisible }) => {
  
  // Roda esta lógica QUANDO 'isVisible' mudar
  useEffect(() => {
    // Só anima UMA VEZ quando se tornar visível
    if (!isVisible) return;

    // A animação:
    // Pega todos os elementos com a classe .anim-brick
    gsap.from(".anim-brick", {
      y: -200,                // Vêm de 200px acima
      opacity: 0,             // Começam invisíveis
      rotation: 25,           // Efeito de "caindo"
      duration: 1.0,
      ease: "bounce.out",     // Física de "quicar" quando aterrissa
      stagger: {
        amount: 2.0,          // Distribui a queda de TODOS os 80 tijolos ao longo de 2 segundos
        from: "random",       // EFEITO TETRIS: eles caem em ordem aleatória
        grid: [8, 10]         // Ajuda o GSAP a entender a estrutura
      },
      delay: 0.3 // Dá um pequeno atraso para a animação não ser instantânea ao scroll
    });

  }, [isVisible]); // Dependência: Roda quando 'isVisible' muda

  // Cria um array de 80 elementos para renderizar os tijolos
  const bricks = Array.from({ length: 80 }, (_, i) => i);

  return (
    // O CONTAINER DA PAREDE:
    // Começa invisível, posicionado atrás de tudo, e só existe no mobile (md:hidden)
    <div className="absolute inset-0 z-0 opacity-80 md:hidden">
      <div className="grid grid-cols-10 h-full">
        {bricks.map((index) => (
          <div
            key={index}
            className="anim-brick h-full border border-orange-800/40 bg-orange-600/50 opacity-0" // Começa com opacity-0
          />
        ))}
      </div>
    </div>
  );
};

export default BrickWallAnimation;