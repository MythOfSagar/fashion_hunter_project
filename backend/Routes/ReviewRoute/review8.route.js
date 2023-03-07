const express = require("express");
const { ReviewModel8 } = require("../../model/reviewModel/review8.model");



const ReviewRouter8 = express.Router();

// 1st review

ReviewRouter8.post("/add8", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel8(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter8.get("/add8", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel8.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter8
}