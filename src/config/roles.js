const allRoles = {
  user: ['getUsers', 'manageShippingUsers', 'manageSalesChannel', 'manageShipping', 'manageProduct', 'manageOrder'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
