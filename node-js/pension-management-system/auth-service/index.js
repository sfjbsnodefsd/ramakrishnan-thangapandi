require("dotenv").config()
const express = require("express");
const app = express();
const userRouter = require("./users/user.router");
app.use(express.json())
app.use("/auth-service/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Auth server is running from ${process.env.APP_PORT}...`);
});