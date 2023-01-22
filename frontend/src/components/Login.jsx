import React from 'react'
import {
    Input,
    Box,
    Button,
    Flex,
    Text,
    Spinner,
    Image,
    Divider,
    useToast
} from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/Register.css"
import { getLocalData, saveLocalData } from '../Utils/LocalStorage';
import { AiFillUnlock } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import { getLogin } from '../Redux/Hilton_reducer/action';
import Navbar from './Navbar';
import Footer from './Footer';

const initialState = {
    email: "",
    password: ""
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loginData, isLoading, isError } = useSelector((state) => {
        return {
            loginData: state.HiltonReducer.loginData,
            isLoading: state.HiltonReducer.isLoading,
            isError: state.HiltonReducer.isError
        }
    });
    const [data, setData] = useState(initialState);
    const [adminuser, setuseradmin] = useState("")
    const toast = useToast()
    const [show, setShow] = useState(false)

    const statuses = ['success', 'error', 'warning', 'info']

    const { email, password } = data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const hanldeAdmin = (e) => {
        setuseradmin(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (adminuser === "admin") {
            if (email === "hilton@gmail.com" && password === "Abc123") {
                saveLocalData("name", "Admin panel")
                navigate("/admin")
            } else {
                toast({
                    title: `You enter wrong credentials`,
                    status: 'error',
                    isClosable: true,
                  })
            }
        } else {
            dispatch(getLogin(data))
                .then((res) => {
                    console.log(res.payload.status)
                    if (res.payload.status === "SUCCESS") {
                        saveLocalData("token", res.payload.token)
                        saveLocalData("name", res.payload.data[0].name)
                        setShow(true)
                        toast({
                            title: res.payload.message,
                            description: "Now enjoy and explore",
                            status: statuses[0],
                            duration: 9000,
                            isClosable: true,
                        })
                        navigate("/")
                    }
                    if (res.payload.status === "FAILED") {
                        toast({
                            title: "Something went wrong",
                            description: "You put wrong credentials, try again later",
                            status: statuses[1],
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                    // if (res.payload.status)
                }).catch((err) => {
                    console.log(err)
                })
        }
    }






    return (
        <Box>

            <Navbar />

            <Box className='mainBox'>
                <Box className='resFlex' marginBottom={"20px"}>
                    <Image className='resImage' margin={"auto"} src='https://user-images.githubusercontent.com/103739534/213816226-4a749b53-b4c8-4dec-b9b7-973b4c964df7.gif' alt='git' />

                    <Box className='firstBox' paddingTop={"20px"} paddingBottom={"20px"}>

                        <Text fontSize={"17px"}>Login with your existing acount</Text>
                        <Divider w={"280px"} margin={"auto"} marginTop={"10px"} marginBottom={"20px"} border={"1px solid lightgray"} />

                        {
                            getLocalData("token") ? <Flex w={"300px"} gap={"2px"} justifyContent={"center"} alignItems="center" margin={"auto"}><Box><AiFillUnlock /></Box><Text textAlign={"center"} m={"10px"}>You are Logged in</Text></Flex> : null
                        }
                        <Flex className="flexLogin" justifyContent={"center"}>
                            <Box className="boxLogin">
                                <form className="formLogin" onSubmit={handleSubmit}>
                                    {/* <Text>{loginData ? loginData.message : null}</Text> */}
                                    <Text className='lebel' textAlign={"center"} marginRight={"250px"} marginBottom={"-20px"}>Email</Text><br />
                                    <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={email} onChange={handleChange} required /><br />

                                    <Flex w={"300px"} justifyContent={"space-between"} alignItems={"center"}>
                                        <Box w={"125px"}>
                                            <Text id='Text' marginLeft={'-50px'} marginBottom={"-20px"}>Password</Text><br />
                                            <Input w="160px" type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={password} onChange={handleChange} required />
                                        </Box>
                                        <Box lineHeight={"15px"}>
                                            <Text marginLeft={'-110px'} >Role</Text><br />
                                            <select className='select' placeholder='Select Role' onChange={hanldeAdmin}>
                                                <option value='Explorer'>Explorer</option>
                                                <option value='admin'>Admin</option>
                                            </select>
                                        </Box>
                                    </Flex>

                                    <Text fontSize={"13px"} marginTop={"5px"} marginBottom={'5px'}>Doesn't have an account ? <Link to={"/register"}><b className='b'>Register here</b></Link></Text>

                                    {
                                        isLoading ? <Box width={"300px"} display={"flex"} justifyContent={"center"} alignItems={"center"}><Spinner /> </Box> : null
                                    }
                                    <Box className='buttonBox'>
                                        <input className="buttonRegister" type="submit" value="Login" disabled={show} />
                                    </Box>
                                </form>
                            </Box>
                        </Flex>
                    </Box>
                </Box>

            </Box>
            <Footer/>
        </Box>
    )
}

export default Login
