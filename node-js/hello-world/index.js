const express = require("express");
const app= express();
app.get("/",(req,res)=>{
    res.send("Hello world from container")
})
app.listen(3000,()=>{console.log("app is running from 3000")})