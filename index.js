const express = require('express');
const { useRouter } = require("./routes/user.route")
const { courseRouter } = require("./routes/courses.route")
const { adminRouter } = require("./routes/admin.route")


const app = express();
const port = 3000

app.use("/user", useRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
    console.log(`listning at port 3000`);
});