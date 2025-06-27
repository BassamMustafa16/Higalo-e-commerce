import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
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

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
