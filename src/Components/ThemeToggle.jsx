import React, { useEffect, useState } from 'react';
import '../Styles/toggle.css';
export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} data-aos="fade-up" className="theme-toggle">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
