const express = require('express');
const authRoute = require('./auth.route');
const postRoute = require('./post.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/post', postRoute);

module.exports = router;
