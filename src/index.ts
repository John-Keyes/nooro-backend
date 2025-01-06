import express, { Request, Response, Express } from "express";
import { PrismaClient } from "@prisma/client";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";

export const prisma = new PrismaClient();
dotenv.config();

const app = express();
const port = process.env.API_PORT;
const fullClientUrl = `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`;


const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  //app.use(cors());
  const corsOptions = {
    origin: fullClientUrl
  };
  app.use(cors(corsOptions));

  //curl -H "Origin: http://localhost:4040" --head http://localhost:3040/tasks

  // Register API routes
  app.use("/", (req: Request, res: Response, next) => {
    res.set({
      "Access-Control-Allow-Origin": fullClientUrl,
      "Content-Type": "application/json"
    });
    next();
  }, routes);
  /*app.use("/", (req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", fullClientUrl);
    res.header("Content-Type", "Application/JSON");
    next();
  })*/

  app.listen(port);
}
  

main().then(async () => {
      await prisma.$connect();
    }).catch(async () => {
        await prisma.$disconnect();
        process.exit(1);
    });
