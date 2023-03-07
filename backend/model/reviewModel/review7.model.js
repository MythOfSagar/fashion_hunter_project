const mongoose = require("mongoose");



const reviewSchema7 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel7 = mongoose.model("review7", reviewSchema7);
module.exports = {
    ReviewModel7
}
