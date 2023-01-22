import { Box,Image, Button, FormControl, FormLabel, Input,useToast, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import PaymentBlock from '../components/PaymentBlock'
import PaymentFooter from '../components/PaymentFooter'
import PaymentHeader from '../components/PaymentHeader'
import { StarIcon,EditIcon, AddIcon  } from "@chakra-ui/icons"
import { useEffect } from 'react'
import { getLocalData } from '../../Utils/LocalStorage'

const ShippingPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cartData,setCartData]=useState([])
    const [toggle, setToggle] = useState(true)
    const [totalPrice,setTotal]=useState(0)
    const [finalPrice,setFinal]=useState(0)
    
    const getData = async () => {
        const resp = await fetch("https://handsome-blue-crab.cyclic.app/cart",{
            headers:{
                "Authorization":getLocalData("token")
            },
            
        })
        const data = await resp.json()
        setCartData(data)
        
        setFinal(data.reduce((acc,item)=>{return (item.realPrice * item.quantity)+ acc},0))
        setTotal(data.reduce((acc,item)=>{return (item.price * item.quantity) + acc},0))

        
    }
    // console.log(cartData , "sagar")
    const toast = useToast()
    const emptyAddress={
        fullname: "",
        mobile: "",
        pincode: "",
        city: "",
        state: "",
        area: ""
    }
    const [shippingData, setData] = useState(emptyAddress)
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...shippingData, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setToggle(!toggle)
        
        if(shippingData.pincode.length===6){
            onClose()
        }
        else{
            toast({
                title: `Please Enter the PinCode`,
                position: 'top',
                description: `PinCode required to deliver products.`,
                status: 'error',
                duration: 1500,
                isClosable: true,
            })
        }
        
    }

    const getPincodeData = async (e) => {
        console.log(e.target)
        setData({ ...shippingData, pincode: e.target.value })
        if (e.target.value.length === 6) {

            const resp = await fetch(`https://api.postalpincode.in/pincode/${e.target.value}`)
            const pinData = await resp.json()

            if (pinData[0].Status === "Success") {
                setData({
                    ...shippingData,
                    state: pinData[0].PostOffice[0].State,
                    city: pinData[0].PostOffice[0].District,
                    pincode: e.target.value
                })
            }
            else if (pinData[0].Status !== "Success") {
                toast({
                    title: `Please Enter Correct PinCode`,
                    position: 'top',
                    description: `PinCode required to deliver products.`,
                    status: 'error',
                    duration: 1500,
                    isClosable: true,
                })
                setData({
                    ...shippingData,
                    state: "",
                    city: "",
                    pincode: ""
                })
            }
        }

    }
    useEffect(()=>{
        getData()
       
    },[])

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Box>
            <>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay 
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'/>
                    <ModalContent>
                        <ModalHeader>Enter Delivery Address</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                     
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input
                                    onChange={handleChange} value={shippingData.fullname} name='fullname'
                                    ref={initialRef} placeholder='Full Name' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Mobile</FormLabel>
                                <Input
                                    value={shippingData.mobile} onChange={handleChange} name='mobile'
                                    placeholder='Enter Mobile' />
                            </FormControl><FormControl mt={4} isRequired={true}>
                                <FormLabel>Pin Code</FormLabel>
                                <Input
                                isRequired={true}
                                value={shippingData.pincode}
                                    onChange={getPincodeData} type="number"
                                    placeholder='Enter Pin Code' />
                            </FormControl><FormControl mt={4}>
                                <FormLabel>Area</FormLabel>
                                <Input
                                    name='area' onChange={handleChange} value={shippingData.area}
                                    placeholder='Enter Area' />
                            </FormControl><FormControl mt={4}>
                                <FormLabel>City</FormLabel>
                                <Input placeholder='Enter Pin Code to get City'
                                    name='city' readOnly value={shippingData.city} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>State</FormLabel>
                                <Input
                               
                                    name='state' readOnly value={shippingData.state}
                                    placeholder='Enter Pin Code to get State' />
                            </FormControl>
                         
                        </ModalBody>

                        <ModalFooter>
                   
                            
                            <Button
                            type='submit'
                                onClick={handleSubmit}
                                colorScheme='blue' mr={3}>

                                Save Address
                            </Button>
                            
                            <Button onClick={onClose}>Cancel</Button>
                            
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
            <PaymentHeader></PaymentHeader>
            <Box
            marginTop={104}
             display={"flex"}>
                <Button 
                backgroundColor={"transparent"}
                leftIcon={<StarIcon />}></Button>
                <Box textAlign={"left"}>
                    <Text as="b">Delivery Address</Text>
                    <Text>We will deliver your order to this address</Text>
                </Box>
            </Box>
            <Box 
            
            padding={7}
            display={{ base: 'block', md: 'block', lg: 'flex' }} justifyContent={"space-between"}>
                <Box>
            {shippingData.pincode.length===6 ? <Box
            >
                <Text as={"b"}>{shippingData.fullname}</Text>
                <Text>{shippingData.area}</Text>
                <Text as={"i"}>{shippingData.city}, {shippingData.state}</Text>
                <Text>India - {shippingData.pincode}</Text>
                <Text>Phone - {shippingData.mobile}</Text>
            </Box> :<></>}
            <Button 
            backgroundColor={"transparent"}
            leftIcon={shippingData.pincode.length!==6 ?<AddIcon></AddIcon> : <EditIcon></EditIcon>}
            onClick={()=>{
                if(shippingData.pincode.length!==6){
                    setData(emptyAddress)
                }
                onOpen()
            }}>{shippingData.pincode.length===6 ? "Edit Address" : "Add Delivery Address"}</Button>
            </Box>
            <PaymentBlock
            status={true}
            disable={cartData.length===0}
            total={totalPrice}
            final={finalPrice}
            ></PaymentBlock>
            </Box>
            <Box 
            padding={2}
            fontSize={20}
            textAlign={'left'}>
            <Text as={"b"} >Your Cart Products</Text>
            </Box>
            <Box 
            padding={5}
            width={"fit-content"}
            gap={2}
            display={"grid"} gridTemplateColumns={"repeat(5,1fr)"}>
                
                {cartData.map((item)=>
                    <Box key={item._id}><Image
                    width={79}
                    src={item.mainImage}
                    ></Image>
                    <Text>₹ {item.price}</Text>
                    </Box>
                )}
            </Box>
            <Box marginTop={5}>
            <PaymentFooter></PaymentFooter>
            </Box>
        </Box>
    )
}

export default ShippingPage