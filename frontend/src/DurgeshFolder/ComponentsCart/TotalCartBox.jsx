import { Box , Text } from '@chakra-ui/react'
import React from 'react'

const TotalCartBox = ({totalPrice , discountPrice , totalAmountPrice ,cartLength}) => {
  return (
    <Box border="2px solid #dbdddf" background='#ffffff' height="auto" shadow="2xl" width={{base:"100%", sm: "90vw", md: "35vw", lg: "35vw" ,xl: "24vw",'2xl': "24vw",}}>
       <Box  p="10px 20px">
        <Text color="#8d8d8d" fontSize="17px" fontWeight={500} textAlign="left">PRICE DETAILS</Text>
        </Box> 
        <hr />
        {/* Details price--------------------- */}
       <Box p="10px 20px" mt="10px" textAlign="left" fontSize="17px" display="flex" justifyContent="space-between"  >
        <Text>Price ({cartLength} item)</Text>
         <Text>${totalPrice}</Text>
       </Box>

       <Box p="10px 20px" mt="10px" textAlign="left"  fontSize="17px" display="flex" justifyContent="space-between"  >
        <Text>Discount </Text>
         <Text color="#439447" >-${discountPrice}</Text>
       </Box>

       <Box p="10px 20px" mt="10px" mb="10px" textAlign="left" fontSize="17px" display="flex" justifyContent="space-between"  >
        <Text>Delivery Charges</Text>
         <Text color="#439447">FREE</Text>
       </Box>
       <hr />
       <Box p="10px 20px" mt="10px" mb="10px" fontWeight={600} textAlign="left" fontSize="20px" display="flex" justifyContent="space-between"  >
        <Text>Total Amount</Text>
         <Text color="#439447">${totalAmountPrice}</Text>
       </Box>
       <hr />
       <Text  p="10px 20px" color="#439447" textAlign="left" fontWeight={600} fontSize="18px">You will save ${discountPrice} on this order</Text>


    </Box>
  )
}

export  {TotalCartBox}
