import { Box  , Text , Button} from "@chakra-ui/react"
import "../Pages/Allreview.css"


function Pagination ({changePage,changeNum ,handlePagePrevious ,handlePageChange, setChangePage , reviewTitleUser ,divideValue }){
    return (
        <Box display="flex" alignItems="center"  mb="20px" border="2px  red" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} > 
        <Text pl="20px" fontWeight="500" textAlign="left">Page {changePage} of {Math.ceil(reviewTitleUser.length/divideValue)}</Text>
        {/* Numbers ***********  */}
         <Box display="flex" alignItems="center" m="auto" fontWeight="400" fontSize="18px" border="2px  red"  >
          
          <Button color="#2874f0" mr="13px" isDisabled={changePage == 1} cursor="pointer" variant="unstyled" onClick={handlePagePrevious} fontWeight={500} >Prev</Button>
          {Array(5 > Math.ceil(reviewTitleUser.length/divideValue) ?Math.ceil(reviewTitleUser.length/divideValue): 5 ).fill('').map((_,i)=>{
            if(i+changeNum <= Math.ceil(reviewTitleUser.length/divideValue) ){
            return (
           
              <Text onClick={()=>setChangePage(i+1)} cursor="pointer" ml={{base:"15px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} key={i}  className={changePage == i+changeNum &&  "colorText"}> {i+ changeNum }</Text>
             ) 
            }
          })} 
          
         
          <Button   ml="25px" color="#2874f0" variant="unstyled"  isDisabled={changePage == Math.ceil(reviewTitleUser.length/divideValue)}  cursor="pointer" onClick={handlePageChange} fontWeight={500}>Next</Button>
          

         </Box>
      </Box>
    )
}

export {Pagination}