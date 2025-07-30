import './Categorias.css';
import { Link } from 'react-router-dom';
function CategoriaCard({ imagen, titulo, descripcion, enlace, detalles }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform">
      <img src={imagen} alt={titulo} className="w-full h-[250px] object-cover" />
      <div className="p-6">
        <h3 className="text-xl mb-2 text-black">{titulo}</h3>
        <p className="mb-4 text-black">{descripcion}</p>
        {detalles && detalles.length > 0 && (
          <ul className="mb-4 list-disc list-inside text-gray-600">
            {detalles.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {enlace && (
          <Link to={enlace} className="btn">Ver Colección</Link>
        )}
      </div>
    </div>
  )
};

export default CategoriaCard;