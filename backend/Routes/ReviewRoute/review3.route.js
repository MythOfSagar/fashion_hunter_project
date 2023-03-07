const express = require("express");
const { ReviewModel3 } = require("../../model/reviewModel/review3.model");



const ReviewRouter3 = express.Router();

// 1st review

ReviewRouter3.post("/add3", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel3(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter3.get("/add3", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel3.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter3
}