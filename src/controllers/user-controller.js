const createError = require("../utils/create-error");

const userController = {};

userController.getMe = async (req, res, next) => {
  try {
    if (!req.user) {
      return createError(400, "invalid login");
    }
    res.status(200).json({ user: req.user });
  } catch (error) {
    next(error);
  }
};

module.exports = userController;
