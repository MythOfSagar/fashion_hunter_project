import React from 'react'
import { Wishlistmain } from '../ComponentsWishlist/wishlist'
import { Box, Heading, SimpleGrid , Text} from '@chakra-ui/react'
import { WishlistTop } from '../ComponentsWishlist/wishlistTop' 
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from 'react' 
import { deleteWishListData, getWishListData } from '../../Redux/Wishlist_reducer/action' 
import { WishlistBox } from '../ComponentsWishlist/WishlistBox'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const WishlistPage = () => {
   
    

    const {isLoadingWishlist,wishListArray ,isErrorWishlist} = useSelector((state)=>{
    return {
        isLoadingWishlist:state.WishlistReducer.isLoadingWishlist ,
        wishListArray: state.WishlistReducer.wishListArray , 
        isErrorWishlist:state.WishlistReducer.isErrorWishlist ,
    } 
})



const dispatch = useDispatch()

const deleteWishlistItem = (uniqueID)=>{
  dispatch(deleteWishListData(uniqueID))
  .then(()=> dispatch(getWishListData))
  
}
const newData = (uniqueID)=>{
  deleteWishlistItem(uniqueID)
}
     
    useEffect(()=>{
      dispatch(getWishListData)
    },[])

    console.log(wishListArray )
//  console.log(wishListArray.length ,  "length")

  return (
    <Box>
      <Navbar />
        <WishlistTop  wishlistLength={wishListArray.length}/>
     {wishListArray?.length == 0 &&  <Wishlistmain  page="Wishlist" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />}
       
     {wishListArray?.length > 0 &&  <Box shadow="2xl" height="auto" border="1px solid #dbdddf" width={{base:"100%", sm: "100%", md: "100%", lg: "100%" ,xl: "80%",'2xl': "80%",}}  ml="auto" mr="auto" mt="8px" mb="15px"  p="20px" >
      <Text fontWeight={500} fontSize="20px" mb="10px" textAlign="left">My Wishlist: {wishListArray.length} items</Text>
      <SimpleGrid columns={{base:"1", sm: "2", md: "2", lg: "3" ,xl: "3",'2xl': "3",}} spacingY={10} spacingX={4}>
         {wishListArray?.length > 0  && wishListArray?.map((item , i)=>{
           return (
          <WishlistBox key={i} deleteWishlistItem={newData} mainImage={item.mainImage} categories={item.categories} title={item.title} price={item.price} realPrice={item.realPrice} uniqueID={item._id} isLoadingWishlist={isLoadingWishlist} />
           )
        })}
        
          
       </SimpleGrid>   
        </Box>}
        <Footer />
    </Box>
  )
}

export  {WishlistPage}
