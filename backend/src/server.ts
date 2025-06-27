import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
  return;
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
