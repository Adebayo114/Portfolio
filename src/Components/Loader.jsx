// File: src/Components/Loader.jsx
import React from 'react';
import '../Styles/loader.css'; // make sure the path is correct

export default function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading Portfolio...</p>
    </div>
  );
}
