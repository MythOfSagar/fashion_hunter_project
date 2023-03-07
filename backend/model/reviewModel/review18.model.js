const mongoose = require("mongoose");



const reviewSchema18 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel18 = mongoose.model("review18", reviewSchema18);
module.exports = {
    ReviewModel18
}
