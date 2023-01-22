import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { getLocalData } from '../Utils/LocalStorage'
const Action = () => {
  const toast = useToast()
  const navigate= useNavigate()
  const [dummy,setDummy] = useState(false)

  const handleLogout=()=>{
    localStorage.clear()
    setDummy(true)
    navigate("/")
    toast({
      title: `Logout successfull`,
      status: 'success',
      isClosable: true,
    })
  }

  const username = getLocalData("name")
  return (
    <div>
      <Menu>
  <MenuButton variant={"unstyled"} w={"150px"}  color={"white"} bgColor={"#2f4254"} as={Button} rightIcon={<ChevronDownIcon />}>
    {
      username ? username : "My Account"
    }
  </MenuButton>
  <MenuList>
   <Link to={"/register"}><MenuItem>Register</MenuItem></Link> 
   <Link to={"/login"}> <MenuItem>LogIn</MenuItem></Link>
   <MenuItem onClick={handleLogout}>LogOut</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}

export default Action
