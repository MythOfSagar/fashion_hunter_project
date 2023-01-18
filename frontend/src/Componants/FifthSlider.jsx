import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FifthSlider = () => {
  return (
    <Box>
        <Carousel infiniteLoop autoPlay>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999382-8f613cb8-c0d0-4b59-9b48-61b3ba3cf9d1.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999397-9327935a-fad4-450d-94da-855e213d0ff1.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999409-abba0598-5f8b-42de-81eb-57027f163b7c.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999416-0521eab1-d78f-44e6-b490-150cfa91d790.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999424-92345e3d-a9ff-42f9-a946-c692113636f2.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999437-c1ae5f85-0d0a-43cd-840f-acae27da9d88.png' />
            </Box>
            <Box className='Image'>
                <Image src='https://user-images.githubusercontent.com/103739534/212999363-172d3d05-fe2e-4dd9-96e9-74fc3be56a48.png' />
            </Box>
        </Carousel>
    </Box>
  )
}

export default FifthSlider
