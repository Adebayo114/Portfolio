    import React from 'react';
    import '../Styles/about.css';


    export default function About() {
    return (
        <section
        className="about"
        data-aos="fade-up"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <h3>About Me</h3>
        <p>
            I'm a passionate frontend developer who enjoys crafting beautiful and functional websites using HTML, CSS, JavaScript, and React. I love building clean user interfaces, solving UI challenges, and constantly growing through projects and collaboration. My mission is to build the web with intention, creativity, and purpose.
        </p>
        </section>
    );
    }
