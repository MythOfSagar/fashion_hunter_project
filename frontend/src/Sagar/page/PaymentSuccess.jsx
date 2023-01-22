import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const PaymentSuccess = () => {


    const [time, setTime] = useState(7)
    const navigate = useNavigate()


    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev)=>prev-1)
            setTimeout(() => navigate("/"), 6000)
          console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (<>
        <Box align="center">
            <Navbar/>
            <Image
                width={{ base: '300px', md: '600px', lg: '700px' }} mt={"30px"}
                src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif"></Image>
            <Heading>Order Placed</Heading>
            <Text mb={"30px"}>Redirecting you to Home Page in {time} seconds</Text>
            <Footer/>
        </Box>
    </>)

}

export default PaymentSuccess