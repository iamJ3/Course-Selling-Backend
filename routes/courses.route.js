const { Router } = require("express");
const courseRouter = Router();



courseRouter.post("/purchases", (req,res) => {
    res.json({
        message: "user purchases"
    })
})

courseRouter.get("/preview", (req,res) => {
    res.json({
        message: "courses",
        number: 5,
        age: 34,
    })
})

module.exports = {
    courseRouter: courseRouter
}