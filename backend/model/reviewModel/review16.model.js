const mongoose = require("mongoose");



const reviewSchema16 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel16 = mongoose.model("review16", reviewSchema16);
module.exports = {
    ReviewModel16
}
