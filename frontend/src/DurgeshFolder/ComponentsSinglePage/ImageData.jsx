import "./ImageData.css"
import { Box, Button, Image , Text, useToast} from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import ReactImageMagnify from 'react-image-magnify' 
import {AiFillHeart} from "react-icons/ai" ;
import {FiHeart} from "react-icons/fi"
import {MdShoppingCart} from "react-icons/md"
import { AddIcon } from "@chakra-ui/icons";
import {useDispatch} from "react-redux"
import { sendCartData } from "../../Redux/Cart_reducer/action";


const ImageData = ({image ,mainImage ,value ,setValue ,item}) => {
    //  console.log("image" ,allImageData)
    const [src , setSrc ] = useState("")
    const [wishlistColor , setWishlistColor] = useState(false)
    
    // const url = ( allImageData !== undefined && allImageData || "" )
    // if(mainImage == undefined){
    //   console.log("undefined image")
    // }
    const url = (value == true ? src : mainImage)

    // console.log("url" , url  ,"value" , value)
   
     
   const handleChange =(e)=>{
        setSrc(e.target.src )
        setValue(true)
    }
    if(wishlistColor == true){
      console.log('hello')
    }
    // console.log("wishlistColor" , wishlistColor)
    //  Wish list function ------------------------------------------------
    const handle = ()=>{
       setWishlistColor(!wishlistColor ,"wishlistColor")
       if(wishlistColor == true){
        console.log("yes true")
       }
      }
      const dispatch = useDispatch()
      const toast = useToast()

      const handleCartProduct = (item)=>{
        const payloadData ={ 
          mainImage:item.mainImage ,
          categories:item.categories ,
          title:item.title ,
          price:item.price ,
          realPrice:item.realPrice ,
          quantity:1 , 
        }
           dispatch(sendCartData(payloadData))
           toast({
            title: 'Product Added to Cart',
            status: 'success',
            position: 'top',
            duration: 3000,
            isClosable: true,
          }) 
          
      }
      
      
  
    
// border colour = #eef0f3

  return (
    <Box className="ImageMainBox" style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" ,position:"relative"}} >
         
        {/*  False the value of isfluid width and adjust the height and width of small image  */}
        
         <Box className="SingleImagesMagnify" width={{base:"80%", sm: "85%", md: "84%", lg: "76%",xl: "76%",'2xl': "76%"}} height={{base:"80%", sm: "65vh", md: "75vh", lg: "73vh",xl: "65vh",'2xl': "65vh"}}   style={{border:"2px solid #eef0f3"  ,justifyContent:"center"  }}>
            
         <ReactImageMagnify style={{padding:"20px" }} {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: false ,
        src: url || src ,
        width: 600,
        height: 420 
        
       
      },
      largeImage: {
          src : url || src ,
          width: 1800,
          height: 1700 
      } ,
     
         
   
    enlargedImagePosition :"beside" ,
  
      enlargedImageContainerDimensions: {
        width: "200%",
        height: "150%"
      },
     
      shouldUsePositiveSpaceLens: true 
      
}} />
  
 

         </Box>
         
         <Box className="SingleMagnify" width={{base:"100%", sm: "85%", md: "84%", lg: "76%",xl: "76%",'2xl': "76%"}} height={{base:"55vh", sm: "55vh", md: "60vh", lg: "60vh",xl: "60vh",'2xl': "60vh"}}  style={{border:"2px solid #eef0f3"   ,justifyContent:"center"  }}>
            
            <ReactImageMagnify style={{padding:"20px" }} {...{
       smallImage: {
           alt: 'Wristwatch by Ted Baker London',
           isFluidWidth: false,
           src: url || src  ,
           width: 600,
        height: 300 
          
         },
         largeImage: {
             src : url || src ,
             width: 1600,
             height: 700 
         } ,
        
            
      
       enlargedImagePosition :"over" ,
     
         enlargedImageContainerDimensions: {
           width: "200%",
           height: "150%"
         },
        
         shouldUsePositiveSpaceLens: true 
         
   }} />
     
    
   
            </Box>
       

       {/*  diff images three----------------------------- */}
         <Box mb="40px"  style={{ height:"10vh" , width:"60%" , display:"flex" ,justifyContent:"center", marginTop:"20px"}}>
           
          { image?.map((item , i)=>{
      return (
        // console.log("item" ,item)
           
        <Box key={i} border="1px solid #eef0f3" width={{base:"35%", sm: "35%", md: "30%", lg: "25%",xl: "25%",'2xl': "25%"}} className='ThreeImagesChange' padding="7px" >
        <Image onMouseOver={handleChange} cursor="pointer"  src={item.imageFront} alt="image"  width="100%" height="100%" />
        </Box>
      )
    })}

           
        </Box>

       {/*  Wish list --------------------------------------------------------- */}
       <Box onClick={handle} cursor="pointer" position="absolute" top={{base:"12px" ,sm: "12px", md: "14px", lg: "10px",xl: "12px",'2xl': "12px"}} right={{base:"10px",sm: "20px", md: "50px" , lg: "65px",xl: "80px",'2xl': "80px" }} fontSize="25px">{wishlistColor ? <AiFillHeart color="ff5172"  /> : <FiHeart color="ff5172" />}
         </Box>  
       

          {/*  Add to cart button ---------------------------------------------  */} 

          <Box  border="2px  red" width="76%" height="auto"  display="flex" justifyContent="space-between" margin="auto" alignItems="center" flexDirection={{base:"column",sm: "column", md: "row" , lg: "row",xl: "row",'2xl': "row" }}>

          <Button display="flex" mb="20px" onClick={()=>handleCartProduct(item)}  backgroundColor='#ff3e6c' variant='unstyled' width={{base:"105%", sm: "100%", md: "53%", lg: "47%",xl: "47%",'2xl': "47%"}} height="52px"  borderRadius="2px" > <MdShoppingCart  fontSize="22px" color="#fffcfa"/> <Text color="#fffcfa" ml="2"  fontSize="17px">ADD TO CART</Text></Button>

          <Button display="flex" mb="20px"  backgroundColor='#ff3358' variant='unstyled' width={{base:"105%", sm: "100%", md: "43%", lg: "47%",xl: "47%",'2xl': "47%"}}  height="52px"  borderRadius="2px" > <AddIcon  fontSize="16px" color="#fffcfa"/> <Text color="#fffcfa" ml="2"  fontSize="17px">BUY NOW</Text></Button>

          </Box>
        
    </Box>
  )
}

export  {ImageData}
