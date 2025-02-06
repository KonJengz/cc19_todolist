const userController = {};

userController.getMe = async (req, res, next) => {
  try {
    console.log("req.user=", req.user);
    res.status(200).json({ user: "user" });
  } catch (error) {
    next(error);
  }
};

module.exports = userController;
