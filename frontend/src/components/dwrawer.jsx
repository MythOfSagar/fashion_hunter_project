import { Box, Button, Drawer, DrawerBody, DrawerCloseButton,useToast, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Action from "./action";
import { Link, useNavigate } from "react-router-dom";
import { getLocalData } from "../Utils/LocalStorage";
import {FaHeart} from "react-icons/fa"
import { BsFillHandbagFill} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getWishListData } from "../Redux/Wishlist_reducer/action";
import { getCartData } from "../Redux/Cart_reducer/action";


function DrawerExample() {
  const navigate = useNavigate();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef();

  const dispatch = useDispatch()
  const cartArrayData = useSelector(state=>state.CartReducer.cartArrayData)
  const wishListArray = useSelector(state=>state.WishlistReducer.wishListArray)

  const handleLogin=()=>{
    if (!getLocalData("token")){
      navigate("/login")
      toast({
        title: `You are not login, login first`,
        status: 'error',
        isClosable: true,
      })
    }
  }

  
  useEffect(()=>{
    dispatch(getCartData)
    dispatch(getWishListData)

  },[])



  return (
    <>
      <Button color={"#2f4254"} fontSize={"30px"} variant={"unstyled"} textAlign="center" onClick={onOpen}><HamburgerIcon />
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
                <Action />
                <Link to={"/mens"}>Men</Link>
                <a href="#">Women</a>
                <a href="#" >KIDS</a>
                <a href="#">INDIE</a>
                <a href="#">Home AND KITCHEN</a>
                {/* <div className="icon">
                  <div className="icon-div">
                    <Link to={"/wishlist"}><AiOutlineHeart /></Link>
                  </div>
                  <div className="icon-div">
                    <Link to={"/cart"}><BsHandbag /></Link>
                  </div>
                </div> */}
                <div className="icon" onClick={handleLogin}>
                  {/*  Wishlist -------------durgesh */}
                  <Box className="icon-div" position="relative">
                    <Link to="/wishlist"> <FaHeart /> </Link>
                    {(wishListArray[0] !== "P" && wishListArray.length !== 0) && <Box className="wishListClass" position="absolute" left="22px" top="-2px" color="#ffffff" backgroundColor="#ff6161" width="23px" height="25px" fontWeight="700" borderRadius="50%" fontSize="18px" border="1px solid #ffffff">{wishListArray.length}</Box>}


                  </Box>

                  {/*  cart ------------- durgesh ----*/}
                  <Box className="icon-div" position="relative" >
                    <Link to="/cart"> <Box><BsFillHandbagFill /></Box></Link>

                    {(cartArrayData[0] !== "P" && cartArrayData.length !== 0) && <Box className="manoj" position="absolute" left="22px" top="-2px" color="#ffffff" backgroundColor="#ff6161" width="23px" height="25px" fontWeight="700" borderRadius="50%" fontSize="18px" border="1px solid #ffffff" >{cartArrayData.length}</Box>}
                  </Box>
                  {/* main end ------------------- */}
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