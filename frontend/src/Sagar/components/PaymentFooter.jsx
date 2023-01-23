import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const PaymentFooter = () => {
    return (
        <Box  
         
        justifyContent={"space-between"}
        backgroundColor={"#a9aab1"}
        width={"100%"}
        padding={7}

        display={"flex"}>
            <Box>
                <Box
                marginBottom={4}
                ><Text as={"b"}>Payment Methods</Text></Box>
                <Box  display={"flex"}>
                    <Image width={{ base: 39, md: 90, lg: 20 }} src={"https://assets.ajio.com/static/peassets/public/icons/Net-Banking.svg"}></Image>
                    <Image width={{ base: 39, md: 90, lg: 20 }} src={"https://assets.ajio.com/static/peassets/public/icons/visa.svg"}></Image>
                    <Image width={{ base: 39, md: 90, lg: 20 }} src={"https://assets.ajio.com/static/peassets/public/icons/MasterCard.svg"}></Image>
                    <Image width={{ base: 39, md: 90, lg: 20 }} src={"https://assets.ajio.com/static/peassets/public/icons/Jio-Money.svg"}></Image>
                    <Image width={{ base: 39, md: 90, lg: 20 }} src={"https://assets.ajio.com/static/peassets/public/icons/COD.svg"}></Image>
                </Box>
            </Box>
            <Box>
            <Image src={"https://assets.ajio.com/static/peassets/public/icons/ssl.svg"}></Image>
            </Box>
        </Box>
    )
}

export default PaymentFooter