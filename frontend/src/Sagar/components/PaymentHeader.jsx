import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentHeader = () => {
    return (
        <Box
        fontSize={{ base: 13, md: 15, lg: 20 }}
        width={'100%'}
        zIndex={100}
        top={0}
        position={'fixed'}
            backgroundColor={"#e3e3e3"}
            paddingRight={{ base: 5, md: 5, lg: 40 }}
            justifyContent={"space-between"}
            display={"flex"}>
            <Link to="/"><Box><Image width={220} src={"https://i.ibb.co/4srNbCm/FH.png"}></Image></Box></Link>
            <Box display={{ base: 'block', md: 'flex', lg: 'flex' }}
            alignItems={"center"}
            ><Image margin={'auto'}
            width={{ base: 7, md: 8, lg: 10 }}
                src={"https://assets.ajio.com/static/peassets/public/icons/Secure.svg"}></Image>
                <Text>SECURE PAYMENTS</Text></Box>
            <Box display={{ base: 'block', md: 'flex', lg: 'flex' }}
            alignItems={"center"}><Image
            margin={'auto'}
            width={{ base: 7, md: 8, lg: 10 }}
                src={"https://assets.ajio.com/static/peassets/public/icons/Rupee.svg"}></Image>
                <Text>CASH ON DELIVERY</Text></Box>
            <Box display={{ base: 'block', md: 'flex', lg: 'flex' }}
            alignItems={"center"}><Image
            margin={'auto'}
            width={{ base: 7, md: 8, lg: 10 }}
                src={"https://assets.ajio.com/static/peassets/public/icons/Assured-Quality.svg"}></Image>
                <Text>ASSURED QUALITY</Text></Box>
            <Box display={{ base: 'block', md: 'flex', lg: 'flex' }}
            alignItems={"center"}><Image
            margin={'auto'}
                width={{ base: 7, md: 8, lg: 10 }}
                src={"https://assets.ajio.com/static/peassets/public/icons/Easy-Returns.svg"}></Image>
                <Text>EASY RETURNS</Text></Box>
        </Box>
    )
}

export default PaymentHeader