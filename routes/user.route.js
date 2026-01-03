const { Router } = require("express");
const { userModel } = require("../db/db.js");
const useRouter = Router()

useRouter.post("/signup", async (req, res) => {
    // add zode, hash the pasword, put it in try catch
    const { email, firstname, lastname, password } = req.body;
    try {

        const userData = await userModel.create({
            firstname, lastname, email, password
        });

    } catch (err) {
        console.error(err)
    }

    res.json({
        message: "signUp endpoint"
    })
})

useRouter.get("/signin", (req, res) => {
    res.json({
        message: "signin endpoint"
    })
})
useRouter.get("/purchases", (req, res) => {
    res.json({
        message: "user purchases"
    })
})
useRouter.post("/purchases", (req, res) => {
    res.json({
        message: "user purchases"
    })
})
module.exports = {
    useRouter: useRouter
}