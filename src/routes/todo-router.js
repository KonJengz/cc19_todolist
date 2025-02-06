const express = require("express");
const todoController = require("../controllers/todo-controller");

const todoRouter = express.Router();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodoByUserId);

todoRouter.get("/:todoId", (req, res, next) => {});
todoRouter.put("/:todoId", (req, res, next) => {});
todoRouter.delete("/:todoId", (req, res, next) => {});

module.exports = todoRouter;
