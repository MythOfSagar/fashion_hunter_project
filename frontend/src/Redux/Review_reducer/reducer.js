
const initialState = {
    reviewData:[] ,
    isLoading:true , 
    isError: false , 
    isNum:0 , 
}

const ReviewReducer = (oldstate=initialState , action)=>{
             switch(action.type){
              case "REVIEW_DATA_LOADING":
                return {...oldstate , isLoading:false}
            case "REVIEW_DATA_SUCCESS":
            return {...oldstate , reviewData:action.payload , isLoading:true}
            case "REVIEW_DATA_SUCCESS_Number":
                return {...oldstate , isNum:action.payload}
            
            case "REVIEW_DATA_ERROR":
                return {...oldstate , isError:true , isLoading:true }

             default:
                return oldstate
    }
}

export {ReviewReducer}
