import React from 'react';
import '../Styles/Projects.css';
import dynaquiz from '../assets/quiz.png';
import flames from '../assets/fg.png';
import laptop from '../assets/pce.png';
import anakle from '../assets/anakle.jpg';

const projectList = [
  {
    name: "Dyna Quiz",
    desc: "A quiz app where users can answer tech questions by language and difficulty.",
    img: dynaquiz,
    live: "https://dyna-quiz.vercel.app/",
    code: "https://github.com/Adebayo114/DynaQuiz"
  },
  {
    name: "Flames Game",
    desc: "A fun name-matching game that gives results like 'Lovers', 'Enemies', etc.",
    img: flames,
    live: "https://adebayo114.github.io/Flame-game/",
    code: "https://github.com/Adebayo114/Flame-game"
  },
  {
    name: "PC Zone",
    desc: "A sleek frontend e-commerce laptop website with product cards and pricing.",
    img: laptop,
    live: "https://hng2-hd2j68hww-adebayo114s-projects.vercel.app/",
    code: "https://github.com/Adebayo114/HNG-frontend-laptop-site"
  },
  {
    name: "Anakle",
    desc: "A business/agency website raising awareness for digital services.",
    img: anakle,
    live: "https://adebayo114.github.io/Anakle/",
    code: "https://github.com/Adebayo114/Anakle"
  }
];

export default function Projects() {
  return (
    <section data-aos="fade-up" className="projects" id="projects">
      <h3>Projects</h3>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.name} className="project-image" />
            <h4>{project.name}</h4>
            <p>{project.desc}</p>
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}
