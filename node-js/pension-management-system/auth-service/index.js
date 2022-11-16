require("dotenv").config()
const express = require("express");
const app = express();
const cors = require('cors');
const userRouter = require("./users/user.router");
app.use(express.json())
app.use("/auth-service/users", userRouter);

//app.use(cors());
//app.use(cors({origin: 'http://localhost:4300/login'}));
app.use(cors({ origin: "*", methods: 'POST,GET,PUT,OPTIONS,DELETE' }));

app.listen(process.env.APP_PORT, () => {
    console.log(`Auth server is running from ${process.env.APP_PORT}...`);
});