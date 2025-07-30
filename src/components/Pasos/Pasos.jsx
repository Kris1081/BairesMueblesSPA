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
    '/tapiceria': [
      {
        imagen: '/Img/ImgTap/tejido1.jpg',
        titulo: 'Lino',
        descripcion: 'Natural, resistente y transpirable',
      },
      {
        imagen: '/Img/ImgTap/tejido2.jpg',
        titulo: 'Algodón',
        descripcion: 'Suave, duradero y fácil de limpiar',
      },
      {
        imagen: '/Img/ImgTap/tejido3.jpg',
        titulo: 'Cuero',
        descripcion: 'Elegancia y durabilidad premium',
      },
      {
        imagen: '/Img/ImgTap/tejido4.jpg',
        titulo: 'Sintéticos',
        descripcion: 'Resistentes a manchas y desgaste',
      },
    ],
    '/sillas_tapiceria': [
      {
        numero: '1',
        titulo: 'Evaluación',
        descripcion: 'Inspeccionamos la silla y discutimos tus necesidades',
      },
      {
        numero: '2',
        titulo: 'Selección',
        descripcion: 'Elige entre nuestra variedad de tejidos y materiales',
      },
      {
        numero: '3',
        titulo: 'Restauración',
        descripcion: 'Nuestros expertos trabajan en tu pieza',
      },
      {
        numero: '4',
        titulo: 'Entrega',
        descripcion: 'Recibe tu silla como nueva',
      },
    ],
    '/otros_tapiceria': [
      {
      descripcion: "Transformaron mi viejo sillón en una pieza de museo. ¡Increíble trabajo!",
      titulo: "María G.",
    },
    {
      descripcion: "El cabecero de mi cama quedó exactamente como lo soñé. Muy profesionales.",
      titulo: "Carlos M.",
    },
    {
      descripcion: "Restauraron un banco familiar de 50 años. Ahora luce mejor que nuevo.",
      titulo: "Laura T.",
    },
    ]
  };

  const getTituloPorRuta = (pathname) => {
    switch (pathname) {
      case '/tapiceria':
        return 'Materiales premium';
      case '/fabricacion':
        return 'Proceso de Fabricación';
      case '/otros_tapiceria':
        return 'Lo que dicen nuestros clientes';
      default:
        return 'Nuestro Proceso';
    }
  };

  const pasos = contentByRoute[pathname] || [];

  return (
    <section className="proceso-section">
      <h2 className="proceso-titulo">{getTituloPorRuta(pathname)}</h2>
      <div className="pasos-flex">
        {pasos.map((paso, i) => (
          <Paso key={i} {...paso} />
        ))}
      </div>
    </section>
  );
}

export default Proceso;
