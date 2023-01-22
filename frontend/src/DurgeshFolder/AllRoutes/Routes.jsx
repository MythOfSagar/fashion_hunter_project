import {Routes , Route} from "react-router-dom" 
import React from 'react'
import { ProductPage } from "../Pages/ProductPage"
import { HomePage } from "../Pages/homePage"
import { SinglePageProduct } from "../Pages/SinglePageProduct"
import { WishlistPage } from "../Pages/wishlistPage"
import { CartPage } from "../Pages/CartPage"

const AllRoutes = () => {
  return (
    <div >
      <Routes >
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mens" element={<ProductPage />}></Route>
        <Route path="/mens/:id" element={<SinglePageProduct />}></Route>
        <Route path="/SinglePage" element={<SinglePageProduct />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>

    </div>
  )
}


export  {AllRoutes}


