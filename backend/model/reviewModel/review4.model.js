const mongoose = require("mongoose");



const reviewSchema4 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel4 = mongoose.model("review4", reviewSchema4);
module.exports = {
    ReviewModel4
}
