import express, { Request, Response, Express } from "express";
import { PrismaClient } from "@prisma/client";
import TaskRouter from "./routes/tasks";
import HTTPSMiddleware from './middleware/https';
import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

export const prisma = new PrismaClient();

const app = express();
const port = process.env.API_PORT || process.env.CLIENT_PORT;


const main = async () => {
  app.use(express.json());

  // Register API routes
  app.use("/router/tasks", TaskRouter);

  app.listen(port);

  HTTPSMiddleware(app);

  // Json Parser
  app.use(express.json());
  // Parses url encoded 
  app.use(express.urlencoded({extended: true}));
}

main().then(async () => {
    await prisma.$connect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
