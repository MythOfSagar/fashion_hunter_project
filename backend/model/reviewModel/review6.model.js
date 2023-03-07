const mongoose = require("mongoose");



const reviewSchema6 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel6 = mongoose.model("review6", reviewSchema6);
module.exports = {
    ReviewModel6
}
