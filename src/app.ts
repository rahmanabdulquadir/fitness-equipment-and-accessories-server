import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the server side of fitness-equipment-and-accessories");
});

export default app;
