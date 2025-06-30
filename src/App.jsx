import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Components/Loader';

// Lazy-loaded components
const Navbar = lazy(() => import('./Components/Navbar'));
const Hero = lazy(() => import('./Components/Hero'));
const About = lazy(() => import('./Components/About'));
const Projects = lazy(() => import('./Components/Projects'));
const Contact = lazy(() => import('./Components/Contacts'));
const Skills = lazy(() => import('./Components/Skills'));
const ResumeButton = lazy(() => import('./Components/ResumeButton'));
const Footer = lazy(() => import('./Components/Footer'));
const ThemeToggle = lazy(() => import('./Components/ThemeToggle'));

// ✅ Scroll Progress Bar
function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const percent = (scrollTop / height) * 100;
      setScroll(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        height: '4px',
        background: '#64ffda',
        width: `${scroll}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        transition: 'width 0.25s ease',
      }}
    />
  );
}

// ✅ Main App Component
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app dark-mode">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Adebayo Oladayo | Frontend Developer</title>
        <meta
          name="description"
          content="Professional portfolio of Adebayo Oladayo Matthew, a frontend developer focused on building beautiful web experiences."
        />
        <meta property="og:title" content="Adebayo Oladayo Portfolio" />
        <meta
          property="og:description"
          content="Frontend developer portfolio built with React, CSS, and AOS."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Lazy-loaded Content */}
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Hero />
        <ThemeToggle />
        <About />
        <Skills />
        <ResumeButton />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
