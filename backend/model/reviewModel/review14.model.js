const mongoose = require("mongoose");



const reviewSchema14 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel14 = mongoose.model("review14", reviewSchema14);
module.exports = {
    ReviewModel14
}
