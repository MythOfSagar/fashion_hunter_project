import axios from "axios"
import { serverUrl } from "../../App"

const getReviewData =(num )=> (dispatch)=>{
       dispatch({type:"REVIEW_DATA_LOADING"})
       return axios.get(`${serverUrl}/review/add${num}?limit=500`)
       .then((res)=>dispatch({type:"REVIEW_DATA_SUCCESS" , payload:res.data}) ,dispatch({type:"REVIEW_DATA_SUCCESS_Number" , payload:num}))
       .catch((err)=>dispatch({type:"REVIEW_DATA_ERROR"}))

}

export {getReviewData}