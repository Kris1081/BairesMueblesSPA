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
    ]

  };

  const categorias = categoriasPorRuta[pathname] || [];

  if (categorias.length === 0) return null;

  return (
    <section className="categorias">
      {categorias.map(({ imagen, titulo, descripcion, enlace }) => (
        <CategoriaCard
          key={titulo}
          imagen={imagen}
          titulo={titulo}
          descripcion={descripcion}
          enlace={enlace}
        />
      ))}
    </section>
  );
}

export default Categorias;
