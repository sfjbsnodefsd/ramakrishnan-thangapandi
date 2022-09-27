//const { response } = require("express");
require("dotenv").config()
const express = require("express");
const app = express();
app.get("/api", (req, res) => {
res.json({
    success:1,
    message:"This rest api is working"
})
})

app.listen(process.env.APP_PORT, () => {
    console.log("server is running...",process.env.APP_PORT);
});