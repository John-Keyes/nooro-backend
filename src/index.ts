import express, { Request, Response, Express } from "express";
import { PrismaClient } from "@prisma/client";
import TaskRouter from "./routes/tasks";
import cors from "cors";
//import { createRequire } from 'module';
//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from './swagger.json';
//const require = createRequire(import.meta.url);

export const prisma = new PrismaClient();

const app = express();
const port = process.env.API_PORT;


const main = async () => {
  app.use(express.json());

  // Register API routes
  app.use("/tasks", TaskRouter);

  app.listen(port);

  //HTTPSMiddleware(app);

  //app.use('/api-docs', swaggerUi.serve);//, swaggerUi.setup(swaggerDocument));
  app.use(cors());

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
