const prisma = require("../models/prisma");

const userService = {};

userService.findUserById = (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

userService.updateUser = (id, data) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

module.exports = userService;
