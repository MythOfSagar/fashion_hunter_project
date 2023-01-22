
import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ; 
import axios from "axios"


const getDataProduct =(params,page)=>(dispatch)=>{
        dispatch({type:GETPRODUCTLAPTOPDATA_REQUEST}) 
        return axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/mens?_limit=9&_page=${page}`,params)
        .then((res)=> dispatch({type:GETPRODUCTLAPTOPDATA_SUCCESS , payload:res.data})) 
        .catch(()=> dispatch({type:GETPRODUCTLAPTOPDATA_FAILURE}))
}

export {getDataProduct}


