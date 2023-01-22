import axios from "axios"
import {GETCARTREQUEST ,GETCARTSUCCESS ,GETCARTFAILURE} from "./actionType" 




const getCartData = (dispatch)=>{
    dispatch({type:GETCARTREQUEST})
    return axios.get('http://localhost:8080/menCart')
    .then((res)=> dispatch({type:GETCARTSUCCESS , payload:res.data}))
    .catch((err)=> dispatch({type:GETCARTFAILURE}))

}

const sendCartData = (payload)=>(dispatch)=>{
    dispatch({type:"POSTCARTREQUEST"})
    return axios.post('http://localhost:8080/menCart',payload)
    .then((res)=> dispatch({type:"POSTCARTSUCCESS", payload:res.data}))
    .catch((err)=> console.log(err))
}

const deleteCartData = (id)=>(dispatch)=>{
    dispatch({type:"DELETECARTREQUEST"})
  return axios.delete(`http://localhost:8080/menCart/${id}`)
  .then((res)=> dispatch({type:"DELETECARTSUCCESS", payload:res.data}))

}

export {getCartData , sendCartData,deleteCartData }