import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart  c-left">
          <span className="orangeText">Fale Conosco</span>
          <span className="primaryText">Nossos Contatos</span>
          <span className="secondaryText">
            Estamos sempre preparados para oferecer o melhor serviço para você.
            Acreditamos que um bom lugar para morar torna a vida melhor.
          </span>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
