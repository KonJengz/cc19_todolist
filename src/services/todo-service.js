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

todoService.getTodoByUserIdAndId = (userId, id) => {
  return prisma.todolist.findFirst({
    where: {},
  });
};

todoService.updaTodoByTodoId = (userId, id, data) => {
  return prisma.todolist.update({
    where: {
      userId,
      id: Number(id),
    },
    data,
  });
};

todoService.deleteTodoByTodoId = (userId, id) => {
  return prisma.todolist.delete({
    where: {
      userId,
      id: Number(id),
    },
  });
};

module.exports = todoService;
