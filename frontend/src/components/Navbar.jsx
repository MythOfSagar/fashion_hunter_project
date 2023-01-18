import React from "react";
import "./Navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-left">
        <img
          id="site-logo"
          src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
          alt=""
        />
      </div>

      <div id="navbar-right">
        <div id="right-upper">
          
            <p id="ru">Sign In / Join AJIO</p>
        
          
            <p id="ru">Customer Care</p>
          
          <button id="navbar-button">Visit AJIOLUXE</button>
        </div>
        <div id="right-lower">
          <p id="rl">MEN</p>
          <p id="rl">WOMEN</p>
          <p id="rl">KIDS</p>
          <p id="rl">INDIE</p>
          <p id="rl">HOME AND KITCHEN</p>
          <input id="navbar-input" type="text" placeholder="Search AJIO" />

          <div className="icon">
            <div className="icon-div">
              <AiOutlineHeart />
            </div>
            <div className="icon-div"> 
              <BsHandbag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
