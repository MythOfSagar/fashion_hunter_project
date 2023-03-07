const mongoose = require("mongoose");



const reviewSchema2 = mongoose.Schema({
    review: Number,
    title: String,
    image: String,
    like: Number,
    dislike: Number,
})

let ReviewModel2 = mongoose.model("review2", reviewSchema2);
module.exports = {
    ReviewModel2
}
