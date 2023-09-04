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
          attributes: ['id', 'nickname']
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname']
          }]
        },{
          model: User,
          as: 'Likers',
          attributes: ['id'],
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
