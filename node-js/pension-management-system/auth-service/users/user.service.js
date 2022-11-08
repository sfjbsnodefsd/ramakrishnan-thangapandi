const pool = require("../config/database")

module.exports = {
    create: (data, callback) => {
        pool.query(`insert into users(name,email,password,aadhar, created_dt)
        values(?,?,?,?,?)`,
            [
                data.name, data.email, data.password, data.aadhar, data.created_dt
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            });
    },
    getUserByUserEmail: (body, callback) => {

        pool.query(`select * from users where email=?`,
            [
                body.email
            ], (error, results, fields) => {
                if (error) { return callback(error); }
                return callback(null, results);
            })
    },
    getUsers: (callback) => {
        pool.query(`select * from users `, [], (err, results, fields) => {
            if (err) {
                return callback(error);
            }
            return callback(null, results);
        })
    }
};