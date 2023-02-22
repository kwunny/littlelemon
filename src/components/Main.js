import React from 'react';
import "./styles/style.css";
import Highlight from './Highlight.js';
import Hero from './Hero.js';
import Testimonial from './Testimonial.js';
import About from './About.js';


const Main = () => {
    return (
      <main>
        <div className="main-container">
            <Hero />
            <Highlight />
            <Testimonial />
            <About />
        </div>
      </main>
    )
  }

  export default Main