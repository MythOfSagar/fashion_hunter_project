import axios from "axios"

const getReviewData =(num )=> (dispatch)=>{
       dispatch({type:"REVIEW_DATA_LOADING"})
       return axios.get(`https://handsome-blue-crab.cyclic.app/review/add${num}?limit=15`)
       .then((res)=>dispatch({type:"REVIEW_DATA_SUCCESS" , payload:res.data}) ,dispatch({type:"REVIEW_DATA_SUCCESS_Number" , payload:num}))
       .catch((err)=>dispatch({type:"REVIEW_DATA_ERROR"}))

}

export {getReviewData}