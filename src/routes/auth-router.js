const express = require("express");
const authController = require("../controllers/auth-controller");
const authValidate = require("../validate/auth-validate");

const authRouter = express.Router();

authRouter.post("/register", authValidate.register, authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
