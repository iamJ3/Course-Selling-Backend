const {Router} = require("express")
const useRouter = Router()

useRouter.post("/signup", () => {
    res.json({
        message: "signUp endpoint"
    })
})

useRouter.post("/signin", () => {
    res.json({
        message: "signin endpoint"
    })
})
useRouter.get("/purchases", () => {
    res.json({
        message: "user purchases"
    })
})
useRouter.post("/purchases", () => {
    res.json({
        message: "user purchases"
    })
})
module.exports={
    useRouter : useRouter
}