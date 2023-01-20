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
import { getLogin } from '../Redux/action';

const initialState = {
    email: "",
    password: ""
}

const Login = () => {
    const dispatch = useDispatch()
    const { massage, isLoading, isError } = useSelector((state) => {
        return {
            massage: state.massage,
            isLoading: state.isLoading,
            isError: state.isError
        }
    });
    const [data, setData] = useState(initialState);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const {  email, password } = data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getLogin(data))
        .then((res)=>{
            console.log(res)
            // saveLocalData("userID",res.payload.data.userID)
            // if (res.payload.status==="PENDING"){
            //     setInput(true)
            // }
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <Box>
      <Button onClick={onOpen}>Login</Button>

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
          <Flex className="flexLogin">
                <Box className="boxLogin">
                    <form className="formLogin" onSubmit={handleSubmit}>
                        <Text>{massage ? massage.message : null}</Text>
                        <label>Email</label>
                        <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={email} onChange={handleChange} required />
                        <label>Password</label>
                        <Input type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={password} onChange={handleChange} required />
                        {/* <Flex gap={"10px"} justifyContent={"center"}>
                            <Link to={"/signup"}><Box color={"red"} fontWeight={"bold"}>Login</Box></Link>
                        </Flex> */}
                        {
                            isLoading ? <Spinner/> : null
                        }
                        <input className="buttonLogin" type="submit" value="Submit" />
                    </form>
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

export default Login
