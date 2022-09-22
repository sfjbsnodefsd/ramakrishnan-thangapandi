const mysql = require('mysql');
const express = require('express')
var app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'employeedb'
})
mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log('Successful connection')
    }
    else console.log('connection is failed' + JSON.stringify(err, undefined,2))
});
app.listen(3000,()=>console.log("Express server is running at port 3000"));
app.get('/getemployees',(req, res)=>{
    mysqlConnection.query("select * from employee",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else console.log(err)
    })
})
app.get("/getemployee/:id", (req,res)=>{
    mysqlConnection.query("select * from employee where empid=?",
    [req.params.id], (err,rows,fields)=>{
        if(!err)
        {
            res.send(rows)
        }
        else console.log(err)
    })
})
app.delete("/deleteemployee/:id",(req,res)=>{
    mysqlConnection.query("DELETE from employee WHERE empid=?",[req.params.id],(err,rows,fields)=>{
        if (!err){
            res.send("Employee deleted successfully");
        }
        else console.log(err);
    })
})

app.post("/addemployee",(req,res)=>
{
    let emp=req.body;
    //var sql= "SET @EmpID=?; SET @Name=?; SET @EmpCode=?; SET @Salary=?; CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);"
    mysqlConnection.query("CALL EmployeeAddOrEdit(?,?,?,?)",[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary],(err,rows,fields)=>    
    {
        if(!err)
        {
            rows.forEach(element => {
                if(element.constructor==Array)
                res.send("employee id :"+element[0].EmpID)
            });
            //res.send(rows);
        }else console.log(err)
    })
})

app.put("/updateemployee",(req,res)=>
{
    let emp=req.body;
    //var sql= "SET @EmpID=?; SET @Name=?; SET @EmpCode=?; SET @Salary=?; CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);"
    mysqlConnection.query("CALL EmployeeAddOrEdit(?,?,?,?)",[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary],(err,rows,fields)=>    
    {
        if(!err)
        {
            rows.forEach(element => {
                if(element.constructor==Array)
                res.send("employee id :"+element[0].EmpID)
            });
            //res.send(rows);
        }else console.log(err)
    })
})