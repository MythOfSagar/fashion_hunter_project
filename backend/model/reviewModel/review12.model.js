const mongoose = require("mongoose");



const reviewSchema12 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel12 = mongoose.model("review12", reviewSchema12);
module.exports = {
    ReviewModel12
}
