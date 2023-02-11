import React from 'react';
import "./styles/style.css";
import Heroimg from "./icons_assets/restaurantchefB.jpg";
import Special1 from "./icons_assets/bruchetta.svg";
import Special2 from "./icons_assets/greeksalad.jpg";
import Special3 from "./icons_assets/lemondessert.jpg";

const Main = () => {
    return (
      <main>
        <div class="main-container">
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
            <div class="highheader black">
              <div class="leftbox"><h1>Highlights</h1></div>
              <div class="rightbox textright">Order Online</div>
            </div>
            <div class="highlight">
              <div class="box1">
                <img className="special1-img" src = { Special1 } alt = "Specials Image" class="special1"/>
                <div class="highlighttitle-container">
                  <div class="dishtitle strong">Dish Name</div>
                  <div class="dishprice">$10.99</div>
                </div>
                <div class="dishdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
              </div>
              <div class="box2">
                <img className="special2-img" src = { Special2 } alt = "Specials Image" class="special2"/>
                <div class="highlighttitle-container">
                  <div class="dishtitle strong">Dish Name</div>
                  <div class="dishprice">$10.99</div>
                </div>
                <div class="dishdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
              </div>
              <div class="box3">
                <img className="special3-img" src = { Special3 } alt = "Specials Image" class="special3"/>
                <div class="highlighttitle-container">
                <div class="dishtitle strong">Dish Name</div>
                <div class="dishprice">$10.99</div>
                </div>
                <div class="dishdesc">Lorem ipsum dolord sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
              </div>
            </div>
            <div class="testimonial"></div>
        </div>
      </main>
    )
  }

  export default Main