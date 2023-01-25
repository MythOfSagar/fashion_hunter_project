import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import { Box  , Button, Heading, Image , Select, Stack, Text} from '@chakra-ui/react'
import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { getDataProduct } from '../../Redux/Laptop_reducer/action'
import { getReviewData } from '../../Redux/Review_reducer/action'

import "./Allreview.css"


const Allreview = () => {
  const [singleData , updateSingleData] = useState([])
  const [filterReview , setFilterReview]= useState("recent")
  const [changePage  ,setChangePage] = useState(1)
  const [changeNum , setChangeNum] = useState(1)
  // const [valuePagination , setValuePagination] = useState(false)

  const location = useLocation()
  const dispatch = useDispatch()

  // console.log(filterReview , "filterReview")



  //  use location for accessing the value from url ----------------------------------
 let  count = 0 
  for(var i=0 ; i<location.pathname.length ;i++){
     if(location.pathname[i] == "/"){
       count++
     }
     if(count == 2){
      break 
     }
    }
    const path = (location.pathname[i+1])
  
  const {reviewData ,isLoading,isError ,isNum} = useSelector((state) => {
    return {
      reviewData: state.ReviewReducer.reviewData ,
      isLoading:state.ReviewReducer.isLoading ,
      isError :state.ReviewReducer.isError ,
      isNum :state.ReviewReducer.isNum ,
    }
},shallowEqual)   

 
//  For accessing products details ---------------------------------------------------
    
  const GetSinglePageData = (num) =>{
    
    axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/mens/${num}`)
    .then((res)=> updateSingleData(res.data))
    
}
// console.log(singleData ,"singleData")

useEffect(()=>{
  GetSinglePageData(path)
},[])



  if(reviewData?.length > 0 ){
    reviewData.reverse()
  }

 
 
 useEffect(()=>{
   if(reviewData.length == 0){
     dispatch(getReviewData(path))
   }
 },[])


//  Calculating everything 
var answer  = 0 
const arrayReview = []
const reviewTitleUser = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const totalCountArr = []
// count of review --------------------------
var fiveLength = 0 
var fourLength = 0 
var threeLength = 0 
var twoLength = 0 
var oneLength = 0

if(reviewData != undefined  && reviewData.length > 0 ){
let sum = reviewData.map((item)=>{
  return (
     item.review
  )
}) 
// console.log(sum , "sum") 

for(var i=0 ; i<sum.length ; i++){
  if(sum[i] != "" && sum[i] !== undefined && sum[i] != null && sum[i] != false && sum[i] != 0 ){
   if(sum[i] == 5){fiveLength++}
   else if(sum[i] == 4){fourLength++}
   else if(sum[i] == 3){threeLength++}
   else if(sum[i] == 2){twoLength++}
   else if(sum[i] == 1){oneLength++}
   arrayReview.push(sum[i])
  }
 }
 totalCountArr.push(fiveLength)
 totalCountArr.push(fourLength)
 totalCountArr.push(threeLength)
 totalCountArr.push(twoLength)
 totalCountArr.push(oneLength)
  
  
  
  answer = arrayReview.reduce((a , item)=>{
    return (a+item)
  })
  }

 
  if(totalCountArr?.length > 0 ){
    totalCountArr.sort((a,b)=>b-a)

  } 
  
  
  const calculate = ((answer)/(arrayReview.length)) || 0 
  const calculateRating = calculate.toFixed(1)


 


  // for  price calculation logic is here ----------------------------
  const total = Math.floor(+(singleData?.realPrice) * 100 )
  const spend = Math.floor(+(singleData?.price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 
  //  End here -------**************------------------------- 
     
  //  Filtering starts***********---------------------
  if(reviewData?.length > 0){
  const reviewFilterRecent = reviewData.map((item,i)=>{
       return (
       [ item.review ,item.title , item.image]
       )
  })


  for(var i=0 ; i<reviewFilterRecent.length ; i++){
    if(reviewFilterRecent[i][0] != "" && reviewFilterRecent[i][0] != undefined && reviewFilterRecent[i][0] != null && reviewFilterRecent[i][0] != false && reviewFilterRecent[i][0] != 0 && reviewFilterRecent[i][1] != "" && reviewFilterRecent[i][1] != undefined && reviewFilterRecent[i][1] != null && reviewFilterRecent[i][1] != false && reviewFilterRecent[i][1] != 0){
      reviewTitleUser.push(reviewFilterRecent[i])
    }
  }
}
// ------------------------------PAGINATION *********CODE ******************
    // Pagination Next Page ----------
    

const handlePageChange = ()=>{
  setChangePage(changePage+1)
  console.log("hd" , Math.ceil(reviewTitleUser.length/8))
  if(5 < Math.ceil(reviewTitleUser.length/8) && changePage == 5 ){
    setChangeNum(5)
  }
  
}
  
const handlePagePrevious = ()=>{
  setChangePage(changePage-1)
  if(5 < Math.ceil(reviewTitleUser.length/8) && changePage == 5 ){
    // console.log(changePage ,"changePage   ---------------------------")
    setChangeNum(1)
  }
}





  


  return (
    <Box>
        <Navbar />
        {/*  Whole code after navbar ------------------------------ */}
        <Box className="SingleProductMainspan"   background="#f1f3f6"  style={{border:"1px   green" , height:"auto" , }} width={{base:"", sm: "", md: "", lg: "",xl: "",'2xl': ""}}>

        <Box className='SingleProductMain' height="auto" mb="20px" width={{base:"100%", sm: "90%", md: "90%", lg: "90%",xl: "90%",'2xl': "90%"}} ml="auto" mr="auto" mt="10px"  shadow="lg"  background='#ffffff' display="flex" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} >
         
         {/*  Image box ------------------- */}
           <Box border="2px  red" width={{base:"", sm: "80%", md: "38%", lg: "45%",xl: "35%",'2xl': "35%"}} height="auto" p="20px">

            <Image src={singleData?.mainImage} alt="productImage" boxSize={{base:"250px", sm: "300px", md: "200px", lg: "400px",xl: "400px",'2xl': "400px"}}   />
              
             {/*  about category ------- */}
             <Heading fontSize="17px" fontWeight="600" mt="5px" color="#303030" textAlign="left">{singleData?.brand}</Heading> 
      <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">{singleData?.title}</Text> 
            {/* category end------------------- */}

           {/*  Price is here ----------- */}
            <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${singleData?.price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${singleData?.realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
          </Box>
          {/* Price end ----------------- */}
            
            {/* approved---------- */}
            <Box display="flex" justifyContent="space-between" border="1px  red" width={{base:"100%", sm: "90%", md: "70%", lg: "60%",xl: "50%",'2xl': "50%"}}>
              <Text mb="15px" textAlign="left" fontSize="16px"><CheckCircleIcon color="#878787" mr="5px" fontSize="14px" />Certified Seller</Text>
    
             
              </Box>
           
            
             </Box>

           {/* Rating Box----------***********************------- */}

           <Box border="2px solid #f0f0f0" mt={{base:"-20px", sm: "-20px", md: "0", lg: "0",xl: "0",'2xl': "0"}} width={{base:"", sm: "", md: "68%", lg: "60%",xl: "60%",'2xl': "60%"}} height="auto" mb="30px" >
            <Box p="20px" borderBottom="1px solid #f0f0f0" display="flex" justifyContent="space-between">
             <Heading fontWeight={500} fontSize="20px" textAlign="left">{singleData?.title}</Heading>
            {/* Selects tags -------------------------- */}
             <Box >
            
  
                <select cursor="pointer"  style={{fontWeight:"500" ,border:"2px solid #f0f0f0" ,padding:"5px" , outline:"none" , cursor:"pointer"}}  onChange={(e)=> setFilterReview(e.target.value)}>
                  <option value="recent"  style={{fontWeight:"500"}} >Most Recent</option>
                  <option value="positive" >Positive First</option>
                  <option value="negative">Negative First</option>
                </select>


             </Box>
             </Box>
             
               <Box p="20px" border="2px  red" display="flex" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} >   
               {/*  Rating image */}
               <Box border="1px  #26a541" display="flex" flexDirection="column" >
             <Text color="#ffffff" display="flex" alignItems="center" justifyContent="center" fontSize="22px"  borderRadius="20px" width="70px"   background="#26a541">{calculateRating || 0}<StarIcon fontSize="15px" ml="4px" color="#ffffff" /></Text> 

            <Box color="#8f8a8f" ml="-15px" mb="10px" width="128px"  ><Text textAlign="center"  lineHeight="20px" fontWeight="500" fontSize="15px" ml="6px">{arrayReview.length} ratings and {reviewTitleUser.length} reviews</Text></Box>
            </Box>
            {/*  rating box length --------- */}
            <Box  ml={{base:"0px", sm: "30px", md: "30px", lg: "30px",xl: "30px",'2xl': "30px"}} >
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#388e3c" ,width:`${(totalCountArr[0] == fiveLength && 28) || (totalCountArr[1] == fiveLength && 24) || (totalCountArr[2] == fiveLength && 18) || (totalCountArr[3] == fiveLength && 12) ||( totalCountArr[4] == fiveLength) && 5  || 1}vw`,height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>{fiveLength}</Text>
             <Text display="flex" alignItems="center">4 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#388e3c" ,width:`${(totalCountArr[0] == fourLength && 28) || (totalCountArr[1] == fourLength && 24) || (totalCountArr[2]== fourLength && 18) || (totalCountArr[3] == fourLength && 12 ) || ( totalCountArr[4] == fourLength) && 5  || 1}vw`,height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>{fourLength}</Text>
             <Text display="flex" alignItems="center">3 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#388e3c" ,width:`${(totalCountArr[0] == threeLength && 28) || (totalCountArr[1] == threeLength && 24) || (totalCountArr[2]  == threeLength && 18) || (totalCountArr[3] == threeLength && 12) || (totalCountArr[4] == threeLength) && 5  || 1}vw`,height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>{threeLength}</Text>
             <Text display="flex" alignItems="center">2 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#ff6161" ,width:`${(totalCountArr[0] == twoLength && 28) || (totalCountArr[1] == twoLength && 24) || (totalCountArr[2] == twoLength && 18) || (totalCountArr[3] == twoLength && 12) || (totalCountArr[4] == twoLength) && 5  || 1}vw`,height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>{twoLength}</Text>
             <Text display="flex" alignItems="center">1 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <span style={{backgroundColor:"#ff6161" ,width:`${(totalCountArr[0] == oneLength && 28) || (totalCountArr[1] == oneLength && 24) || (totalCountArr[2] == oneLength && 18) || (totalCountArr[3] == oneLength && 12) || (totalCountArr[4] == oneLength) && 5  || 1}vw`,height:"4px",borderRadius:"20px" , marginRight:"15px"}}></span>{oneLength}</Text> 
          

             </Box>
            
           </Box>
            {/* By our customer */}
          
         {/* FOR RECENT -----***** */}
            {reviewData?.length > 0 && filterReview == "recent" && reviewData?.map((item , i)=>{
          
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

  {/* For positive ---------- */}
{reviewTitleUser?.length > 0 && filterReview == "positive" &&  reviewTitleUser?.sort((a,b)=>b[0]-a[0]).map((item , i)=>{
              //  console.log(item[1]?.length)
  
          if(item[0] >=1 && item[1]?.length > 1 ){
           
          return (
            <Box  ml="20px" mb="15px" key={i}>

            <Box display="flex" alignItems="center" mb="13px">
           {item[0] >= 1 && item[0] >=3 && <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
    style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
    <Text color="#ffffff" fontSize="16px">{item[0]}</Text> 
    
    <StarIcon fontSize="13px" color="#ffffff" />
    </Box> }
    {item[0]  < 3 && item[0] >= 1 && <Box border="1px solid #ff6161" mt="6px" background="#ff6161" borderRadius="20px" width="45px"  
    style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
    <Text color="#ffffff" fontSize="16px">{item[0]}</Text> 
    
    <StarIcon fontSize="13px" color="#ffffff" />
    </Box> }

           {item[1] != "" && <Text textAlign="left" fontWeight={500} ml="10px" color="#2e3b4e">{item[1]}</Text>}
            </Box>
    
            
            {(item[2] !== "") && 
            <Image src={item[2]} alt="" boxSize={{base:"50px", sm: "70px", md: "70px", lg: "70px",xl: "70px",'2xl': "70px"}}  shadow="2xl" cursor="pointer" />
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
{/*  For negatives-------- */}
{reviewTitleUser?.length > 0 && filterReview == "negative" &&  reviewTitleUser?.sort((a,b)=>a[0]-b[0]).map((item , i)=>{
              //  console.log(item[1]?.length)
  
          if(item[0] >=1 && item[1]?.length > 1 ){
           
          return (
            <Box  ml="20px" mb="15px" key={i}>

            <Box display="flex" alignItems="center" mb="13px">
           {item[0] >= 1 && item[0] >=3 && <Box border="1px solid #26a541" mt="6px" background="#26a541" borderRadius="20px" width="45px"  
    style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
    <Text color="#ffffff" fontSize="16px">{item[0]}</Text> 
    
    <StarIcon fontSize="13px" color="#ffffff" />
    </Box> }
    {item[0]  < 3 && item[0] >= 1 && <Box border="1px solid #ff6161" mt="6px" background="#ff6161" borderRadius="20px" width="45px"  
    style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>   
    <Text color="#ffffff" fontSize="16px">{item[0]}</Text> 
    
    <StarIcon fontSize="13px" color="#ffffff" />
    </Box> }

           {item[1] != "" && <Text textAlign="left" fontWeight={500} ml="10px" color="#2e3b4e">{item[1]}</Text>}
            </Box>
    
            
            {(item[2] !== "") && 
            <Image src={item[2]} alt="" boxSize={{base:"50px", sm: "70px", md: "70px", lg: "70px",xl: "70px",'2xl': "70px"}}  shadow="2xl" cursor="pointer" />
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
                
                {/* PAGINATION STARTS FROM HERE -----------*******----- */}
                <Box display="flex" alignItems="center"  mb="20px" border="2px  red" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} > 
                  <Text pl="20px" fontWeight="500" textAlign="left">Page {changePage} of {Math.ceil(reviewTitleUser.length/8)}</Text>
                  {/* Numbers ***********  */}
                   <Box display="flex" alignItems="center" m="auto" fontWeight="400" fontSize="18px" border="2px  red"  >
                    
                    <Button color="#2874f0" mr="13px" isDisabled={changePage == 1} cursor="pointer" variant="unstyled" onClick={handlePagePrevious} fontWeight={500} >Prev</Button>
                    {Array(5 > Math.ceil(reviewTitleUser.length/8) ?Math.ceil(reviewTitleUser.length/8): 5 ).fill('').map((_,i)=>{
                      if(i+changeNum <= Math.ceil(reviewTitleUser.length/8) ){
                      return (
                     
                        <Text onClick={()=>setChangePage(i+1)} cursor="pointer" ml={{base:"15px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} key={i}  className={changePage == i+changeNum &&  "colorText"}> {i+ changeNum }</Text>
                       ) 
                      }
                    })} 
                    
                   
                    <Button   ml="25px" color="#2874f0" variant="unstyled"  isDisabled={changePage == Math.ceil(reviewTitleUser.length/8)}  cursor="pointer" onClick={handlePageChange} fontWeight={500}>Next</Button>
                    

                   </Box>
                </Box>
            
             </Box>
          
          

       </Box>
         </Box>

         <Footer />
    </Box>
  )
}

export  {Allreview}
