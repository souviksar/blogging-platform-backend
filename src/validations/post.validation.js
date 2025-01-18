const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getPosts = {
  params: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const addPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

const getPost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

const updatePost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

const deletePost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

const addComment = {
  body: Joi.object().keys({
    content: Joi.string().required(),
  }),
};

module.exports = {
  getPosts,
  addPost,
  getPost,
  updatePost,
  deletePost,
  addComment,
};
