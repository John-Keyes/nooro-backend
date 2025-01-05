import express from "express";
import tasksRouter from "./tasks";
const routes = express.Router();

routes.use(tasksRouter);

export default routes;