const express = require("express");
const { ReviewModel15 } = require("../../model/reviewModel/review15.model");

const ReviewRouter15 = express.Router();

// 1st review

ReviewRouter15.post("/add15", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel15(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter15.get("/add15", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel15.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter15
}