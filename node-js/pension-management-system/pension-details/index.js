const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.APP_PORT;
//const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Pensioner = require("./pensioner")
const isAuthenticated = require("../isAuthenticated");
const pool = require("./config/database")
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Pensioner service is running from ${PORT}...`);
});

app.post("/pensioner/create", isAuthenticated, async (req, res) => {
    pool.query(`insert into pensioners(name, date_of_birth, pan, aadhar, salary_earned, allowances, self_family_pension, bank_name,account_number,public_or_private)
    values(?,?,?,?,?,?,?,?,?,?)`,
        [
            req.body.name, req.body.date_of_birth, req.body.pan, req.body.aadhar, req.body.salary_earned, req.body.allowances, req.body.self_family_pension, req.body.bank_name, req.body.account_number, req.body.public_or_private
        ],
        (error, results, fields) => {
            if (error) {
                return res.json(error);
            }
            return res.json(results);
        });

});
app.get("/pensioner/getall", isAuthenticated, async (req, res) => {
    pool.query(`select * from pensioners `,
        (error, results, fields) => {
            if (error) {
                return res.json(error);
            }
            return res.json(results);
        });
});
app.get("/pensioner/getByAadhar/:aadhar", isAuthenticated, async (req, res) => {
     pool.query(`select * from pensioners where aadhar=?`,
        [
            req.params.aadhar
        ],
        (error, results, fields) => {
            if (error) {
                return res.json(error);
            }
            return res.json(results);
        });

});