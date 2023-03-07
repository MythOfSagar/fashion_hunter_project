import axios from "axios"
import { serverUrl } from "../../App"
import { getLocalData } from "../../Utils/LocalStorage"
import {GETCARTREQUEST,EMPTY_CART ,GETCARTSUCCESS ,GETCARTFAILURE} from "./actionType" 




const getCartData = (dispatch)=>{
    dispatch({type:GETCARTREQUEST})
    return axios.get(`${serverUrl}/cart`,{
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
    return axios.post(`${serverUrl}/cart/add`,payload, {
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
  return axios.delete(`${serverUrl}/cart/delete/${id}`,{
    headers:{
        "Authorization":getLocalData("token")
    },
    
})
  .then((res)=> dispatch({type:"DELETECARTSUCCESS", payload:res.data}))

}

// patch -----------------------------------------
const changeCartData = (id , payload)=>(dispatch)=>{
   
    dispatch({type:"PATCH_CART_REQUEST"})
  return axios.patch(`${serverUrl}/cart/update/${id}`,payload , {
    headers:{
        "Authorization":getLocalData("token")
    },
    
})
  .then((res)=> dispatch({type:"PATCH_CART_SUCCESS", payload:res.data}))

}

//empty Cart

const emptyCart = (userID)=>(dispatch)=>{
    dispatch({type:EMPTY_CART})
  return axios.delete(`${serverUrl}/cart/emptycart/${userID}`,{
    headers:{
        "Authorization":getLocalData("token")
    },
    
})

}



export {getCartData,emptyCart, sendCartData,deleteCartData,changeCartData }



