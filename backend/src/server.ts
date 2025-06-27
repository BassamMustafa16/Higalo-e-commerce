import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
  return;
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
