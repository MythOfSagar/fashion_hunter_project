import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { verifyOtp } from '../Redux/action'

const Otp = () => {
    const dispatch = useDispatch()
    const [otp,setOtp] = useState("")
    let [bag,setBag] = useState("")

    const handlePinChange=(e)=>{
        // bag+=e.target.value
        setOtp(bag=>bag + e.target.value)
    }

    const handleClick=()=>{
        dispatch(verifyOtp(otp))
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <Box>
            <HStack>
                <PinInput>
                    <PinInputField value={otp} onChange={handlePinChange}/>
                    <PinInputField value={otp} onChange={handlePinChange}/>
                    <PinInputField value={otp} onChange={handlePinChange}/>
                    <PinInputField value={otp} onChange={handlePinChange}/>
                </PinInput>
            </HStack>
            <Button onClick={handleClick}>Verify</Button>
        </Box>
    )
}

export default Otp
