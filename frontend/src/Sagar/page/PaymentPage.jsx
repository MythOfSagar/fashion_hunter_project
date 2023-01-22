import { Box, Image, Button, FormControl, FormLabel, Input, useToast, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import PaymentBlock from '../components/PaymentBlock'
import PaymentFooter from '../components/PaymentFooter'
import PaymentHeader from '../components/PaymentHeader'
import { StarIcon, EditIcon, AddIcon } from "@chakra-ui/icons"
import { useEffect } from 'react'
import COD from '../components/COD'
import CardPayment from '../components/CardPayment'
import UpiTypes from '../components/UpiTypes'
import data from "../db"
import OfferCard from '../components/OfferCard'
import { getLocalData } from '../../Utils/LocalStorage'

const PaymentPage = () => {

    const paymentComp = [<CardPayment />, <UpiTypes />, <COD />]
    const [paymentType, setType] = useState(0)
    const [totalPrice,setTotal]=useState(0)
    const [finalPrice,setFinal]=useState(0)
    
    const getData = async () => {
        const resp = await fetch("https://handsome-blue-crab.cyclic.app/cart",{
            headers:{
                "Authorization":getLocalData("token")
            },
            
        })
        const data = await resp.json()
        
        setFinal(data.reduce((acc,item)=>{return (item.realPrice * item.quantity)+ acc},0))
        setTotal(data.reduce((acc,item)=>{return (item.price * item.quantity) + acc},0))
 
    }
       useEffect(()=>{
        getData()
       },[])

    return (
        <Box>
            <PaymentHeader></PaymentHeader>
            <Box padding={7} 
            marginTop={{ base: 20, md: 100, lg: 115 }}
             textAlign={'left'} display={{ base: 'block', md: 'block', lg: 'flex' }} 
            marginBottom={{ base: 0, md: 100, lg: 150 }}>
                <Box>
                    <Box display={'grid'} gap={2} gridTemplateColumns='repeat(1,1fr)'>
                        {(data.offerData).map((item)=>
                            <OfferCard 
                            providerUrl={item.img}
                            providerDetails={item.dsc}
                            key={item.img}></OfferCard>
                        )}
                    </Box>
            <Box 
            marginTop={5}
            >
                <Text as={'b'}>Select Payment Mode</Text>
                <Box display={{ base: "block", md: "flex", lg: "flex" }}>
                    <Box textAlign={'left'}>
                        <Box
                        padding={2}
                        borderRadius={10}
                        color={paymentType===0 ? "green.700" : "black"}
                        backgroundColor={paymentType===0 ? "lightblue" : "transparent"}
                        onClick={()=>setType(0)}>
                            <Text as={'b'}>Credit/ Debit Card</Text></Box>
                        <Box
                        padding={2}
                        color={paymentType===1 ? "green.700" : "black"}
                        backgroundColor={paymentType===1 ? "lightblue" : "transparent"}
                        borderRadius={10}
                         onClick={()=>setType(1)}><Text as={'b'}>UPI</Text></Box>
                        <Box 
                        padding={2}
                        color={paymentType===2 ? "green.700" : "black"}
                        backgroundColor={paymentType===2 ? "lightblue" : "transparent"}
                        borderRadius={10}
                        onClick={()=>setType(2)}><Text as={'b'}>Cash on Delivery</Text></Box>
                    </Box>
                    <Box>{paymentComp[paymentType]}</Box>
                </Box>
            </Box>
            </Box>
            <PaymentBlock
            total={totalPrice}
            final={finalPrice}
            />
            </Box>
            
            <PaymentFooter></PaymentFooter>
        </Box>
    )
}

export default PaymentPage