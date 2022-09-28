const { hashSync } = require("bcrypt");
const service = require("./user.service")
const { genSaltSync } = require("bcrypt");
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
    getUsersByID: (req, res) => {
        service.getUsersById(req.params.id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Record is not found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    getUsers: (req, res) => {
        service.getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Record is not found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        service.updateUser(body, (err, results) => {

            if (err) {
                console.log(err);
                return;
            }
            if (results.affectedRows == 1)
                return res.status(200).json({
                    success: 1,
                    message: "Updated successfully"
                });
            else
                return res.status(404).json({
                    success: 0,
                    message: "Record is not found"
                });
        })
    },
    deleteUser: (req, res) => {
        console.log(req.params.id)
        service.deleteUser(req.params.id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            if (results.affectedRows == 1)
                return res.status(200).json({
                    success: 1,
                    message: "Deleted successfully"
                });
            else
                return res.status(404).json({
                    success: 0,
                    message: "Record is not found"
                });
        })
    }
}