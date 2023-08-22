const express = require('express');
const router = express.Router();

const { Post, Comment } = require('../models');
const { isLoggedIn } = require('./middlewares');

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      UserId: req.user.id,
      content: req.body.content,
    });
    res.status(201).json(post);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.post(`/:postId/comment`, isLoggedIn, async(req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    });
    if(!post) {
      return res.status(403).send('존재하지 않는 게시물입니다.');
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId
    })
    res.status(201).json(comment);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.delete("/", (req, res) => {
  res.json({  id:  1 });
});


module.exports = router;