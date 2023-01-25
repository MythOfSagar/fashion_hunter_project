import { Box ,Heading,Image , Skeleton, SkeletonText, Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import {AddIcon, MinusIcon} from "@chakra-ui/icons"
import { CartDelete } from './CartDelete'
import { useDispatch } from 'react-redux'
import { changeCartData, getCartData } from '../../Redux/Cart_reducer/action'
import { useEffect } from 'react'
import { useRef } from 'react'

const Cartbox = ({mainImage ,quantity, categories ,item,title ,price ,realPrice ,isLoadingCart , id ,handleDeleteProduct}) => {
  
  const [quantityOfCart , setQuantityOfCart] = useState(quantity)


  const total = Math.floor(+(realPrice) * 100 )
  const spend = Math.floor(+(price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 
  
  // FOR INCREASE --------------------------------
  const dispatch = useDispatch()

  //  Optimised approch for cart ----------------------USING DEBOUNCING ********** -------
   

  const timer = useRef()
  
  const getDebouncing = ( id , payload)=>{
    return ()=>{
      clearTimeout(timer.current)
    timer.current = setTimeout(()=>{
      dispatch(changeCartData(id,payload))
            .then(()=>dispatch(getCartData))
    },700)
  }
   
}


  const cartQuantityIncrease = (id)=>{
     setQuantityOfCart((prev)=>prev+1) 
     const payload={
      quantity:quantityOfCart+1
     }
      getDebouncing(id ,payload)()
    
  }


  const cartQuantityDecrease = (id)=>{
    if(quantity > 1  && quantityOfCart > 1){
    setQuantityOfCart(quantityOfCart-1)
    const payload={
      quantity:quantityOfCart-1
     }
     getDebouncing(id , payload)()
    
  }
}



  return (
    <Box  width={{base:"100%", sm: "100%", md: "90%", lg: "80%" ,xl: "60%",'2xl': "60%",}} p="20px" height="auto" display="flex" >
        <Box >
      <Image src={mainImage} width="90px" />
     {/*   For INCRESING THE COUNT OF PRODUCTS-------------------- */}
      <Box display="flex" border="1px  blue" mt="10px" justifyContent="space-between" >
       <Text cursor="pointer"><MinusIcon onClick={()=>cartQuantityDecrease(id)}  borderRadius="50%" fontSize="22px" p="4px" style={{color:"#c2c2c2" , border:"1px solid #c2c2c2" }} /></Text>
       <Text border="1px solid #c2c2c2" pl="13px" pr="13px">{quantityOfCart}</Text>
       <Text cursor="pointer"><AddIcon onClick={()=>cartQuantityIncrease( id)} borderRadius="50%" fontSize="22px" p="4px" style={{color:"#c2c2c2" ,border:"1px solid #c2c2c2"}} /></Text>
    </Box>
      </Box>

      {/*  Details box-------------------------- */}
      <Box  ml="20px" pl="10px" width="82%">

       <Heading fontSize="15.5px" fontWeight="600" mt="5px" color="#303030" textAlign="left">{categories}</Heading> 
      <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">{title}</Text> 

   {/*  price is here -------------------------------- */}
 <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
           
           
          </Box>
          {/*  Price end ----------- */}
         <Heading fontSize="22px" fontWeight="500" mt="6px" color="#ff6461" textAlign="left">In Stock</Heading> 
        {/* <Text fontSize='16px' mt="8px"  fontWeight="500" color="#727272" textAlign="left">REMOVE</Text>  */}
         <CartDelete id={id} handleDeleteProduct={handleDeleteProduct} />
    
      </Box>
    </Box>
  )
}

export {Cartbox} 
