const express = require("express");
const { ReviewModel16 } = require("../../model/reviewModel/review16.model");

const ReviewRouter16 = express.Router();

// 1st review

ReviewRouter16.post("/add16", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel16(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter16.get("/add16", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel16.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter16
}