const authService = require("../services/auth-service");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/create-error");

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
    const { email, password } = req.body;

    const existUser = await authService.findUserbyEmail(email);

    if (!existUser) {
      return createError(400, "email not found");
    }

    console.log("existUser", existUser);

    const isMatch = await hashService.compare(password, existUser.password);
    // await bcrypt.compare(password, hashPassword)

    if (!isMatch) {
      return createError(400, "email or password is invalid");
    }

    const payload = { id: existUser.id };

    const accessToken = jwtService.sign(payload);

    res.status(200).json({ message: "login success", accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
