import './Categorias.css';
import { Link } from 'react-router-dom';
function CategoriaCard({ imagen, titulo, descripcion, enlace }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform">
      <img src={imagen} alt={titulo} className="w-full h-[250px] object-cover" />
      <div className="p-6">
        <h3 className="text-xl mb-2 text-gray-800">{titulo}</h3>
        <p className="mb-4 text-gray-600">{descripcion}</p>
        {enlace && (
          <Link to={enlace} className="btn">Ver Colección</Link>
        )}
      </div>
    </div>
  )
};

export default CategoriaCard;