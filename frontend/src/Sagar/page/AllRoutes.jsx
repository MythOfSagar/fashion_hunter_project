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

const AllRoutes = () => {
  return (
    <Routes>
      <Route  path='/' element={<HomePage/>}></Route>
        <Route  path='/admin' element={<AdminPage/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/register' element={<Register/>}></Route>
        <Route  path='/shipping' element={<ShippingPage/>}></Route>
        <Route  path='/payment' element={<PaymentPage/>}></Route>
        <Route  path='/paymentwaiting/:service/:img' element={<PaymentWaiting/>}></Route>
        <Route  path='/paymentsuccess' element={<PaymentSuccess/>}></Route>
    </Routes>
  )
}

export default AllRoutes