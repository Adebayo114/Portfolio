import React from 'react';
import '../Styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiVercel, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Git', icon: <FaGitAlt color="#f1502f" /> },
  { name: 'Vercel', icon: <SiVercel color="#ffffff" /> },
  { name: 'Firebase', icon: <SiFirebase color="#ffcb2b" /> }
];

const softSkills = ["Problem-solving", "Communication", "Time management", "Team collaboration", "Adaptability"];

<ul className="soft-skills">
  {softSkills.map((skill, i) => (
    <li key={i}>{skill}</li>
  ))}
</ul>


export default function Skills() {
  return (
    <section data-aos="fade-up" className="skills" id="skills">
      <h3>Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={i}>
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
