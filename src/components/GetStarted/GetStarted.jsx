import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Vamos começar com a Homyz</span>
          <span className="secondaryText">
            Inscreva-se e receba as cotações de preços mais atrativas
            <br />
            Encontre logo seu novo lar
          </span>
          <button className="button">
            <a href="mailto:eduvinagre@gmail.com">Vamos Começar</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
