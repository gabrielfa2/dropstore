// src/components/BrickWallAnimation.tsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Este componente recebe o 'isVisible' da sua lógica IntersectionObserver
interface BrickWallProps {
  isVisible: boolean;
}

const BrickWallAnimation: React.FC<BrickWallProps> = ({ isVisible }) => {
  
  // Roda esta lógica QUANDO 'isVisible' mudar (apenas uma vez)
  useEffect(() => {
    // Só anima UMA VEZ quando se tornar visível
    if (!isVisible) return;

    // A animação GSAP "Tetris":
    gsap.from(".anim-brick", {
      y: -200,                // Vêm de 200px acima
      opacity: 0,             // Começam invisíveis
      rotation: 25,           // Efeito de "caindo" levemente torto
      duration: 1.0,          // Duração da queda de cada tijolo
      ease: "bounce.out",     // Física de "quicar" quando aterrissa
      stagger: {
        amount: 2.0,          // Distribui a queda de TODOS os 80 tijolos ao longo de 2 segundos
        from: "random",       // ESTA É A MÁGICA: eles caem em ordem aleatória
        grid: [8, 10]         // Ajuda o GSAP a otimizar a ordem aleatória na grade
      },
      delay: 0.3 // Um pequeno atraso geral para a animação não ser instantânea ao scroll
    });

  }, [isVisible]); // Dependência: Roda este efeito quando 'isVisible' muda

  // Cria um array de 80 elementos (8 linhas x 10 colunas) para renderizar os tijolos
  const bricks = Array.from({ length: 80 }, (_, i) => i);

  return (
    // O CONTAINER DA PAREDE:
    // 1. Posicionado absolutamente para cobrir o fundo
    // 2. z-0 para ficar atrás do conteúdo (que terá z-10)
    // 3. Opacidade para não ser tão forte
    // 4. md:hidden (CRUCIAL): Só existe em telas mobile, desaparece no desktop
    <div className="absolute inset-0 z-0 opacity-80 md:hidden">
      <div className="grid grid-cols-10 h-full">
        {bricks.map((index) => (
          <div
            key={index}
            // A classe 'anim-brick' é o alvo do GSAP
            // Começa com opacity-0 para que o GSAP possa fazê-lo aparecer
            className="anim-brick h-full border border-orange-800/40 bg-orange-600/50 opacity-0" 
          />
        ))}
      </div>
    </div>
  );
};

export default BrickWallAnimation;