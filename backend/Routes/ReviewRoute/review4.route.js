const express = require("express");
const { ReviewModel4 } = require("../../model/reviewModel/review4.model");


const ReviewRouter4 = express.Router();

// 1st review

ReviewRouter4.post("/add4", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel4(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter4.get("/add4", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel4.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter4
}