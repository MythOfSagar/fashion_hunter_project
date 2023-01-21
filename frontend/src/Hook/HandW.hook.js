import { useEffect, useState } from "react";

function useWindowsize(){
     const [size,setSize] =useState([window.innerHeight,window.innerWidth]);
     useEffect(()=>{
      const handleResize=()=>{
        setSize([window.innerHeight,window.innerWidth]);
      }
      window.addEventListener("resize",handleResize)
      return ()=>{
        // window.removeEventListener(handleResize);
      }
     },[])
     return size;
}
export default useWindowsize;