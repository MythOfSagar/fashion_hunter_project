import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ;  


const initialState = {
    isLaptopLoading: true ,
    productArrayLaptop :[] ,
    isLaptopError: false ,
}


const LaptopReducer = (oldState=initialState, action)=>{
   switch(action.type){
    case GETPRODUCTLAPTOPDATA_REQUEST:
        return{...oldState ,isLaptopLoading:false }
    case GETPRODUCTLAPTOPDATA_SUCCESS:
        return{...oldState , productArrayLaptop:action.payload , isLaptopLoading:true} 
    case GETPRODUCTLAPTOPDATA_FAILURE:
        return{...oldState , isLaptopError:true , isLaptopLoading:true }  
       default:
        return oldState ; 
   }

}


export {LaptopReducer}