import express from "express";
import { GetTasks, Create, Update, Remove } from "../controllers/tasks";
const router = express.Router();

router.get("/", GetTasks);
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Remove);


export default router;