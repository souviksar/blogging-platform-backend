const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService } = require('../services');
const messageLib = require('../utils/message-lib');

const register = catchAsync(async (req, res) => {
  await userService.createUser(req.body);
  const responseData = { code: httpStatus.CREATED, message: messageLib.registrationSuccess.message };
  res.status(httpStatus.CREATED).json(responseData);
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  const responseData = { code: httpStatus.OK, message: messageLib.success.message, data: { user, tokens } };
  res.status(httpStatus.OK).json(responseData);
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  const responseData = { code: httpStatus.OK, message: messageLib.success.message };
  res.status(httpStatus.OK).json(responseData);
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  const responseData = { code: httpStatus.OK, message: messageLib.success.message, data: { tokens } };
  res.status(httpStatus.OK).json(responseData);
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
};
