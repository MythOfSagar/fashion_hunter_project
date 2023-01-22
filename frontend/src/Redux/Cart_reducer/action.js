import axios from "axios"
import { getLocalData } from "../../Utils/LocalStorage"
import {GETCARTREQUEST ,GETCARTSUCCESS ,GETCARTFAILURE} from "./actionType" 




const getCartData = (dispatch)=>{
    dispatch({type:GETCARTREQUEST})
    return axios.get('https://handsome-blue-crab.cyclic.app/cart',{
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
    return axios.post('https://handsome-blue-crab.cyclic.app/cart/add',payload, {
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
  return axios.delete(`https://handsome-blue-crab.cyclic.app/cart/delete/${id}`,{
    headers:{
        "Authorization":getLocalData("token")
    },
    
})
  .then((res)=> dispatch({type:"DELETECARTSUCCESS", payload:res.data}))

}

// patch -----------------------------------------
const changeCartData = (id , payload)=>(dispatch)=>{
   
    dispatch({type:"PATCH_CART_REQUEST"})
  return axios.patch(`https://handsome-blue-crab.cyclic.app/cart/update/${id}`,payload , {
    headers:{
        "Authorization":getLocalData("token")
    },
    
})
  .then((res)=> dispatch({type:"PATCH_CART_SUCCESS", payload:res.data}))

}

export {getCartData , sendCartData,deleteCartData,changeCartData }