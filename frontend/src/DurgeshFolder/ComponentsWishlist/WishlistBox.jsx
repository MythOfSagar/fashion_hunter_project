import { Box ,Button,Heading,Image , Skeleton, SkeletonText, Text, useToast} from '@chakra-ui/react'
import React from 'react' 
import "./wishlist.css"
import {MdShoppingCart} from "react-icons/md"
import {RxCrossCircled} from "react-icons/rx"
import { useDispatch } from 'react-redux'
import { sendCartData } from '../../Redux/Cart_reducer/action'


const WishlistBox = ({mainImage ,categories ,title ,price,realPrice ,deleteWishlistItem ,uniqueID ,isLoadingWishlist}) => {

  const total = Math.floor(+(realPrice) * 100 )
  const spend = Math.floor(+(price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount  

  const dispatch = useDispatch()
  const toast = useToast()
  
  const sendHandleCartData = (uniqueID)=>{
    const payloadData ={ 
      mainImage:mainImage ,
      categories:categories ,
      title:title ,
      price:price ,
      realPrice:realPrice ,
      quantity:1 , 
    }
    dispatch(sendCartData(payloadData)).then(()=>deleteWishlistItem(uniqueID)) 
    toast({
      title: 'Product Added to Cart',
      status: 'success',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }



  return (
    <Box  p="15px" shadow="2xl" border="1px solid #dbdddf" className='hoverProductDivWishlist' w={{base:"84vw", sm: "45vw", md: "42vw", lg: "30vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"420px", sm: "410px", md: "410px", lg: "410px" ,xl: "405px",'2xl': "405px",}}  >
        {/*  Image and cross icon */}
        <Skeleton isLoaded={isLoadingWishlist} >   <Box display="flex" justifyContent="space-between">
       <Image src={mainImage} height="250px" width="250px" />

       <RxCrossCircled onClick={()=>deleteWishlistItem(uniqueID)} style={{fontSize:"30px" , cursor:"pointer"}}  />
       </Box>
       </Skeleton>

       <SkeletonText isLoaded={isLoadingWishlist}  noOfLines={1} spacing='2'> <Heading fontSize="15.5px" fontWeight="600" mt="5px" color="#303030" textAlign="left">{categories}</Heading> </SkeletonText>

       <SkeletonText isLoaded={isLoadingWishlist}  noOfLines={1} spacing='2'> <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">{title}</Text> </SkeletonText>

{/*   Price ------------------------------- */}
<SkeletonText isLoaded={isLoadingWishlist}  noOfLines={1} spacing='2'> <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>

          </Box></SkeletonText>
           
           
          <SkeletonText isLoaded={isLoadingWishlist}  noOfLines={1} spacing='2'>
             <Button display="flex" onClick={()=>sendHandleCartData(uniqueID)} backgroundColor='#ff3e6c' mt="10px" variant='unstyled' width={{base:"100%", sm: "100%", md: "53%", lg: "47%",xl: "47%",'2xl': "47%"}} height="38px"  borderRadius="2px" > <MdShoppingCart  fontSize="15px" color="#fffcfa"/> <Text color="#fffcfa" ml="2"  fontSize="15px">ADD TO CART</Text></Button> 
             </SkeletonText>
        
    </Box>
  )
}

export  {WishlistBox}
