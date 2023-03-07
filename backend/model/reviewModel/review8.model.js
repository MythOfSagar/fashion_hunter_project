const mongoose = require("mongoose");



const reviewSchema8 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel8 = mongoose.model("review8", reviewSchema8);
module.exports = {
    ReviewModel8
}
