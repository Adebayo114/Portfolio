    import React from 'react';
    import '../Styles/contacts.css';

    export default function Contact() {
    return (
        <section
        className="contact"
        id="contact"
        data-aos="fade-up"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <h3>Contact</h3>
        <p>Want to collaborate or work together?</p>
        <p>Email me at: <a href="mailto:matthewadebayo392@gmail.com">matthewadebayo392@gmail.com</a></p>
        <p>
            <a href="https://github.com/Adebayo114" target="_blank" rel="noreferrer noopener">GitHub</a>|
            <a href="https://www.linkedin.com/in/adebayo-oladayo" target="_blank"> LinkedIn</a>
        </p>
        </section>
    );
    }
