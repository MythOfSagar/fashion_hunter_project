const mongoose = require("mongoose");



const reviewSchema20 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel20 = mongoose.model("review20", reviewSchema20);
module.exports = {
    ReviewModel20
}
