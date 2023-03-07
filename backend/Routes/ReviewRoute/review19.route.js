const express = require("express");
const { ReviewModel19 } = require("../../model/reviewModel/review19.model");

const ReviewRouter19 = express.Router();

// 1st review

ReviewRouter19.post("/add19", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel19(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter19.get("/add19", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel19.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter19
}