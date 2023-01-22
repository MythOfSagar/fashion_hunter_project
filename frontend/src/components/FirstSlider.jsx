import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../Styles/FirstSlider.css"
import { Link } from 'react-router-dom';

const FirstSlider = () => {
  return (
    <Box>
        <Carousel infiniteLoop autoPlay>
           <Link to="/mens"> <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212889238-2cbc3000-ec5b-4bb6-9f01-6f6f6107fdab.png' />
            </Box> </Link>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212889254-0a195f67-f132-43a5-8ad4-8955a06c82b5.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212889283-2eda5777-dc20-4806-bd67-1bc61b87d044.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212889292-927d18fe-23d3-488b-9cee-091827afc7d7.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212889315-24b1f6cd-f41d-49e0-9a50-393ee2f4d5f2.png' />
            </Box>
        </Carousel>
    </Box>
  )
}

export default FirstSlider
