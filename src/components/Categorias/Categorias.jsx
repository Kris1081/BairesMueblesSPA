import { useLocation } from 'react-router-dom';
import CategoriaCard from './Categorias_card';
import './Categorias.css';

function Categorias() {
  const { pathname } = useLocation();

  const categoriasPorRuta = {
    '/fabricacion': [
      {
        imagen: '/Img/ImgFab/mueblefab.jpg',
        titulo: 'Muebles',
        descripcion: 'Muebles de madera maciza con diseño exclusivo',
        enlace: '/muebles',
      },
      {
        imagen: '/Img/ImgFab/sillafab.jpg',
        titulo: 'Sillas',
        descripcion: 'Sillas ergonómicas con estilo único',
        enlace: '/silla',
      },
      {
        imagen: '/Img/ImgFab/otrofab.jpg',
        titulo: 'Otros',
        descripcion: 'Piezas especiales y personalizadas',
        enlace: '/otros_muebles',
      },
    ],
    '/muebles': [
      {
        imagen: '/Img/ImgFab/mueble1.jpg',
        titulo: 'Sofá Chester',
        descripcion: 'Elegante sofá en cuero genuino con detalles artesanales',
      },
      {
        imagen: '/Img/ImgFab/mueble2.jpg',
        titulo: 'Módulo TV',
        descripcion: 'Mueble para televisor en madera de roble con acabado satinado',
      },
      {
        imagen: '/Img/ImgFab/mueble3.jpg',
        titulo: 'Mesa de Comedor',
        descripcion: 'Mesa extensible en nogal con capacidad para 8 personas',
      },
      {
        imagen: '/Img/ImgFab/mueble4.jpg',
        titulo: 'Cama King Size',
        descripcion: 'Cama en madera de cerezo con cabecero tapizado',
      },
      {
        imagen: '/Img/ImgFab/mueble5.jpg',
        titulo: 'Escritorio Ejecutivo',
        descripcion: 'Escritorio en caoba con cajonera integrada y detalles en metal',
      },
      {
        imagen: '/Img/ImgFab/mueble6.jpg',
        titulo: 'Buffet Moderno',
        descripcion: 'Buffet con puertas corredizas y acabado en blanco mate',
      },
    ],
    '/silla': [
      {
        imagen: '/Img/ImgTra/silla1.jpg',
        titulo: 'Silla Windsor',
        descripcion: 'Silla clásica en roble con asiento de rejilla',
      },
      {
        imagen: '/Img/ImgTra/silla2.jpg',
        titulo: 'Silla Ejecutiva',
        descripcion: 'Ergonómica con soporte lumbar y reposabrazos',
      },
      {
        imagen: '/Img/ImgTra/silla3.jpg',
        titulo: 'Silla Terrace',
        descripcion: 'Resistente a la intemperie en ratán sintético',
      },
      {
        imagen: '/Img/ImgTra/silla4.jpg',
        titulo: 'Silla Eames',
        descripcion: 'Replica de la clásica silla Eames en cuero',
      },
      {
        imagen: '/Img/ImgTra/silla5.jpg',
        titulo: 'Silla Moderna',
        descripcion: 'Diseño minimalista con estructura metálica',
      },
      {
        imagen: '/Img/ImgTra/silla6.jpg',
        titulo: 'Silla Mesh',
        descripcion: 'Respaldos transpirable en malla técnica',
      },
    ],
    '/otros_muebles': [
      {
        imagen: '/Img/ImgFab/otro1.jpg',
        titulo: 'Estantería Flotante',
        descripcion: 'Diseño moderno en madera de pino con acabado natural',
      },
      {
        imagen: '/Img/ImgFab/otro2.jpg',
        titulo: 'Banco de Entrada',
        descripcion: 'Banco con cajón y perchero en nogal americano',
      },
      {
        imagen: '/Img/ImgFab/otro3.jpg',
        titulo: 'Mesita Auxiliar',
        descripcion: 'Pequeña mesa con base metálica y tablero de mármol',
      },
      {
        imagen: '/Img/ImgFab/otro4.jpg',
        titulo: 'Perchero Vintage',
        descripcion: 'Perchero de pared en hierro forjado con detalles',
      },
      {
        imagen: '/Img/ImgFab/otro5.jpg',
        titulo: 'Biblioteca Modular',
        descripcion: 'Sistema modular adaptable a diferentes espacios',
      },
      {
        imagen: '/Img/ImgFab/otro6.jpg',
        titulo: 'Baúl de Cedro',
        descripcion: 'Baúl artesanal con herrajes antiguos y aroma natural',
      },
    ],
    '/tapiceria': [
      {
        imagen: '/Img/ImgTap/sofatap.jpg',
        titulo: 'Sofás',
        descripcion: 'Tapizados en tejidos de alta resistencia y calidad',
        enlace: '/sofas',
      },
      {
        imagen: '/Img/ImgTap/sillatap.jpg',
        titulo: 'Sillas',
        descripcion: 'Renovación de asientos y respaldos',
        enlace: '/sillas_tapiceria',
      },
      {
        imagen: '/Img/ImgTap/otrotap.jpg',
        titulo: 'Otros',
        descripcion: 'Tapizados especiales para todo tipo de muebles',
        enlace: '/otros_tapiceria',
      },
    ],
    '/sofas': [
      {
        imagen: "/Img/ImgFab/sofa1.jpg",
        titulo: "Sofá Chesterfield",
        descripcion: "Tapizado en cuero genuino con detalles de botones",
      },
      {
        imagen: "/Img/ImgFab/sofa2.jpg",
        titulo: "Sofá Minimalista",
        descripcion: "Diseño limpio con patas metálicas y tejido resistente",
      },
      {
        imagen: "/Img/ImgFab/sofa3.jpg",
        titulo: "Seccional en L",
        descripcion: "Configurable con chaise lounge y reposabrazos",
      },
      {
        imagen: "/Img/ImgFab/sofa4.jpg",
        titulo: "Sillón Reclinable",
        descripcion: "Mecanismo suave y soporte lumbar ajustable",
      },
      {
        imagen: "/Img/ImgFab/sofa5.jpg",
        titulo: "Sofá Tuxedo",
        descripcion: "Alto respaldo y brazos rectos en terciopelo",
      },
      {
        imagen: "/Img/ImgFab/sofa6.jpg",
        titulo: "Sofá Nórdico",
        descripcion: "Patas de madera clara y tejido de lino",
      },
    ],
    '/sillas_tapiceria': [
      {
        imagen: '/Img/ImgTap/sillatap1.jpg',
        titulo: 'Renovación Completa',
        descripcion: 'Cambio total de tapicería, incluyendo asiento y respaldo',
        detalles: [
          'Selección de tejidos premium',
          'Relleno de alta densidad',
          'Acabados profesionales',
        ],
      },
      {
        imagen: '/Img/ImgTap/sillatap2.jpg',
        titulo: 'Reparación Estructural',
        descripcion: 'Refuerzo de estructura y mecanismos',
        detalles: [
          'Reparación de patas y soportes',
          'Reemplazo de resortes y amarres',
          'Ajuste de balance y estabilidad',
        ],
      },
      {
        imagen: '/Img/ImgTap/sillatap3.jpg',
        titulo: 'Personalización',
        descripcion: 'Diseño único para tus sillas',
        detalles: [
          'Patrones y colores a medida',
          'Detalles decorativos especiales',
          'Acabados exclusivos',
        ],
      }
    ],
    '/otros_tapiceria': [
      {
        imagen: '/Img/ImgTap/otrotap1.jpg',
        titulo: 'Bancos y Puffs',
        descripcion: 'Renovación completa de bancos, ottomanas y puffs',
        detalles: [
          'Cambio de relleno y tapizado',
          'Refuerzo de estructura',
          'Diseños personalizados',
        ],
      },
      {
        imagen: '/Img/ImgTap/otrotap2.jpg',
        titulo: 'Cabeceros de Cama',
        descripcion: 'Tapizado y renovación de cabeceros',
        detalles: [
          'Selección de tejidos y acolchados',
          'Patrones y botonados decorativos',
          'Instalación profesional',
        ],
      },
      {
        imagen: '/Img/ImgTap/otrotap3.jpg',
        titulo: 'Sillones Antiguos',
        descripcion: 'Restauración de sillones vintage y antiguos',
        detalles: [
          'Mantenimiento de la estructura original',
          'Tejidos de época o modernos',
          'Acabados artesanales',
        ],
      },
    ]

  };

  const categorias = categoriasPorRuta[pathname] || [];

  if (categorias.length === 0) return null;

  return (
    <section className="categorias">
      {categorias.map(({ imagen, titulo, descripcion, enlace, detalles }) => (
        <CategoriaCard
          key={titulo}
          imagen={imagen}
          titulo={titulo}
          descripcion={descripcion}
          enlace={enlace}
          detalles={detalles}
        />
      ))}
    </section>
  );
}

export default Categorias;
