// const express = require("express");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const app = express();
// const PORT = 5000;
// app.use(express.json());
// const User = require("./User");
// mongoose.connect("mongodb://localhost:27017/auth-service", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true

// }, () => {
//     console.log("Auth service db connected");
// });
// app.post("/auth/reg", async (req, res) => {
//     const { email, password, name } = req.body;
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         return res.json({
//             success: 0,
//             message: "User already exists"
//         });
//     }
//     else {
//         const newUser = new User({
//             name, email, password
//         });
//         newUser.save();
//         return res.json(newUser);
//     }
// });

// app.post("/auth/login", async (req, res) => {
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
const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require ("mongoose");
const app = express();
const PORT = 5000;
const User = require("./User");
const jwt = require("jsonwebtoken");
app.use(express.json());


mongoose.connect("mongodb://localhost:/Autorization" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('auth service db connected');
});

app.post("/auth/reg", async(req,res) => {
    const {email, password, name} = req.body;

    const userExists = await User.findOne({email});
    if(userExists) {
        return res.json({success: 0 ,
        message: "user already exists"})
    }
    else {
        const newUser = new User ({
            name,
            email,
            password
        });
        newUser.save();
        return res.json(newUser);
    }
});

app.post("/auth/login", async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user) {
        return res.json({ success: 0, message:"user does not exist"});
    } else {
        if(password !== user.password) {
            return res.json({success:0, message: "password does not match"});
        }
        const payload = {
            email, 
            name: user.name,
        };
        jwt.sign(payload, "secret", (err, token) => {
            if(err) console.log(err);
            else {
                return res.json({ token: token });
            }
        });
    }
});


app.listen(PORT, () => {
    console.log(`Auth service at ${PORT}`);
});