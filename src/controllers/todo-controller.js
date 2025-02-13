const todoService = require("../services/todo-service");
const createError = require("../utils/create-error");

const todoController = {};

todoController.createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const { id } = req.user;

    console.log("req.body==", req.body);

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

todoController.updaTodoByTodoId = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { todoId } = req.params;
    const data = req.body;

    const todoItem = await todoService.getTodoByUserIdAndId(id, todoId);

    console.log("todoItem", todoItem);

    if (!todoItem) {
      return createError(400, "todo invalid");
    }

    const updateTodo = await todoService.updaTodoByTodoId(id, todoId, data);
    res.status(200).json({ message: "update todo success", updateTodo });
  } catch (error) {
    next(error);
  }
};

todoController.deleteTodoByTodoId = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { todoId } = req.params;

    await todoService.deleteTodoByTodoId(id, todoId);
    res.status(200).json({ message: "delete todo success" });
  } catch (error) {
    next(error);
  }
};

module.exports = todoController;
