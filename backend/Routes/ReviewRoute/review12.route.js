const express = require("express");
const { ReviewModel12 } = require("../../model/reviewModel/review12.model");

const ReviewRouter12 = express.Router();

// 1st review

ReviewRouter12.post("/add12", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel12(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter12.get("/add12", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel12.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter12
}