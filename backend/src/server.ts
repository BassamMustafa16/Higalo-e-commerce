import express from "express";
import { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://higalo-bassammustafa16s-projects.vercel.app"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
  return;
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
