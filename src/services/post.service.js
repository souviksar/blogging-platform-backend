const httpStatus = require('http-status');
const { Post } = require('../models');
const messageLib = require('../utils/message-lib');
const ApiError = require('../utils/ApiError');

/**
 * Get Posts
 * @param {Number} limit
 * @param {Number} page
 */
const getPosts = async (limit, page) => {
  const posts = await Post.find().sort({ created_at: -1 }).populate('author');
  const postList = {
    posts,
  };
  return postList;
};

/**
 * Add post
 * @param {String} userId
 * @param {*} payload
 */
const addPost = async (userId, payload) => {
  await Post.create({ ...payload, author: userId });
};

/**
 * Get post
 * @param {String} postId
 */
const getPost = async (postId) => {
  const postData = await Post.findById(postId).populate('author');
  if (!postData) {
    throw new ApiError(httpStatus.BAD_REQUEST, messageLib.postNotFound.message);
  }
  return postData;
};

/**
 * Update post
 * @param {String} postId
 * @param {*} payload
 */
const updatePost = async (postId, payload) => {
  await getPost(postId);
  await Post.updateOne({ _id: postId }, payload);
};

/**
 * Delete post
 * @param {String} postId
 */
const deletePost = async (postId) => {
  await getPost(postId);
  await Post.deleteOne({ _id: postId });
};

module.exports = { getPosts, addPost, getPost, updatePost, deletePost };
