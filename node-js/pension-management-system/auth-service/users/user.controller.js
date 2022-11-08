const { hashSync, compareSync } = require("bcrypt");
const service = require("./user.service")
const { genSaltSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        //console.log(req.body)
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
    // getUserByUserEmail: (req, res) => {
    //     service.getUserByUserEmail(req.body, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         if (!results) {
    //             return res.status(404).json({
    //                 success: 0,
    //                 message: "Record is not found"
    //             });
    //         }
    //         return res.status(200).json({
    //             success: 1,
    //             data: results
    //         });
    //     })
    // }
    // ,
    // getUsers: (req, res) => {
    //     service.getUsers((err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         if (!results) {
    //             return res.status(404).json({
    //                 success: 0,
    //                 message: "Record is not found"
    //             });
    //         }
    //         return res.status(200).json({
    //             success: 1,
    //             data: results
    //         });
    //     })
    // },
    // updateUser: (req, res) => {
    //     const body = req.body;
    //     const salt = genSaltSync(10);
    //     body.password = hashSync(body.password, salt);
    //     service.updateUser(body, (err, results) => {

    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         if (results.affectedRows == 1)
    //             return res.status(200).json({
    //                 success: 1,
    //                 message: "Updated successfully"
    //             });
    //         else
    //             return res.status(404).json({
    //                 success: 0,
    //                 message: "Record is not found"
    //             });
    //     })
    // },
    // deleteUser: (req, res) => {
    //     service.deleteUser(req.params.id, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }

    //         if (results.affectedRows == 1)
    //             return res.status(200).json({
    //                 success: 1,
    //                 message: "Deleted successfully"
    //             });
    //         else
    //             return res.status(404).json({
    //                 success: 0,
    //                 message: "Record is not found"
    //             });
    //     })
    // }
    //,
    login: (req, res) => {
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
console.log("result: ")
            const output = compareSync(body.password, results[0].password);
            if (output) {
                console.log("inside output")
                results.password = undefined;
                const jsontoken = sign({ result: results }, process.env.KEY, {
                    expiresIn: "1h"
                });
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