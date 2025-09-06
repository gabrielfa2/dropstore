// src/components/FeaturesSection.tsx (Revisado e Corrigido)

import React, { useEffect, useRef, useState } from 'react';
import { Truck, RotateCcw, CreditCard, Shield } from 'lucide-react';
import BrickWallAnimation from './BrickWallAnimation';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // CORREÇÃO: Apenas alteramos para TRUE e paramos de observar.
        // Isso garante que o estado não volte para 'false' e a animação rode apenas uma vez.
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Quando 20% do elemento estiver visível
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // O array de dependências vazio é correto, pois o observer só precisa ser configurado uma vez.

  const features = [
    { id: 1, icon: Truck, title: 'Frete Grátis', description: 'Em compras acima de R$ 99', delay: '0ms' },
    { id: 2, icon: RotateCcw, title: 'Devolução Rápida', description: 'Até 30 dias para trocar', delay: '150ms' },
    { id: 3, icon: CreditCard, title: 'Parcela em 12x', description: 'Sem juros no cartão', delay: '300ms' },
    { id: 4, icon: Shield, title: 'Costura Premium', description: 'Reforçada e durável', delay: '450ms' }
  ];

  return (
    // As classes 'relative' e 'overflow-hidden' estão corretas
    <section ref={sectionRef} className="py-9 relative overflow-hidden">
      
      {/* O componente do muro é chamado aqui (Correto) */}
      <BrickWallAnimation isVisible={isVisible} />

      {/* O container do conteúdo com z-10 está correto */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              // SUA ANIMAÇÃO ORIGINAL DE CSS (INTACTA E CORRETA)
              <div
                key={feature.id}
                className={`
                  flex flex-col items-start text-left 
                  md:bg-card-bg md:rounded-2xl md:p-6 md:text-center md:shadow-lg md:items-center
                  transition-all duration-700 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  md:hover:scale-105 md:hover:-translate-y-2
                `}
                style={{
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                {/* Ícone para MOBILE */}
                <div className="flex-shrink-0 mb-4 md:hidden">
                  <IconComponent className="w-10 h-10 text-orange-500" />
                </div>
                
                {/* Ícone para DESKTOP */}
                <div className="hidden md:flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-black" />
                    </div>
                </div>
                
                {/* Textos */}
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;