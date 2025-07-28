import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Muebles from './pages/Muebles';
import Tapiceria from './pages/Tapiceria';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Muebles" element={<Muebles />} />
          <Route path="Tapiceria" element={<Tapiceria />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}