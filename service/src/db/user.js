const { insert, getAll, getByKey } = require('./db');

const saveUser = user => {
  return insert(user, 'user');
};

const getAllUsers = () => {
  return getAll('user');
};

const getUserById = id => {
  return getByKey(id, 'id', 'user');
};

const getUserByEmail = email => {
  return getByKey(email, 'email', 'user');
};

module.exports = {
  saveUser,
  getAllUsers,
  getUserById,
  getUserByEmail
};
