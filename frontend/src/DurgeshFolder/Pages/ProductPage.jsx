import React,{useEffect, useRef} from 'react' 
import "./ProductPage.css"
import {Box , Button, Img, SimpleGrid, Skeleton, Text} from "@chakra-ui/react" 
import { ProductHeadings } from '../Components/ProductHeadings' 
import { AllProductPages, ResponsiveAllProductPages } from '../Components/AllProductPages'
import { Sorting } from '../Components/Sorting'
import { Filter } from '../Components/Filter'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
// import Carousel from "better-react-carousel" 
import { DisplayProductMainData } from '../Components/DisplayProductMainData'
import {shallowEqual, useDispatch , useSelector} from "react-redux"
import { getDataProduct } from "../../Redux/Laptop_reducer/action"
import { useState } from 'react' 
import axios from 'axios'
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons" 
import Navbar from "../../components/Navbar"
import { Pagination } from '../ComponentsReview/Pagination'
import Footer from '../../components/Footer'




const ProductPage = () => {
 
const [paginationData , setPaginationData] = useState([])
// pagination ----
const [changeNum , setChangeNum] = useState(1)
const [changePage  ,setChangePage] = useState(1)
const [disableNext , setDisableNext] = useState(false)
const [disablePre , setDisablePre] = useState(false)

const pageLoad = useRef()


// sorting and filtering part ------------------------------------------
const location = useLocation()
const [searchParams] = useSearchParams()



  //  GET ALL DATA FOR PAGINATION FOR SETTING DISABLE BUTTON 
const PaginationFunction = (queryParams)=>{
  axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/mens`,queryParams)
  .then((res)=> setPaginationData(res.data))
  
  
}
   

  //  fetch product data is here ---------------------------------------------------------
  const {isLaptopError ,isLaptopLoading,productArrayLaptop} = useSelector((state) => {
    return {
      isLaptopLoading: state.LaptopReducer.isLaptopLoading ,
      productArrayLaptop:state.LaptopReducer.productArrayLaptop ,
      isLaptopError :state.LaptopReducer.isLaptopError ,
    }
})   

  const dispatch = useDispatch() 
  
  useEffect(()=>{
    if(location || productArrayLaptop.length === 0  ){
      const sortBy = searchParams.get("sort")
      const getLaptopParams = {
        params:{
          brand : searchParams.getAll('brand') ,
          color : searchParams.getAll('color') ,
          rating : searchParams.getAll('rating') ,
          _sort:sortBy && "price" ,
          _order : sortBy
         
        }
      }
      PaginationFunction(getLaptopParams)

      dispatch(getDataProduct(getLaptopParams,changePage))
    }
  },[ location.search,changePage])

  
  
     

 
  // fetch product data ENDS here ---------------------------------------------------------
   
  //  pagination logic starts  ----------------------------------------------> 
  const reviewTitleUser = paginationData

  const handlePageChange = ()=>{
    setChangePage(changePage+1)
    if(5 < Math.ceil(reviewTitleUser.length/9) && changePage == 5 ){
      setChangeNum(5)
    }
    setDisableNext(true)
      clearTimeout(pageLoad.current)
      pageLoad.current = setTimeout(()=>{
        setDisableNext(false)
      },300)
  
   
    
  }
    
  const handlePagePrevious = ()=>{
    setChangePage(changePage-1)
    if(5 < Math.ceil(reviewTitleUser.length/9) && changePage == 5 ){
      setChangeNum(1)
    }

    setDisablePre(true)
    clearTimeout(pageLoad.current)
    pageLoad.current = setTimeout(()=>{
      setDisablePre(false)
    },300)

  }
   

  //  pagination logic ends --------------------------------------------------> 
  return (
    
    <Box>
       <Navbar/>

   {/* <hr className='horizatalRule'/>  */}
   
   <Box style={{width:"92%" , border:"2px  red" , margin:"auto"}}>
   <ProductHeadings productPageName="Mens" anotherPage="Fashion for mens" />
   
   <div id="productAllPagesLink" style={{display:"flex" , justifyContent:"space-between" }}>
    {/* <div id='allPagesLink' >
         {
          ProductPagesData.map((item)=>{
            return (
              <AllProductPages key={item.id} src={item.src} text={item.text} check={item.check} />
            )
          })
         }
   </div> */}

   {/* <div id="ResponsiveAllProductPages">
          <ResponsiveAllProductPages  data={ProductPagesData}  />
    </div> */}


{/*  Sorting menu bar -------------------------------------------------- */}
    {/* <Sorting /> */}
   
</div>
        <hr className='horizatalRule1'/>
    </Box>
    {/* All code same   ----------------Product all pages above  */}  
     
     
    
    {/*  Filtering and display data starts here ----------------------------------------------- */}
    
     <Box id='filterMainBox_&_DisplayData' style={{border:"1px  red" ,width:"92%" , margin:"auto" , height:"auto" , display:"flex" , justifyContent:"space-between" }}>
       
        {/* Filter component---------------------------------------------------------- */}
       <Box id='FilterMainBox' height="auto" mb="30px" width={{base:"none", sm: "43%", md: "24%", lg: "17%",xl: "17%",'2xl': "17%"}} shadow="md" style={{border:"0.1px solid #e7e9ee"}}>
         
         <Box >
         <Filter />
          </Box>
       </Box> 
             
 {/*   Display product data is started from here --------------------------Main Data */}
       <Box id='DisplayDataBox' style={{border:"1px  green" , height:"auto" , width:"82%"}} >
         
       <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} spacingY={10}  >
            {/* {dataIsLoading && arr.map((_,id)=>{
              return (<ProductSkeleton key={id}/>)
            })}
            
            {allProductData.length > 0 && allProductData.map((item)=>{
              return (
               <Link to={`/product/${item.id}`} key={item.id} > <ProductMainData  src={item.imgUrl} name={item.name} weight={item.weight} price={item.price} des={item.des} /></Link>
              )
            })} */}
            {productArrayLaptop.length > 0 && productArrayLaptop.map((item)=>{
              return (
            <DisplayProductMainData key= {item.id} uniqueId={item.id}  id={item.id} src={item.Images} name={item.title} model={item.brand}    price={item.price}    review={item.rating}  realPrice={item.realPrice} isLaptopLoading={isLaptopLoading} mainImage={item.mainImage} />
            
              )
            })}

            
        
          </SimpleGrid>
        



         
          <Box pt="50px" pb="50px">
          <Pagination disableNext={disableNext} disablePre={disablePre} changePage={changePage} changeNum={changeNum} handlePagePrevious={handlePagePrevious} handlePageChange={handlePageChange} setChangePage={setChangePage} reviewTitleUser={reviewTitleUser} divideValue={9}  />
          </Box>
       </Box>
    {/* Display product data ends here ---------------------------------- */}

     </Box>

    {/*  Filtering and display ends here --------------------------------------------------- */}
       
     


     <Footer />
    </Box>
  )
}

export   {ProductPage}
