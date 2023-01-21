const express=require("express");
const { WishlistModel } = require("../model/wishlist.model");


const WishlistRouter=express.Router();

WishlistRouter.get("/",async(req,res)=>{
    const payload=req.body;
    const userID_in_req=req.body.userID;
    try {
       const wishlist=await WishlistModel.find({"userID":userID_in_req})
       res.send(wishlist); 
    } catch (error) {
        console.log(wishlist);
    }
});

WishlistRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    console.log("payload",payload);
    try {
        const new_post=new WishlistModel(payload);
        await new_post.save();
        res.send("Added in wishlist");
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});


WishlistRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    const post =await WishlistModel.findOne({"_id":id});
    const userID_in_post=post.userID;
    const userID_in_req=req.body.userID;
    try {
        if(userID_in_post!==userID_in_req){
            res.send({"msg":"You are not authorized"});
        }
        else{
          await WishlistModel.findByIdAndDelete({"_id":id})
          res.send("Delete from wishlist");
        }
    } catch (error) {
        console.log(err);
        res.send("something went wrong");
    }
})

module.exports={
    WishlistRouter
}