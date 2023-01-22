import React from "react";
import useWindowsize from "../Hook/HandW.hook";
import "./Navbar.css";
import DraweExample from "./dwrawer"
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Action from "./action"
import { Link } from "react-router-dom";
import { InputGroup, InputLeftElement , Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [height,width]=useWindowsize();
  // console.log(height,width);
  return (
    <div id="navbar">
   <div id="navbar-left">
   <Link to="/">   <img
          id="site-logo"
          src="https://i.ibb.co/2dkyD2f/Untitledfdgfdg.png"
          alt="home page logo"
        /></Link>
      </div>
      
      
  { width>900 ?
      <div id="navbar-right">
        <div id="right-upper">
            <p id="ru">Customer Care</p>
          <button id="navbar-button">Visit AJIOLUXE</button>
          <Action/>
           
        </div>
        <div id="right-lower">
         <Link to="/mens"> <p id="rl">MEN</p></Link>
          <p id="rl">WOMEN</p>
          <p id="rl">KIDS</p>
          <p id="rl">INDIE</p>


          {/*  Search bar ------------------------------------ */}
          {/* <input id="navbar-input" type="search"  placeholder="Search Products" style={{outline:"none", borderRadius:"4px"}} /> */}
          <InputGroup>
    <InputLeftElement pointerEvents='none' children={<AiOutlineSearch color='gray.300' />} />
    <Input type='tel' placeholder='Search Products'  variant="" border="1px solid #2f4254" width="200px"/>
  </InputGroup>
  {/*  Search bar end ----------------------- */}

          <div className="icon" >
            <div className="icon-div">
             <Link to="/wishlist"> <AiOutlineHeart /> </Link>
            </div>
            <div className="icon-div"> 
             <Link to="/cart"> <BsHandbag /> </Link>
            </div>
          </div>
        </div>
      </div> :
         <div className="draw">

           <DraweExample />
         </div>
      }
    </div>
  );
};

export default Navbar;
