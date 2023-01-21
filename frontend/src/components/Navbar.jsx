import React from "react";
import useWindowsize from "../Hook/HandW.hook";
import "./Navbar.css";
import DraweExample from "./dwrawer"
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Action from "./action"

const Navbar = () => {
  const [height,width]=useWindowsize();
  console.log(height,width);
  return (
    <div id="navbar">
      <div id="navbar-left">
        <img
          id="site-logo"
          src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
          alt=""
        />
      </div>
  { width>900 ?
      <div id="navbar-right">
        <div id="right-upper">
        
          
            <p id="ru">Customer Care</p>
          
          <button id="navbar-button">Visit AJIOLUXE</button>
          <Action/>
           
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
      </div> :
        <DraweExample className="draw"/>
      }
    </div>
  );
};

export default Navbar;
