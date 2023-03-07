const mongoose = require("mongoose");

const reviewSchema21 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel21 = mongoose.model("review21", reviewSchema21);
module.exports = {
    ReviewModel21
}
