import { Box ,Text ,Image} from '@chakra-ui/react'
import axios from 'axios';
import React  from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import "./recent.css"



const RecentBought = () => {
 
  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1247 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
     laptop: {
      breakpoint: { max: 1246, min: 1025 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 723 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 723, min: 364 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 363, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

   //  For getting the data from api of recent bought   
  const getData = [
    {  
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/w/g/n/36-rjo0086-red-tape-original-imaghxbg9hu5vdqu.jpeg?q=70" 
    } ,
    {
    "mainImage":"https://rukminim1.flixcart.com/image/832/832/l0igvww0/shoe/j/x/z/7-brd-678-7-birde-blue-original-imagca7bcj6p99gw.jpeg?q=70"
    } ,
    { 
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/p/c/5/-original-imaghrbyty4ggzcb.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/k/k/gm1251-43-good-minar-black-original-imaft34ej4zx2z63-bb.jpeg?q=70"
    } ,
    {
      mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/h/9/10-rso246-red-tape-grey-original-imagk5jyfezgkvqm.jpeg?q=70"
    } ,
     
    
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/l0pm3680/sock/z/6/i/free-3-ad-203-adidas-original-imagcfzzeseawymf.jpeg?q=70"
    },
    {
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/kh2b4i80-0/sock/w/7/g/free-sm-htb-navy-sport-original-imafx5yzm8uj48yv.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/128/128/l3ahpjk0/track-pant/l/e/o/l-av104stripe-navy-l-grey-avolt-original-imagegfcgjvggzgf.jpeg?q=70"
    } ,
    {
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/km57hjk0/track-pant/g/z/9/l-trackpant9015-vitaan-original-imagf4dhrzfenqgt.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/kl9rssw0/track-pant/p/u/f/l-bml-202-beko-original-imagyfnvc9vgta6p.jpeg?q=70"
    } 
  ]


 
 


  return (
    <Box pb="50px">
      <Box ml={{base:"10px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} pt="25px" mb="35px" >
       <u style={{color:"#303030"}}><Text textAlign="left" fontWeight={600} fontSize="2xl" color="#303030">You might be interested in</Text></u>
      </Box>

      {/*  Slider for product is here ------------------------------- */}
     <Box ml={{base:"2px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} >
     <Carousel responsive={responsive} > 
    
     {getData.length > 0 && getData.map((item , i)=>{
       return (
        <div className='image' key={i}>
       <Image className='img' src={item.mainImage} alt={item.categories} boxSize={{base:"300px", sm: "300px", md: "300px", lg: "300px",xl: "300px",'2xl': "300px"}}  shadow="2xl" cursor="pointer" />
       </div>
          )
     })}
    
 
</Carousel>
</Box>
    
    </Box>
  )
}

export  {RecentBought}
