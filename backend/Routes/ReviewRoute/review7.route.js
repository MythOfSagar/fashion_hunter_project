const express = require("express");
const { ReviewModel7 } = require("../../model/reviewModel/review7.model");


const ReviewRouter7 = express.Router();

// 1st review

ReviewRouter7.post("/add7", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel7(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter7.get("/add7", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel7.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter7
}