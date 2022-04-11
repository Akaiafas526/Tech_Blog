const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      body: req.body.body,
      postId: req.body.postId,
      userId: req.session.userId
    });
    console.log(newComment)
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
