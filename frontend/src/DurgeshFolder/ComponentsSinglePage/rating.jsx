import React,{useEffect, useState} from 'react' 
import { Box, Heading , Text,Image, Button, SimpleGrid } from '@chakra-ui/react'
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import "./recent.css"
import { Modaluser } from './modalUser';
import { Modelrating } from './modelRating';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import axios from 'axios';
import { Modelreview } from './modelReview';
import { Link } from 'react-router-dom';

const Rating = ({num ,answerRating ,reviewData ,handleSubmit ,arrayReview , handleStarRating ,ratingLength}) => {
 
 


    var dataImages = []
    if(reviewData.length > 0){
    let sum = reviewData.map((item)=>{
      if(item?.image != "" && item.image != 0 && item.image !=  1 && item.image != Number ){
      return (
         item?.image
      )
      }
    }) 

    for(var i=0 ; i<sum.length ; i++){
      if(sum[i] != undefined){
        dataImages.push(sum[i])
      }

    }

    dataImages.reverse()
  }
  // console.log("dataImages" , dataImages)
     
  const getData = [
    {
      feeling:"Fabric Quality" } ,
    {  
      feeling:"Comfort" ,
      } ,
      {
        feeling:"Style" ,
      } ,
      { 
        feeling:"Comfort" ,
      } ,
      {
        feeling:"Style" ,
      } ,
      {
        feeling:"Fabric Quality" ,
      } ,
  ]
  getData.reverse()
  reviewData.reverse()
 
//  SHOW REVIEWS TO THE USER only three  ------------------------
   

let arrDataReview = []
  if(reviewData.length > 0){
    
   for(var i=0 ; i<reviewData.length ; i++){
     if(reviewData[i]?.review >=1 && reviewData[i]?.title.length > 1 && reviewData[i].title != "" ){
      arrDataReview.push(reviewData[i])
     }
 
   }
 
 }









 
  return (
    <Box>
      <Box><u><Heading fontWeight={600}>Customer Rating & Reviews</Heading></u></Box>
        
        {/*  Rating line -------------show rating -------------- */}
    
        <Box mt="24px" style={{display:"flex" , alignItems:"center"}} >
       <Heading  fontWeight={500} fontSize="22px" mr="30px" ml="20px" lineHeight="20px"  >Rating and reviews</Heading>
{/*  rating and review logo -------------------------------- */}
<Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
<Text color="#ffffff" fontSize="16px">{answerRating}</Text> 
<StarIcon fontSize="13px" color="#ffffff" />
</Box>  

{/*  rating and reviews text ------------------- */}
<Box color="#8f8a8f" ><Text lineHeight="20px" fontWeight="600" fontSize="17px" ml="6px">{ratingLength} ratings and {arrayReview.length} reviews</Text></Box>
</Box>

{/*  Rating is ended here -------------------------------------- */}

{/*  Rate here -----------------AND GIVE REVIEW ------------ */}
<Box className='ratingReviewBox' textAlign="left" ml="20px" mt="10px" mb="35px">
  {/*  Model for rating */}
  <Modelrating handleStarRating={handleStarRating} />
  {/* Model for review */}
  <Modelreview handleSubmit={handleSubmit}/>
</Box>



{/*  WHAT OUR CUSTOMERS FEELS ---------------------------------------- */}
   <Box  className='customerFeels' mb="50px">
    {/* What customers feels about us  */}

   <Box ml="20px" fontWeight={600} fontSize="16px"   border="2px  red" width="400px">
   <Text textAlign="left"  fontWeight={600} fontSize="16px" >What our customer felt:</Text>

   <Box  width="70%" textAlign="left" >
    {getData.length > 0 && getData?.map((item ,i)=>{
      if(i < 5){
        return (
          <Box key={i} mt="10px" mr={3} display="inline-block" shadow="Dark lg"  border="2px solid #e7e9ee" borderRadius="6px" color="#918b92" width="auto" heigth="auto" padding="3px">{item.feeling}</Box>

          )
   
      }
     
    })}
   </Box>

   </Box>

 
 {/* Images STARTED FROM HERE --------------- */}
    <Box>
    <Text textAlign="left" ml="20px" fontWeight={600} fontSize="16px"  mb="15px">Images upload by our customers</Text>
    {/* Images of customer products-------------------------- */}
    <Box>
    <Box display="flex" justifyContent="flex-start" ml="20px" position="relative" >
    <Modaluser data={dataImages} />
      
      {dataImages?.length > 0 && dataImages?.map((item ,i)=>{
     
      if(i < 4 ){
    
        return (
          <Box  key={i} textAlign="left" border="2px  red" ml="5px">
    

          <Image src={item } alt="Url break" boxSize={{base:"50px", sm: "70px", md: "70px", lg: "70px",xl: "70px",'2xl': "70px"}}  shadow="2xl" cursor="pointer" />
            
          </Box>
        )
      }
      // console.log(item?.length)
    })} 

   
   
   

     </Box>
   </Box>
   </Box>

   

   </Box>
   {/*  CUSTOMER REVIEW STARTED FROM HERE --------------------------------------------------- */}
     
    


      
        {arrDataReview?.length > 0 && arrDataReview?.map((item , i)=>{
          
          if(item?.review >=1 && item?.title.length > 1 && i < 3){
            
          return (
            <Box  ml="20px" mb="15px" key={i}>

            <Box display="flex" alignItems="center" mb="13px">
           {item?.review >= 1 && item.review >=3 && <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
    style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
    <Text color="#ffffff" fontSize="16px">{item.review}</Text> 
    
    <StarIcon fontSize="13px" color="#ffffff" />
    </Box> }
    {item.review  < 3 && item?.review >= 1 && <Box border="1px solid #ff6161" mt="6px" background="#ff6161" borderRadius="20px" width="45px"  
    style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
    <Text color="#ffffff" fontSize="16px">{item.review}</Text> 
    
    <StarIcon fontSize="13px" color="#ffffff" />
    </Box> }

           {item.title != "" && <Text textAlign="left" fontWeight={500} ml="10px" color="#2e3b4e">{item.title}</Text>}
            </Box>
    
            {/* Images of review */}
            {(item.image !== "") && 
            <Image src={item.image} alt="" boxSize={{base:"50px", sm: "70px", md: "70px", lg: "70px",xl: "70px",'2xl': "70px"}}  shadow="2xl" cursor="pointer" />
        }
             <Text mt="8px" mb="3px" color="#8f8a95" textAlign="left" fontSize="14px" fontWeight={500}>Fashion Hunter Customer</Text>
               
               <Box display="flex" justifyContent="space-between" border="1px  red" width={{base:"100%", sm: "90%", md: "70%", lg: "60%",xl: "50%",'2xl': "50%"}}>
              <Text mb="15px" textAlign="left" fontSize="16px"><CheckCircleIcon color="#878787" mr="5px" fontSize="14px" />Certified Buyer</Text>
    
             
              </Box>
             <hr />
          </Box>

          )
              }
            
        })}
       
     <Link to="reviews"> <Text color="#418ef3" cursor="pointer" textAlign="left" ml="22px" fontWeight="500" fontSize="18px" mb="10px" >See All 6 reviews </Text></Link>    
            

      

    



    </Box>
  )
}

export  {Rating}
