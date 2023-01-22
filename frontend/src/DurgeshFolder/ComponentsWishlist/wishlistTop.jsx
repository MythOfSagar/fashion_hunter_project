import { Box , Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./wishlist.css"


const WishlistTop = ({wishlistLength , cartLength}) => {
  return (
    <Box >
      
       <Box  width="80%" ml="auto" mr="auto" pt="10px" mt="10px" shadow="md"   flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}}   pb="20px" background='#ffffff' style={{border:"1px solid #dbdddf" , height:"10vh" , display:"flex" ,justifyContent:"space-evenly" , alignItems:"center"}}>
         <Link to="/wishlist"> <Text color="#2874f0" className='wishlistCompo' fontWeight={500}  fontSize="17px" cursor="pointer" >Wishlist {wishlistLength > 0 && (`(${wishlistLength})`)}</Text></Link>

         <Link to="/cart"> <Text color="#2874f0" className='cartCompo' fontWeight={500} fontSize="17px"  cursor="pointer" >Cart {cartLength > 0 && (`(${cartLength})`)}</Text></Link>

      </Box>
    </Box>
  )
}

export {WishlistTop} 
