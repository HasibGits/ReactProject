// StickyHeader.js
import React from 'react';
import './StickyHeader.css';

const StickyHeader = () => {
  return (
    <header className="sticky-header">
      <h1>My Website</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#carousel">Carousel</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default StickyHeader;
