import { Box, Button, Input, Select, Text,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CardPayment = () => {
    const years = new Array(25).fill(2023)
    const toast=useToast()
    const [cardNumber,setNumber]=useState("")
    const [cardCVV,setCVV]=useState("")
    const navigate = useNavigate()
    const title="SBI YONO"

    const handleChange=(e)=>{
        if(e.target.name==="cardNumber"){
            setNumber(e.target.value)
        }
        else if(e.target.name==="cardCVV"){
            setCVV(e.target.value)
        }
        
      }

    const handleSubmit=()=>{

        const checkCard=`${cardNumber}`.length===16

        if(checkCard && (`${cardCVV}`.length>=3 && `${cardCVV}`.length<=4) ){
          navigate(`/paymentwaiting/${title}/b2cQ1cC`)
        }
        else{
          toast({
            title: checkCard ? 'Please Enter correct CVV' : "Please Enter correct Credit/Debit Card Number" ,
            position: 'top',
            status: 'error',
            duration: 1500,
            isClosable: true,
        })
        }
    }

    const months = [
        { month: "January", value: 1 },
        { month: "February", value: 2 },
        { month: "March", value: 3 },
        { month: "April", value: 4 },
        { month: "May", value: 5 },
        { month: "June", value: 6 },
        { month: "July", value: 7 },
        { month: "August", value: 8 },
        { month: "September", value: 9 },
        { month: "October", value: 10 },
        { month: "November", value: 11 },
        { month: "December", value: 12 }
    ]
    

    return (
        <Box 
        width={{ base: "100%", md: "100%", lg: 500 }}
        padding={7}
        textAlign={"left"}>
            <Box><Text as={"b"}>Add New Card</Text></Box>
            <Box>
                <Text>Card Number</Text>
                <Input
                name='cardNumber'
                value={cardNumber}
                onChange={handleChange}
                    type={'number'}
                ></Input>
            </Box>
            <Box>
                <Text>Name on Card</Text>
                <Input
                    type={'text'}
                ></Input>
            </Box>
            <Box>
                <Box><Text>Expiration Date</Text></Box>
                <Box display={"flex"}>
                    <Select placeholder='Month'>
                        {months.map((month) => <option value={month.value}>{month.month}</option>)}
                    </Select>
                    <Select placeholder='Year'>
                        {years.map((year, index) => <option value={year + index}>{year + index}</option>)}
                    </Select>
                </Box>
            </Box>cardCVV
            <Box>
                <Text>CVV</Text>
                <Input
                name='cardCVV'
                value={cardCVV}
                onChange={handleChange}
                    type={'password'}
                ></Input>
            </Box>
            <Box>
            
                <Button
                onClick={handleSubmit}
            colorScheme={"green"}
            marginTop={5}
            width={250}>Pay Securely</Button></Box>
            <Box>
                <Text
                color={"green.500"}
                fontSize='xs'>
                By placing this order, you agree to AJIO's T&C
                </Text>
            </Box>
        </Box>
    )
}

export default CardPayment