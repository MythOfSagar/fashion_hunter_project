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
    FormControl,
    FormLabel,
    Modal,
    ModalFooter,
    ModalHeader,
    HStack,
    PinInput,
    PinInputField,
    Spinner
} from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegistration } from '../Redux/action';
import { useEffect } from 'react';

const initialState = {
    name: "",
    email: "",
    password: "",
    dateOfBirth: ""
}

const Register = () => {
    const dispatch = useDispatch()
    const { massage, isLoading, isError } = useSelector((state) => {
        return {
            massage: state.massage,
            isLoading: state.isLoading,
            isError: state.isError
        }
    });
    const [data, setData] = useState(initialState);
    const [pin,setInput] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const { name, email, password, dateOfBirth } = data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getRegistration(data))
        .then((res)=>{
            console.log(res)
            if (res.payload.status==="PENDING"){
                setInput(true)
            }
        }).catch((err)=>{
            console.log(err)
        })
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
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Flex className="flexRegister">
                <Box className="boxRegister">
                    <form className="formRegister" onSubmit={handleSubmit}>
                        <label>User Name</label>
                        <Input type="text" variant={"unstyled"} border={"0.5px solid #8d8d8d"} name="name" value={name} onChange={handleChange} required />
                        <Text>{massage ? massage.message : null}</Text>
                        <label>Email</label>
                        <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={email} onChange={handleChange} required />
                        <label>Password</label>
                        <Input type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={password} onChange={handleChange} required />

                        <label>Date of Birth</label>
                        <Input type="Date" name="dateOfBirth" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={dateOfBirth} onChange={handleChange} required />
                        {/* <Flex gap={"10px"} justifyContent={"center"}>
                            <Link to={"/signup"}><Box color={"red"} fontWeight={"bold"}>Register</Box></Link>
                        </Flex> */}
                        {
                            isLoading ? <Spinner/> : null
                        }
                        <input className="buttonRegister" type="submit" value="Submit" />
                    </form>

                    {
                        pin ? <HStack>
                        <PinInput>
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                          <PinInputField />
                        </PinInput>
                      </HStack> : null
                    }
                </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



           
        </Box>
    )
}

export default Register
