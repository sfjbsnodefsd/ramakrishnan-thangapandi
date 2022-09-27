const { hashSync } = require("bcrypt");
const{create}= require("./user.service")
module.exports={createUser:(req,res)=>{
    const body=req.body;
    const salt=getSaltSync(10);
    body.password=hashSync(body.password,salt);
}}