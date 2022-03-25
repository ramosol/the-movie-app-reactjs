import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo.png"

const Header = () => {
  return (
    <div className="header">
        <div>
          <div className="logoHeader">
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul>
              <NavLink 
                to="/" 
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>ACCUEIL</li>
              </NavLink>
              
              <NavLink 
                to="/favoris"
                className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>FAVORIS</li>
              </NavLink>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;