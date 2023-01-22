
import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
// import "../Styles/FirstSlider.css"

const ThirdSlider = () => {
  return (
    <Box>
        <Carousel infiniteLoop autoPlay>
           <Link to="/mens"> <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212958443-82b9f53d-ebb2-498f-a558-b09024a7d48a.png' />
            </Box> </Link>
           <Link to="/mens"> <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212958458-1befb444-d2c2-40ec-96b6-802b2be4481f.png' />
            </Box> </Link>
           <Link to="/mens"> <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212958467-e9baa1f4-3639-4325-90f1-1b732d248ba3.png' />
            </Box> </Link>
        </Carousel>
    </Box>
  )
}

export default ThirdSlider