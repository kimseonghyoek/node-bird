const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User } = require("../models");
const passport = require('passport');

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) {
      console.error(err);
      return next(err);
    }
    if(info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.log(loginErr);
        return next(loginErr);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({ 
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디 입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.pw, 12);
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

module.exports = router;