// const pool=require("../../../config/database")
const pool=require("../../config/database")

module.exports={
    create:(data,callback)=>{
        pool.query(`insert into registration(firstName,lastName,gender,email,password,number)
        values(?,?,?,?,?,?)`,
        [
            data.firstName,data.lastName,data.gender,data.email,data.password,data.number
        ],
        (error,results,fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    },
    getUsersById: (id,callback)=>{
        pool.query(`select firstName,lastName,gender,email,password,number from registration where id=?`,[id],(err,resulsts,fields)=>{
            if (err)
            {
                return callback(error);
            }
            return callback(null, results);
        })
    }
};