import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Descubra
              <br /> o Imóvel Mais
              <br /> Adequado
            </h1>
          </div>
          <div className="flexColStart hero-description">
            <span>
              Descubra uma variedade de imóveis que combinam com o seu estilo
            </span>
            <span>Esqueça todas as dificuldades para encontrar o seu lar</span>
          </div>

          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Pesquisar</button>
          </div>
        </div>
        {/* right side */}
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
