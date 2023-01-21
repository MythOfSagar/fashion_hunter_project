import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
const Action = () => {

  const handleLogout=()=>{
    
  }

  return (
    <div>
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    My Account
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
