const mongoose = require("mongoose");



const reviewSchema15 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel15 = mongoose.model("review15", reviewSchema15);
module.exports = {
    ReviewModel15
}
