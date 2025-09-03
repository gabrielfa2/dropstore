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
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              // Container do item com animação
              <div
                key={feature.id}
                className={`
                  flex flex-col items-start text-left 
                  transition-all duration-700 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  md:hover:scale-105 md:hover:-translate-y-2
                `}
                style={{
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                {/* Ícone */}
                <div className="flex-shrink-0 mb-4">
                  <IconComponent className="w-10 h-10 text-orange-500" />
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

