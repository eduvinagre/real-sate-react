import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

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

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Ligue</span>
                    <span className="secondaryText">(99) 9999-9999</span>
                  </div>
                </div>
                <div className="flexCenter button">Ligue Agora</div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">(99) 9999-9999</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Agora</div>
              </div>
            </div>
          </div>
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
