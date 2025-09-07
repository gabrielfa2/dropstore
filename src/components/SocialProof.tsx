import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  // Dados para o FAQ, baseados na sua loja
  const faqs = [
    {
      id: 1,
      question: 'Como funciona a DRIP?',
      answer: 'Lançamos coleções exclusivas, os "drips", com peças limitadas e cheias de estilo. Fique de olho no site, escolha os produtos que são a sua cara e garanta os seus antes que esgotem!'
    },
    {
      id: 2,
      question: 'Qual a qualidade do tecido e das estampas?',
      answer: 'Usamos malha de algodão premium, com toque macio e caimento mais pesado, perfeito para o estilo oversized. Nossas estampas são feitas em silk de alta definição para garantir que não vão desbotar ou rachar com o tempo.'
    },
    {
      id: 3,
      question: 'Como escolher o tamanho da minha oversized?',
      answer: 'Nossa modelagem já é oversized! A dica é escolher o tamanho que você costuma usar para ter um caimento solto e estiloso. Se curte um visual ainda mais largo, pode pegar um tamanho acima. Sempre confira a tabela de medidas na página do produto!'
    },
    {
      id: 4,
      question: 'Envio & Entrega',
      answer: 'Oferecemos frete grátis para todo o Brasil em compras acima de R$99. O prazo de entrega médio é de 5 a 10 dias úteis.'
    },
    {
      id: 5,
      question: 'Política de Troca & Reembolso',
      answer: 'Você tem até 30 dias após o recebimento do produto para solicitar a troca ou devolução de forma totalmente gratuita. Sua satisfação é nossa prioridade.'
    }
  ];

  // Estado para controlar qual item do FAQ está aberto
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  return (
    <div className="max-w-3xl mx-auto mt-16">
      <h3 className="text-3xl font-black text-center text-black mb-8 font-display">
        Dúvidas Frequentes
      </h3>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between items-center text-left p-5 font-semibold text-black focus:outline-none"
            >
              <span>{faq.question}</span>
              {openFaqId === faq.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openFaqId === faq.id ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="p-5 pt-0 text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a href="#" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all">
          Ainda com dúvidas? Fale conosco!
        </a>
      </div>
    </div>
  );
};

export default FaqSection;