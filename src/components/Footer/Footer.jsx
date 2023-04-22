import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo da homyz" width={120} />

          <span className="secondaryText">
            Nosso objetivo é dar a todos <br />o melhor lugar para viver.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Informação</span>
          <span className="secondaryText">
            Rua Kobe 2704, Belo Horizonte, MG
          </span>
          <div className="flexCenter f-menu">
            <span>Propriedade</span>
            <span>Serviços</span>
            <span>Produtos</span>
            <span>Sobre nós</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
