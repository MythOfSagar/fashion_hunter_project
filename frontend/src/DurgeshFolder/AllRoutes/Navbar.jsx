import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-around" , border:"2px solid red" , height: "10vh"}} >
      <Link to="/">Home Page Link</Link>
      <Link to="/mens">Product Page Link</Link>
      <Link to="/SinglePage">Single Page</Link>
      <Link to="/wishlist">WishList</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export  {Navbar}

