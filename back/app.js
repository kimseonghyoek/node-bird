const express = require("express");
const app = express();
const postRouter = require("./router/post");
const userRouter = require("./router/user");
const cors = require('cors');
const db = require('./models');
db.sequelize.sync()
.then(() => {
  console.log('DB 연결 성공')
}).catch(console.error);

// app.use("여기에 들어가는 건 대부분 미들웨어")
app.use(cors({
  origin: true,
  credentials: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/user", userRouter);

app.listen(8080, () => {
  console.log('서버 실행 중');
})