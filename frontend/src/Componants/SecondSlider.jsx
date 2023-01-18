
import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import "../Styles/FirstSlider.css"

const SecondSlider = () => {
  return (
    <Box marginTop={"-30px"} marginBottom={"-35px"}>
        <Carousel infiniteLoop autoPlay>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212919118-eb6dd866-17e6-420f-89e5-03a41281f6e0.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212919134-0d4fb15c-3fa7-4e00-8f9e-3faf15b119ae.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212919184-9c552142-10c7-4ad4-bc95-f1b7ae6eebd2.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212919190-ca1e7ad5-7b76-4b21-b827-0978368382c6.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212919354-b23f90c4-c241-464a-9ffc-ab11ac2c4902.png' />
            </Box>
        </Carousel>
    </Box>
  )
}

export default SecondSlider