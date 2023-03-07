const express = require("express");
const { ReviewModel20 } = require("../../model/reviewModel/review20.model");

const ReviewRouter20 = express.Router();

// 1st review

ReviewRouter20.post("/add20", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel20(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter20.get("/add20", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel20.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter20
}