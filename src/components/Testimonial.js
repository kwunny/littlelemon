import React from 'react';
import "./styles/style.css";
import Profile1 from "./icons_assets/profile1.jpg";
import Profile2 from "./icons_assets/profile2.jpg";
import Profile3 from "./icons_assets/profile3.jpg";

const Testimonial = () => {
    return (
        <>
        <div class="testimonialheader">
            <div class="leftbox white"><h1>Testimonials</h1></div>
            <div class="rightbox"></div>
        </div>
        <div class="testimonials">
            <div class="box1">
                <div class="testprofile">
                    <div class="profileimg"><img className="profile1-img" src = { Profile1 } alt = "Profile Image" class="profileimg"/></div>
                    <div class="profiledesc">
                        <h2>Chloe M.</h2>
                        <p>Rating: 5/5 Stars</p>
                    </div>
                </div>
                <div class="testquote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</div>
            </div>
            <div class="box2">
                <div class="testprofile">
                    <div class="profileimg"><img className="profile2-img" src = { Profile2 } alt = "Profile Image" class="profileimg"/></div>
                    <div class="profiledesc">
                        <h2>Kernan F.</h2>
                        <p>Rating: 4.5/5 Stars</p>
                    </div>
                </div>
                <div class="testquote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</div>
            </div>
            <div class="box3">
                <div class="testprofile">
                    <div class="profileimg"><img className="profile3-img" src = { Profile3 } alt = "Profile Image" class="profileimg"/></div>
                    <div class="profiledesc">
                        <h2>Bella K.</h2>
                        <p>Rating: 5/5 Stars</p>
                    </div>
                </div>
                <div class="testquote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</div>
            </div>
        </div>
        </>
    )
  }

  export default Testimonial