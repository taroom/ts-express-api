import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
export const web = express();
web.use(express.json());

// un authorize
web.use(publicRouter);
web.use(errorMiddleware);