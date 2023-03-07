const mongoose = require("mongoose");



const reviewSchema9 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel9 = mongoose.model("review9", reviewSchema9);
module.exports = {
    ReviewModel9
}
