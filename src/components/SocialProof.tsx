import React, { useState } from 'react';
import { Star, Heart, MessageCircle, Plus, Minus } from 'lucide-react'; // Ícones adicionados

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ana, 19 anos',
      text: 'Comprei na DROP e já recebi mil elogios! 😍',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Carlos, 22 anos',
      text: 'Finalmente achei roupas que combinam comigo!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Júlia, 20 anos',
      text: 'DROP é vida! Sempre na moda 🔥',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  // --- INÍCIO DA LÓGICA DO FAQ ---

  // Dados para o FAQ, baseados nas suas imagens
  const faqs = [
    {
      id: 1,
      question: 'Como funciona?',
      answer: 'Nossos produtos são desenvolvidos com a mais alta tecnologia para garantir conforto e durabilidade. Basta escolher o seu estilo e nós cuidamos do resto!'
    },
    {
      id: 2,
      question: 'A fricção causa escurecimento?',
      answer: 'Não, de forma alguma. Nossos tecidos são premium e passam por rigorosos testes de qualidade para garantir que não causem irritação ou escurecimento na pele.'
    },
    {
      id: 3,
      question: 'Ajuda com "strawberry skin" e bolinhas?',
      answer: 'Sim! Os tecidos que usamos permitem que a pele respire, o que pode ajudar a reduzir a aparência de bolinhas e "strawberry skin" (queratose pilar).'
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
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4">
            Quem usa DROP, <span className="text-purple-500">USA MODA!</span>
          </h3>
          <p className="text-xl text-gray-600">
            Veja o que a galera tá falando 💬
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
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
          <h3 className="text-3xl font-black text-center text-black mb-8">
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