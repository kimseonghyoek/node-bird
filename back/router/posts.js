const express = require("express");
const router = express.Router();

const { Post , User, Image, Comment } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      limit: 10,
      offset: 0,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
        },
        {
          model: Image,
        },
        {
          model: Comment
        }
      ],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
