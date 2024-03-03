import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMidlleware } from "../midlleware/error-midlleware";

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(errorMidlleware);
