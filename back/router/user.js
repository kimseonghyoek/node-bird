const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require("../models");

router.post("/", async (req, req, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        eamil: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디 입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.json();
  } catch (err) {
    console.error(err);
    next(err);
  }
});