import { Request, Response } from "express";
import { prisma } from "../index";

    const GetTasks = async (req: Request, res: Response) => {
        try {
            const tasks = await prisma.Tasks.findMany();
            res.status(200).json(tasks);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }
    const Create = async (req: Request, res: Response) => {
        try {
            const { title, color, completed } = req.body;
            const newTask = await prisma.post.create({
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
            const updatedTask = await prisma.Tasks.update({
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
            const deletedTask = await prisma.Tasks.delete({
              where: {
                id: Number(id),
              }
            });
            res.status(200).json(deletedTask);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }

export { GetTasks, Create, Update, Remove };