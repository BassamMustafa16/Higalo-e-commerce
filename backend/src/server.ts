import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "https://higalo-bassammustafa16s-projects.vercel.app",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Mount users router at /users
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
