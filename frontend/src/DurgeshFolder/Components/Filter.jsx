import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Checkbox, Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Modalfilter } from "./Modalfilter";
import "./ProductHeadings.css";
import {CloseIcon} from "@chakra-ui/icons"

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [color, setColor] = useState(searchParams.getAll("color") || []);
  const [rating, setRating] = useState(searchParams.getAll("rating") || []);
  const [allFilter , setAllFilter ] = useState([])
//  const [total , setTotal] = useState(1)

  const [sort , setSort ] = useState(searchParams.getAll("sort")[0] || "")


  const handleChange = (e) => {
    let newCategory = [...brand];
    //    console.log("brand---" ,newCategory.includes("Microsoft") , brand)
    //  console.log('e' , e.target.value)
    //  let abc = e?.target?.value || e 
    //  console.log(abc)
   
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
      
    }
    setBrand(newCategory);
    
  };

  const handleChangeColor = (e) => {
    let newCategory = [...color];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
     
    }
    setColor(newCategory);

  };

  const handleChangeReview = (e) => {
    let newCategory = [...rating];
    
      if (newCategory.includes(e.target.value)) {
        newCategory.splice(newCategory.indexOf(e.target.value), 1);
      }
    
    else {
      newCategory.push(e.target.value);
      
    }
    setRating(newCategory);
  
   
  };
// console.log('allFilter' , allFilter)
// console.log('allFilter' , allFilter)
 
const remove = (item)=>{
  const arrayBrand = [...brand ]
  const arrayColor = [...color] 
  const arrayRating = [...rating]
  
  // console.log(item)
  if(arrayBrand.includes(item)){
    arrayBrand.splice(arrayBrand.indexOf(item),1)
  }
  else if(arrayColor.includes(item)){
    arrayColor.splice(arrayColor.indexOf(item),1)
  }
 else if(arrayRating.includes(item)){
    arrayRating.splice(arrayRating.indexOf(item),1)
  }
  else{
    setSort("")
  }
 
  setBrand(arrayBrand)
  setColor(arrayColor) 
  setRating(arrayRating)
 
}

const clearAllFilterItem = ()=>{
  setBrand([])
  setColor([]) 
  setRating([])
  setSort("")
  // setSearchParams()
}






  const handleSort = (e)=>{
          setSort(e.target.value)
          // setAllFilter([...allFilter , sort])
    }

  useEffect(() => {
    let obj = [...brand ,...color , ...rating ]
{ sort != "" && obj.push(sort)}
    let params = {};
    params.brand = brand;
    params.color = color ;
    params.rating = rating 
    sort &&  (params.sort = sort )
    setSearchParams(params);

    setAllFilter(obj)
  }, [brand,color ,sort ,rating, setSearchParams]);

  

  //    alll the filter data using loop -----------------------------------------
  const filterNameData = [
    {
      id: "1",
      name: "Carbonn Cloth",
      value: "CarbonnCloth",
      size: "4",
    },
    {
      id: "2",
      name: "Cave of Cloths",
      value: "caveofcloths",
      size: "2",
    },
    {
      id: "3",
      name: "Lorex",
      value: "lorex",
      size: "6",
    },
    {
      id: "4",
      name: "Red Cloth",
      value: "redcloth",
      size: "3",
    },
    {
      id: "5",
      name: "City Style",
      value: "citystyle",
      size: "3",
    },
    {
      id: "6",
      name: "Derbenny",
      value: "derbenny",
      size: "3",
    },
  ];

  const filterColorData = [
    {
      id: "1",
      color: "Grey",
      size: "3",
      value:"grey" ,
    },
    {
      id: "2",
      color: "Black",
      size: "7",
      value:"black" ,

    },
    {
      id: "3",
      color: "Blue",
      size: "6",
      value:"blue" ,

    },
    {
      id: "4",
      color: "Red",
      size: "2",
      value:"red" ,

    },
    {
      id: "5",
      color: "White",
      size: "3",
      value:"white" ,

    },
    {
      id: "6",
      color: "Tan",
      size: "Out of stock",
      value:"Tan" ,

    },
    {
      id: "7",
      color: "Green",
      size: "Out of stock",
      value:"green" ,

    },
  ];

  const filterReviewData = [
    {
      id: 1,
      value: "5",
      size: 6 ,

    },
    {
      id: 2,
      value: "4",
      size: 6,
    },
    {
      id: 3,
      value: "3",
      size: 6,
    },
    {
      id: 4,
      value: "2",
      size: 3 ,
    },
    {
      id: 5,
      value: "1",
      size: "No Item",
    },
  ];

  return (
    <Box>
      <Box
        className="hoverFilterMainBox" 
        style={{
          display: "",
          border: "1px   black",
          width: "90%",
          margin: "auto",
          height: "auto",
          textAlign: "left",
          
        }}
      >
          
         
      { allFilter.length > 0 && (
        <Box style={{display:"flex" , justifyContent:"space-between"}}>
      <Text fontSize="17px" fontWeight="500" mb={1} mt={3} color="#1d252c">
         Filters
        </Text> 
        <Text fontSize="16px" className="clearAllFilter" fontWeight="500" mb={1} mt={3} color="#ff5172" cursor="pointer" onClick={clearAllFilterItem}>
         Clear All
        </Text> 
        </Box>
        ) }
        <Box style={{display:"inline-block" , border:"2px  red" , height:"auto" ,fontSize:"14px"}}>
          { allFilter.length > 0 && allFilter.map((item,i)=>{

            return(<div style={{display:"inline-block" , border:"2px solid #f0f1f2" ,borderRadius:"8px" ,marginRight:"10px" ,marginTop:"10px" ,padding:"3px"}}  key={i} width="auto" ml="4px">{item} <CloseIcon fontSize="9px" marginLeft="7px"  onClick={()=>remove(item)} cursor="pointer" /></div>)
           
          })} 
          </Box>
      
                       
                      
         
    

        {/* Checkboxes are here ---------depend upon sorting ------- */}
        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Sort by Price
        </Text>
        <Box>
        {/* <input type="radio"   name="sortBy"    onChange= 
           {handleSort}   />
        <label> <Text display="inline-block" >All</Text> </label>
        <br /> */}
        <input type="radio" value="asc"  name="sortBy" checked={sort === 'asc'}   onChange= 
           {handleSort}   />
        <label> <Text display="inline-block">Low to High</Text> </label>
          
          <br />
        <input type="radio" value="desc"  name="sortBy" checked={sort === 'desc'}   onChange= 
          {handleSort}  />
          <label> <Text display="inline-block">High to low</Text> </label>
        </Box>

        {/* Checkboxes are here ---------depend upon Models ------- */}
        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Brand
        </Text>
        <Box  style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterNameData.length > 0 &&
            filterNameData.map((item) => {
              return (
                <Checkbox
                  key={item.id}
                  value={item.value}
                  onChange={handleChange}
                
                  isChecked={brand.includes(item.value)}
                >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.name} <span>({item.size})</span>
                  </Text>
                </Checkbox>
              );
            })}
        </Box>
      
        

        <Modalfilter brand={brand} handleChange={handleChange}/>

        {/* Checkboxes are here ---------depend upon Color- ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Color
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterColorData.length > 0 &&
            filterColorData.map((item) => {
              return (
                <Checkbox key={item.id} value={item.value} onChange={handleChangeColor}  isChecked={color.includes(item.value)} >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.color} <span>({item.size})</span>
                  </Text>
                </Checkbox>
              );
            })}
        </Box>

        {/* Checkboxes are here ---------depend upon Rating- ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Rating
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterReviewData.length > 0 &&
            filterReviewData.map((item) => {
              return (
                <Checkbox key={item.id}  value={item.value}
                onChange={handleChangeReview}
                isChecked={rating.includes(item.value)}  >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < item.value ? "teal.500" : "gray.300"}
                        />
                      ))}

                    <span>({item.size})</span>
                  </Text>
                </Checkbox>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export { Filter };
