import React from "react";
import logo from "./images/remover.png";
const Header = () => {
  return (
    <header>
      <div className="mainLogo">
        <img src={logo} className="logo" alt="main logo" />
        <h1>Foodie-cooker</h1>
      </div>
    </header>
  );
};

export default Header;
