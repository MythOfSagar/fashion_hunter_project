import axios from "axios"
import { getLocalData } from "../../Utils/LocalStorage"
import {GETCARTREQUEST ,GETCARTSUCCESS ,GETCARTFAILURE} from "./actionType" 




const getCartData = (dispatch)=>{
    dispatch({type:GETCARTREQUEST})
    return axios.get('http://localhost:4500/cart',{
        headers:{
            "Authorization":getLocalData("token")
        },
        
    })
    .then((res)=> dispatch({type:GETCARTSUCCESS , payload:res.data}))
    .catch((err)=> dispatch({type:GETCARTFAILURE}))

}

//  Post --------------------------------------------
const sendCartData = (payload)=>(dispatch)=>{
    dispatch({type:"POSTCARTREQUEST"})
    return axios.post('http://localhost:4500/cart/add',payload, {
        headers:{
            "Authorization":getLocalData("token")
        },
        
    })
    .then((res)=> dispatch({type:"POSTCARTSUCCESS", payload:res.data}))
    .catch((err)=> console.log(err))
}

//  delete req --------------------------------------
const deleteCartData = (id)=>(dispatch)=>{
    dispatch({type:"DELETECARTREQUEST"})
  return axios.delete(`http://localhost:4500/cart/delete/${id}`,{
    headers:{
        "Authorization":getLocalData("token")
    },
    
})
  .then((res)=> dispatch({type:"DELETECARTSUCCESS", payload:res.data}))

}

// patch -----------------------------------------
const changeCartData = (id , payload)=>(dispatch)=>{
   
    dispatch({type:"PATCH_CART_REQUEST"})
  return axios.patch(`http://localhost:4500/cart/update/${id}`,payload , {
    headers:{
        "Authorization":getLocalData("token")
    },
    
})
  .then((res)=> dispatch({type:"PATCH_CART_SUCCESS", payload:res.data}))

}

export {getCartData , sendCartData,deleteCartData,changeCartData }