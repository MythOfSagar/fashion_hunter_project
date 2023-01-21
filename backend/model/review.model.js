const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    review:Number,
    title:String,
    image:String,
    like:Number,
    dislike:Number,
})
       let ReviewModel=mongoose.model("review1",reviewSchema);
    module.exports= {
     ReviewModel
 }