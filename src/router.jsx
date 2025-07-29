import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Pgs/Home';
import Contacto from './components/Pgs/Contacto';
import Muebles from './components/Pgs/Muebles';
import Tapiceria from './components/Pgs/Tapiceria';
import Otros_tapiceria from './components/Pgs/Otros_tapiceria';
import Sillas_tapiceria from './components/Pgs/Sillas_tapiceria';
import Otros_muebles from './components/Pgs/Otros_muebles';
import Silla from './components/Pgs/Silla';
import Sofas from './components/Pgs/Sofas';
import Fabricacion from './components/Pgs/Fabricacion';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Muebles" element={<Muebles />} />
          <Route path="Tapiceria" element={<Tapiceria />} />
          <Route path="Otros_tapiceria" element={<Otros_tapiceria />} />
          <Route path="Sillas_tapiceria" element={<Sillas_tapiceria />} />
          <Route path="Otros_muebles" element={<Otros_muebles />} />
          <Route path="Silla" element={<Silla />} />
          <Route path="Sofas" element={<Sofas />} />
          <Route path="Fabricacion" element={<Fabricacion />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}