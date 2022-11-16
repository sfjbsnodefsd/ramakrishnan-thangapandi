const { hashSync, compareSync } = require("bcrypt");
const service = require("./user.service")
const { genSaltSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        service.create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    login: (req, res) => {
        console.log("i am here")
        const body = req.body;
        service.getUserByUserEmail(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results || results == [] || results == undefined || results == "")
                return res.status(404).json({
                    success: 0,
                    message: "Invalid email"
                });
            const output = compareSync(body.password, results[0].password);
            if (output) {
                results.password = undefined;
                const jsontoken = sign({ result: results }, process.env.KEY, {
                    expiresIn: "1h"
                });
                console.log("login is successful");
                // res.setHeader(
                //     "Access-Control-Allow-Origin", "*");
                // res.setHeader("Access-Control-Allow-Methods", "POST")
               // res.set('Access-Control-Allow-Origin', '*');
                return res.status(200).json({ success: 1, message: "Login successful", token: jsontoken })
            }
            else
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
        })
    }
}