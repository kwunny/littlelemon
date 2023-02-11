import React from 'react';
import "./styles/style.css";
import Highlight from './Highlight.js';
import Hero from './Hero.js';
import Testimonial from './Testimonial.js';

const Main = () => {
    return (
      <main>
        <div class="main-container">
            <Hero />
            <Highlight />
            <Testimonial />
        </div>
      </main>
    )
  }

  export default Main