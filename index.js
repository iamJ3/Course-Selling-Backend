const express = require('express');
const app = express();
const port = 3000

app.post("/user/signup", () => {
    res.json({
        message: "signUp endpoint"
    })
})

app.post("/user/signin", () => {
    res.json({
        message: "signin endpoint"
    })
})
app.get("/user/purchases", () => {
    res.json({
        message: "user purchases"
    })
})
app.post("/user/purchases", () => {
    res.json({
        message: "user purchases"
    })
})

app.post("/courses", () => {
    res.json({
        message: "courses"
    })
})


app.listen(port, () => {
    console.log(`listning at port 3000`);
});