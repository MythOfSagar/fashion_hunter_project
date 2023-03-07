const express = require("express");
const { ReviewModel17 } = require("../../model/reviewModel/review17.model");

const ReviewRouter17 = express.Router();

// 1st review

ReviewRouter17.post("/add17", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel17(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter17.get("/add17", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel17.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter17
}