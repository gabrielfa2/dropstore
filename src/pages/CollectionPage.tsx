import { useParams, Link } from 'react-router-dom';

// Dados de exemplo
const allProducts = [
    { id: 1, name: 'Moletom Essencial', price: 'R$ 179,90', originalPrice: 'R$ 249,90', imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', collection: 'inverno' },
    { id: 2, name: 'Tênis Urban Runner', price: 'R$ 299,90', originalPrice: 'R$ 399,90', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', collection: 'corrida' },
    { id: 5, name: 'Jaqueta Corta-Vento', price: 'R$ 259,90', originalPrice: 'R$ 329,90', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d916e6caea4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', collection: 'inverno' },
    { id: 8, name: 'Mochila Urbana', price: 'R$ 199,90', originalPrice: 'R$ 249,90', imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb68c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', collection: 'acessorios' },
];

const collectionDetails = {
    inverno: { name: 'Coleção de Inverno', description: 'Prepare-se para o frio com nossos moletons e jaquetas.' },
    corrida: { name: 'Performance e Corrida', description: 'Equipamentos leves e tecnológicos para seus treinos.' },
    acessorios: { name: 'Acessórios Essenciais', description: 'Complete seu estilo com nossos acessórios exclusivos.' },
}

const CollectionPage = () => {
    const { collectionName } = useParams<{ collectionName: keyof typeof collectionDetails }>();

    if (!collectionName || !collectionDetails[collectionName]) {
        return <div className="text-center py-20">Coleção não encontrada.</div>;
    }

    const products = allProducts.filter(p => p.collection === collectionName);
    const details = collectionDetails[collectionName];

    return (
         <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-gray-800 font-display uppercase">{details.name}</h1>
                    <p className="text-gray-600 mt-2">{details.description}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                        <Link to={`/produto/${product.id}`} key={product.id} className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="relative">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-48 sm:h-64 object-cover transition-opacity duration-300 group-hover:opacity-90"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-bold text-gray-800 font-serif truncate">{product.name}</h3>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <p className="text-lg font-semibold text-gray-900 font-serif">{product.price}</p>
                                    <p className="text-xs text-gray-500 line-through font-serif">{product.originalPrice}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
