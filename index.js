const express = require('express');
const app = express();
const port = 3000

const {useRouter} = require("./routes/user.route")
const {courseRouter} = require("./routes/courses.route")

app.use("/user",useRouter);
app.use("/course",courseRouter)

app.listen(port, () => {
    console.log(`listning at port 3000`);
});