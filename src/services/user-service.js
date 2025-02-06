const prisma = require("../models/prisma");

const userService = {};

userService.findUserById = (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

module.exports = userService;
