import React from 'react';
import "./styles/style.css";
import Special1 from "./icons_assets/bruchetta.svg";
import Special2 from "./icons_assets/greeksalad.jpg";
import Special3 from "./icons_assets/lemondessert.jpg";

const Highlight = () => {
    return (
        <>
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
      </>
    )
  }

  export default Highlight