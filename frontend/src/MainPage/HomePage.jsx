import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FifthSlider from '../components/FifthSlider'
import FirstSlider from '../components/FirstSlider'
import Footer from '../components/Footer'
import FourhSlider from '../components/FourhSlider'
import Navbar from '../components/Navbar'
import SecondSlider from '../components/SecondSlider'
import Setinterval from '../components/Setinterval'
import ThirdSlider from '../components/ThirdSlider'


const HomePage = () => {
  return (
    <Box>
        <Navbar/>
    <FirstSlider/> 
      <SecondSlider/>
      <Setinterval/>
     <Link to="/mens"> <Image w={"100%"} marginTop={"10px"} marginBottom={"10px"} src='https://user-images.githubusercontent.com/103739534/212957836-f93537a9-ba5f-4940-b42d-7dca88ff59b9.png' alt='men'/> </Link>
      <ThirdSlider/>
      <Link to="/mens"> <Image w={"100%"} marginTop={"10px"} marginBottom={"10px"} src='https://user-images.githubusercontent.com/103739534/212979558-977a6fb3-2791-47c5-9834-8e7c2bc10c5b.png' alt='mobile'/> </Link>
      <Image w={"100%"} marginTop={"10px"} marginBottom={"10px"} src='https://user-images.githubusercontent.com/103739534/212979520-173fe9ac-84ed-4b22-863f-d7b038889b85.png' alt='mobile'/>
      <FourhSlider/>
      <Image w={"100%"} marginTop={"-30px"} marginBottom={"10px"} src='https://user-images.githubusercontent.com/103739534/212991984-cc6c708a-b5dc-46c8-87a4-164499776875.png'/>
      <FifthSlider/>
      <Image w={"100%"} src='https://user-images.githubusercontent.com/103739534/212993319-4e31cbe6-331b-4f73-852e-36931bd8d526.png'/>
      <Image marginBottom={"10px"} src='https://user-images.githubusercontent.com/103739534/212994638-ed75b7e2-5a35-4e8b-8f24-dcaf0ec2aeba.png'/>
      <Footer/>
    </Box>
  )
}

export default HomePage
