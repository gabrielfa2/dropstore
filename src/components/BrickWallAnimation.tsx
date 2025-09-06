// src/components/BrickWallAnimation.tsx (CORRIGIDO)

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

interface BrickWallProps {
  isVisible: boolean;
}

const BrickWallAnimation: React.FC<BrickWallProps> = ({ isVisible }) => {
  
  useEffect(() => {
    if (!isVisible) return;

    // A lógica GSAP (está correta)
    gsap.from(".anim-brick", {
      y: -200,                
      opacity: 0,             
      rotation: 25,           
      duration: 1.0,          
      ease: "bounce.out",     
      stagger: {
        amount: 2.0,          
        from: "random",       
        grid: [8, 10]         // GSAP sabe que é uma grelha 8x10
      },
      delay: 0.3 
    });

  }, [isVisible]); 

  const bricks = Array.from({ length: 80 }, (_, i) => i); // 80 tijolos (8x10)

  return (
    <div className="absolute inset-0 z-0 opacity-80 md:hidden">
      
      {/* CORREÇÃO AQUI: 
        Adicionamos 'grid-rows-8' para que o Tailwind crie explicitamente 8 linhas
        que preenchem a altura total (h-full).
      */}
      <div className="grid grid-cols-10 grid-rows-8 h-full">
        {bricks.map((index) => (
          <div
            key={index}
            /* E REMOVEMOS 'h-full' daqui. O tijolo agora apenas preenche 
              a célula da grelha que lhe foi atribuída (1/8 da altura total).
            */
            className="anim-brick border border-orange-800/40 bg-orange-600/50 opacity-0" 
          />
        ))}
      </div>
    </div>
  );
};

export default BrickWallAnimation;