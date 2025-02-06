const todoService = require("../services/todo-service");
const createError = require("../utils/create-error");

const todoController = {};

todoController.createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    console.log("req.user=", req.user);
    console.log("title", title);
    const { id } = req.user;

    if (!title) {
      return createError(400, "title is require");
    }

    const newTodo = await todoService.createTodo(id, title);

    res.status(201).json({ message: "create todo success", newTodo });
  } catch (error) {
    next(error);
  }
};

todoController.getTodoByUserId = async (req, res, next) => {
  try {
    const { id } = req.user;

    const todoLists = await todoService.getTodoByUserId(id);
    res.status(200).json({ message: "get todo success", todoLists });
  } catch (error) {
    next(error);
  }
};

module.exports = todoController;
