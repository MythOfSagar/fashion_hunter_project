import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'

const Allreview = () => {
  return (
    <Box>
        <Navbar />
        {/*  Whole code after navbar ------------------------------ */}
        <Box className="SingleProductMainDiv"  background="#f1f3f6"  style={{border:"1px   green" , height:"100vh" , }}>

        <Box className='SingleProductMain' height="100vh" width="90%" ml="auto" mr="auto" mt="10px"  shadow="lg"  background='#ffffff' display="flex" justifyContent="space-between" >
         
         {/*  Image box ------------------- */}
           <Box border="2px solid red" width="35%" height="60vh"> </Box>

           {/* Rating Box----------------- */}
           <Box border="2px solid black" width="60%" height="60vh"></Box>
          

       </Box>
         </Box>
    </Box>
  )
}

export  {Allreview}
