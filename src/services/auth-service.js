const prisma = require("../models/prisma");

const authService = {};

authService.findUserbyEmail = (email) => {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
};

authService.createUser = (data) => {
  return prisma.user.create({
    data,
  });
};

module.exports = authService;
