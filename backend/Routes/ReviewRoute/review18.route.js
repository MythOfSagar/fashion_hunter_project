const express = require("express");
const { ReviewModel18 } = require("../../model/reviewModel/review18.model");

const ReviewRouter18 = express.Router();

// 1st review

ReviewRouter18.post("/add18", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel18(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter18.get("/add18", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel18.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter18
}