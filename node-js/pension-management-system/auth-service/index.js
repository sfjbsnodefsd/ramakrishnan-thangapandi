//const { response } = require("express");
require("dotenv").config()
//const { json } = require("express");
const express = require("express");
const app = express();
const userRouter = require("./users/user.router");
app.use(express.json())
//app.use("/auth-service/users",userRouter);
//app.use("/login",userRouter);
app.use("/auth-service/users",userRouter);
//app.use("/",userRouter);
//app.use("/getUsersByEmail/:email",userRouter);
//app.use("/api/getUsersByID",userRouter);

// app.get("/api", (req, res) => {
// res.json({
//     success:1,
//     message:"This rest api is working"
// })
// })

app.listen(process.env.APP_PORT, () => {
    console.log("server is running...",process.env.APP_PORT);
});

// const express = require("express");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const app = express();
// const PORT = 6000;
// app.use(express.json());
// const User = require("./User");

// mongoose.connect("mongodb://localhost:27017/pension-auth-service", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true

// }, () => {
//     console.log("Pension Auth service db connected");
// });
// app.post("/auth/reg", async (req, res) => {
//     const { name, email, password, aadhar } = req.body;
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         return res.json({
//             success: 0,
//             message: "User already exists"
//         });
//     }
//     else {
//         const newUser = new User({
//             name, email, password, aadhar
//         });
//         newUser.save();
//         return res.json(newUser);
//     }
// });

// app.post("/auth/login", async (req, res) => {
//     console.log("test")
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//         res.json({
//             success: 0,
//             message: "User is not exists"
//         });
//     }
//     else {
//         if (password !== user.password) {
//             return res.json({
//                 success: 0,
//                 message: "Incorrect password"
//             });
//         }
//         const payload = {
//             email, name: user.name
//         };
//         jwt.sign(payload, "secret", (err, token) => {
//             if (err) {
//                 console.log(err);
//             }
//             else { return res.json({ token: token }) }
//         })
//     }
// })


// app.listen(PORT, () => {
//     console.log(`Auth service is running at ${PORT}`)
// });