
import {GETWISHLISTREQUEST , GETWISHLISTSUCCESS , GETWISHLISTFAILURE} from "./actionType"

const initialState = {
    isLoadingWishlist:true , 
    wishListArray:[] ,
    isErrorWishlist:false 
}

const WishlistReducer = (oldState=initialState , action)=>{
         switch(action.type){
            case GETWISHLISTREQUEST:
                return {...oldState , isLoadingWishlist:false }
                case GETWISHLISTSUCCESS:
                    return {...oldState , wishListArray:action.payload , isLoadingWishlist:true}
                  case GETWISHLISTFAILURE:
                    return {...oldState , isErrorWishlist:true , isLoadingWishlist:true }

            default:
                return oldState
         }
}

export {WishlistReducer}