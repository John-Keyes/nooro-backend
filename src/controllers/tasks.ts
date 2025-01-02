import { Request, Response } from "express";
import { prisma } from "../index";
import { Task, TaskList } from "models/tasks";

    const GetTasks = async (req: Request, res: Response) => {
        try {
            const tasks = await prisma.tasks.findMany();
            const taskCount = tasks.length;
            const completedCount = tasks.filter(task => task.completed == true).length;
            const taskList: TaskList = {tasks, taskCount, completedCount};
            res.status(200).json(taskList);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }
    const GetOneTask = async (req: Request, res: Response) => {
      const {id} = req.params;
      try {
          const task: Task = await prisma.tasks.findUnique({
            where: {
              id: Number(id)
            }
          }) as Task;
          res.status(200).json(task);
      } catch (e) {
          res.status(500).json({ error: e });
      }
  }
    const Create = async (req: Request, res: Response) => {
        try {
            const { title, color, completed } = req.body;
            console.log(title);
            const newTask: Task = await prisma.tasks.create({
              data: {
                title,
                color,
                completed
              }
            });
            res.status(200).json(newTask);
          } catch (e) {
            res.status(500).json({ error: e });
          }
    }
    const Update = async (req: Request, res: Response) => {
        try {
            const { id, title, color, completed } = req.body;
            const updatedTask: Task = await prisma.tasks.update({
              where: {
                id: Number(id),
              },
              data: {
                title,
                color,
                completed
              }
            });
            res.status(200).json(updatedTask);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }
    const Remove = async (req: Request, res: Response) => {
        try {
            const { id } = req.body;
            await prisma.tasks.delete({
              where: {
                id: Number(id),
              }
            });
            res.status(200).json();
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }

export { GetTasks, GetOneTask, Create, Update, Remove };