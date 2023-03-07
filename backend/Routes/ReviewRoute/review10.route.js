const express = require("express");
const { ReviewModel10 } = require("../../model/reviewModel/review10.model");



const ReviewRouter10 = express.Router();

// 1st review

ReviewRouter10.post("/add10", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel10(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter10.get("/add10", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel10.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter10
}