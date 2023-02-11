import React from 'react';
import Logo from "./icons_assets/logo.png";
import "./styles/style.css";

const Footer = () => {
    return (
      <footer>
        <div class="footer-container">
          <div class="logobox-footer">
            <img className="footerlogo-img" src = { Logo } alt = "Footer Logo" class="footerlogo"/>
          </div>
          <div class="footerbox-footer">
            <div class="footer-content gray">
              <div class="footer1">
              <ul>
                  <li><h2>Navigation</h2></li>
                  <li><a href="#home">Home </a></li>
                  <li><a href="#news">About </a></li>
                  <li><a href="#contact">Menu </a></li>
                  <li><a href="#about">Reservations </a></li>
                  <li><a href="#about">Order Online </a></li>
                  <li><a href="#about">Login </a></li>
                </ul>
              </div>
              <div class="footer2">
                <ul>
                  <li><h2>Contact</h2></li>
                  <li>444 Winkleworth Ave, Winklecity, WinkleState 04232</li>
                  <li>Phone: (123)456-7890</li>
                  <li>Email: littlelemon@lemonjuice.com</li>
                </ul>
              </div>
              <div class="footer3">
                <ul>
                  <li><h2>Socials</h2></li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer