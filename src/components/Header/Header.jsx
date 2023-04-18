import React from 'react'
import "./Header.css"
export const Header = () => {
  return (
<section className="w-wrapper">
    <div className="flexCenter paddings innerWidth">

        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu">
            <a href="">
                Residencias
            </a>
                <a href="">Nossos Valores</a>
                <a href="">Entre em Contato</a>
                <a href="">Comece Aqui</a>
                <button className='button'>
                <a href="">Contato</a>
                </button>
                    
        </div>
    </div>
</section>
    )
}

export default Header
