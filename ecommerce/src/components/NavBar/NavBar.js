import React from 'react';
import LogoImg from "../img/logo.png"
import CartWidget from '../CartWidget/CartWidget';
import '../style/style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImg} alt="Logo" />
      </div>

      <ul className="nav-list">
  <li><button id="btn-nav">Inicio</button></li>
  <li><button id="btn-nav">Productos</button></li>
  <li><button id="btn-nav">Contacto</button></li>
  </ul>

      <div className="cart-section">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
