
import React, { useEffect, useRef, useState } from 'react';
import { Truck, RotateCcw, CreditCard, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualiza o estado baseado se o elemento está visível ou não
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // A animação começa quando 20% do elemento está visível
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
    <section ref={sectionRef} className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* - Mobile (padrão): Grid de 1 coluna (lista vertical) com um espaçamento maior.
          - Desktop (md+): Grid de 4 colunas com o espaçamento original.
        */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              // Container de cada item. A animação é aplicada aqui.
              <div
                key={feature.id}
                className={`
                  transition-all duration-700 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  
                  // Layout Mobile (padrão): flexível, alinhado à esquerda.
                  flex items-start gap-5
                  
                  // Layout Desktop (md+): reverte para o estilo de card centralizado.
                  md:flex-col md:items-center md:bg-card-bg md:rounded-2xl md:p-6 md:text-center md:shadow-lg md:hover:shadow-xl md:hover:scale-105 md:hover:-translate-y-2
                `}
                style={{
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                {/* Container do Ícone */}
                <div className="flex-shrink-0 md:mb-4">
                  {/* Fundo colorido do ícone com cantos responsivos */}
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center md:w-16 md:h-16 md:rounded-full">
                    <IconComponent className="w-7 h-7 text-black md:w-8 md:h-8" />
                  </div>
                </div>
                
                {/* Container do Texto */}
                <div>
                  <h4 className="text-lg font-bold text-black mb-1 md:mb-2">
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
