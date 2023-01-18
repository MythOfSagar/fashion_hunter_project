import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import "../Styles/FourhSlider.css"

const FourhSlider = () => {
  return (
    <Box>
        <Carousel infiniteLoop autoPlay>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212981276-117a9494-8ed4-4863-afab-8659993e8757.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212981149-4edf623d-3e5a-4eb9-adfd-abd4e007a9e0.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212981174-c4b71c02-9049-4836-9ad7-a410bc644a15.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212981209-f7aa7386-0693-42d6-82c6-a746c4edc5e6.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212981237-5da58cf4-a1ab-4213-b368-d3e8733c5785.png' />
            </Box>
        </Carousel>
    </Box>
  )
}

export default FourhSlider
