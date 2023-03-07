const mongoose = require("mongoose");



const reviewSchema17 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel17 = mongoose.model("review17", reviewSchema17);
module.exports = {
    ReviewModel17
}
