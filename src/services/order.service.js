const httpStatus = require('http-status');
const { ShippingUser, Product, SalesChannel, Shipping, Order } = require('../models');
const messageLib = require('../utils/message-lib');
const ApiError = require('../utils/ApiError');

/**
 * Get orders
 * @param {Number} limit
 * @param {Number} page
 */
const getOrders = async (limit, page) => {
  // const totalItems = await Order.find().countDocuments();
  const orders = await Order.find().sort({ created_at: -1 });
  // .skip((page - 1) * limit)
  // .limit(limit);
  const orderlList = {
    orders,
    // page,
    // limit,
    // totalPages: Math.ceil(totalItems / limit),
    // totalResults: totalItems,
  };
  return orderlList;
};

/**
 * Get all categories
 */
const getAllCategories = async () => {
  const [shippingUsers, products, salesChannels, shippings] = await Promise.all([
    ShippingUser.find(),
    Product.find(),
    SalesChannel.find(),
    Shipping.find(),
  ]);
  return {
    shippingUsers,
    products,
    salesChannels,
    shippings,
  };
};

/**
 * Add order
 * @param {*} payload
 */
const addOrder = async (payload) => {
  await Order.create(payload);
};

/**
 * Get order
 * @param {String} orderId
 */
const getOrder = async (orderId) => {
  const orderData = await Order.findById(orderId);
  if (!orderData) {
    throw new ApiError(httpStatus.BAD_REQUEST, messageLib.orderNotFound.message);
  }
  return orderData;
};

/**
 * Update order
 * @param {String} orderId
 * @param {*} payload
 */
const updateOrder = async (orderId, payload) => {
  await getOrder(orderId);
  await Order.updateOne({ _id: orderId }, payload);
};

/**
 * Delete order
 * @param {String} orderId
 */
const deleteOrder = async (orderId) => {
  await getOrder(orderId);
  await Order.deleteOne({ _id: orderId });
};

module.exports = { getOrders, getAllCategories, addOrder, getOrder, updateOrder, deleteOrder };
