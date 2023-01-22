import React from 'react'
import {
  Input,
  Box,
  Flex,
  Text,
  useDisclosure,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  Image,
  Divider,
  useToast
} from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegistration, resendOtp, verifyOtp } from '../Redux/Hilton_reducer/action';
import { useEffect } from 'react';
import { getLocalData, saveLocalData } from '../Utils/LocalStorage';
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import "../Styles/Register.css"
import Login from './Login';

const initialState = {
  name: "",
  email: "",
  password: "",
  dateOfBirth: ""
}

const Register = () => {
  const dispatch = useDispatch()
  const toast = useToast()
  const { otpDetail, massage, isLoading, isError } = useSelector((state) => {
    return {
      otpDetail: state.otpDetail,
      massage: state.massage,
      isLoading: state.isLoading,
      isError: state.isError
    }
  });
  const [data, setData] = useState(initialState);
  const [pin, setPin] = useState(false);
  const [verify, setVerify] = useState(false);
  const [submit, setSubmit] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const statuses = ['success', 'error', 'warning', 'info']
  // second modal

  // const { isOpen1, onOpen1, onClose1 } = useDisclosure();
  // const initialRef1 = React.useRef(null)
  // const finalRef1 = React.useRef(null)

  const { name, email, password, dateOfBirth } = data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRegistration(data))
      .then((res) => {
        console.log(res)
        if (res.payload.status === "PENDING") {
          saveLocalData("userID", res.payload.data.userID)
          toast({
            title: 'Otp sent successfully',
            description: "Please check you email",
            status: statuses[0],
            duration: 9000,
            isClosable: true,
          })
          setPin(true)
        } else if (res.payload.status === "FAILED") {
          if (res.payload.message === "User already exist, please login.") {
            toast({
              title: "User already exist.",
              description: "Please login for proceed",
              status: statuses[1],
              duration: 9000,
              isClosable: true,
            })
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    setSubmit(!submit)
  }

  const [otp, setOtp] = useState("")
  let [bag, setBag] = useState(false)

  const handlePinChange = (e) => {
    // bag+=e.target.value
    setOtp(bag => bag + e.target.value)
  }

  const handleClick = () => {
    console.log(otp)
    dispatch(verifyOtp({
      userID: getLocalData("userID"),
      otp: otp
    }))
      .then((res) => {
        console.log(res)
        if (res.payload.status === "VERIFIED") {
          toast({
            title: 'Acount verified successfully',
            description: "Now, please go to login",
            status: statuses[0],
            duration: 9000,
            isClosable: true,
          })
          setBag(true)
          setPin(false)
        }
      }).catch((err) => {
        console.log(err)
      })
    setOtp("")
  }


  const handleResendOtp = () => {
    console.log(data)
    dispatch(resendOtp({
      userID: getLocalData("userID"),
      email: email
    }))
      .then((res) => {
        console.log(res)
        saveLocalData("userID", res.payload.data.userID)
        if (res.payload.status === "PENDING") {
          toast({
            title: 'Otp sent successfully',
            description: "Please check you email",
            status: statuses[0],
            duration: 9000,
            isClosable: true,
          })
          setPin(true)
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  // console.log(massage)

  const cancalButton = () => {
    setData(initialState)
    setBag(false)
  }


  return (
    <Box width={"90%"} margin={'auto'}>
      <Box className='resFlex'>
        <Image className='resImage' src='https://user-images.githubusercontent.com/103739534/213868650-c6f0aea0-5db4-4c80-abe1-88a48dd56666.gif'/>

        <Box className='firstBox'>
      <Flex w={"300px"} margin={"auto"} justifyContent={"space-between"} alignItems={"center"}>
        <Flex justifyContent={"center"} alignItems={"center"} w={"140px"} border={"1px solid #0d579e"} borderRadius={"5px"} gap={"5px"} padding={"5px"} color={"#0d579e"}>
          <FaFacebook color='#0d579e' />
          <Text>Facebook</Text>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} w={"140px"} border={"1px solid #e94235"} borderRadius={"5px"} gap={"5px"} padding={"5px"} color={'#e94235'}>
          <FcGoogle color='#e94235' />
          <Text>Google</Text>
        </Flex>
      </Flex>
      <Text fontFamily={"cursive"} textAlign={"center"} marginTop={"10px"} marginBottom={"10px"} color={"rgb(149, 149, 149)"}>---------------Or---------------</Text>
      <Flex className="flexRegister" justifyContent={"center"}>
        <Box className="boxRegister">
          <form className="formRegister" onSubmit={handleSubmit}>
            <Text  marginRight={"210px"} marginBottom={"-20px"}>User Name</Text><br />
            <Input type="text" variant={"unstyled"} border={"0.5px solid #8d8d8d"} name="name" value={name} onChange={handleChange} required />
            <Text className='errorText'>{massage && massage.message === "Your name shouldnot be contain any number." ? massage.message : null}</Text>

            <Text textAlign={"center"} marginRight={"250px"} marginBottom={"-20px"}>Email</Text><br />
            <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={email} onChange={handleChange} required />
            <Text className='errorText'>{massage && massage.message === "You have entered a invalid email." ? massage.message : null}</Text>

            <Flex justifyContent={"space-between"}  w={"300px"}  alignItems={"center"}>
              <Box w={"125px"}>

                <Text marginLeft={'-50px'}  marginBottom={"-20px"}>Password</Text><br />
                <Input type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={password} onChange={handleChange} required />
                <Text className='errorText' width={"160px"}>{massage && massage.message === "Password should be alphanumeric and contain one uppercase letter." ? massage.message : null}</Text>
              </Box>

              <Box marginTop={"-8px"}>
                <Text marginLeft={'-50px'}  marginBottom={"-20px"}>Date of Birth</Text><br />
                <Input type="Date" name="dateOfBirth" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={dateOfBirth} onChange={handleChange} required />
              </Box>

            </Flex>

            <Text fontSize={"13px"} marginTop={"5px"} marginBottom={'5px'}>Already have an account ? <b className='b' onClick={() => <Login />}>Login here</b></Text>

            {
              isLoading ? <Box width={"300px"} display={"flex"} justifyContent={"center"} alignItems={"center"}><Spinner /> </Box> : null
            }

            {
              pin ? <Box color={"green"} textAlign={"center"} fontSize={"14px"}><Text>A one time password sent on your email id.</Text>
                <Text>Verify first to login.</Text>
              </Box> : null
            }



            <Box className='buttonBox'>

              <input className={"buttonRegister"} w={"160px"} type={"submit"} value={"Submit"} />
            </Box>
          </form>



          {
            pin ? <Box width={"300px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Box>
                <HStack marginTop={"10px"}>
                  <PinInput >
                    <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                    <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                    <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                    <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                  </PinInput>
                </HStack>

                {otpDetail && otpDetail.status === "FAILED" ? <Box className='errorText' marginBottom={"5px"} marginTop={"10px"}><Text>{otpDetail.message}</Text><Text width={"90px"} cursor={"pointer"} display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"} color={"green"} borderBottom={"1px solid green"} fontSize={"16px"} onClick={handleResendOtp}>Resend otp</Text></Box> : null}

                <Input w={"80px"} cursor={"pointer"} display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"} marginTop={"10px"} bgColor={'#3182ce'} color={"white"} onClick={handleClick} value={"Verify"} />
              </Box>
            </Box> : null
          }
          {
            bag ? <Box textAlign={"center"} marginTop={"10px"} color={"green"}><Text marginBottom={"-10px"}>Account verified successfully.</Text><Text marginBottom={"10px"} marginTop={"10px"} >Now please login.</Text> </Box> : null
          }


        </Box>
      </Flex>
      </Box>
      </Box>
      <Divider marginTop={"20px"} border={"1px solid lightgray"}/>

    

      {/* 
      
      <Button onClick={onOpen}>Register</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w>
          <ModalHeader>Welcome to Fashion Hunter</ModalHeader>
          <Divider w={"300px"} margin={"auto"} marginBottom={"10px"} border={"1px solid lightgray"} />
          <ModalHeader mt={"-20px"} fontSize={"15px"}>Join/Log in using</ModalHeader>

          <ModalCloseButton />
          <Flex w={"300px"} margin={"auto"} justifyContent={"space-between"} alignItems={"center"}>
            <Flex justifyContent={"center"} alignItems={"center"} w={"140px"} border={"1px solid #0d579e"} borderRadius={"5px"} gap={"5px"} padding={"5px"} color={"#0d579e"}>
              <FaFacebook color='#0d579e' />
              <Text>Facebook</Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} w={"140px"} border={"1px solid #e94235"} borderRadius={"5px"} gap={"5px"} padding={"5px"} color={'#e94235'}>
              <FcGoogle color='#e94235' />
              <Text>Google</Text>
            </Flex>
          </Flex>
          <Text fontFamily={"cursive"} textAlign={"center"} marginTop={"10px"} marginBottom={"10px"} color={"rgb(149, 149, 149)"}>---------------Or---------------</Text>
          <ModalBody pb={6}>
            <Flex className="flexRegister">
              <Box className="boxRegister">
                <form className="formRegister" onSubmit={handleSubmit}>
                  <Text>User Name</Text><br />
                  <Input type="text" variant={"unstyled"} border={"0.5px solid #8d8d8d"} name="name" value={name} onChange={handleChange} required />
                  <Text className='errorText'>{massage && massage.message === "Your name shouldnot be contain any number." ? massage.message : null}</Text>

                  <Text>Email</Text><br />
                  <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={email} onChange={handleChange} required />
                  <Text className='errorText'>{massage && massage.message === "You have entered a invalid email." ? massage.message : null}</Text>

                  <Flex justifyContent={"space-between"} w={"300px"}>
                    <Box>

                      <Text>Password</Text><br />
                      <Input type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={password} onChange={handleChange} required />
                      <Text className='errorText' width={"160px"}>{massage && massage.message === "Password should be alphanumeric and contain one uppercase letter." ? massage.message : null}</Text>
                    </Box>

                    <Box>
                      <Text>Date of Birth</Text><br />
                      <Input type="Date" name="dateOfBirth" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={dateOfBirth} onChange={handleChange} required />
                    </Box>

                  </Flex>

                  <Text fontSize={"13px"} marginTop={"5px"} marginBottom={'5px'}>Doesn't have an account ? <b className='b' onClick={() => <Login />}>Register here</b></Text>

                  {
                    isLoading ? <Box width={"300px"} display={"flex"} justifyContent={"center"} alignItems={"center"}><Spinner /> </Box> : null
                  }

                  {
                    pin ? <Box color={"green"} textAlign={"center"} fontSize={"14px"}><Text>A one time password sent on your email id.</Text>
                      <Text>Verify first to login.</Text>
                    </Box> : null
                  }

                  

                  <Box className='buttonBox'>

                    <input className={"buttonRegister"} w={"160px"} type={"submit"} value={"Submit"} />
                  </Box>
                </form>



                {
                  pin ? <Box width={"300px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box>
                      <HStack marginTop={"10px"}>
                        <PinInput >
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                        </PinInput>
                      </HStack>

                      {otpDetail && otpDetail.status === "FAILED" ? <Box className='errorText' marginBottom={"5px"} marginTop={"10px"}><Text>{otpDetail.message}</Text><Text width={"90px"} cursor={"pointer"} display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"} color={"green"} borderBottom={"1px solid green"} fontSize={"16px"} onClick={handleResendOtp}>Resend otp</Text></Box> : null}

                      <Input w={"80px"} cursor={"pointer"} display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"} marginTop={"10px"} bgColor={'#3182ce'} color={"white"} onClick={handleClick} value={"Verify"} />
                    </Box>
                  </Box> : null
                }
                {
                  bag ? <Box textAlign={"center"} marginTop={"10px"} color={"green"}><Text marginBottom={"-10px"}>Account verified successfully.</Text><Text marginBottom={"10px"} marginTop={"10px"} >Now please login.</Text> </Box> : null
                }


              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
 
            {
              bag ? <Button colorScheme='blue' mr={3} onClick={() => onOpen()}>
                Login
              </Button> : <Button colorScheme='blue' mr={3} onClick={() => onClose()}>
                Save
              </Button>
            }

            <Button onClick={() => { cancalButton(); onClose() }}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}



      {/* login <code></code> */}
      {/* <Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen1={isOpen1} onClose1={onClose1}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima magni cupiditate id, ducimus iure ipsa ipsum quasi sed. Asperiores, possimus. Modi quaerat veniam dolorem! Enim corrupti non quasi cumque asperiores!
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose1}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal> */}



    </Box>
  )
}

export default Register
