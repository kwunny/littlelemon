import React from 'react';
import "./styles/style.css";
import Heroimg from "./icons_assets/restaurantchefB.jpg";

const Hero = () => {
    return (
        <>
        <div class="hero">
            <div class="leftbox">
                <div class="titlecard yellow">
                  <h1>Little Lemon</h1>
                </div>
                <div class="herodesc white">
                    <p>Chicago</p>
                    <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with a modern twist.</p>
                </div>
            </div>
            <div class="rightbox">
                <img className="hero-img" src = { Heroimg } alt = "Hero Image" class="heroimg"/>
            </div>
        </div>
        </>
    )
  }

  export default Hero