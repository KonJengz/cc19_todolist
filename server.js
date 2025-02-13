require("dotenv").config();
const express = require("express");
const errorMiddleware = require("./src/middlewares/error");
const notFound = require("./src/middlewares/not-found");
const morgan = require("morgan");
const cors = require("cors");
const limiter = require("./src/utils/rate-limit");
const authRouter = require("./src/routes/auth-router");
const userRouter = require("./src/routes/user-router");
const todoRouter = require("./src/routes/todo-router");
const authenticate = require("./src/middlewares/authenticate");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authenticate, userRouter);
app.use("/api/v1/todo", authenticate, todoRouter);

app.use(notFound);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`server run port ${PORT}`));
