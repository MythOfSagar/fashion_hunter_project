const mongoose = require("mongoose");



const reviewSchema5 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel5 = mongoose.model("review5", reviewSchema5);
module.exports = {
    ReviewModel5
}
