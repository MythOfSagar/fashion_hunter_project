const express = require("express");
const { ReviewModel1 } = require("../../model/reviewModel/review1.model");


const ReviewRouter1 = express.Router();

// 1st review

ReviewRouter1.post("/add1", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel1(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter1.get("/add1", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel1.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter1
}