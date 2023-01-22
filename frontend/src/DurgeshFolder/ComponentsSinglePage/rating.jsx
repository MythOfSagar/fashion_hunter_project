import React,{useEffect, useState} from 'react' 
import { Box, Heading , Text,Image, Button, SimpleGrid } from '@chakra-ui/react'
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import "./recent.css"
import { Modaluser } from './modalUser';
import { Modelrating } from './modelRating';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import axios from 'axios';
import { Modelreview } from './modelReview';

const Rating = ({num ,handleStarRating,ratingData,answerRating ,reviewData ,handleSubmit ,arrayReview}) => {
  // const [likeColor , setLikeColor] = useState(false)
  // const [dislikeColor , setDisLikeColor] = useState(false)
  // const [likeCount , setLikeCount] = useState(10)
  // const [dislikeCount , setDisLikeCount] = useState(2)
  // const [reviewData , setReviewData] = useState([])
  // const [userRating , setUserRating]= useState(0)
  
 

    // //  Get req for all comments ----------------------
    // const  getReviewData = ()=>{
    //    axios.get(`https://graceful-lion-wig.cyclic.app/review/add1`)
    //    .then((res)=>setReviewData(res.data))
    //    .catch((err)=>alert(err))
    // } 

   

    // //  Post req for getting all the comments -------------------------------
    // const handleSubmit = (payload)=>{

    //   // console.log(payload ,"payload")
    //   axios.post(`https://graceful-lion-wig.cyclic.app/review/add1`,payload)
    //   .then((res)=>  getReviewData())
    //   .catch((err)=>console.log(`working on`))
     
    // }

    //  get request for ratings -----------------------------------------

    // const getRatingData = ()=>{
    //   axios.get('http://localhost:8080/getReview')
    //   .then((res)=> setRatingData(res.data))
    //   .catch((err)=> console.log(err))
    // }
    // const handleStarRating = (data)=>{
    //   const payload ={
    //     review:data , 
    //   }
    //   axios.post('http://localhost:8080/getReview',payload)
    //   .then((res)=>getRatingData())
    //   .catch((err)=>console.log('err'))
    // }
  

  
    // useEffect(()=>{
    //   // getRatingData()
    //   getReviewData()
    // },[num])
     
    // Code for calculating the average rating from reviews-----------------------

    var dataImages = []
    if(reviewData.length > 0){
    let sum = reviewData.map((item)=>{
      if(item?.image != "" ){
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
<Box color="#8f8a8f" ><Text lineHeight="20px" fontWeight="600" fontSize="17px" ml="6px">{ratingData.length + arrayReview.length} ratings and {arrayReview.length} reviews</Text></Box>
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
      // var number = 0 
      // var value = false 
      // var ans = 0 
      // if(item.image == ""){
      //    value = value+1 
      // }
      // console.log(value , "number")
      if(i < 4 ){
    
        return (
          <Box  key={i} textAlign="left" border="2px  red" ml="5px">
    

          <Image src={item } alt={i} boxSize={{base:"50px", sm: "70px", md: "70px", lg: "70px",xl: "70px",'2xl': "70px"}}  shadow="2xl" cursor="pointer" />
            
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
      
        {reviewData.map((item , i)=>{
          if(item?.review >=1 && item?.title.length > 1){
          return (
            
            <Box  ml="20px" mb="15px" key={i}>

            <Box display="flex" alignItems="center" mb="13px">
           {item?.review >= 1 && <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
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
    
              {/*  LIKE BUTTONS AND DISLIKE BUTTONS -------------------- */}
               {/* <Box display="flex" border="2px  red" justifyContent="space-evenly">
                <Text mr="10px" color="#c2c2c2" >{likeColor ? (  <AiFillLike onClick={handleLike}  style={{display:"inline-block" , fontSize:"20px" ,color:"#2874f0" ,cursor:"pointer"}} />):( <AiFillLike onClick={handleLike} style={{display:"inline-block" , fontSize:"20px" ,color:"#c2c2c2" ,cursor:"pointer"}} /> )}
                {item.like}
                 
                  </Text>
                <Text mr="10px" color="#c2c2c2">{dislikeColor ? (  <AiFillDislike onClick={handleDislike} style={{display:"inline-block" ,fontSize:"20px" ,color:"#2874f0" , cursor:"pointer"}} />) :( <AiFillDislike onClick={handleDislike}  style={{display:"inline-block" ,fontSize:"20px" ,color:"#c2c2c2" , cursor:"pointer"}} />)}
                  
                 {dislikeCount}</Text>
    
               </Box> */}
              </Box>
             <hr />
          </Box>

          )
              }
            
        })}
       
          
            

      

    



    </Box>
  )
}

export  {Rating}
