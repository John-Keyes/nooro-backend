import express, { Request, Response, Express } from "express";
import { PrismaClient } from "@prisma/client";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";

export const prisma = new PrismaClient();
dotenv.config();

const app = express();
const port = process.env.API_PORT;


const main = async () => {
  app.use(express.json());
  // Register API routes
  app.use("/", routes);

  app.listen(port);
  const corsOptions = {
    origin: [`${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`],
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
}

main().then(async () => {
      await prisma.$connect();
    }).catch(async () => {
        await prisma.$disconnect();
        process.exit(1);
    });
