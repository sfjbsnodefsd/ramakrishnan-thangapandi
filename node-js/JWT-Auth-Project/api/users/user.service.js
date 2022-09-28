// const pool=require("../../../config/database")
const pool = require("../../config/database")

module.exports = {
    create: (data, callback) => {
        pool.query(`insert into registration(firstName,lastName,gender,email,password,number)
        values(?,?,?,?,?,?)`,
            [
                data.firstName, data.lastName, data.gender, data.email, data.password, data.number
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            });
    },
    getUsersById: (id, callback) => {
        pool.query(`select * from registration where id=?`, [id], (err, results, fields) => {
            if (err) {
                return callback(error);
            }
            return callback(null, results);
        });
    },
    getUsers: (callback) => {
        pool.query(`select * from registration `, [], (err, results, fields) => {
            if (err) {
                return callback(error);
            }
            return callback(null, results);
        })
    },
    updateUser: (data, callback) => {
        pool.query(`update registration set firstName=?, lastName=?, gender=?,email=?,password=?, number=? where id=?`,
            [
                data.firstName, data.lastName, data.gender, data.email, data.password, data.number, data.id
            ], (error, results, fields) => {
                if (error) { return callback(error) }
                return callback(null, results)
            })
    },
    deleteUser: (id, callback) => {
        pool.query(`delete from registration where id=?`,
            [
                id
            ], (error, results, fields) => {
                if (error) { return callback(error) }
                return callback(null, results)
            })
    }
};