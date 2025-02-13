const express = require("express");
const todoController = require("../controllers/todo-controller");

const todoRouter = express.Router();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodoByUserId);

todoRouter.put("/:todoId", todoController.updaTodoByTodoId);
todoRouter.delete("/:todoId", todoController.deleteTodoByTodoId);

module.exports = todoRouter;
