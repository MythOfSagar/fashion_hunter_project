const mongoose = require("mongoose");



const reviewSchema13 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel13 = mongoose.model("review13", reviewSchema13);
module.exports = {
    ReviewModel13
}
