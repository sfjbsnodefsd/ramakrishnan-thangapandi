//console.log("This is our starting point");
const express = require("express");
const coursesRouter = require("./routes/courses");

const app = express();
//app.get("/courses",coursesRouter);

require("dotenv").config();
const mongoose = require("mongoose");

app.use(coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL,()=>{
    console.log("DB connection is successful");
}
)

app.get("/",(req,res)=>{
    res.send("API is working fine");
})
app.listen(process.env.PORT, () => {
    console.log("This is our starting point");
})