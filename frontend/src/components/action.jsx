import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
const Action = () => {
  return (
    <div>
      <Menu>
  <MenuButton  color={"white"} bgColor={"#2f4254"} as={Button} rightIcon={<ChevronDownIcon />}>
    My Account
  </MenuButton>
  <MenuList>
    <MenuItem>Register</MenuItem>
    <MenuItem>LogIn</MenuItem>
    <MenuItem>LogOut</MenuItem>
  </MenuList>
</Menu>
    </div>
  )
}

export default Action
