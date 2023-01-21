import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PaymentBlock = ({ total, final,status,disable }) => {
    return (
        <Box
        height={"fit-content"}
            padding={2}
            paddingBottom={0}
            backgroundColor={"#ebebff"}
            border={"1px solid lightgrey"}
            width={{ base: '100%', md: '100%', lg: 350 }} textAlign={"left"}>
            <Box><Text
                as='b'
                fontSize={20}
            >Order Details</Text></Box>
            <Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Text>Bag total</Text>
                    <Text>₹ {final}</Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Text>Bag discount</Text>
                    <Text>-₹ {final - total}</Text>
                </Box>
            </Box>
            <Box
                as='i'
                color={"teal"}
                display={"flex"} justifyContent={"space-between"}>
                <Text>Delivery Fee</Text>
                <Text>Free</Text>
            </Box>
            <Box
                as='b'
                fontSize={20}
                display={"flex"} justifyContent={"space-between"}>
                <Text
                >Order Total</Text>
                <Text>₹ {total}</Text>
            </Box>
            <Box>
                <Link to={"/payment"}>
                <Button

                isDisabled={disable}
                display={status ? "block" : "none"}
                    width={"100%"}
                    colorScheme={"green"}
                >Proceed to Payment</Button>
                </Link>
            </Box>
        </Box>
    )
}

export default PaymentBlock