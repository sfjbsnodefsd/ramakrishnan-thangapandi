const { createUser, deleteUser, getUsers, getUsersByID, updateUser, login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")
router.post("/", checkToken, createUser);
router.get("/getUsers", checkToken, getUsers);
router.get("/getUsersByID/:id", checkToken, getUsersByID);
router.patch("/updateUser", checkToken, updateUser);
router.delete("/deleteUser/:id", checkToken, deleteUser);
router.post("/login", login);
module.exports = router;
