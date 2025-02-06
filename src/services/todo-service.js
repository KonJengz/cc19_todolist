const prisma = require("../models/prisma");

const todoService = {};

// todoService.createTodo = (userId, title) => {
//   return prisma.todolist.create({
//     data: {
//       title,
//       userId,
//     },
//   });
// };

todoService.createTodo = (id, title) => {
  return prisma.todolist.create({
    data: {
      title,
      user: {
        connect: {
          id,
        },
      },
    },
  });
};

todoService.getTodoByUserId = (userId) => {
  return prisma.todolist.findMany({
    where: { userId },
  });
};

module.exports = todoService;
