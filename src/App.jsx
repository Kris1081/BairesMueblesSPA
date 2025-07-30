import { Outlet, Link } from "react-router-dom";
import "./App.css";
import LogoBM from "./assets/imgs/LogoBM.jpg";

function App() {
  return (
    <>
      <header className="header">
        <div className="contenedor-logo">
          <img src={LogoBM} alt="Baires Muebles Logo" className="logo" />
          <h1>Baires Muebles</h1>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/fabricacion">Fabricación</Link>
            </li>
            <li>
              <Link to="/tapiceria">Tapicería</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-contenido">
          <p className="footer-text">
            &copy; Baires Muebles. Todos los derechos reservados.
          </p>
          <p className="footer-text">Ubicados en Tegucigalpa, Honduras</p>
          <p className="footer-text">
            Síguenos en: 
            <a
              href="https://www.facebook.com/BairesMueblesHn/"
              target="_blank"
              className="footer-link"
            >
              Facebook 
            </a>
            <span className="separator">|</span>
            <a
              href="https://www.instagram.com/bairesmuebles/"
              target="_blank"
              className="footer-link"
            >
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
