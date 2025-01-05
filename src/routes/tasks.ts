import express from "express";
import { GetTasks, GetOneTask, Create, Update, Remove } from "../controllers/tasks";
const tasksRouter = express.Router();

tasksRouter.get("/tasks", GetTasks);
tasksRouter.get("/tasks/:id", GetOneTask);
tasksRouter.post("/tasks", Create);
tasksRouter.put("/tasks/:id", Update);
tasksRouter.delete("/tasks/:id", Remove);


export default tasksRouter;