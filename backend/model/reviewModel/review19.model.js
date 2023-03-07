const mongoose = require("mongoose");



const reviewSchema19 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel19 = mongoose.model("review19", reviewSchema19);
module.exports = {
    ReviewModel19
}
