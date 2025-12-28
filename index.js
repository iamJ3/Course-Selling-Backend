const express = require('express');
const mongoose = require('mongoose')

const { useRouter } = require("./routes/user.route")
const { courseRouter } = require("./routes/courses.route")
const { adminRouter } = require("./routes/admin.route")


const app = express();
const port = 3000

app.use("/user", useRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


async function main(params) {
    await mongoose.connect('mongodb+srv://jatin:jatin123@coursesell.xphgzwo.mongodb.net/admin-courses')
    app.listen(port, () => {
        console.log(`listning on port 3000`);
    });
}

main()