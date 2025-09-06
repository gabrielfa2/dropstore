// src/components/BrickWallAnimation.tsx (Sintaxe Corrigida)

import React, { useEffect } from 'react'; // <-- ESTA LINHA FOI CORRIGIDA
import { gsap } from 'gsap';

// Este componente recebe o 'isVisible' da sua lógica IntersectionObserver
interface BrickWallProps {
  isVisible: boolean;
}

const BrickWallAnimation: React.FC<BrickWallProps> = ({ isVisible }) => {
  useEffect(() => {
    // A animação só roda UMA VEZ quando isVisible se torna true
    if (!isVisible) return;

    gsap.from('.anim-brick', {
      y: -200,
      opacity: 0,
      rotation: 'random(-30, 30)', // Rotação aleatória para cada tijolo
      duration: 1.0,
      ease: 'bounce.out',
      stagger: {
        amount: 2.0,
        from: 'random',
        grid: 'auto', // GSAP detecta a grade automaticamente
      },
      delay: 0.2,
    });
  }, [isVisible]);

  const bricks = Array.from({ length: 80 }, (_, i) => i); // 8 linhas x 10 colunas

  return (
    // CONTAINER DO MURO
    <div className="absolute inset-0 z-0 opacity-80 md:hidden">
      {/* O grid-rows-8 força a grade a ter 8 linhas na altura total */}
      <div className="grid h-full grid-cols-10 grid-rows-8">
        {bricks.map((index) => (
          <div
            key={index}
            className="anim-brick border border-orange-800/40 bg-orange-600/50 opacity-0"
          />
        ))}
      </div>
    </div>
  );
};

export default BrickWallAnimation;