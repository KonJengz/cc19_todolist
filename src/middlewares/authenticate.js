const jwtService = require("../services/jwt-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer")) {
      return createError(401, "Unauthorized !");
    }

    const accessToken = authorization.split(" ")[1];

    const payload = jwtService.verify(accessToken);

    const user = await userService.findUserById(payload.id);

    if (!user) {
      return createError(401, "Unauthorized !!");
    }

    // delete user.password;
    // req.user = user

    const { password, ...dataUser } = user;
    req.user = dataUser;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
