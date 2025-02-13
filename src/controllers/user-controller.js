const userService = require("../services/user-service");
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

userController.updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { username, email } = req.body;

    const data = {};

    if (username) {
      data.username = username;
    }

    if (email) {
      data.email = email;
    }

    const updateUser = await userService.updateUser(id, data);

    res.status(200).json({ message: "update user success", updateUser });
  } catch (error) {
    next(error);
  }
};

module.exports = userController;
