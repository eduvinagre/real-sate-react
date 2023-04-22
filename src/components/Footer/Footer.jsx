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
            Nossa visão é dar a todos <br />o melhor lugar para viver.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
