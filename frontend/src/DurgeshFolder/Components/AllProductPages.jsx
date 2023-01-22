import React from 'react' ;  
import "./ProductHeadings.css"
 
import { Text,Image, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const AllProductPages = ({ src , text , check}) => {
    let style = {
        display:"flex" , 
        alignItems: "center" , 
        cursor:"pointer" ,
        marginRight:"30px" , 
       color:"#4B4F54" , 
       width: "auto" , 
    //    height: "100%"  , 
        //   border: "2px  red" , 
      }

  return (
   
    <div style={style} className="AllProductPages">
        <Image
  
  boxSize='32px'
  src={src}
  alt='Diffrent Pages'/>
  <Text fontWeight={500} fontSize="15px" ml="6px">{text}</Text>
  
    </div>

     

  )
}



const ResponsiveAllProductPages = ({data})=>{
    
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="#585858" width={{base:"125px", sm: "130px", md: "130px", lg: "140px",xl: "140px",'2xl': "140px",}} >
      Shop More
    </MenuButton>
    
    <MenuList>
      {data.map((item)=>{
        return (
          <MenuItem minH='40px' key={item.id} >
          <Image
            boxSize='2rem'
          
            src={item.src}
            alt={item.text}
            mr='12px'
          />
          <span style={{fontSize:"15px" ,color:"#4B4F54" , fontWeight:"500"}}>{item.text}</span>
        </MenuItem>
        )
      })}
    </MenuList>
  </Menu>
  )
}







export  {AllProductPages,ResponsiveAllProductPages}
