const mongoose = require("mongoose");



const reviewSchema1 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel1 = mongoose.model("review1", reviewSchema1);
module.exports = {
    ReviewModel1
}
