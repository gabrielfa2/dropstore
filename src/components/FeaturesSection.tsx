// src/components/FeaturesSection.tsx (Revisado e pronto)

import React, { useEffect, useRef, useState } from 'react';
import { Truck, RotateCcw, CreditCard, Shield } from 'lucide-react';
import BrickWallAnimation from './BrickWallAnimation'; // <-- 1. IMPORTAR O NOVO COMPONENTE

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // SUA LÓGICA ORIGINAL DO OBSERVER (INTACTA)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Modifiquei aqui: só seta para 'true' e nunca para 'false'
        // Assim a animação só roda uma vez quando entra na tela.
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Para de observar depois de visível
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
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
  }, []);

  // SEU ARRAY ORIGINAL (INTACTO)
  const features = [
    {
      id: 1,
      icon: Truck,
      title: 'Frete Grátis',
      description: 'Em compras acima de R$ 99',
      delay: '0ms'
    },
    {
      id: 2,
      icon: RotateCcw,
      title: 'Devolução Rápida',
      description: 'Até 30 dias para trocar',
      delay: '150ms'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Parcela em 12x',
      description: 'Sem juros no cartão',
      delay: '300ms'
    },
    {
      id: 4,
      icon: Shield,
      title: 'Costura Premium',
      description: 'Reforçada e durável',
      delay: '450ms'
    }
  ];

  return (
    // <-- 2. MODIFICAÇÃO: Adicionado 'relative' e 'overflow-hidden'
    // 'relative' serve como âncora para o posicionamento absoluto do muro
    // 'overflow-hidden' impede que os tijolos apareçam "acima" da seção enquanto caem
    <section ref={sectionRef} className="py-9 relative overflow-hidden">
      
      {/* <-- 3. ADIÇÃO: O componente do muro é chamado aqui */}
      {/* Ele fica atrás de tudo (z-0) e só aparece no mobile */}
      {/* Passamos o estado 'isVisible' para ele saber quando animar */}
      <BrickWallAnimation isVisible={isVisible} />

      {/* 4. MODIFICAÇÃO: Adicionado 'relative' e 'z-10' ao container do seu conteúdo */}
      {/* Isso garante que seus cards fiquem NA FRENTE do muro (z-10) */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* SUA GRADE ORIGINAL E LÓGICA DE MAP (INTACTA) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              // SEU CONTAINER DE CARD E ANIMAÇÃO CSS ORIGINAL (TUDO INTACTO)
              <div
                key={feature.id}
                className={`
                  // MOBILE: Layout de coluna, alinhado à esquerda
                  flex flex-col items-start text-left 
                  
                  // DESKTOP: Transforma em card centralizado
                  md:bg-card-bg md:rounded-2xl md:p-6 md:text-center md:shadow-lg md:items-center

                  // Efeitos de transição e animação (INTACTOS)
                  transition-all duration-700 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  md:hover:scale-105 md:hover:-translate-y-2
                `}
                style={{
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                {/* Ícone para MOBILE - simples, laranja (INTACTO) */}
                <div className="flex-shrink-0 mb-4 md:hidden">
                  <IconComponent className="w-10 h-10 text-orange-500" />
                </div>
                
                {/* Ícone para DESKTOP - dentro do círculo (INTACTO) */}
                <div className="hidden md:flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-black" />
                    </div>
                </div>
                
                {/* Textos (INTACTO) */}
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