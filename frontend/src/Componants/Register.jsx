import React from 'react'
import {
  Input,
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Modal,
  ModalFooter,
  ModalHeader,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  Image
} from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegistration, resendOtp, verifyOtp } from '../Redux/action';
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

  // second modal

  const { isOpen1, onOpen1, onClose1 } = useDisclosure();
  const initialRef1 = React.useRef(null)
  const finalRef1 = React.useRef(null)

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
        saveLocalData("userID", res.payload.data.userID)
        if (res.payload.status === "PENDING") {
          setPin(true)
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
    dispatch(verifyOtp({
      userID: getLocalData("userID"),
      otp: otp
    }))
      .then((res) => {
        console.log(res)
        if (res.payload.status === "VERIFIED") {
          setBag(true)
          setPin(false)
        }
      }).catch((err) => {
        console.log(err)
      })
    setVerify(!verify)
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
    <Box>
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
          <ModalHeader mt={"-20px"} fontSize={"15px"}>Join/Log in using</ModalHeader>

          <ModalCloseButton />
          <Flex w={"330px"} margin={"auto"} justifyContent={"space-between"} alignItems={"center"}>
            <Flex justifyContent={"center"} alignItems={"center"} w={"150px"} border={"1px solid #0d579e"} borderRadius={"5px"} gap={"5px"} padding={"5px"} color={"#0d579e"}>
              <FaFacebook color='#0d579e' />
              <Text>Facebook</Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} w={"150px"} border={"1px solid #e94235"} borderRadius={"5px"} gap={"5px"} padding={"5px"} color={'#e94235'}>
              <FcGoogle color='#e94235' />
              <Text>Google</Text>
            </Flex>
          </Flex>
          <Text fontFamily={"cursive"} textAlign={"center"} marginTop={"10px"} marginBottom={"10px"} color={"rgb(149, 149, 149)"}>---------------Or---------------</Text>
          <ModalBody pb={6}>
            <Flex className="flexRegister">
              <Box className="boxRegister">
                <form className="formRegister" onSubmit={handleSubmit}>
                  <label>User Name</label><br />
                  <Input type="text" variant={"unstyled"} border={"0.5px solid #8d8d8d"} name="name" value={name} onChange={handleChange} required />
                  <Text className='errorText'>{massage && massage.message === "Your name shouldnot be contain any number." ? massage.message : null}</Text>

                  <label>Email</label><br />
                  <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={email} onChange={handleChange} required />
                  <Text className='errorText'>{massage && massage.message === "You have entered a invalid email." ? massage.message : null}</Text>

                  <Flex justifyContent={"space-between"} w={"330px"}>
                    <Box>

                      <label>Password</label><br />
                      <Input type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={password} onChange={handleChange} required />
                      <Text className='errorText' width={"160px"}>{massage && massage.message === "Password should be alphanumeric and contain one uppercase letter." ? massage.message : null}</Text>
                    </Box>

                    <Box>
                      <label>Date of Birth</label><br />
                      <Input type="Date" name="dateOfBirth" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={dateOfBirth} onChange={handleChange} required />

                    </Box>
                  </Flex>
                  {/* <Flex gap={"10px"} justifyContent={"center"}>
                            <Link to={"/signup"}><Box className='errorText' fontWeight={"bold"}>Register</Box></Link>
                        </Flex> */}
                  {
                    isLoading ? <Box width={"350px"} display={"flex"} justifyContent={"center"} alignItems={"center"}><Spinner /> </Box> : null
                  }

                   {
                    pin ? <Box color={"green"} textAlign={"center"} fontSize={"14px"}><Text>A one time password sent on your email id.</Text>
                      <Text>Verify first to login.</Text>
                    </Box> : null
                  }


                  {massage && massage.message === "User already exist, please login."
                    ? <Box className='errorText' marginBottom={"-5px"} marginTop={"-5px"}>{massage.message}</Box>
                    : null}

                  <Box className='buttonBox'>

                    {/* <Button>Submit</Button> */}
                    <input className={"buttonRegister"} w={"160px"} type={"submit"} value={"Submit"} />
                  </Box>
                </form>


                {/* otp work from here */}

                {
                  pin ? <Box width={"330px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box>
                      <HStack marginTop={"10px"}>
                        <PinInput >
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                          <PinInputField variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={otp} onChange={handlePinChange} />
                        </PinInput>
                      </HStack>

                      {otpDetail && otpDetail.status === "FAILED" ? <Box  className='errorText' marginBottom={"5px"} marginTop={"10px"}><Text>{otpDetail.message}</Text><Text width={"90px"} cursor={"pointer"}  display={"flex"} margin={"auto"} justifyContent={"center"} alignItems={"center"}  color={"green"} borderBottom={"1px solid green"} fontSize={"16px"} onClick={handleResendOtp}>Resend otp</Text></Box>  : null}

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
              bag ? <Button colorScheme='blue' mr={3} onClick={() => onClose()}>
                Login
              </Button> : <Button colorScheme='blue' mr={3} onClick={() => onClose()}>
                Save
              </Button>
            }

            <Button onClick={() => { cancalButton(); onClose() }}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




    </Box>
  )
}

export default Register
