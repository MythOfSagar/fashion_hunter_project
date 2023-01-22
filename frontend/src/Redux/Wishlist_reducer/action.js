import axios from "axios"
import {GETWISHLISTREQUEST , GETWISHLISTSUCCESS , GETWISHLISTFAILURE} from "./actionType"
import {POSTWISHLISTREQUEST , POSTWISHLISTSUCCESS , POSTWISHLISTFAILURE} from "./actionType"



const getWishListData = (dispatch)=>{
    dispatch({type:GETWISHLISTREQUEST}) 
    return axios.get('http://localhost:8080/menWishlist')
    .then((res)=> dispatch({type:GETWISHLISTSUCCESS , payload:res.data}))
    .catch((err)=> dispatch({type:GETWISHLISTFAILURE}))
}


const sendWishListData =(payload)=>(dispatch)=>{
    dispatch({type:POSTWISHLISTREQUEST})
    return axios.post('http://localhost:8080/menWishlist',payload)
    .then((res)=> dispatch({type:POSTWISHLISTSUCCESS , payload:res.data }))
    .catch((err)=>console.log("err"))
}

const deleteWishListData =(id)=>(dispatch)=>{
    dispatch({type:"DELETEWISHLISTREQUEST"})
    return axios.delete(`http://localhost:8080/menWishlist/${id}`)
    .then((res)=> dispatch({type:"DELETEWISHLISTSUCCESS" , payload:res.data }))
    .catch((err)=>console.log("err"))
    
}

export {getWishListData , sendWishListData ,deleteWishListData}