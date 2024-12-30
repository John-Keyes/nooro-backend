import { Request, Response } from "express";
import { prisma } from "../index";

    const GetTasks = async (req: Request, res: Response) => {
        try {
            const tasks = await prisma.tasks.findMany();
            const taskCount = tasks.length
            const completedCount = tasks.filter(task => task.completed == true).length;
            res.status(200).json({tasks, taskCount, completedCount});
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }
    const GetOneTask = async (req: Request, res: Response) => {
      const {id} = req.params;
      try {
          const tasks = await prisma.tasks.findUnique({
            where: {
              id: Number(id)
            }
          });
          res.status(200).json(tasks);
      } catch (e) {
          res.status(500).json({ error: e });
      }
  }
    const Create = async (req: Request, res: Response) => {
        try {
            const { title, color, completed } = req.body;
            const newTask = await prisma.tasks.create({
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
            const updatedTask = await prisma.tasks.update({
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
            const deletedTask = await prisma.tasks.delete({
              where: {
                id: Number(id),
              }
            });
            res.status(200).json(deletedTask);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }

export { GetTasks, GetOneTask, Create, Update, Remove };