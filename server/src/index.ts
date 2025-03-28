import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";

import cors from "cors";
import {enquiry} from "./api/index"



export const createServer = (): Express => {
  const app: Express = express();
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
      methods: "PUT,GET,POST,DELETE",
    })
  );


  app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
  });

  enquiry(app);

  return app;
};