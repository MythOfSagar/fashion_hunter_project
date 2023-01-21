import { Box, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Setinterval = () => {

    const [count,setCount] = useState(0)

    const images=["https://user-images.githubusercontent.com/103739534/212987289-eab83cb5-9f74-4971-a12c-249a3846855d.png","https://user-images.githubusercontent.com/103739534/212987337-e1996522-22df-431f-a4d9-cae5cd15fc47.png","https://user-images.githubusercontent.com/103739534/212987357-e94fa798-46e6-4a06-a89a-d35728a9687c.png","https://user-images.githubusercontent.com/103739534/212987376-93f123f4-a1b0-42e1-a27f-9011971f76cf.png"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((count) => {
                if (count < 3) {
                    return count + 1;
                }
                return 0;
            });
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

  return (
    <Box>
        <Image w={"100%"}  src='https://user-images.githubusercontent.com/103739534/212991359-aa7a7ecf-9f09-4549-baa3-54a18cd177b8.png'/>
      <Image w={"100%"}  src={images[count]} alt="mbl"/>
    </Box>
  )
}

export default Setinterval
