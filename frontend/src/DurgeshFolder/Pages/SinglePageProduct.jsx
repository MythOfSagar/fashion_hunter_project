import { Box, Button } from '@chakra-ui/react'
import React,{useState , useEffect} from 'react'  
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ImageData } from '../ComponentsSinglePage/ImageData' 
import { ProductLaptop } from '../ComponentsSinglePage/ProductLaptop' 
import "./SinglePageProduct.css"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons' 
import { RecentBought } from '../ComponentsSinglePage/recentBought'
import { Rating } from '../ComponentsSinglePage/rating'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { getReviewData } from '../../Redux/Review_reducer/action'



const SinglePageProduct = () => {
  const {id} = useParams()   
  const [num , changeNum] = useState(+(id))
  const [singleData , updateSingleData] = useState([])
  const [value , setValue] = useState(false)
  // Code RATING 
  // const [ratingData , setRatingData]=useState([])
  const dispatch = useDispatch()

  const {reviewData ,isLoading,productArrayLaptop} = useSelector((state) => {
    return {
      reviewData: state.ReviewReducer.reviewData ,
      isLoading:state.ReviewReducer.isLoading ,
      isError :state.ReviewReducer.isError ,
    }
})   


  
   
  const GetSinglePageData = (num) =>{
    axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/mens/${num}`)
    .then((res)=> updateSingleData(res.data))
    
}

  
const handleChangeAdd = ()=>{
  if(num == 20){
    changeNum(1)
  }
  else{

    changeNum(num+1)
  }
  setValue(false)
}

const handleChangeRemove= ()=>{
  if(num == 1){
    changeNum(20)
  }
  else{

    changeNum(num-1)
  }
  setValue(false)
}

useEffect(()=>{
GetSinglePageData(num)
},[num])


// -------------------------------CODE FOR REVIEW--------------------------------
 //  Get req for all comments ---------------------- using reducer

//  Post req for getting all the comments -------------------------------
const handleSubmit = (payload)=>{
// console.log("payload" , payload)
 // console.log(payload ,"payload")
 axios.post(`https://handsome-blue-crab.cyclic.app/review/add${num}`,payload)
 .then((res)=>  dispatch(getReviewData(num)))
 .catch((err)=>console.log(`working on`))

}

//  Post req for ratings start -----------------------with same api 
const handleStarRating = (data)=>{
  const payload ={
    review:data , 
    title:0 ,
    image:0 ,
    like: 0 ,
    disLike: 0,
  }
  // console.log("star" , payload)
  axios.post(`https://handsome-blue-crab.cyclic.app/review/add${num}`,payload)
  .then((res)=>  dispatch(getReviewData(num)))
  .catch((err)=>console.log('err'))
} 
  
useEffect(()=>{
  
    dispatch(getReviewData(num))
  
},[num])

// Review------------------------------
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
    [ item.review , item.title]
  )
})
// console.log(titleRating , sum.length , "title") 

for(var i=0 ; i<titleRating.length ; i++){
  if(titleRating[i][1] != "" && titleRating[i][1] !== undefined && titleRating[i][1] != null && titleRating[i][1] != false && titleRating[i][1] != 0 && titleRating[i][0] != "" && titleRating[i][0] !== undefined && titleRating[i][0] != null && titleRating[i][0] != false && titleRating[i][0] != 0){
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
    <Box className="SingleProductMainDiv"  background="#f1f3f6"  style={{border:"1px   green" , height:"auto" , }}>
      
       <Navbar/>
      {/* Button -----left----------------------- */}
        {/* <ChevronLeftIcon onClick={handleChangeRemove} position="absolute" left="-4px" cursor="pointer" top="250px" w={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}} h={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}}/>  */}

        {/* BUTTON RIGHT-------------------->----------- */}
     {/* <ChevronRightIcon onClick={handleChangeAdd}   position="absolute" cursor="pointer" right="4px" top="250px" w={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}} h={{base:'32px',sm: "45px", md: "50px", lg: "50px" ,xl: "66px",'2xl': "66px",}} ml={{base:"-16px"}}/>  */}


        {/*  Main Box of Single Page ------------------------------------------------ */}
        <Box className='SingleProductMain' border="2px  red"  flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} shadow="2xl"  mt="25px" ml="auto" mr="auto" pb="20px" background='#ffffff' style={{height:"auto"  , width:"90%" , display:"flex" ,justifyContent:"space-between"}}>

        {/* Image Data Main box ---------------------------------------------------- */}
        <Box className='SingleProductMainImage' mt={5}  width={{base:"96%", sm: "62vw", md: "50vw", lg: "42vw",xl: "40vw",'2xl': "40vw"}} style={{border:"1px   yellow" , height:"auto"}}>
        <ImageData item={singleData}  image={singleData?.Images} mainImage={singleData?.mainImage} value={value} setValue={setValue}/>
        </Box>

        {/* Single Page Info Main Div ----------------------------------------------------- */}
        <Box className='SingleProductMainData' mt={5}  width={{base:"none", sm: "100%", md: "50vw", lg: "53vw",xl: "55vw",'2xl': "55vw"}} style={{border:"1px   grey" ,height:"auto"}}>
         <ProductLaptop item={singleData} answerRating={calculateRating} totalRatingLength={arrayReview.length } reviewLength={reviewTitleUser.length}/>
        </Box>
       
        </Box>
     

     {/* people also bought starts from here ------------------------------------------------------ */}

        <Box background='#ffffff' ml="auto" mr="auto" mt="8px"  style={{border:"1px   red" , height:"auto"  , width:"90%" }}>
          
       <RecentBought />

         </Box>

        {/*  People also  bought end here -------------------------------------- */}
        
   {/*  Rating and reviews are started from here -------------------------------------------- */}
        <Box background='#ffffff' ml="auto" mr="auto" mt="8px" mb="40px" pb="20px" style={{border:"1px   red" , height:"auto"  , width:"90%" }}>
         <Rating num={num} handleStarRating={handleStarRating} answerRating={calculateRating} reviewData={reviewData} handleSubmit={handleSubmit} arrayReview={reviewTitleUser} ratingLength={arrayReview.length}/>
        </Box>
{/* Rating ends here ----------------------------------------------------------- */}


   <Footer />
    </Box> 
    
  )
}

export  {SinglePageProduct}
