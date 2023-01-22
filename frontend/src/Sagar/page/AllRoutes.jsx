import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/Login'
import Register from '../../components/Register'
import HomePage from '../../MainPage/HomePage'
import AdminPage from './AdminPage'
import PaymentPage from './PaymentPage'
import PaymentSuccess from './PaymentSuccess'
import PaymentWaiting from './PaymentWaiting'
import ShippingPage from './ShippingPage' 
// Imports----------------------
import { ProductPage } from "../../DurgeshFolder/Pages/ProductPage"
import {SinglePageProduct} from "../../DurgeshFolder/Pages/SinglePageProduct"
import { WishlistPage } from "../../DurgeshFolder/Pages/wishlistPage"
import { CartPage } from "../../DurgeshFolder/Pages/CartPage"

const AllRoutes = () => {
  return (
    <Routes>
      <Route  path='/' element={<HomePage/>}></Route>
        {/* <Route  path='/admin' element={<AdminPage/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/register' element={<Register/>}></Route>
        <Route  path='/shipping' element={<ShippingPage/>}></Route>
        <Route  path='/payment' element={<PaymentPage/>}></Route>
        <Route  path='/paymentwaiting/:service/:img' element={<PaymentWaiting/>}></Route>
        <Route  path='/paymentsuccess' element={<PaymentSuccess/>}></Route> */}


        {/* Durgesh Routes for product page ,singlepage , cartpage and wishlist */}
        <Route path="/mens" element={<ProductPage />}></Route>
        <Route path="/mens/:id" element={<SinglePageProduct />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        
    </Routes>
  )
}

export default AllRoutes