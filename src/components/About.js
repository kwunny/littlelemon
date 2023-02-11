import React from 'react';
import "./styles/style.css";
import Picunder from "./icons_assets/aboutunder.jpg";
import Picover from "./icons_assets/aboutover.jpg";

const About = () => {
    return (
      <>
        <div class="about">
        <div class="leftbox paddingtop">
                <div class="titlecard black">
                  <h1>Little Lemon</h1>
                </div>
                <div class="herodesc black">
                    <p>Chicago</p>
                    <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with a modern twist.</p>
                </div>
            </div>
            <div class="rightbox">
                <div class="images-container">
                    <div class="aboutimg">
                        <img className="picunder-img" src = { Picunder } alt = "About Image" class="aboutimg aboutbg"/>
                    </div>
                    <div class="aboutimg">
                        <img className="picunder-img" src = { Picover } alt = "About Image" class="aboutimg"/>
                    </div>
                </div>
                
            </div>
        </div>
      </>
    )
  }

  export default About