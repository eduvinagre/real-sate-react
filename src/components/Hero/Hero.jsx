import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
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
            <span className="secondaryText">
              Descubra uma variedade de imóveis que combinam com o seu estilo
            </span>
            <span className="secondaryText">
              Esqueça todas as dificuldades para encontrar o seu lar
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Pesquisar</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Produtos Premium</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={19500} end={20000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Clients Satisfeitos</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Prêmios Conquistados</span>
            </div>
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
