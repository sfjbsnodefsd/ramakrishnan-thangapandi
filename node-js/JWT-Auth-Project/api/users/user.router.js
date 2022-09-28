const{createUser, deleteUser, getUsers,getUsersByID,updateUser}=require("./user.controller");
const router= require("express").Router();

router.post("/",createUser);
router.get("/getUsers",getUsers);
router.get("/getUsersByID/:id",getUsersByID);
router.patch("/updateUser",updateUser);
router.delete("/deleteUser/:id",deleteUser);
module.exports=router;
