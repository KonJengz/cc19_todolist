const express = require("express");
const userController = require("../controllers/user-controller");

const userRouter = express.Router();

userRouter.get("/getme", userController.getMe);
userRouter.patch("/", userController.updateUser);

module.exports = userRouter;
