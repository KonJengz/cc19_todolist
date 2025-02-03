const express = require("express");

const userRouter = express.Router();

userRouter.get("/getme", (req, res, next) => {});
userRouter.put("/", (req, res, next) => {});

module.exports = userRouter;
