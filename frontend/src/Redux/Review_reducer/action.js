import axios from "axios"

const getReviewData =(num )=> (dispatch)=>{
       dispatch({type:"REVIEW_DATA_LOADING"})
       return axios.get(`https://graceful-lion-wig.cyclic.app/review/add${num}`)
       .then((res)=>dispatch({type:"REVIEW_DATA_SUCCESS" , payload:res.data}) ,dispatch({type:"REVIEW_DATA_SUCCESS_Number" , payload:num}))
       .catch((err)=>dispatch({type:"REVIEW_DATA_ERROR"}))

}

export {getReviewData}