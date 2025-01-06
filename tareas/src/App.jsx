import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/home';
import { Pague2 } from './pages/form';
import { Tbla } from './pages/tablaPeriodica';

import './App.css';

function App() {
  return (
    <Routes>
      {/* Redirección de la raíz (/) hacia /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Ruta para la página principal */}
      <Route path="/home" element={<Home />} />

      {/* Ruta para la segunda página */}
      <Route path="/pague2" element={<Pague2 />} />
      <Route path="/pague3" element={<Tbla/>} />

    </Routes>
  );
}

export default App;
