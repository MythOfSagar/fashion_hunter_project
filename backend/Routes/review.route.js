const express = require("express");
const { ReviewModel } = require("../model/review.model");
// const { ReviewModel } = require("../../../../../../Downloads/manoj ka backend d/backend/models/review.model");

const ReviewRouter=express.Router();

ReviewRouter.post("/add1",async(req,res)=>{
    const payload=req.body;
try {
    const new_review=new ReviewModel(payload);
    await new_review.save();
    res.send("review added")
} catch (error) {
     console.log("something wendt wrong");
     res.send(error);
}
})


ReviewRouter.get("/add1",async(req,res)=>{
try {
    const review= await ReviewModel.find()
    res.send(review);
} catch (error) {
     console.log("something wendt wrong");
     res.send(error);
}
})
module.exports={
 ReviewRouter
}