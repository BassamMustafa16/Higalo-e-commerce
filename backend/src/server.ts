import express from "express";
import cors from "cors";
import usersRouter from "./api/users";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://higalo-bassammustafa16s-projects.vercel.app"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Mount users router at /users
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
