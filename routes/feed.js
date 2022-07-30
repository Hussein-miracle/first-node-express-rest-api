const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const feedController = require("../controllers/feed");

const isAuth = require("../middlewares/is-auth");

router.get("/posts", isAuth ,feedController.getPosts);
router.post(
  "/posts", isAuth ,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/posts/:postId", isAuth , feedController.getPost);

router.put(
  "/posts/:postId", isAuth ,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.editPost
);

router.delete("/posts/:postId", isAuth , feedController.deletePost);

module.exports = router;
