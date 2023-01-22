import "./ImageData.css" 
import { AddIcon, MinusIcon, StarIcon } from '@chakra-ui/icons'
import { Box ,Text , Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Table, Tr, Tbody, Td, TableContainer, Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaUserCircle} from "react-icons/fa"


const ProductLaptop = ({item ,totalRatingLength ,answerRating ,reviewLength}) => {
  
 

  
  const total = Math.floor(+(item.realPrice) * 100 )
  const spend = Math.floor(+(item.price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount  

 
 
  return (
    <Box padding="10px" textAlign="left">
        {/*  Main Heading ------------------------------------ */}
     <Heading fontSize="18px" fontWeight="500" color="#8f8a8f" >{item.brand}</Heading> 
     <Text fontSize='16px' fontWeight="500" color="#303030" mt="8px" lineHeight="23px" >{item.title}</Text> 

     <Text fontSize="15px" color="#26a541" fontWeight="500" mt="12px">Special price</Text>
        

        {/*  Price is all here ------------------------------------------- */}
     <Box  mt="6px" style={{display:'flex' , alignItems:"center" } }>
          <Heading fontSize='28px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${item.price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#8f8a8f" textAlign="left">${item.realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#26a541" textAlign="left">{ans}% off</Text>
          </Box>



      {/*  Rating -------------------------------------------------------- */}
        <Box mt="4px" style={{display:"flex" , alignItems:"center"}} >

        {/*  rating and review logo -------------------------------- */}
        <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
        style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
        <Text color="#ffffff" fontSize="16px">{answerRating}</Text> 
        <StarIcon fontSize="13px" color="#ffffff" />
        </Box>  

        {/*  rating and reviews text ------------------- */}
        <Box color="#8f8a8f" ><Text fontWeight="600" fontSize="17px" ml="6px">{totalRatingLength} ratings and {reviewLength} reviews</Text></Box>
        
        </Box>

       {/*  Product description code is here ----------------------------- */}


       <Accordion allowToggle mt="36px">
  <AccordionItem className='changeColor'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <Text fontWeight="500" fontSize="20px" pt="12px" pb="12px" pr="24px" > Description</Text> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {item.description}
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
 
 {/*  Products description is strated from here ------------------------------------ */}
 <Box>
  <Heading fontWeight={500} fontSize="20px"  marginLeft="16px" mt="20px" mb="13px">Product Details</Heading>
<TableContainer>
  <Table variant='simple' border="none">
 
    <Tbody>
      <Tr>
        <Td>Brand</Td>
        <Td>{item.brand}</Td>
        
      </Tr>
      <Tr>
        <Td>Color</Td>
        <Td>{item.color}</Td>
       
      </Tr>
      <Tr>
        <Td>MRP</Td>
        <Td>${item.realPrice}</Td>
        
      </Tr>
      <Tr>
        <Td>Save</Td>
        <Td>{ans}%</Td>
        
      </Tr>
      <Tr>
        <Td>Pay</Td>
        <Td>${item.price}</Td>
        
      </Tr>
     

    </Tbody>
   
  </Table>
</TableContainer>
</Box>


  {/*  Product description is ends here ---------------------------------------------- */}


       {/*  Customere reviews are start from here ------------------------------- */}
          
          <Box mt="30px">
             {/* <Text fontSize='20px' fontWeight="700" color="#303030"><u> Top Reviews From Our Customers</u></Text>           */}
             {/* addind review --------------------------------- */}
             {/* <Box display="flex" alignItems="center" >
             <Input placeholder='Write a customer review' width="210px" mt="20px" mb="10px" value={review} onChange={(e)=> setReview(e.target.value)}  /> 

             <Button onClick={handleReview} display="flex" mb="10px" ml="2"  backgroundColor='#fb641b' variant='unstyled' width="60px" mt="20px"  borderRadius="10px" > <Text color="#fffcfa"   fontSize="17px">Share</Text></Button>
             </Box> */}

             {/*  Adding review end ------------------------- */}
              {/* {
                item?.reviews?.map((item , i)=>{
                 return (  
                  <Box mt={5} key={i} >
                    <Box display="flex">
                    <FaUserCircle fontSize="16px" color="grey"/>
                    <Text fontSize='12px' fontWeight="600" color="#8f8a8f" ml={2}>Verified User</Text>
                    </Box>
                 <Text  fontSize='15px' fontWeight="500" color="#303030" ml="3" >{item}</Text>
                 </Box>
                 )
                   
                })
              }  */}

               {/* {
                   reviewArr.length > 0 && reviewArr?.map((item , i)=>{
                 return (  
                  <Box mt={5} key={i} >
                    <Box display="flex">
                    <FaUserCircle fontSize="16px" color="grey"/>
                    <Text fontSize='12px' fontWeight="600" color="#8f8a8f" ml={2}>Verified User</Text>
                    </Box>
                 <Text  fontSize='15px' fontWeight="500" color="#303030" ml="3" >{item}</Text>
                 </Box>
                 )
                   
                })
              }  */}


    
          </Box>




    </Box>
 
     



  )
}

export  {ProductLaptop}
