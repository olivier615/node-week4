var express = require('express');
var router = express.Router();
const postsController = require('../controller/postsController.js')

router.get('/', postsController.getAllPosts)
router.post('/', postsController.createPost)

module.exports = router;
