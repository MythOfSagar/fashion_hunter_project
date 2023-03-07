const mongoose = require("mongoose");



const reviewSchema3 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel3 = mongoose.model("review3", reviewSchema3);
module.exports = {
    ReviewModel3
}
