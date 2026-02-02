import React from 'react';
import '../Styles/hero.css';


export default function Hero() {
    return (
        <section
        className="hero"
        data-aos="fade-up"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
    <section className="hero" id="hero">
    <div className="hero-inner">
        <h2>Adebayo Oladayo Matthew</h2>
        <p>Software Engineer (Frontend Focus) building scalable web apps with React, JavaScript & Firebase.</p>
    </div>
    </section>




        </section>
    );
    }
