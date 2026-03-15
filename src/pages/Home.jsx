import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      <p>Hola, soy un desarrollador web aprendiendo React Router. Esta es mi página de inicio.</p>
      <nav>
        <ul>
          <li><Link to="/projects">Ver mis proyectos</Link></li>
          <li><Link to="/resume">Ver mi currículum</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
