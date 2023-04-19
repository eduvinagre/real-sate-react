import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Residências</a>
          <a href="">Nossos Valores</a>
          <a href="">Entre em Contato</a>
          <a href="">Comece Aqui</a>
          <button className="button">
            <a href="">Contato</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
