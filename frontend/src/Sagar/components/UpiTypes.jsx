import { Box,Button,Image,Input,Text,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

const UPI= ({title,src}) => {

    const [toggle,setToggle]=useState(true)
    const [upiId,setId]=useState("")
    const navigate = useNavigate()
    const toast=useToast()
    
    const handleChange=(e)=>{
      setId(e.target.value)
    }

    const handleSubmit=()=>{
        const verifyId=upiId.split("")
        if(verifyId.includes("@")){
          navigate(`/paymentwaiting/${title}/${src}`)
        }
        else{
          toast({
            title: `Please Enter the correct UPI ID`,
            position: 'top',
            status: 'error',
            duration: 1500,
            isClosable: true,
        })
        }
    }

    return (
        <Box>
      <Box
      margin={3}
      alignContent={"center"}
      justifyContent={'center'}
      textAlign={'center'}
       alignItems={"center"} onClick={()=>setToggle(!toggle)}>
     
       <Image 
     
       margin={'auto'} width={"25px"} src={`https://i.ibb.co/${src}/upi.png`}/>
       <Text
        fontSize={{ base: '16', md: '26', lg: '16' }}
       >{title}</Text>
      </Box>
      <Box display={toggle ? "none" : "block"}>
        <Input
        onChange={handleChange}
        value={upiId}
        placeholder={`Enter ${title} ID`}></Input>
            
           <Button
           onClick={handleSubmit}
           colorScheme={"green"}
           marginTop={5}
           width={250}
           align="center"
           >PAY NOW</Button>
           <Box>
                <Text
                color={"green.500"}
                fontSize='xs'>
                By placing this order, you agree to AJIO's T&C
                </Text>
            </Box>
      </Box>
      
      </Box>
    )
  }
 
  const UPIdata=[
    {title:"Google Pay",src:"6F4QWqb"},
    {title:"Phone Pay",src:"bPNG6fL"},
    {title:"Paytm",src:"Phyh6cm"},
    {title:"Bhim",src:"FntyyrV"},
    {title:"WhatsApp",src:"9Y5WHps"}
]

const UpiTypes = () => {
  return (
   <Box display={{ base: "block", md: "flex", lg: "flex" }}>
       {UPIdata.map((upi)=>
        <UPI
        title={upi.title}
        key={upi.title}
        src={upi.src}
        ></UPI>
       )}
   </Box>
     
  )
}

export default UpiTypes