const mongoose = require("mongoose");



const reviewSchema10 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel10 = mongoose.model("review10", reviewSchema10);
module.exports = {
    ReviewModel10
}
