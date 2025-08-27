import React from 'react';
import { Star, Heart, MessageCircle } from 'lucide-react';

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

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-black mb-4">
            Quem usa DROP, <span className="text-purple-500">arrasa!</span>
          </h3>
          <p className="text-xl text-gray-600">
            Veja o que a galera tá falando 💬
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <><img src="public/fototabelaprototipo.PNG"></img> </>
            <><img src="/foto2.png"></img> </>
            <><img src="/foto3.png"></img> </>
            <div className="text-gray-600 font-medium">Colocar aquela tabela de dúvidas frequetnes com as principais duvidas e um botão para a pessoa enviar duvida pelo whatsapp que com uma descrição de resposta 24/7 (que aí responde o wpp por IA, as duvidas, tirada de pedido, etc, com a IA dizendo que também faz o pedido)      o codigo do antes e depois vai ficar entre as camisas e o botão de ver todos os produtos      o dos quatro quadradinhos vai ficar entre o brandcarrossel e o carrossel dos stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;