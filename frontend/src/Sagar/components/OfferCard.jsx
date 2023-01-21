import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const OfferCard = ({providerUrl,providerDetails}) => {
  return (
    <Box 
    width={{ base: '100%', md: '100%', lg: '95%' }}
    border={'1px dotted teal'}
    alignContent={'left'}
    textAlign='left'
    display={"flex"}>
      <Image 
      height={5}
      src={providerUrl}></Image>
      <Text fontSize='xs'>{providerDetails}</Text>
    </Box>
  )
}

export default OfferCard