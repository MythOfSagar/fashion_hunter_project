
import {GETCARTREQUEST ,GETCARTSUCCESS ,GETCARTFAILURE} from "./actionType" 


const initialState = {
    isLoadingCart:true , 
    cartArrayData:[] ,
    isErrorCart:false ,
}

const CartReducer = (oldstate=initialState , action)=>{
         switch(action.type){
            case GETCARTREQUEST :
                return {...oldstate , isLoadingCart:false} 
             case GETCARTSUCCESS :
                return{...oldstate , cartArrayData:action.payload , isLoadingCart:true} 
            case GETCARTFAILURE :
                return{...oldstate, isErrorCart:true ,isLoadingCart:true  }

            default:
                return oldstate 
         }
}

export {CartReducer}