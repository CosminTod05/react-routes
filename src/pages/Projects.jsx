import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} width="200" />
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">Ver más</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
