import { Box ,Heading,Image , Skeleton, SkeletonText, Text} from '@chakra-ui/react'
import React from 'react'
import {AddIcon, MinusIcon} from "@chakra-ui/icons"
import { CartDelete } from './CartDelete'

const Cartbox = ({mainImage ,quantity, categories ,title ,price ,realPrice ,isLoadingCart , id ,handleDeleteProduct}) => {

  const total = Math.floor(+(realPrice) * 100 )
  const spend = Math.floor(+(price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 
  return (
    <Box  width={{base:"100%", sm: "100%", md: "90%", lg: "80%" ,xl: "60%",'2xl': "60%",}} p="20px" height="auto" display="flex" >
        <Box >
      <Skeleton isLoaded={isLoadingCart} ><Image src={mainImage} width="90px" /></Skeleton>
     {/*   For INCRESING THE COUNT OF PRODUCTS-------------------- */}
     <Skeleton isLoaded={isLoadingCart} > <Box display="flex" border="1px  blue" mt="10px" justifyContent="space-between" >
       <Text cursor="pointer"><MinusIcon  borderRadius="50%" fontSize="22px" p="4px" style={{color:"#c2c2c2" , border:"1px solid #c2c2c2" }} /></Text>
       <Text border="1px solid #c2c2c2" pl="13px" pr="13px">{quantity}</Text>
       <Text cursor="pointer"><AddIcon borderRadius="50%" fontSize="22px" p="4px" style={{color:"#c2c2c2" ,border:"1px solid #c2c2c2"}} /></Text>
    </Box></Skeleton>
      </Box>

      {/*  Details box-------------------------- */}
      <Box  ml="20px" pl="10px" width="82%">

       <Heading fontSize="15.5px" fontWeight="600" mt="5px" color="#303030" textAlign="left">{categories}</Heading> 
      <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">{title}</Text> 

   {/*  price is here -------------------------------- */}
   <Skeleton isLoaded={isLoadingCart} ><Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
           
           
          </Box></Skeleton>
          {/*  Price end ----------- */}
         <Heading fontSize="22px" fontWeight="500" mt="6px" color="#ff6461" textAlign="left">In Stock</Heading> 
        {/* <Text fontSize='16px' mt="8px"  fontWeight="500" color="#727272" textAlign="left">REMOVE</Text>  */}
         <CartDelete id={id} handleDeleteProduct={handleDeleteProduct} />
    
      </Box>
    </Box>
  )
}

export {Cartbox} 
