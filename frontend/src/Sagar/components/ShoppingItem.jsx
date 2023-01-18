import { Box,  Image, Text } from '@chakra-ui/react'
import React from 'react'

const ShoppingItem = ({mainImage, color,Images, categories,title,price,realPrice,description,discount, brand,onClick }) => {
    return (
        <Box display={"flex"}>
            <Box>
                <Image src={mainImage} width={150}></Image>
            </Box>
            <Box>
                <Image src={Images[0].imageFront} width={45}></Image>
                <Image src={Images[1].imageFront} width={45}></Image>
                <Image src={Images[2].imageFront} width={45}></Image>
            </Box>
            <Box>
                <Box><Text>{title}</Text></Box>
                <Box display={"flex"}>
                    <Box backgroundColor={color} onClick={onClick}>clr</Box>
                    <Text>{brand}</Text>
                    <Text>{categories}</Text>
                </Box>
                <Box display={"flex"}>
                    <Text>{price}</Text>
                    <Text>{realPrice}</Text>
                </Box>
                <Box><Text>{discount}</Text></Box>
                <Box><Text>{description}</Text></Box>
            </Box>
        </Box>
    )
}

export default ShoppingItem

