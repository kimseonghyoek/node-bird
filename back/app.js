const express = require("express");
const app = express();
const postRouter = require("./router/post");

app.get("/", (req, res) => {
  res.send("Hello, express");
});

app.get("/api", (req, res) => {
  res.send("Hello, API");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);