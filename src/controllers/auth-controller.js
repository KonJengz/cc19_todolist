const authService = require("../services/auth-service");
const hashService = require("../services/hash-service");
const createError = require("../utils/create-error");
const authValidate = require("../validate/auth-validate");

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const existUser = await authService.findUserbyEmail(email);

    if (existUser) {
      return createError(400, "email already in use");
    }

    const hashPassword = await hashService.hash(password);
    // bcrypt.hash(plaintext, 12)

    const newUser = await authService.createUser({
      username,
      password: hashPassword,
      email,
    });

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

authController.login = async (req, res, next) => {
  try {
    res.status(200).json({ message: "login" });
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
