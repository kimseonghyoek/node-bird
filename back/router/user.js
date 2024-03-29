const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User, Post } = require("../models");
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.get('/', async (req, res, next) => {
  try {
    if(req.user) {
      const fullUserWithoutPassword = await User.findOne({ where: { id: req.user.id }, 
        attributes: {
          exclude: ['password'],
        }
        ,include: [{
        model: Post,
        attributes: ['id']
      }, {
        model: User,
        as: 'Followings',
      }, {
        model: User,
        as: 'Followers',
      }]
    })
      res.status(200).json(fullUserWithoutPassword);
    }
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  console.log(req.body.email)
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      console.log(info)
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({ where: { id: user.id }, 
        attributes: {
          exclude: ['password'],
        }
        ,include: [{
        model: Post
      }, {
        model: User,
        as: 'Followings',
      }, {
        model: User,
        as: 'Followers',
      }]
    })
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({ 
      where: {
        email: req.body.email,
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

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destory();
  res.send('ok');
})

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      nickname: req.body.nickname
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname });
  } catch(err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;