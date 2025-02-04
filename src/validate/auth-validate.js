const createError = require("../utils/create-error");

const authValidate = {};

authValidate.register = (req, res, next) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return createError(400, "username or password or email should be provided");
  }

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof email !== "string"
  ) {
    return createError(
      400,
      "typeof username or password or email should be string"
    );
  }

  if (!email.includes("@")) {
    return createError(400, "format email invalid");
  }
  next();
};

module.exports = authValidate;
