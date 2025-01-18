const express = require('express');
const validate = require('../../middlewares/validate');
const postValidation = require('../../validations/post.validation');
const postController = require('../../controllers/post.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/get-posts/:limit/:page', auth('managePost'), validate(postValidation.getPosts), postController.getPosts);

router.post('/add-post', auth('managePost'), validate(postValidation.addPost), postController.addPost);

router.get('/get-post/:postId', auth('managePost'), validate(postValidation.getPost), postController.getPost);

router.patch('/update-post/:postId', auth('managePost'), validate(postValidation.updatePost), postController.updatePost);

router.delete('/delete-post/:postId', auth('managePost'), validate(postValidation.deletePost), postController.deletePost);

router.post('/add-comment/:postId', auth('managePost'), validate(postValidation.addComment), postController.addComment);

module.exports = router;
