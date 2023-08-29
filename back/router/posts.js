const express = require("express");
const router = express.Router();

const { Posts, User, Image } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Posts.findAll({
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
