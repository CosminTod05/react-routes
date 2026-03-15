import React from 'react';
import { studies, experiences } from '../data/resume';

const Resume = () => {
  return (
    <div>
      <h1>Currículum Vitae</h1>

      <section>
        <h2>Educación</h2>
        <ul>
          {studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title} at {study.institution}</h3>
              <p>{study.date}</p>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h2>Experiencia Laboral</h2>
        <ul>
          {experiences.map((experience) => (
            <li key={experience.id}>
              <h3>{experience.title} en {experience.company}</h3>
              <p>{experience.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
