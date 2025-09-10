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
      {/* Container do Vídeo de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/parede.mp4" type="video/mp4" />
        </video>
        {/* Overlay para escurecer o vídeo e melhorar a legibilidade */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </div>

      {/* Conteúdo da Seção */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
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
                <div className="flex-shrink-0 mb-4 md:hidden">
                  <IconComponent className="w-10 h-10 text-orange-500" />
                </div>
                
                <div className="hidden md:flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-black" />
                    </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
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