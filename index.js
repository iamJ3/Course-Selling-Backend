const express = require('express');
const mongoose = require('mongoose')

const { useRouter } = require("./routes/user.route")
const { courseRouter } = require("./routes/courses.route")
const { adminRouter } = require("./routes/admin.route")


const app = express();
app.use(express.json())
const port = 3000

app.use("/user", useRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


async function main() {
    await mongoose.connect('mongodb+srv://jatin:jatin123@coursesell.xphgzwo.mongodb.net/admin-courses')
    console.log("db connected");
    
    app.listen(port, () => {
        console.log(`listning on port 3000`);
    });
};

main();
