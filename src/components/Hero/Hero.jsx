import React from "react";
import "./Hero.css";

export const Hero = () => {
  return <div>Hero</div>;
};

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left"></div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="vista externa de apartamentos" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
