const express = require("express");
const app = express();
const postRouter = require("./router/post");
const userRouter = require("./router/user");
const cors = require('cors');
const db = require('./models');
const dotenv = require('dotenv');
const passportConfig = require('./passport');
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
dotenv.config();
db.sequelize.sync()
.then(() => {
  console.log('DB 연결 성공')
}).catch(console.error);
passportConfig();

// app.use("여기에 들어가는 건 대부분 미들웨어")
app.use(cors({
  origin: true,
  credentials: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

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