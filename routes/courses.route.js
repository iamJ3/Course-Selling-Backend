const { Router } = require("express");
const courseRouter = Router();



courseRouter.post("/purchases", () => {
    res.json({
        message: "user purchases"
    })
})

courseRouter.post("/preview", () => {
    res.json({
        message: "courses"
    })
})

module.exports = {
    courseRouter: courseRouter
}