const mongoose = require("mongoose");



const reviewSchema11 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel11 = mongoose.model("review11", reviewSchema11);
module.exports = {
    ReviewModel11
}
