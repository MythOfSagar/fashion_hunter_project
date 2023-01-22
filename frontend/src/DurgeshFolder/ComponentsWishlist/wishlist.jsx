import React, { useState } from 'react'
import {Box , Text , Image, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom' 
import "./wishlist.css"

const Wishlistmain = ({page , src}) => {
    


  return (
    <Box  height="auto" mt="8px" mb="15px" >
     
    
      {/*  Cart empty */}
      <Box shadow="2xl" height="auto" width="80%" border="1px solid #dbdddf" background='' ml="auto" mr="auto" mt="8px" display="flex" alignItems="center" flexDirection="column" pt="20px" >
      <Image src={src} alt='Cart' boxSize="200px" />
       
        <Text mt="20px" mb="10px" fontSize="19px" fontWeight={500}>Your {page} is Empty!</Text>
        <Text fontSize="12px" mb="10px">Add items to it now</Text>
       <Link to="/mens"><Button mb="50px" backgroundColor="#2874f0" borderRadius="2px" colorScheme="#2874f0" pl="35px" pr="35px">Shop now</Button></Link>
      </Box>
    </Box>
  )
}

export  {Wishlistmain}
