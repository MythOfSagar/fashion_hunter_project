const express = require("express");
const { ReviewModel2 } = require("../../model/reviewModel/review2.model");


const ReviewRouter2 = express.Router();

// 1st review

ReviewRouter2.post("/add2", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel2(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter2.get("/add2", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel2.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter2
}