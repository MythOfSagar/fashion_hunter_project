import React from "react";
import useWindowsize from "../Hook/HandW.hook";
import "./Navbar.css";
import DraweExample from "./dwrawer"
import { FaHeart } from "react-icons/fa"
import { BsFillHandbagFill } from "react-icons/bs";
import Action from "./action"
import { Link, useNavigate } from "react-router-dom";
import { InputGroup, InputLeftElement, Input, useToast, Box } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { getLocalData } from "../Utils/LocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartData } from "../Redux/Cart_reducer/action";
import { getWishListData } from "../Redux/Wishlist_reducer/action";


const Navbar = () => {
  const dispatch = useDispatch()
  const cartArrayData = useSelector(state => state.CartReducer.cartArrayData)
  const wishListArray = useSelector(state => state.WishlistReducer.wishListArray)

  const [width] = useWindowsize();
  const navigate = useNavigate()
  const toast = useToast()

  const handleLogin = () => {
    if (!getLocalData("token")) {
      navigate("/login")
      toast({
        title: `You are not login, login first`,
        status: 'error',
        isClosable: true,
      })
    }
  }


  useEffect(() => {
    dispatch(getCartData)
    dispatch(getWishListData)

  }, [])

  return (
    <div id="navbar">
      <div id="navbar-left">
        <Link to="/">   <img
          id="site-logo"
          src="https://i.ibb.co/2dkyD2f/Untitledfdgfdg.png"
          alt="home page logo"
        /></Link>
      </div>


      {/* { width>900 ? */}
      <div id="navbar-right">
        <div id="right-upper">
          <p id="ru">Customer Care</p>
          <button id="navbar-button">Visit Fashion</button>
          <Action />

        </div>
        <div id="right-lower">
          <Link to="/mens"> <p id="rl">MEN</p></Link>
          <p id="rl">WOMEN</p>
          <p id="rl">KIDS</p>
          <p id="rl">INDIE</p>


          {/*  Search bar ------------------------------------ */}
          {/* <input id="navbar-input" type="search"  placeholder="Search Products" style={{outline:"none", borderRadius:"4px"}} /> */}
          <Link to="/search"> <InputGroup>
            <InputLeftElement cursor="pointer" pointerEvents='none' children={<AiOutlineSearch color='gray.300' />} t />
            <Input type='tel' placeholder='Search Products' variant="" border="1px solid #2f4254" width="200px" />
          </InputGroup> </Link>
          {/*  Search bar end ----------------------- */}

          <div className="icon" onClick={handleLogin}>
            {/*  Wishlist -------------durgesh */}
            <Box className="icon-div" position="relative">
              <Link to="/wishlist"> <FaHeart /> </Link>
              {(wishListArray[0] !== "P" && wishListArray.length !== 0) && <Box className="wishListClass" position="absolute" left="22px" top="-2px" color="#ffffff" backgroundColor="#ff6161" width="23px" height="25px" fontWeight="700" borderRadius="50%" fontSize="18px" border="1px solid #ffffff">{wishListArray.length}</Box>}


            </Box>

            {/*  cart ------------- durgesh ----*/}
            <Box className="icon-div" position="relative" >
              <Link to="/cart"> <Box><BsFillHandbagFill /></Box></Link>

              {(cartArrayData[0] !== "P" && cartArrayData.length !== 0) && <Box className="manoj" position="absolute" left="22px" top="-2px" color="#ffffff" backgroundColor="#ff6161" width="23px" height="25px" fontWeight="700" borderRadius="50%" fontSize="18px" border="1px solid #ffffff" >{cartArrayData.length}</Box>}
            </Box>
            {/* main end ------------------- */}
          </div>
        </div>
      </div> :
      <div className="draw">

        <DraweExample />
      </div>
      {/* // } */}
    </div>
  );
};

export default Navbar;
