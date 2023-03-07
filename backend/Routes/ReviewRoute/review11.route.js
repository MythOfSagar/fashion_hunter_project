const express = require("express");
const { ReviewModel11 } = require("../../model/reviewModel/review11.model");



const ReviewRouter11 = express.Router();

// 1st review

ReviewRouter11.post("/add11", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel11(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter11.get("/add11", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel11.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter11
}