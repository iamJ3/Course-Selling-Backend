const {Router} = require("express")
const useRouter = Router()

useRouter.post("/signup", (req,res) => {
    res.json({
        message: "signUp endpoint"
    })
})

useRouter.get("/signin", (req,res) => {
    res.json({
        message: "signin endpoint"
    })
})
useRouter.get("/purchases", (req,res) => {
    res.json({
        message: "user purchases"
    })
})
useRouter.post("/purchases", (req,res) => {
    res.json({
        message: "user purchases"
    })
})
module.exports={
    useRouter : useRouter
}