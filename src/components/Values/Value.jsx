import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
function Value() {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="casa" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Nossos Valores</span>
          <span className="primaryText">Nossos Valores para Você</span>
          <span className="secondaryText">
            Estamos sempre prontos para proporcionar os melhores serviços a
            você. <br />
            Nós acreditamos que um bom lugar para morar torna a sua vida melhor.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Value;
