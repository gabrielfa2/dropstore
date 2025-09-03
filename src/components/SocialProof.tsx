import React, { useState } from 'react';
import { Star, Heart, MessageCircle, Plus, Minus } from 'lucide-react';

const SocialProof = () => {
  // Dados dos depoimentos atualizados para usar caminhos de imagem local
  const testimonials = [
    {
      id: 1,
      name: 'Ana, 19 anos',
      text: 'Comprei na DRIP e já recebi mil elogios! 😍',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      socialIcon: '/insta.PNG'
    },
    {
      id: 2,
      name: 'Carlos, 22 anos',
      text: 'Finalmente achei roupas que combinam comigo!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=150',
      socialIcon: '/xlogo.svg'
    },
    {
      id: 3,
      name: 'Júlia, 20 anos',
      text: 'DRIP é vida! Sempre na moda 🔥',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      socialIcon: '/insta.PNG'
    }
  ];

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
  
  // --- FIM DA LÓGICA DO FAQ ---

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Estrutura Corrigida */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4 font-display">
            O futuro das roupas está <span className="text-purple-500">aqui!</span>
          </h3>
          <p className="text-xl text-gray-600">
            Veja o que a galera tá falando 💬
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg relative">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Ícone da Rede Social posicionado no canto superior direito */}
              <div className="absolute top-6 right-6">
                <img src={testimonial.socialIcon} alt="Ícone da rede social" className="w-6 h-6" />
              </div>

              <p className="text-gray-700 font-medium">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">127</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">23</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- INÍCIO DA NOVA SEÇÃO DE FAQ --- */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-3xl font-black text-center text-black mb-8 font-display">
            Dúvidas Frequentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden">
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
           <div className="text-center mt-8">
             <a href="#" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all">
                Ainda com dúvidas? Fale conosco!
             </a>
           </div>
        </div>
        {/* --- FIM DA NOVA SEÇÃO DE FAQ --- */}

      </div>
    </section>
  );
};

export default SocialProof;

