const ex= require("express");
const router = ex.Router();

router.get("/courses",(req,res)=>{
    res.send("your courses are the following");
})

module.exports= router;