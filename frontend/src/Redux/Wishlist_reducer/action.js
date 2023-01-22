import axios from "axios"
import { getLocalData } from "../../Utils/LocalStorage"
import {GETWISHLISTREQUEST , GETWISHLISTSUCCESS , GETWISHLISTFAILURE} from "./actionType"
import {POSTWISHLISTREQUEST , POSTWISHLISTSUCCESS , POSTWISHLISTFAILURE} from "./actionType"



const getWishListData = (dispatch)=>{
    dispatch({type:GETWISHLISTREQUEST}) 
    return axios.get('https://handsome-blue-crab.cyclic.app/wishlist' , {
        headers:{
            "Authorization":getLocalData("token")
        }
    })
    .then((res)=> dispatch({type:GETWISHLISTSUCCESS , payload:res.data}))
    .catch((err)=> dispatch({type:GETWISHLISTFAILURE}))
}


const sendWishListData =(payload)=>(dispatch)=>{
    dispatch({type:POSTWISHLISTREQUEST})
    return axios.post('https://handsome-blue-crab.cyclic.app/wishlist/add',payload ,{
        headers:{
            "Authorization":getLocalData("token")
        },
        
    })
    .then((res)=> dispatch({type:POSTWISHLISTSUCCESS , payload:res.data }))
    .catch((err)=>console.log("err"))
}

const deleteWishListData =(id)=>(dispatch)=>{
    dispatch({type:"DELETEWISHLISTREQUEST"})
    return axios.delete(`https://handsome-blue-crab.cyclic.app/wishlist/delete/${id}`,{
        headers:{
            "Authorization":getLocalData("token")
        },
        
    })
    .then((res)=> dispatch({type:"DELETEWISHLISTSUCCESS" , payload:res.data }))
    .catch((err)=>console.log("err"))
    
}

export {getWishListData , sendWishListData ,deleteWishListData}