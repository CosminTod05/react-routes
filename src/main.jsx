import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';

// Se renderiza la aplicación con las rutas definidas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Añadimos el Navbar para que aparezca en todas las páginas */}
      <Navbar />
      <Routes>
        {/* Definición de las rutas del proyecto */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
