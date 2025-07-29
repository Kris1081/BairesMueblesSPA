import { useLocation } from "react-router-dom";
import Paso from "./Paso";
import "./Pasos.css";

function Proceso() {
  const { pathname } = useLocation();

  const contentByRoute = {
    '/fabricacion': [
      {
        numero: '1',
        titulo: 'Diseño',
        descripcion: 'Creación de bocetos y planos detallados',
      },
      {
        numero: '2',
        titulo: 'Selección de Materiales',
        descripcion: 'Maderas nobles y materiales de primera calidad',
      },
      {
        numero: '3',
        titulo: 'Construcción',
        descripcion: 'Artesanos expertos dan forma a cada pieza',
      },
      {
        numero: '4',
        titulo: 'Acabados',
        descripcion: 'Barnices y tratamientos para proteger y embellecer',
      },
    ],
  };

  const pasos = contentByRoute[pathname] || [];

  return (
    <section className="proceso-section">
      <h2 className="proceso-titulo">Nuestro Proceso</h2>
      <div className="pasos-flex">
        {pasos.map((paso, i) => (
          <Paso key={i} {...paso} />
        ))}
      </div>
    </section>
  );
}

export default Proceso;
