const express = require("express");
const { ReviewModel9 } = require("../../model/reviewModel/review9.model");



const ReviewRouter9 = express.Router();

// 1st review

ReviewRouter9.post("/add9", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel9(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter9.get("/add9", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel9.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter9
}