import { Box , Button ,Text } from '@chakra-ui/react'
import React from 'react'
import { Cartbox } from '../ComponentsCart/cartBox'
import { TotalCartBox } from '../ComponentsCart/TotalCartBox'
import { Wishlistmain } from '../ComponentsWishlist/wishlist'
import { WishlistTop } from '../ComponentsWishlist/wishlistTop'
import "../ComponentsCart/cartBox.css"
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from 'react' 
import { deleteCartData, getCartData } from '../../Redux/Cart_reducer/action'

const CartPage = () => {
 
   const {isLoadingCart , cartArrayData , isErrorCart} = useSelector((store)=>{
    return {
      isLoadingCart:store.CartReducer.isLoadingCart ,
      cartArrayData:store.CartReducer.cartArrayData ,
      isErrorCart:store.CartReducer.isErrorCart 
    }
   })


  //  logic for calculating the total price ----------------------------
       var totalPrice = 0  
       var discountPrice = 0 
       var totalAmountPrice = 0 
      if(cartArrayData?.length > 0){
        const priceCart = cartArrayData?.map((item)=>{
            return (item.price )
        })
        const realPrice = cartArrayData?.map((item)=>{
          return (item.realPrice)
      })
      const quantityCart = cartArrayData?.map((item)=>{
        return (item.quantity)
    })  
       
    for(var i=0 ; i<priceCart.length ; i++){
      totalPrice +=  realPrice[i] * quantityCart[i]
    }
    for(var i=0 ; i<priceCart.length ; i++){
      discountPrice +=  priceCart[i] * quantityCart[i]
    }
        
     totalAmountPrice = totalPrice-discountPrice
      }
      // console.log(totalPrice ,discountPrice ,totalAmountPrice)
   
   const dispatch = useDispatch()
// DELETE REQ FOR CART ----------------------------------------
   const handleDeleteProduct = (id)=>{
    dispatch(deleteCartData(id)).then(()=> dispatch(getCartData))
}
  useEffect(()=>{
      dispatch(getCartData)
  },[])
  

  return (
    <Box>
      <WishlistTop cartLength={cartArrayData.length} />
      {cartArrayData?.length == 0 && <Wishlistmain page="basket" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/08dddd59-c0ff-4efd-8723-6d847f5df25f.png?q=90" /> }
       
       {/*  CART START FROM HERE ------------------- */}
     {cartArrayData?.length > 0 &&  <Box display="flex" justifyContent="space-evenly" flexDirection={{base:"column", sm: "column", md: "row", lg: "row" ,xl: "row",'2xl': "row",}}   height="auto" width={{base:"100%", sm: "100%", md: "100%", lg: "100%" ,xl: "80%",'2xl': "80%",}}  ml="auto" mr="auto" mt="8px"  p="20px" >
      {/*  Cart page box-------------------------- */}
        <Box border="1px solid  #dbdddf" shadow="md" height="auto" mb="25px"  width={{base:"100%", sm: "90vw", md: "50vw", lg: "50vw" ,xl: "50vw",'2xl': "50vw",}}>
      
        {cartArrayData.length > 0 && cartArrayData.map((item, i)=>{
          return (
            <Box key={i}>
            <Cartbox mainImage={item.mainImage} handleDeleteProduct={handleDeleteProduct} id={item.id} isLoadingCart={isLoadingCart} quantity={item.quantity} categories={item.categories} title={item.title} price={item.price} realPrice={item.realPrice}/>
            <hr  style={{marginTop:"10px" }}/>
            </Box>
          )
        })}

        <Box className='PlaceOrder' position="sticky" bottom="0px" style={{zIndex:"100"}} borderTop="1px solid  #dbdddf" borderBottom="1px solid  #dbdddf" shadow="Dark lg" height="10vh" p="30px" mt="-13px" background='#ffffff'  justifyContent="flex-end" alignItems="center">

        <Button display="flex"  backgroundColor='#fb641b' variant='unstyled' width={{base:"105%", sm: "100%", md: "53%", lg: "47%",xl: "47%",'2xl': "33%"}} height="52px"  borderRadius="2px" > <Text color="#fffcfa" ml="2"  fontSize="17px">PLACE ORDER</Text></Button>

        </Box>
        </Box>

        

        {/* TOTAL CALCULATION BOX------------------------------ */}
        <Box> 
          <TotalCartBox totalPrice={totalPrice} discountPrice={totalAmountPrice} totalAmountPrice={discountPrice} cartLength={cartArrayData.length}/>
        </Box>


        </Box> 
      }

        <Box className='PlaceOrderPosition' position="sticky" ml="auto" mr="auto" bottom="0px" style={{zIndex:"100"}}  shadow="Dark lg" height="10vh"  mt="-13px" background='#ffffff'  justifyContent="flex-end" alignItems="center"width={{base:"100%", sm: "90vw", md: "50vw", lg: "50vw" ,xl: "50vw",'2xl': "50vw",}}>

        <Button display="flex" textAlign="center"  backgroundColor='#fb641b' variant='unstyled' width={{base:"100%", sm: "100%", md: "53%", lg: "47%",xl: "47%",'2xl': "33%"}} height="50px"  borderRadius="2px" > <Text color="#fffcfa" fontSize="17px">PLACE ORDER</Text></Button>

        </Box>

    </Box>
  )
}

export  {CartPage}
