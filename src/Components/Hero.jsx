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
        <h2>Adebayo Oladayo Matthew</h2>
        <p>Frontend Developer turning ideas into interactive digital experiences.</p>
        </section>
    );
    }
