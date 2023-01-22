import React,{useEffect} from 'react' 
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





const ProductPage = () => {
  const [page , setPage] = useState(1)
  const [pageNext , setPageNext] = useState(false)
const [pagePre , setPagePre] = useState(false)
const [paginationData , setPaginationData] = useState([])

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

      dispatch(getDataProduct(getLaptopParams,page))
    }
  },[ location.search,page])

  
  
     

 
  // fetch product data ENDS here ---------------------------------------------------------
   
  //  pagination logic starts  ----------------------------------------------> 
     
     const handleNextPage = (data)=>{
      setPageNext(true)
      setPage(page+data)
      setTimeout(()=>{
        setPageNext(false)
      },400)
      
     }
     const handlePreviosPage = (data)=>{
      setPagePre(true)
      setPage(page+data)
      setTimeout(()=>{
        setPagePre(false)
      },400)
     }

     const nextPageDisable = Math.ceil(paginationData.length/9)
     //  console.log('nextPageDisable',nextPageDisable)

  //  pagination logic ends --------------------------------------------------> 
  return (
    <Box>
   <hr className='horizatalRule'/> 
   
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
       <Box id='FilterMainBox' height="auto" width={{base:"none", sm: "43%", md: "24%", lg: "17%",xl: "17%",'2xl': "17%"}} shadow="md" style={{border:"0.1px solid #e7e9ee"}}>
         
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

         
        
       </Box>
    {/* Display product data ends here ---------------------------------- */}

     </Box>

    {/*  Filtering and display ends here --------------------------------------------------- */}
       
       {/*  Pagination starts from here ----------------------------------------------------- */}
       
       <Box style={{display:"flex" , justifyContent:"right"}}  padding="60px" >
       <Button onClick={()=>handlePreviosPage(-1)} isLoading={pagePre} disabled={page==1}   ml="3"  pl={{base:"41px", sm: "10px", md: "10px", lg: "10px",xl: "10px",'2xl': "10px"}} pr={{base:"35px", sm: "10px", md: "10px", lg: "10px",xl: "10px",'2xl': "10px"}} > 
      <Text fontSize="22px" fontWeight="400"><ChevronLeftIcon fontSize="26px" ml="-8px" p="0"/>Prev</Text></Button>
       <Button ml="3" fontSize="22px" fontWeight="400"> {page} </Button>
       <Button onClick={()=>handleNextPage(1)} isLoading={pageNext} disabled={page == nextPageDisable}  ml="3" pl={{base:"41px", sm: "10px", md: "10px", lg: "10px",xl: "10px",'2xl': "10px"}} pr={{base:"35px", sm: "2px", md: "2px", lg: "2px",xl: "2px",'2xl': "2px"}}  > 
      <Text fontSize="22px" fontWeight="400">Next <ChevronRightIcon fontSize="26px" ml="-8px" p="0"/></Text> </Button>
     </Box>

     {/* pagination ends here ----------------------------------------------- */}
       
    </Box>
  )
}

export   {ProductPage}
