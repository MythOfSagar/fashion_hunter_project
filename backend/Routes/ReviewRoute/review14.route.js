const express = require("express");
const { ReviewModel14 } = require("../../model/reviewModel/review14.model");

const ReviewRouter14 = express.Router();

// 1st review

ReviewRouter14.post("/add14", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel14(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter14.get("/add14", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel14.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter14
}