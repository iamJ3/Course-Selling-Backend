const { Router } = require("express");
const { userModel } = require("../db/db.js");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = 'jatin123'


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

useRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email, password
        });

        if (user) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD);
            res.json({
                token: token
            });
        } else {
            res.status(403).json({
                message: "Incorrect Credentioasl"
            })
        }
    } catch (error) {
        console.error(error);
    }
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
});

module.exports = {
    useRouter: useRouter
}