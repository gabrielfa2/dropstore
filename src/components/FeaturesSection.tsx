import React, { useEffect, useRef, useState } from 'react';
import { Truck, RotateCcw, CreditCard, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section ref={sectionRef} className="py-9 relative overflow-hidden">
      {/* Container da Imagem de Fundo (Alterado de vídeo para imagem) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/fundoparede.PNG"
          alt="Fundo de parede de tijolos"
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      {/* Conteúdo da Seção */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`
                  flex flex-col items-center text-center
                  bg-card-bg/80 backdrop-blur-sm rounded-2xl p-6 md:p-4 shadow-lg
                  transition-all duration-700 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  md:hover:scale-105 md:hover:-translate-y-2
                `}
                style={{
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-bold text-black mb-1 font-inter">
                    {feature.title}
                  </h4>
                  <p className="text-black text-xs md:text-sm font-display">
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
