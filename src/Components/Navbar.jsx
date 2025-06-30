import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Navbar.css';

    export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
        <div className="logo">Adebayo</div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        </nav>
    );
    }
// Note: Ensure that the CSS file 'Navbar.css' is correctly set up to style the navbar and its elements.