import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const COD = () => {
    return (
        <Box 
        width={{ base: "100%", md: "100%", lg: 500 }}
        padding={7}

        textAlign={"left"}>
            <Box
            marginBottom={2}
            ><Text as={"b"}>Cash on Delivery</Text></Box>
         <Box 
         borderRadius={"10px"}
         fontSize={12}
         width={"fit-content"}
         padding={1} backgroundColor={"#e0e6e8"}>
            <Text>₹29 will be charged addition for Cash on Delivery</Text>
         </Box>
            <Box><Link to={"/paymentsuccess"}><Button
            colorScheme={"green"}
            marginTop={5}
            width={250}>Place Order</Button></Link></Box>
            <Box>
                <Text
                color={"green.500"}
                fontSize='xs'>
                By placing this order, you agree to AJIO's T&C
                </Text>
            </Box>
        </Box>
    )
}

export default COD