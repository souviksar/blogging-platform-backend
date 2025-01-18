const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');
const httpStatus = require('http-status');
const messageLib = require('../utils/message-lib');

const getPosts = catchAsync(async (req, res) => {
  const { limit, page } = req.params;
  const postsData = await postService.getPosts(limit, page);
  const responseData = {
    code: httpStatus.OK,
    message: messageLib.success.message,
    data: postsData,
  };
  res.status(httpStatus.OK).json(responseData);
});

const addPost = catchAsync(async (req, res) => {
  const userId = req.user._id;
  await postService.addPost(userId, req.body);
  const responseData = {
    code: httpStatus.CREATED,
    message: messageLib.postCreationSuccess.message,
  };
  res.status(httpStatus.CREATED).json(responseData);
});

const getPost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  const postData = await postService.getPost(postId);
  const responseData = {
    code: httpStatus.OK,
    message: messageLib.success.message,
    data: postData,
  };
  res.status(httpStatus.OK).json(responseData);
});

const updatePost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  await postService.updatePost(postId, req.body);
  const responseData = {
    code: httpStatus.OK,
    message: messageLib.postUpdatationSuccess.message,
  };
  res.status(httpStatus.OK).json(responseData);
});

const deletePost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  await postService.deletePost(postId, req.body);
  const responseData = {
    code: httpStatus.OK,
    message: messageLib.postDeletionSuccess.message,
  };
  res.status(httpStatus.OK).json(responseData);
});

const addComment = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;
  await postService.addComment(userId, postId, req.body);
  const responseData = {
    code: httpStatus.CREATED,
    message: messageLib.commentAddedSuccess.message,
  };
  res.status(httpStatus.CREATED).json(responseData);
});

module.exports = { getPosts, addPost, getPost, updatePost, deletePost, addComment };
