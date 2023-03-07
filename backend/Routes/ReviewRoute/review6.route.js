const express = require("express");
const { ReviewModel6 } = require("../../model/reviewModel/review6.model");

const ReviewRouter6 = express.Router();

// 1st review

ReviewRouter6.post("/add6", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel6(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter6.get("/add6", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel6.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter6
}