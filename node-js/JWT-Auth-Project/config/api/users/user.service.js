const pool=require("../../../config/database")

module.exports={
    create:(data,callback)=>{
        pool.query(`insert into registration(firstName,lastName,gender,email,password,number)
        values(?,?,?,?,?,?)`,
        [
            data.firstName,data.lastName,data.gender,data.email,data.number
        ],
        (error,results,fields)=>{
            if(error){
                return callback(error);
            }
            return callback(null,results);
        });
    }
};