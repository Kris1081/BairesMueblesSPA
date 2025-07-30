import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Banner.css';
function Banner() {
const { pathname } = useLocation();

    const contentByRoute = {
        '/fabricacion': {
            title: 'Fabricación Artesanal',
            text: 'Calidad y tradición en cada pieza',
        },
        '/muebles': {
            title: 'Muebles de Calidad',
            text: 'Diseños exclusivos para tu hogar',
            buttonText: 'Regresar a Fabricación',
            buttonLink: '/fabricacion',
        },
        '/silla': {
            title: 'Sillas de Diseño',
            text: 'Comodidad y estilo en cada asiento',
            buttonText: 'Regresar a Fabricación',
            buttonLink: '/fabricacion',
        },
        '/otros_muebles': {
            title: 'Otras Piezas',
            text: 'Muebles especiales y personalizados',
            buttonText: 'Regresar a Fabricación',
            buttonLink: '/fabricacion',
        },
        '/tapiceria':{
            title: 'Servicios de Tapicería',
            text: 'Renovamos y personalizamos tus muebles',
        },
        '/sofas':{
            title: 'Sofás de Lujo',
            text: 'Diseño y comodidad en tu sala',
            buttonText: 'Regresar a Tapicería',
            buttonLink: '/tapiceria',
        },
        '/sillas_tapiceria':{
            title: 'Tapicería de Sillas',
            text: 'Renueva tus sillas con nuestros servicios expertos',
            buttonText: 'Regresar a Tapicería',
            buttonLink: '/tapiceria',
        },
        '/otros_tapiceria':{
            title: 'Otros Servicios de Tapicería',
            text: 'Renovamos todo tipo de muebles tapizados',
            buttonText: 'Regresar a Tapicería',
            buttonLink: '/tapiceria',
        }
    };

    const { title, text, buttonText, buttonLink } = contentByRoute[pathname] || {
        title: '',
        text: '',
    };

    if (!title && !text) return null;

    return (
        <section className="banner">
            <h2>{title}</h2>
            <p>{text}</p>
            {buttonText && buttonLink && (
                <Link to={buttonLink} className="btn-banner">
                    {buttonText}
                </Link>
            )}
        </section>
    );
};

export default Banner;