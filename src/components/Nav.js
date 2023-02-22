import React from 'react';
import "./styles/style.css";

const Nav = () => {
    return (
      <nav>
        <ul>
          <li class="horinav black"><a href="/">Home </a></li>
          <li class="horinav black"><a href="/booking">About </a></li>
          <li class="horinav black"><a href="#contact">Menu </a></li>
          <li class="horinav black"><a href="#about">Reservations </a></li>
          <li class="horinav black"><a href="#about">Order Online </a></li>
          <li class="horinav black"><a href="#about">Login </a></li>
        </ul>
      </nav>
    )
  }

  export default Nav