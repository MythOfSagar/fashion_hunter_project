import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Action from "./action";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <>
        <Button color={"white"} bgColor={"#2f4254"}variant={"unstyled"} textAlign="center" onClick={onOpen}><HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
            <DrawerBody>
              <Stack spacing='24px'>
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={20} gap={10}>
             <Action/>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#" >KIDS</a>
        <a href="#">INDIE</a>
        <a href="#">Home AND KITCHEN</a>
        <div className="icon">
            <div className="icon-div">
              <AiOutlineHeart />
            </div>
            <div className="icon-div"> 
              <BsHandbag />
            </div>
          </div>
      </Box>

              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerExample