const { createUser, getUserByUserEmail, login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation")
router.post("/", createUser);
//router.get("/getUsers", checkToken, getUsers);
//router.get("/getUserByUserEmail/:email", checkToken, getUserByUserEmail);
// router.patch("/updateUser", checkToken, updateUser);
// router.delete("/deleteUser/:id", checkToken, deleteUser);
router.post("/login", login);
module.exports = router;
