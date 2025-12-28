const { Router } = require('express');
const adminRouter = Router();



adminRouter.get("/signin", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.get("/signup", (req, res) => {
    res.json({
        message: "signup endpoint"
    })
})
adminRouter.get("/course", (req, res) => {
    res.json({
        message: "courese endpoint"
    })
})
adminRouter.get("/course", (req, res) => {
    res.json({
        message: "courese endpoint"
    })
})

module.exports = {
    adminRouter
        : adminRouter
}