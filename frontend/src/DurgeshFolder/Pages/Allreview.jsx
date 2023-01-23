import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import { Box  , Heading, Image , Text} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { getReviewData } from '../../Redux/Review_reducer/action'

const Allreview = () => {
    
  
  const {reviewData ,isLoading,productArrayLaptop} = useSelector((state) => {
    return {
      reviewData: state.ReviewReducer.reviewData ,
      isLoading:state.ReviewReducer.isLoading ,
      isError :state.ReviewReducer.isError ,
    }
})   
 const dispatch = useDispatch()
useEffect(()=>{
    dispatch(getReviewData(1))
},[])


//  Calculating everything 
var answer  = 0 
const arrayReview = []
const reviewTitleUser = []

if(reviewData != undefined  && reviewData.length > 0 ){
let sum = reviewData.map((item)=>{
  return (
     item.review
  )
})


let titleRating = reviewData.map((item)=>{
  return (
     item.title
  )
})
// console.log(titleRating , sum.length , "title") 

for(var i=0 ; i<titleRating.length ; i++){
  if(titleRating[i] != "" && titleRating[i] !== undefined && titleRating[i] != null && titleRating[i] != false && titleRating[i] != 0){
    reviewTitleUser.push(titleRating[i])
  }
}



// console.log(sum.length , sum , "sum")
for(var i=0 ; i<sum.length ; i++){
   if(sum[i] != "" && sum[i] !== undefined && sum[i] != null && sum[i] != false && sum[i] != 0 ){
    arrayReview.push(sum[i])
   }
  }
  
  answer = arrayReview.reduce((a , item)=>{
    return (a+item)
  })
  }
  
  const calculate = ((answer)/(arrayReview.length)) || 0 
  const calculateRating = calculate.toFixed(1)


 






  return (
    <Box>
        <Navbar />
        {/*  Whole code after navbar ------------------------------ */}
        <Box className="SingleProductMainspan"   background="#f1f3f6"  style={{border:"1px   green" , height:"auto" , }} width={{base:"", sm: "", md: "", lg: "",xl: "",'2xl': ""}}>

        <Box className='SingleProductMain' height="auto" mb="20px" width="90%" ml="auto" mr="auto" mt="10px"  shadow="lg"  background='#ffffff' display="flex" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} >
         
         {/*  Image box ------------------- */}
           <Box border="2px  red" width={{base:"", sm: "80%", md: "38%", lg: "45%",xl: "35%",'2xl': "35%"}} height="auto" p="20px">

            <Image src="https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/u/g/g/9-2008-black-green-9-sfr-black-original-imagh9kvzs47gur2.jpeg?q=70" alt="productImage" boxSize={{base:"250px", sm: "300px", md: "200px", lg: "400px",xl: "400px",'2xl': "400px"}}   />
              
             {/*  about category ------- */}
             <Heading fontSize="17px" fontWeight="600" mt="5px" color="#303030" textAlign="left">Carbonn Cloth</Heading> 
      <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis, laborum quaerat facilis illum praesentium aut obcaecati. Ad, recusandae autem.</Text> 
            {/* category end------------------- */}

           {/*  Price is here ----------- */}
            <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">$200</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">$300</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({100}% off)</Text>
          </Box>
          {/* Price end ----------------- */}
            
            {/* approved---------- */}
            <Box display="flex" justifyContent="space-between" border="1px  red" width={{base:"100%", sm: "90%", md: "70%", lg: "60%",xl: "50%",'2xl': "50%"}}>
              <Text mb="15px" textAlign="left" fontSize="16px"><CheckCircleIcon color="#878787" mr="5px" fontSize="14px" />Certified Seller</Text>
    
             
              </Box>
           
            
             </Box>

           {/* Rating Box----------------- */}
           <Box border="2px solid #f0f0f0" mt={{base:"-30px", sm: "-30px", md: "0", lg: "0",xl: "0",'2xl': "0"}} width={{base:"", sm: "", md: "68%", lg: "60%",xl: "60%",'2xl': "60%"}} height="auto" mb="30px" >
             <Heading fontWeight={500} fontSize="22px" p="20px" textAlign="left" borderBottom="1px solid #f0f0f0">Lorem ipsum dolor sit amet consectetur.</Heading>

             
               <Box p="20px" border="2px  red" display="flex" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} >   
               {/*  Rating image */}
               <Box border="1px  #26a541" display="flex" flexDirection="column" >
             <Text color="#ffffff" display="flex" alignItems="center" justifyContent="center" fontSize="22px"  borderRadius="20px" width="70px"   background="#26a541">{calculateRating || 0}<StarIcon fontSize="15px" ml="4px" color="#ffffff" /></Text> 

            <Box color="#8f8a8f" ml="-15px" mb="10px" width="128px"  ><Text textAlign="center"  lineHeight="20px" fontWeight="500" fontSize="15px" ml="6px">{arrayReview.length} ratings and {reviewTitleUser.length} reviews</Text></Box>
            </Box>
            {/*  rating box length --------- */}
            <Box  ml={{base:"0px", sm: "30px", md: "30px", lg: "30px",xl: "30px",'2xl': "30px"}} >
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#388e3c" ,width:'30vw',height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>34</Text>
             <Text display="flex" alignItems="center">4 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#388e3c" ,width:"30vw",height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>34</Text>
             <Text display="flex" alignItems="center">3 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#388e3c" ,width:"25vw",height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>34</Text>
             <Text display="flex" alignItems="center">2 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#ff6161" ,width:"6vw",height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>34</Text>
             <Text display="flex" alignItems="center">1 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#ff6161" ,width:"2vw",height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>34</Text>

             </Box>
            
           </Box>
            {/* By our customer */}

            {reviewData?.length > 0 && reviewData?.reverse().map((item , i)=>{
          
          if(item?.review >=1 && item?.title.length > 1 ){
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
       

       {/*  End review */}

             </Box>
          
          

       </Box>
         </Box>

         <Footer />
    </Box>
  )
}

export  {Allreview}
