import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ShoppingItem = ({ mainImage, color, Images, categories, title, price, realPrice, description, discount, brand }) => {
    return (
        <Box
            margin={"auto"}
            boxShadow='lg' p='6' rounded='md' bg='white'
            display={"flex"} align={"left"} width={{ base: 320, md: 400, lg: 430 }} >
            <Box >
                <Image src={mainImage} width={120}></Image>
            </Box>
            <Box marginRight={2}>
                <Image src={Images[0].imageFront} width={37}></Image>
                <Image src={Images[1].imageFront} width={37}></Image>
                <Image src={Images[2].imageFront} width={37}></Image>
            </Box>
            <Box>
                <Box><Text as='b' fontSize='xl'><span style={{ color: "teal", fontWeight: "lighter" }}>Title:  </span>
                    {title}</Text></Box>
                <Box
                    gap={1}
                >
                    <Text><span style={{ color: "teal", fontWeight: "lighter" }}>Brand:  </span>{brand}</Text>
                    <Text><span style={{ color: "teal", fontWeight: "lighter" }}>Category:  </span>{categories}</Text>
                </Box>
                <Box
                    gap={{ base: 1, md: 3, lg: 3 }}
                    display={{ base: 'grid', md: "flex", lg: "flex" }}
                    templateColumns={{ base: 'repeat(1, 1fr)' }}
                >
                    <Text as='i' width={"fit-content"} ><span style={{ color: "teal", fontWeight: "lighter" }}>Price:  </span>₹ {price}</Text>
                    <Text as='i' ><span style={{ color: "teal", fontWeight: "lighter" }}>Real Price:  </span>₹ {realPrice}</Text>
                </Box>
                <Box><Text fontSize='sm'><span style={{ color: "teal", fontWeight: "lighter" }}>Discount:  </span>{discount}</Text></Box>
                <Box><Text fontSize="xs"><span style={{ color: "teal", fontWeight: "lighter" }}>Description:  </span>{description}</Text></Box>
                <Box display={"flex"}>
                    <span style={{ color: color, fontWeight: "lighter" }}>Color:  </span>
                    <Box backgroundColor={color} borderRadius={"50%"} width={25} height={25}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ShoppingItem

