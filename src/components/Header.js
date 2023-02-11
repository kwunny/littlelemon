import React from 'react';
import Logo from "./icons_assets/logo.jpg";
import "./styles/style.css";

const Header = () => {
    return (
      <header>
        <img className="logo-img" src = { Logo } alt = "Little Lemon logo" class="logo"/>
      </header>
    )
  }

  export default Header